using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using HtmlAgilityPack;
using System.Net;

namespace SInnovations.Cesium.TypescriptGenerator
{
    public class OptionsWriter
    {
        private string _name;
        private string _source;
		private int _brokenId = 0;
        public OptionsWriter(string name,string source)
        {
            _name = name;
            _source = source;
        }
        public Dictionary<string, string> GetSignatureTypes(HtmlNode node)
        {
            var signatureParams = node.SelectSingleNode(@".//table[@class='params']/tbody");
            if (signatureParams == null)
                return new Dictionary<string, string>();

            var rows = signatureParams.Elements("tr");
			try {
	            return rows.ToDictionary(
	                VariableNameResolver,
	                VariableTypeResolver);
			} catch (ArgumentException ex) {
				return rows.ToDictionary(
					BrokenVariableNameResolver,
					VariableTypeResolver);
			}

        }
		private string BrokenVariableNameResolver(HtmlNode row)
		{
			var originalName = VariableNameResolver(row);
			return originalName + _brokenId++;
		}
        private string VariableNameResolver(HtmlNode row)
        {
            var isOptional = row.SelectSingleNode(@".//td[contains(@class,'description')]/span[@class='optional']");

            var variable = row.SelectSingleNode(@".//td[@class=""name"" ]").InnerText + (isOptional != null ? "?" : "");
            return variable;
        }
        private string VariableTypeResolver(HtmlNode row)
        {
            var tdType = row.SelectSingleNode(@".//td[@class=""type"" ]");
            //EntityCollection  contains(entity) as no type information.
            var typeNodes = tdType.SelectNodes(@".//span[@class='param-type']");
            if (typeNodes == null)
                return "any";

            var types = typeNodes.Select(Program.TypeReader).ToArray().Distinct();

            if (!types.Skip(1).Any() && types.First() == "Object")
            {
                var props = GetSignatureTypes(row.SelectSingleNode(@".//td[contains(@class,'description')]"));

                if (props.Keys.Any())
                {
                    var hash = string.Join("", props.Keys.OrderBy(k => k)).GetHashCode().ToString().Substring(1, 5);

                    var type = "HASH_" + hash + "_" + this._name + "Options";
                    var dependencies = new List<string>();

                    var writer = Program.GetWriter(type,_source);
                    if (writer != null)
                    {
                       
                        props = props.ToDictionary(k => k.Key, v => Program.extractDependencies(dependencies, v.Value));

                        Program.WriteDependencies(type, dependencies, writer, null, null, _source);

                        writer.WriteLine($"interface {type}");
                        writer.WriteLine("{");
                        foreach (var prop in props)
                        {
                           
                            writer.WriteLine($"\t{prop.Key}: {prop.Value};");

                        }
                        writer.WriteLine("}");
                        writer.WriteLine($"export = {type}");

                    }

                    return "Cesium." + type;
                }

            }

			return string.Join("|", types);

        }
    }
    public class Program
    {
        static Options Options = new Options();

        static Dictionary<string, StreamWriter> files = new Dictionary<string, StreamWriter>();
        static Dictionary<string, string> classExtents = new Dictionary<string, string>
        {
            {"CzmlDataSource", "extends Cesium.DataSource"},
            {"CustomDataSource", "extends Cesium.DataSource"},
            {"GeoJsonDataSource", "extends Cesium.DataSource"},
            {"KmlDataSource", "extends Cesium.DataSource"},

            {"TimeIntervalCollectionProperty", "extends Property"},
            {"VelocityOrientationProperty" , "extends Property"},

        };
        static Dictionary<string, string> signatureOverrides = new Dictionary<string, string>
        {
            {"defaultValue","<T>(a,b:T) : T" }
        };
        static Dictionary<string, string> nameMaps = new Dictionary<string, string>
        {
            {"CesiumMath","Math" }
        };
        static Dictionary<string, string> typeMaps = new Dictionary<string, string>
        {
            {"Cesium.Property", "Cesium.Property|string" }
        };
		static ISet<string> excludedClasses = new HashSet<string> {
			"KmlFeatureData"
		};

        static Dictionary<string, string> classToPath = new Dictionary<string, string>();
        public static StreamWriter GetWriter(string className, string source = ".")
        {
            var filePath = Path.Combine("tempOut", Path.GetDirectoryName(source) , className);

            if (!string.IsNullOrEmpty(Path.GetDirectoryName(filePath)))
                Directory.CreateDirectory(Path.GetDirectoryName(filePath));
            
            if (File.Exists($"{filePath}.d.ts"))
                return null;

            if (!files.ContainsKey(filePath))
            {
                files[filePath] = new StreamWriter(new FileStream($"{filePath}.d.ts", FileMode.Create));
            }
            classToPath[className] = Path.Combine(Path.GetDirectoryName(source) , className);
            return files[filePath];
        }
        static void Main(string[] args)
        {
            if(Directory.Exists("tempOut"))
                Directory.Delete("tempOut",true);
            
            String[] arguments = Environment.GetCommandLineArgs();
            if(arguments.Length == 2 && arguments[1] != "") {
                Options.CesiumVersion = arguments[1]; 
            }
            else {
                HtmlDocument downloads = GetDocument($"https://cesiumjs.org/downloads.html");
                var lastVersion = downloads.DocumentNode.SelectSingleNode(@"/html/body/div/div/div[1]/div[2]/div/div/div[1]/div/a/div/div/div[2]/h3").InnerHtml;
                lastVersion = lastVersion.Substring(16);
                Options.CesiumVersion = lastVersion;
            }

            Console.WriteLine("Using Cesium of version " + Options.CesiumVersion);

            Options.BaseUrl = "https://cesiumjs.org/releases/" + Options.CesiumVersion + "/Build/Documentation/";
			HtmlDocument index = GetDocument($"{Options.BaseUrl.TrimEnd('/')}/index.html");
			var classLinks = index.DocumentNode.SelectNodes(@"//*[@id=""ClassList""]/li");
			foreach (var link in classLinks) {
				Options.Class.Add(link.InnerText);
			}


            if (CommandLine.Parser.Default.ParseArguments(args, Options))
            {

                foreach (var name in Options.Class)
                {
					if (!excludedClasses.Contains(name)) {
	                    var url = $"{Options.BaseUrl.TrimEnd('/')}/{name}.html";
	                    ExtractCLass(url);
					}
                }

                var frameState = GetWriter("FrameState", "./Source/Scene/");
                frameState.WriteLine("class FrameState");
                frameState.WriteLine("{");
                frameState.WriteLine("constructor();");
                frameState.WriteLine("}");
                frameState.WriteLine("export = FrameState");

                var cesium = GetWriter("Cesium", "./Source/");
                foreach (var cls in Directory.GetFiles("tempOut","*.d.ts",SearchOption.AllDirectories)
                    .Select(f=>Path.GetFileName(f).Substring(0, Path.GetFileName(f).Length-5))
                    .Where(f=>!f.EndsWith("Options"))
                    .Where(f=>f!="Cesium")) {

                    WriteDependency(cesium, "Source/Cesium.d.ts", cls,true, cls == "CesiumMath" ? "Math":null);
                }
            }
            foreach (var writer in files.Values)
            {
                writer.Dispose();
            }

            var versionFile = new StreamWriter(new FileStream($"tempOut/version.txt", FileMode.Create));
            versionFile.WriteLine("VERSION=" + Options.CesiumVersion);
            versionFile.Dispose();

            if (Directory.Exists("../artifacts"))
                Directory.Delete("../artifacts", true);
            Thread.Sleep(1000);
            Directory.Move("tempOut", "../artifacts");
        }
        static Dictionary<string, string> urlsToClass = new Dictionary<string, string>();

        static string ExtractCLass(string url)
        {
            if (urlsToClass.ContainsKey(url))
                return urlsToClass[url];

            urlsToClass.Add(url, Path.GetFileNameWithoutExtension(url));
            Console.WriteLine($"Dowloadinging {url}");
            HtmlDocument doc = GetDocument(url);

            // var sourceLinkNode = doc.DocumentNode.SelectSingleNode(@"//*[@id=""main""]/section/article/div/dd/dl/div") ?? doc.DocumentNode.SelectSingleNode(@"//*[@id=""main""]/section/article/div/dl/div");
			var sourceLinkNode = doc.DocumentNode.SelectSingleNode(@"//*[contains(@class, ""source-link"")]");
            var source = "Source/" + sourceLinkNode.SelectSingleNode(".//a").InnerText.Substring(0, sourceLinkNode.SelectSingleNode(".//a").InnerText.LastIndexOf(" "));
            Console.WriteLine($"Source : {source}");

            var classdt = doc.DocumentNode.SelectSingleNode(@"//*[@id=""main""]/section/article/div/dt");
            var signatureName = Path.GetFileNameWithoutExtension(url);

            // if(signatureName != "GeoJsonDataSource") {
            //     return null;
            // }

            Console.WriteLine("CLASSNAME: " + signatureName);

            var signature = "()";
            var signatureReturnType = " : void";
            var dependencies = new List<string>();
            string signatureReturnName = null;
            
            StreamWriter writer = null;
            if (classdt != null)
            {
                var ctor = classdt.SelectSingleNode(".//div/h4");
                signatureName = ctor.GetAttributeValue("id", null);

                if (nameMaps.ContainsKey(signatureName))
                    signatureName = nameMaps[signatureName];

				Console.WriteLine ($"Writing: {source}");
                writer = GetWriter(signatureName, source);

                var optionsParser = new OptionsWriter(signatureName,source);

                var signatureParams = optionsParser.GetSignatureTypes(classdt.SelectSingleNode(".//following-sibling::dd"));
                var signatureNode = ctor.SelectSingleNode(@".//span[@class=""signature"" ]");
                signature = signatureOverrides.ContainsKey(signatureName) ? signatureOverrides[signatureName] : signatureNode.InnerText;
              
            // if(!string.IsNullOrEmpty(Options.OutputPath))
            //     File.Copy(local, Options.OutputPath, true);
            // if (Directory.Exists("../artifacts"))
            //     Directory.Delete("../artifacts", true);
            // Thread.Sleep(1000);
            // Directory.Move("tempOut", "../artifacts");

                var signatureReturnNode = ctor.SelectSingleNode(@".//span[@class=""type-signature returnType"" ]");
                if (signatureReturnNode != null) {
                    signatureReturnName = ArrayTypeFixer(TypeNormalizer(signatureReturnNode.InnerText));
                    signatureReturnType = " : " + signatureReturnName;
                }
                if (signatureOverrides.ContainsKey(signatureName))
                    signatureReturnType = "";

                if (!signatureOverrides.ContainsKey(signatureName) && signatureParams.Any())
                {
                    var optionals = (signatureNode.SelectNodes(@".//span[@class=""optional"" ]") ?? new HtmlNodeCollection(signatureNode))
                        .Select(o => o.InnerText).ToArray();

                    var anyOptionalFound = false;
                    foreach (var ctorParam in signatureParams)
                    {
                        var name = ctorParam.Key;
                        var types = ctorParam.Value.Replace("Object", "any");
                        
                        types = extractDependencies(dependencies, types);
                        var nameIsOptional = name[name.Length - 1] == '?';
                        if(nameIsOptional) {
                            anyOptionalFound = true;
                        }

                        if(anyOptionalFound) {
                            name = nameIsOptional ? name : name + "?";
                        }

						var replaceRx = new Regex(@"\b" + name.TrimEnd('?'));
						signature = replaceRx.Replace(signature, $"{name} : {types}", 1);
                    }
                }
            }

            if(writer == null)
                writer = GetWriter(signatureName, source); 


            var methods = ParseAndWriteMethods(doc, source);
            
           

            if (Char.IsLower(signatureName.First()))
            {
                var members = ParseAndWriteMembers(doc, true);
                if(signatureReturnName != null && !dependencies.Contains(signatureReturnName)) {
                    WriteReturnDependency(writer, signatureReturnName, source);
                }
                WriteDependencies(signatureName, dependencies, writer, methods, members,source);
                
                //var interfaceName = $"{signatureName.Substring(0, 1).ToUpper()}{signatureName.Substring(1)}Static";

                //writer.WriteLine($"interface {interfaceName}");
                //writer.WriteLine("{");
                //writer.WriteLine($"\t{signature}{signatureReturnType};");
                //writer.WriteLine(members.part);
                //writer.WriteLine();
                //writer.WriteLine(methods.part);
                //writer.WriteLine("}");
                //  writer.WriteLine($"export var {signatureName} : {interfaceName}");
                

                writer.WriteLine($"function {signatureName}{signature}{signatureReturnType};");
                writer.WriteLine($"export = {signatureName}");
            }
            else
            {                
                var members = ParseAndWriteMembers(doc, false);
                var extends = classExtents.ContainsKey(signatureName) ? classExtents[signatureName] : "";
                extends = extractDependencies(dependencies, extends);
                WriteDependencies(signatureName, dependencies, writer, methods, members,source);                
                
                writer.WriteLine($"class {signatureName} {extends}");
                writer.WriteLine("{");
                writer.WriteLine($"\tconstructor{signature};");
                writer.WriteLine(members.part);
                writer.WriteLine();
                writer.WriteLine(methods.part);
                writer.WriteLine("}");
                writer.WriteLine($"export = {signatureName}");
            }


            return signatureName;
        }

        public static void WriteDependencies(string signatureName, List<string> dependencies, StreamWriter writer, MethodResult methods, MethodResult members, string currentPath)
        {
            var dependenciesList = dependencies.ToArray().ToList();
            if (members != null) {
                dependenciesList.AddRange(members.dependencies);
            }
            if (methods != null)
                dependenciesList.AddRange(methods.dependencies);

            foreach (var dep in dependenciesList.Distinct().Where(d => d != signatureName))
            {
                WriteDependency(writer, currentPath, dep);
            }
        }

        private static void WriteDependency(StreamWriter writer, string currentPath, string dep, bool export = false, string localName = null)
        {
            var path = classToPath.ContainsKey(dep) ? classToPath[dep] : dep;

            if(dep == "FrameState") {
                path = "Source/Scene/FrameState";
            }

            var test = new Uri(Path.Combine(Directory.GetCurrentDirectory(), "tempOut", currentPath)).MakeRelativeUri(new Uri(Path.Combine(Directory.GetCurrentDirectory(), "tempOut", path)));

            writer.WriteLine($"{(export?"export ":"")}import {(localName==null? dep : localName)} = require(\"./{test}\")");
        }

        private static void WriteReturnDependency(StreamWriter writer, string dep, string currentPath)
        {
            string path = null;

            if(dep == "Primitive") {
                path = "Source/Scene/Primitive";
            }
            else if(dep == "UrlTemplateImageryProvider") {
                path = "Source/Scene/UrlTemplateImageryProvider";
            }
            else if(classToPath.ContainsKey(dep)) {
                path = classToPath[dep];
            }
            else {
                return;
            }

            var test = new Uri(Path.Combine(Directory.GetCurrentDirectory(), "tempOut", currentPath)).MakeRelativeUri(new Uri(Path.Combine(Directory.GetCurrentDirectory(), "tempOut", path)));

            writer.WriteLine($"import {dep} = require(\"./{test}\")");
        }

        private static HtmlDocument GetDocument(string url)
        {
            Directory.CreateDirectory(".cache");
            Directory.CreateDirectory(".cache/" + Options.CesiumVersion);
            
            var name = ".cache/" + Options.CesiumVersion + "/" + Path.GetFileName(url);

            HtmlDocument doc = new HtmlDocument();
            
            if(url == "https://cesiumjs.org/downloads.html") {
                string html = LoadHtml(url);
                doc.LoadHtml(html);
            }
            else if (File.Exists(name))
                doc.Load(name);
            else
            {
                string html = LoadHtml(url);                
                doc.LoadHtml(html);
                doc.Save(name);
            }

            return doc;
        }

        private static string LoadHtml(string url) {
            var request = (HttpWebRequest)HttpWebRequest.Create(url);
            request.Headers.Add(HttpRequestHeader.AcceptEncoding, "gzip,deflate");
            request.AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate;
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();
            Stream dataStream = response.GetResponseStream();
            StreamReader readStream = new StreamReader (dataStream);
            string html = readStream.ReadToEnd();
            return html;
        }

        public class MethodResult
        {
            public string part;
            public List<string> dependencies;
        }
        private static MethodResult ParseAndWriteMembers(HtmlDocument doc, bool isInterface = false)
        {
            var dependencies = new List<string>();
            var writer = new StringWriter();

            var selector = "Members";
            writer.WriteLine($"\t//{selector}");
            var a = doc.DocumentNode.SelectSingleNode($@"//*[@id=""main""]/section/article/h3[text() = '{selector}']/following-sibling::dl");
            if (a == null)
                return new MethodResult { part = writer.ToString(), dependencies = new List<string>() };
            foreach (var member in a.SelectNodes(".//dt/div/h4"))
            {
                var memberName = member.Id.Trim(' ', '.');
                var staticMember = member.SelectSingleNode(".//span[@class='type-signature attribute-static']");
                var types = TypeReader(member.SelectSingleNode(".//span[@class='type-signature']"));
                types = extractDependencies(dependencies, types);

				writer.WriteLine($"\t{(staticMember != null && !isInterface ? "static " : "")}{memberName}: {types}");

            }

            return new MethodResult { part = writer.ToString(), dependencies = dependencies.Distinct().ToList() };
        }

        public static string extractDependencies(List<string> dependencies, string typeList)
        {
            var type= Regex.Replace(typeList, @"Cesium\.([a-zA-Z]+[a-zA-Z0-9\\_]*)", (m) =>
            {
                if (m.Success)
                {
                    dependencies.Add(m.Groups[1].Value);
                    return m.Groups[1].Value;
                }
                return m.Value;
            });

            type = Regex.Replace(type, @"Property\|string", "Property|string|any");

            return type;
         
        }

        private static MethodResult ParseAndWriteMethods(HtmlDocument doc,string source)
        {
            var dependencies = new List<string>();
            var writer = new StringWriter();
            var selector = "Methods";
            writer.WriteLine($"\t//{selector}");
            var a = doc.DocumentNode.SelectSingleNode($@"//*[@id=""main""]/section/article/h3[text() = '{selector}']/following-sibling::dl");
            if (a == null)
                return new MethodResult { part = writer.ToString(), dependencies=new List<string>() };
            foreach (var dt in a.SelectNodes(".//dt"))
            {
                var method = dt.SelectSingleNode(".//div/h4");
                var memberName = method.Id.Trim(' ', '.');

                var staticMember = method.SelectSingleNode(".//span[@class='type-signature attribute-static']");
                var signature = method.SelectSingleNode(".//span[@class='signature']").InnerText;
                var type = method.SelectSingleNode(".//span[@class='type-signature returnType']");
                var typeList =TypeReader(type);
                typeList = extractDependencies(dependencies, typeList);

                var optionsParser = new OptionsWriter(memberName, source);
                var signatureParams = optionsParser.GetSignatureTypes(dt.SelectSingleNode(".//following-sibling::dd"));

                var optionalFound = false;
				var sigInner = string.Join(", ", signature.Split(',')
					.Select(s => s.Trim(')', '(', ' '))
					.Select(s =>
						{   
                            if (signatureParams.ContainsKey(s))
                            {
                                optionalFound = true;
                                return (s + (optionalFound ? "?" : "")) + " : " + extractDependencies(dependencies,signatureParams[s].Replace("Object", "any"));
                            }
                        
                            if (signatureParams.ContainsKey(s + "?"))
                            {
                                return (s + (optionalFound ? "?" : "")) + " : " + extractDependencies(dependencies, signatureParams[s + "?"].Replace("Object", "any"));
                            }
							return s;

						}));
                signature = "(" + sigInner + ")";

                var replaceType = new Regex(@"^Promise$");
                typeList = replaceType.Replace(typeList, "Promise<any>");
                
                writer.WriteLine($"\t{(staticMember == null ? "" : "static ")}{memberName}{signature.Replace("arguments", "args")} : {typeList}");

            }

            return new MethodResult { part = writer.ToString(), dependencies = dependencies.Distinct().ToList() };
        }

       
        public static string CalculateMD5Hash(string input)
        {
            // step 1, calculate MD5 hash from input
            MD5 md5 = MD5.Create();
            byte[] inputBytes = Encoding.ASCII.GetBytes(input);
            byte[] hash = md5.ComputeHash(inputBytes);

            // step 2, convert byte array to hex string
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }
      
        public static string TypeReader(HtmlNode typeNode)
        {
            if (typeNode == null)
                return "void";


            var type = typeNode.InnerText
                  .Replace(System.Environment.NewLine, " ").Trim(' ', ':');

			Console.WriteLine(type);
			if (type.Contains("~")) {
				Console.WriteLine("^^ skipping above");
            	return "any"; //Do not go to ~links atm
			}

            var links = typeNode.SelectNodes(@".//a");
            if (links != null)
            {
         
                if(links.Count > 2)
                {

                }
                var idx = -1;
                foreach (var link in links)
                {

                    var url = $"{Options.BaseUrl.TrimEnd('/')}/{link.GetAttributeValue("href", null)}";

                    try
                    {

                        var className = ExtractCLass(url);

                        if (type == className)
                        {
                            return TypeReplacer("Cesium." + className);
                        }
                        var old = idx+1;
                        idx = type.IndexOf(className,idx+1);
                        type = type.Substring(0, idx ) + "Cesium." + className + type.Substring(idx + className.Length);
                        idx += 7;

            //            type = type.Replace(className, "Cesium." + className);

                    }
                    catch (Exception ex)
                    {
                       return "any";
                    }


                }
                //return "any";

            }
            var returnType = string.Join("|", CollapsGeneric(type.Replace(".&lt;", "<").Split('|')).Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')')))));
			if (returnType.Contains("~")) {
				Console.WriteLine($"skipping {returnType} as return");
				return "any";
			}
            return TypeReplacer(returnType);


        }
        private static IEnumerable<string> CollapsGeneric(IEnumerable<string> a)
        {
            var value = "";
            var combine = false;
            var c = 0;
            foreach (var b in a)
            {
                c += b.Count(ch => ch == '<') - b.Count(ch => ch == '>');

                combine |= c!=0;
                if (combine)
                {
                    value += (value.Length > 0 ? " | " : "") + b;

                    if (c == 0)//value.IndexOf('>') != -1)
                    {
                        yield return value;
                        value = "";
                        combine = false;
                    }
                }
                else
                    yield return b;

            }

        }
        private static string ArrayTypeFixer(string type)
        {
            if (type.StartsWith("Array<"))
                return $"Array<{string.Join("|", type.Substring(6).TrimEnd('>').Split('|').Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')'))))) }>";
			if (type.StartsWith("Promise<")) {
				var types = Regex.Split(type, @"(?<=\>)\|");
				if (types.Length > 1) {
					return string.Join("|", types.Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')')))).ToArray());
				}
				var origTypedef = type.Substring(8).TrimEnd('>');
				var promiseTypes = string.Join("|", origTypedef.Split('|').Select(t => ArrayTypeFixer(TypeNormalizer(t.Trim('(', ')')))));
                return $"Promise<{promiseTypes}>";
			}

            return type;
        }
        private static string TypeReplacer(string type)
        {
            return typeMaps.ContainsKey(type) ? typeMaps[type] : type;
        }
        private static string TypeNormalizer(string type)
        {
            if (type == null)
                return "void";

			if (type.Contains("~")) {
				Console.WriteLine("skipping typenormalizer " + type);
				return "any";
			}



            switch (type)
            {
                case "Object": return "Object";
                case "Element": return "Element";
                case "Boolean": return "boolean";
                case "String": return "string";
                case "Number": return "number";
                case "function": return "(()=>void)";
                case "Canvas": return "HTMLCanvasElement";
                case "Image": return "HTMLImageElement";
                case "Frustum": return "Cesium." + ExtractCLass($"{Options.BaseUrl.TrimEnd('/')}/PerspectiveFrustum.html");
                case "Proxy": return "Cesium." + ExtractCLass($"{Options.BaseUrl.TrimEnd('/')}/DefaultProxy.html");
                case "*": return "any";
                case "undefined": return "void";
                case "Array": return "Array<any>";
            }

            if (string.IsNullOrWhiteSpace(type))
                return "any";


            return type.Replace(".&lt;", "<");
        }
    }
}