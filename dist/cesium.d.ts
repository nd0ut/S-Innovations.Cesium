//VERSION=1.37
type Image = HTMLImageElement
type Canvas = HTMLCanvasElement
type TypedArray = any[]
type HMDVRDevice = any
type CanvasPixelArray = any[]
type PerformanceContainer = any
type RenderState = any
type CompressedTextureBuffer = any
type ClassificationType = number

declare module 'cesium' {
	export * from 'cesium/Source/Cesium';
}


declare module 'cesium/Source/Core/AssociativeArray' {
	class AssociativeArray 
	{
		constructor();
		//Members
		length: number
		values: Array<any>


		//Methods
		contains(key? : string|number) : boolean
		get(key? : string|number) : Object
		remove(key? : string|number) : boolean
		removeAll() : void
		set(key? : string|number, value? : any) : void

	}
	export = AssociativeArray

}
declare module 'cesium/Source/Core/HASH_12088_fromRandomOptions' {
	interface HASH_12088_fromRandomOptions
	{
		red?: number;
		minimumRed?: number;
		maximumRed?: number;
		green?: number;
		minimumGreen?: number;
		maximumGreen?: number;
		blue?: number;
		minimumBlue?: number;
		maximumBlue?: number;
		alpha?: number;
		minimumAlpha?: number;
		maximumAlpha?: number;
	}
	export = HASH_12088_fromRandomOptions

}
declare module 'cesium/Source/Core/Color' {
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	import HASH_12088_fromRandomOptions = require('cesium/Source/Core/HASH_12088_fromRandomOptions')
	class Color 
	{
		constructor(red? : number, green? : number, blue? : number, alpha? : number);
		//Members
		static ALICEBLUE: Color
		static ANTIQUEWHITE: Color
		static AQUA: Color
		static AQUAMARINE: Color
		static AZURE: Color
		static BEIGE: Color
		static BISQUE: Color
		static BLACK: Color
		static BLANCHEDALMOND: Color
		static BLUE: Color
		static BLUEVIOLET: Color
		static BROWN: Color
		static BURLYWOOD: Color
		static CADETBLUE: Color
		static CHARTREUSE: Color
		static CHOCOLATE: Color
		static CORAL: Color
		static CORNFLOWERBLUE: Color
		static CORNSILK: Color
		static CRIMSON: Color
		static CYAN: Color
		static DARKBLUE: Color
		static DARKCYAN: Color
		static DARKGOLDENROD: Color
		static DARKGRAY: Color
		static DARKGREEN: Color
		static DARKGREY: Color
		static DARKKHAKI: Color
		static DARKMAGENTA: Color
		static DARKOLIVEGREEN: Color
		static DARKORANGE: Color
		static DARKORCHID: Color
		static DARKRED: Color
		static DARKSALMON: Color
		static DARKSEAGREEN: Color
		static DARKSLATEBLUE: Color
		static DARKSLATEGRAY: Color
		static DARKSLATEGREY: Color
		static DARKTURQUOISE: Color
		static DARKVIOLET: Color
		static DEEPPINK: Color
		static DEEPSKYBLUE: Color
		static DIMGRAY: Color
		static DIMGREY: Color
		static DODGERBLUE: Color
		static FIREBRICK: Color
		static FLORALWHITE: Color
		static FORESTGREEN: Color
		static FUCHSIA: Color
		static GAINSBORO: Color
		static GHOSTWHITE: Color
		static GOLD: Color
		static GOLDENROD: Color
		static GRAY: Color
		static GREEN: Color
		static GREENYELLOW: Color
		static GREY: Color
		static HONEYDEW: Color
		static HOTPINK: Color
		static INDIANRED: Color
		static INDIGO: Color
		static IVORY: Color
		static KHAKI: Color
		static LAVENDAR_BLUSH: Color
		static LAVENDER: Color
		static LAWNGREEN: Color
		static LEMONCHIFFON: Color
		static LIGHTBLUE: Color
		static LIGHTCORAL: Color
		static LIGHTCYAN: Color
		static LIGHTGOLDENRODYELLOW: Color
		static LIGHTGRAY: Color
		static LIGHTGREEN: Color
		static LIGHTGREY: Color
		static LIGHTPINK: Color
		static LIGHTSEAGREEN: Color
		static LIGHTSKYBLUE: Color
		static LIGHTSLATEGRAY: Color
		static LIGHTSLATEGREY: Color
		static LIGHTSTEELBLUE: Color
		static LIGHTYELLOW: Color
		static LIME: Color
		static LIMEGREEN: Color
		static LINEN: Color
		static MAGENTA: Color
		static MAROON: Color
		static MEDIUMAQUAMARINE: Color
		static MEDIUMBLUE: Color
		static MEDIUMORCHID: Color
		static MEDIUMPURPLE: Color
		static MEDIUMSEAGREEN: Color
		static MEDIUMSLATEBLUE: Color
		static MEDIUMSPRINGGREEN: Color
		static MEDIUMTURQUOISE: Color
		static MEDIUMVIOLETRED: Color
		static MIDNIGHTBLUE: Color
		static MINTCREAM: Color
		static MISTYROSE: Color
		static MOCCASIN: Color
		static NAVAJOWHITE: Color
		static NAVY: Color
		static OLDLACE: Color
		static OLIVE: Color
		static OLIVEDRAB: Color
		static ORANGE: Color
		static ORANGERED: Color
		static ORCHID: Color
		static packedLength: number
		static PALEGOLDENROD: Color
		static PALEGREEN: Color
		static PALETURQUOISE: Color
		static PALEVIOLETRED: Color
		static PAPAYAWHIP: Color
		static PEACHPUFF: Color
		static PERU: Color
		static PINK: Color
		static PLUM: Color
		static POWDERBLUE: Color
		static PURPLE: Color
		static RED: Color
		static ROSYBROWN: Color
		static ROYALBLUE: Color
		static SADDLEBROWN: Color
		static SALMON: Color
		static SANDYBROWN: Color
		static SEAGREEN: Color
		static SEASHELL: Color
		static SIENNA: Color
		static SILVER: Color
		static SKYBLUE: Color
		static SLATEBLUE: Color
		static SLATEGRAY: Color
		static SLATEGREY: Color
		static SNOW: Color
		static SPRINGGREEN: Color
		static STEELBLUE: Color
		static TAN: Color
		static TEAL: Color
		static THISTLE: Color
		static TOMATO: Color
		static TRANSPARENT: Color
		static TURQUOISE: Color
		static VIOLET: Color
		static WHEAT: Color
		static WHITE: Color
		static WHITESMOKE: Color
		static YELLOW: Color
		static YELLOWGREEN: Color
		alpha: number
		blue: number
		green: number
		red: number


		//Methods
		static add(left? : Color, right? : Color, result? : Color) : Color
		static byteToFloat(number? : number) : number
		static clone(color? : Color, result? : Color) : Color
		static divide(left? : Color, right? : Color, result? : Color) : Color
		static divideByScalar(color? : Color, scalar? : number, result? : Color) : Color
		static equals(left? : Color, right? : Color) : boolean
		static floatToByte(number? : number) : number
		static fromAlpha(color? : Color, alpha? : number, result? : Color) : Color
		static fromBytes(red : number, green : number, blue : number, alpha : number, result : Color) : Color
		static fromCartesian4(cartesian? : Cartesian4, result? : Color) : Color
		static fromCssColorString(color? : string, result? : Color) : Color
		static fromHsl(hue : number, saturation : number, lightness : number, alpha : number, result : Color) : Color
		static fromRandom(options : HASH_12088_fromRandomOptions, result : Color) : Color
		static fromRgba(rgba? : number, result? : Color) : Color
		static mod(left? : Color, right? : Color, result? : Color) : Color
		static multiply(left? : Color, right? : Color, result? : Color) : Color
		static multiplyByScalar(color? : Color, scalar? : number, result? : Color) : Color
		static pack(value? : Color, array? : Array<number>, startingIndex? : number) : Array<number>
		static subtract(left? : Color, right? : Color, result? : Color) : Color
		static unpack(array? : Array<number>, startingIndex? : number, result? : Color) : Color
		brighten(magnitude? : number, result? : Color) : Color
		clone(result : Color) : Color
		darken(magnitude? : number, result? : Color) : Color
		equals(other? : Color) : boolean
		equalsEpsilon(other? : Color, epsilon? : number) : boolean
		toBytes(result : Array<number>) : Array<number>
		toCssColorString() : string
		toRgba() : number
		toString() : string
		withAlpha(alpha? : number, result? : Color) : Color

	}
	export = Color

}
declare module 'cesium/Source/Core/Cartesian4' {
	import Color = require('cesium/Source/Core/Color')
	class Cartesian4 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		w: number
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_W: Cartesian4
		static UNIT_X: Cartesian4
		static UNIT_Y: Cartesian4
		static UNIT_Z: Cartesian4
		static ZERO: Cartesian4


		//Methods
		clone(result : Cartesian4) : Cartesian4
		equals(right : Cartesian4) : boolean
		equalsEpsilon(right : Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		static add(left? : Cartesian4, right? : Cartesian4, result? : Cartesian4) : Cartesian4
		static clone(cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		static distance(left? : Cartesian4, right? : Cartesian4) : number
		static distanceSquared(left? : Cartesian4, right? : Cartesian4) : number
		static divideByScalar(cartesian? : Cartesian4, scalar? : number, result? : Cartesian4) : Cartesian4
		static divideComponents(left? : Cartesian4, right? : Cartesian4, result? : Cartesian4) : Cartesian4
		static dot(left? : Cartesian4, right? : Cartesian4) : number
		static equals(left : Cartesian4, right : Cartesian4) : boolean
		static equalsEpsilon(left : Cartesian4, right : Cartesian4, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array? : Array<number>, startingIndex? : number, result? : Cartesian4) : Cartesian4
		static fromColor(color? : Color, result? : Cartesian4) : Cartesian4
		static fromElements(x? : number, y? : number, z? : number, w? : number, result? : Cartesian4) : Cartesian4
		static lerp(start? : Cartesian4, end? : Cartesian4, t? : number, result? : Cartesian4) : Cartesian4
		static magnitude(cartesian? : Cartesian4) : number
		static magnitudeSquared(cartesian? : Cartesian4) : number
		static maximumByComponent(first? : Cartesian4, second? : Cartesian4, result? : Cartesian4) : Cartesian4
		static maximumComponent(cartesian? : Cartesian4) : number
		static minimumByComponent(first? : Cartesian4, second? : Cartesian4, result? : Cartesian4) : Cartesian4
		static minimumComponent(cartesian? : Cartesian4) : number
		static mostOrthogonalAxis(cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		static multiplyByScalar(cartesian? : Cartesian4, scalar? : number, result? : Cartesian4) : Cartesian4
		static multiplyComponents(left? : Cartesian4, right? : Cartesian4, result? : Cartesian4) : Cartesian4
		static negate(cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		static normalize(cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		static pack(value? : Cartesian4, array? : Array<number>, startingIndex? : number) : Array<number>
		static packArray(array? : Array<Cartesian4>, result? : Array<number>) : Array<number>
		static subtract(left? : Cartesian4, right? : Cartesian4, result? : Cartesian4) : Cartesian4
		static unpack(array? : Array<number>, startingIndex? : number, result? : Cartesian4) : Cartesian4
		static unpackArray(array? : Array<number>, result? : Array<Cartesian4>) : Array<Cartesian4>

	}
	export = Cartesian4

}
declare module 'cesium/Source/Core/Cartographic' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	class Cartographic 
	{
		constructor(longitude? : number, latitude? : number, height? : number);
		//Members
		static ZERO: Cartographic
		height: number
		latitude: number
		longitude: number


		//Methods
		static clone(cartographic? : Cartographic, result? : Cartographic) : Cartographic
		static equals(left : Cartographic, right : Cartographic) : boolean
		static equalsEpsilon(left : Cartographic, right : Cartographic, epsilon? : number) : boolean
		static fromCartesian(cartesian? : Cartesian3, ellipsoid? : Ellipsoid, result? : Cartographic) : Cartographic
		static fromDegrees(longitude? : number, latitude? : number, height? : number, result? : Cartographic) : Cartographic
		static fromRadians(longitude? : number, latitude? : number, height? : number, result? : Cartographic) : Cartographic
		clone(result : Cartographic) : Cartographic
		equals(right : Cartographic) : boolean
		equalsEpsilon(right : Cartographic, epsilon? : number) : boolean
		toString() : string

	}
	export = Cartographic

}
declare module 'cesium/Source/Core/Ellipsoid' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class Ellipsoid 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		static MOON: Ellipsoid
		static packedLength: number
		static UNIT_SPHERE: Ellipsoid
		static WGS84: Ellipsoid
		maximumRadius: number
		minimumRadius: number
		oneOverRadii: Cartesian3
		oneOverRadiiSquared: Cartesian3
		radii: Cartesian3
		radiiSquared: Cartesian3
		radiiToTheFourth: Cartesian3


		//Methods
		static clone(ellipsoid? : Ellipsoid, result? : Ellipsoid) : Ellipsoid
		static fromCartesian3(cartesian : Cartesian3, result : Ellipsoid) : Ellipsoid
		static pack(value? : Ellipsoid, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : Ellipsoid) : Ellipsoid
		cartesianArrayToCartographicArray(cartesians? : Array<Cartesian3>, result? : Array<Cartographic>) : Array<Cartographic>
		cartesianToCartographic(cartesian? : Cartesian3, result? : Cartographic) : Cartographic
		cartographicArrayToCartesianArray(cartographics? : Array<Cartographic>, result? : Array<Cartesian3>) : Array<Cartesian3>
		cartographicToCartesian(cartographic? : Cartographic, result? : Cartesian3) : Cartesian3
		clone(result : Ellipsoid) : Ellipsoid
		equals(right : Ellipsoid) : boolean
		geocentricSurfaceNormal(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		geodeticSurfaceNormal(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		geodeticSurfaceNormalCartographic(cartographic? : Cartographic, result? : Cartesian3) : Cartesian3
		getSurfaceNormalIntersectionWithZAxis(position? : Cartesian3, buffer? : number, result? : Cartesian3) : Cartesian3|void
		scaleToGeocentricSurface(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		scaleToGeodeticSurface(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		toString() : string
		transformPositionFromScaledSpace(position? : Cartesian3, result? : Cartesian3) : Cartesian3
		transformPositionToScaledSpace(position? : Cartesian3, result? : Cartesian3) : Cartesian3

	}
	export = Ellipsoid

}
declare module 'cesium/Source/Core/Spherical' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class Spherical 
	{
		constructor(clock? : number, cone? : number, magnitude? : number);
		//Members


		//Methods
		static clone(spherical? : Spherical, result? : Spherical) : Spherical
		static equals(left? : Spherical, right? : Spherical) : boolean
		static equalsEpsilon(left? : Spherical, right? : Spherical, epsilon? : number) : boolean
		static fromCartesian3(cartesian3? : Cartesian3, result? : Spherical) : Spherical
		static normalize(spherical? : Spherical, result? : Spherical) : Spherical
		clone(result : Spherical) : Spherical
		equals(other? : Spherical) : boolean
		equalsEpsilon(other? : Spherical, epsilon? : number) : boolean
		toString() : string

	}
	export = Spherical

}
declare module 'cesium/Source/Core/Cartesian3' {
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Spherical = require('cesium/Source/Core/Spherical')
	class Cartesian3 
	{
		constructor(x? : number, y? : number, z? : number);
		//Members
		x: number
		y: number
		z: number
		static packedLength: number
		static UNIT_X: Cartesian3
		static UNIT_Y: Cartesian3
		static UNIT_Z: Cartesian3
		static ZERO: Cartesian3


		//Methods
		clone(result : Cartesian3) : Cartesian3
		equals(right : Cartesian3) : boolean
		equalsEpsilon(right : Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static add(left? : Cartesian3, right? : Cartesian3, result? : Cartesian3) : Cartesian3
		static angleBetween(left? : Cartesian3, right? : Cartesian3) : number
		static clone(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static cross(left? : Cartesian3, right? : Cartesian3, result? : Cartesian3) : Cartesian3
		static distance(left? : Cartesian3, right? : Cartesian3) : number
		static distanceSquared(left? : Cartesian3, right? : Cartesian3) : number
		static divideByScalar(cartesian? : Cartesian3, scalar? : number, result? : Cartesian3) : Cartesian3
		static divideComponents(left? : Cartesian3, right? : Cartesian3, result? : Cartesian3) : Cartesian3
		static dot(left? : Cartesian3, right? : Cartesian3) : number
		static equals(left : Cartesian3, right : Cartesian3) : boolean
		static equalsEpsilon(left : Cartesian3, right : Cartesian3, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array? : Array<number>, startingIndex? : number, result? : Cartesian3) : Cartesian3
		static fromCartesian4(cartesian? : Cartesian4, result? : Cartesian3) : Cartesian3
		static fromDegrees(longitude? : number, latitude? : number, height? : number, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		static fromDegreesArray(coordinates? : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromDegreesArrayHeights(coordinates? : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromElements(x? : number, y? : number, z? : number, result? : Cartesian3) : Cartesian3
		static fromRadians(longitude? : number, latitude? : number, height? : number, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		static fromRadiansArray(coordinates? : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromRadiansArrayHeights(coordinates? : Array<number>, ellipsoid? : Ellipsoid, result? : Array<Cartesian3>) : Array<Cartesian3>
		static fromSpherical(spherical? : Spherical, result? : Cartesian3) : Cartesian3
		static lerp(start? : Cartesian3, end? : Cartesian3, t? : number, result? : Cartesian3) : Cartesian3
		static magnitude(cartesian? : Cartesian3) : number
		static magnitudeSquared(cartesian? : Cartesian3) : number
		static maximumByComponent(first? : Cartesian3, second? : Cartesian3, result? : Cartesian3) : Cartesian3
		static maximumComponent(cartesian? : Cartesian3) : number
		static minimumByComponent(first? : Cartesian3, second? : Cartesian3, result? : Cartesian3) : Cartesian3
		static minimumComponent(cartesian? : Cartesian3) : number
		static mostOrthogonalAxis(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static multiplyByScalar(cartesian? : Cartesian3, scalar? : number, result? : Cartesian3) : Cartesian3
		static multiplyComponents(left? : Cartesian3, right? : Cartesian3, result? : Cartesian3) : Cartesian3
		static negate(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static normalize(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static pack(value? : Cartesian3, array? : Array<number>, startingIndex? : number) : Array<number>
		static packArray(array? : Array<Cartesian3>, result? : Array<number>) : Array<number>
		static subtract(left? : Cartesian3, right? : Cartesian3, result? : Cartesian3) : Cartesian3
		static unpack(array? : Array<number>, startingIndex? : number, result? : Cartesian3) : Cartesian3
		static unpackArray(array? : Array<number>, result? : Array<Cartesian3>) : Array<Cartesian3>

	}
	export = Cartesian3

}
declare module 'cesium/Source/Core/Intersect' {
	class Intersect 
	{
		constructor();
		//Members
		static INSIDE: number
		static INTERSECTING: number
		static OUTSIDE: number


		//Methods

	}
	export = Intersect

}
declare module 'cesium/Source/Core/Plane' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	class Plane 
	{
		constructor(normal : Cartesian3, distance : number);
		//Members
		static ORIGIN_XY_PLANE: Plane
		static ORIGIN_YZ_PLANE: Plane
		static ORIGIN_ZX_PLANE: Plane
		distance: number
		normal: Cartesian3


		//Methods
		static fromCartesian4(coefficients? : Cartesian4, result? : Plane) : Plane
		static fromPointNormal(point? : Cartesian3, normal? : Cartesian3, result? : Plane) : Plane
		static getPointDistance(plane? : Plane, point? : Cartesian3) : number

	}
	export = Plane

}
declare module 'cesium/Source/Core/AxisAlignedBoundingBox' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Intersect = require('cesium/Source/Core/Intersect')
	import Plane = require('cesium/Source/Core/Plane')
	class AxisAlignedBoundingBox 
	{
		constructor(minimum? : Cartesian3, maximum? : Cartesian3, center? : Cartesian3);
		//Members
		center: Cartesian3
		maximum: Cartesian3
		minimum: Cartesian3


		//Methods
		static clone(box? : AxisAlignedBoundingBox, result? : AxisAlignedBoundingBox) : AxisAlignedBoundingBox
		static equals(left : AxisAlignedBoundingBox, right : AxisAlignedBoundingBox) : boolean
		static fromPoints(positions? : Array<Cartesian3>, result? : AxisAlignedBoundingBox) : AxisAlignedBoundingBox
		static intersectPlane(box? : AxisAlignedBoundingBox, plane? : Plane) : Intersect
		clone(result : AxisAlignedBoundingBox) : AxisAlignedBoundingBox
		equals(right : AxisAlignedBoundingBox) : boolean
		intersectPlane(plane? : Plane) : Intersect

	}
	export = AxisAlignedBoundingBox

}
declare module 'cesium/Source/Core/BingMapsApi' {
	class BingMapsApi 
	{
		constructor();
		//Members
		static defaultKey: string


		//Methods

	}
	export = BingMapsApi

}
declare module 'cesium/Source/Core/MapProjection' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class MapProjection 
	{
		constructor();
		//Members
		ellipsoid: Ellipsoid


		//Methods
		project(cartographic? : Cartographic, result? : Cartesian3) : Cartesian3
		unproject(cartesian? : Cartesian3, result? : Cartographic) : Cartographic

	}
	export = MapProjection

}
declare module 'cesium/Source/Scene/MapMode2D' {
	class MapMode2D 
	{
		constructor();
		//Members
		static INFINITE_SCROLL: number
		static ROTATE: number


		//Methods

	}
	export = MapMode2D

}
declare module 'cesium/Source/Scene/HASH_31547_SceneOptions' {
	import MapProjection = require('cesium/Source/Core/MapProjection')
	import MapMode2D = require('cesium/Source/Scene/MapMode2D')
	interface HASH_31547_SceneOptions
	{
		canvas: HTMLCanvasElement;
		contextOptions?: Object;
		creditContainer?: Element;
		mapProjection?: MapProjection;
		orderIndependentTranslucency?: boolean;
		scene3DOnly?: boolean;
		terrainExaggeration?: number;
		shadows?: boolean;
		mapMode2D?: MapMode2D;
	}
	export = HASH_31547_SceneOptions

}
declare module 'cesium/Source/Core/HeadingPitchRange' {
	class HeadingPitchRange 
	{
		constructor(heading? : number, pitch? : number, range? : number);
		//Members
		heading: number
		pitch: number
		range: number


		//Methods
		static clone(hpr? : HeadingPitchRange, result? : HeadingPitchRange) : HeadingPitchRange

	}
	export = HeadingPitchRange

}
declare module 'cesium/Source/Core/Rectangle' {
	import Cartographic = require('cesium/Source/Core/Cartographic')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	class Rectangle 
	{
		constructor(west? : number, south? : number, east? : number, north? : number);
		//Members
		static MAX_VALUE: Rectangle
		static packedLength: number
		east: number
		height: number
		north: number
		south: number
		west: number
		width: number


		//Methods
		static center(rectangle? : Rectangle, result? : Cartographic) : Cartographic
		static clone(rectangle? : Rectangle, result? : Rectangle) : Rectangle
		static computeHeight(rectangle? : Rectangle) : number
		static computeWidth(rectangle? : Rectangle) : number
		static contains(rectangle? : Rectangle, cartographic? : Cartographic) : boolean
		static equals(left : Rectangle, right : Rectangle) : boolean
		static expand(rectangle? : Rectangle, cartographic? : Cartographic, result? : Rectangle) : Rectangle
		static fromCartesianArray(cartesians? : Array<Cartesian3>, ellipsoid? : Ellipsoid, result? : Rectangle) : Rectangle
		static fromCartographicArray(cartographics? : Array<Cartographic>, result? : Rectangle) : Rectangle
		static fromDegrees(west : number, south : number, east : number, north : number, result : Rectangle) : Rectangle
		static fromRadians(west : number, south : number, east : number, north : number, result : Rectangle) : Rectangle
		static intersection(rectangle? : Rectangle, otherRectangle? : Rectangle, result? : Rectangle) : Rectangle|void
		static northeast(rectangle? : Rectangle, result? : Cartographic) : Cartographic
		static northwest(rectangle? : Rectangle, result? : Cartographic) : Cartographic
		static pack(value? : Rectangle, array? : Array<number>, startingIndex? : number) : Array<number>
		static simpleIntersection(rectangle? : Rectangle, otherRectangle? : Rectangle, result? : Rectangle) : Rectangle|void
		static southeast(rectangle? : Rectangle, result? : Cartographic) : Cartographic
		static southwest(rectangle? : Rectangle, result? : Cartographic) : Cartographic
		static subsample(rectangle? : Rectangle, ellipsoid? : Ellipsoid, surfaceHeight? : number, result? : Array<Cartesian3>) : Array<Cartesian3>
		static union(rectangle? : Rectangle, otherRectangle? : Rectangle, result? : Rectangle) : Rectangle
		static unpack(array? : Array<number>, startingIndex? : number, result? : Rectangle) : Rectangle
		static validate(rectangle? : Rectangle) : void
		clone(result : Rectangle) : Rectangle
		equals(other : Rectangle) : boolean
		equalsEpsilon(other : Rectangle, epsilon? : number) : boolean

	}
	export = Rectangle

}
declare module 'cesium/Source/Core/Event' {
	class Event 
	{
		constructor();
		//Members
		numberOfListeners: number


		//Methods
		addEventListener(listener? : (()=>void), scope? : any) : any
		raiseEvent(args? : any) : void
		removeEventListener(listener? : (()=>void), scope? : any) : boolean

	}
	export = Event

}
declare module 'cesium/Source/Core/HASH_04333_PerspectiveFrustumOptions' {
	interface HASH_04333_PerspectiveFrustumOptions
	{
		fov?: number;
		aspectRatio?: number;
		near?: number;
		far?: number;
		xOffset?: number;
		yOffset?: number;
	}
	export = HASH_04333_PerspectiveFrustumOptions

}
declare module 'cesium/Source/Core/Quaternion' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import HeadingPitchRoll = require('cesium/Source/Core/HeadingPitchRoll')
	import Matrix3 = require('cesium/Source/Core/Matrix3')
	class Quaternion 
	{
		constructor(x? : number, y? : number, z? : number, w? : number);
		//Members
		static IDENTITY: Quaternion
		static packedInterpolationLength: number
		static packedLength: number
		static ZERO: Quaternion
		w: number
		x: number
		y: number
		z: number


		//Methods
		static add(left? : Quaternion, right? : Quaternion, result? : Quaternion) : Quaternion
		static clone(quaternion? : Quaternion, result? : Quaternion) : Quaternion
		static computeAngle(quaternion? : Quaternion) : number
		static computeAxis(quaternion? : Quaternion, result? : Cartesian3) : Cartesian3
		static computeInnerQuadrangle(q0? : Quaternion, q1? : Quaternion, q2? : Quaternion, result? : Quaternion) : Quaternion
		static conjugate(quaternion? : Quaternion, result? : Quaternion) : Quaternion
		static convertPackedArrayForInterpolation(packedArray? : Array<number>, startingIndex? : number, lastIndex? : number, result? : Array<number>) : void
		static divideByScalar(quaternion? : Quaternion, scalar? : number, result? : Quaternion) : Quaternion
		static dot(left? : Quaternion, right? : Quaternion) : number
		static equals(left : Quaternion, right : Quaternion) : boolean
		static equalsEpsilon(left : Quaternion, right : Quaternion, epsilon? : number) : boolean
		static exp(cartesian? : Cartesian3, result? : Quaternion) : Quaternion
		static fastSlerp(start? : Quaternion, end? : Quaternion, t? : number, result? : Quaternion) : Quaternion
		static fastSquad(q0? : Quaternion, q1? : Quaternion, s0? : Quaternion, s1? : Quaternion, t? : number, result? : Quaternion) : Quaternion
		static fromAxisAngle(axis? : Cartesian3, angle? : number, result? : Quaternion) : Quaternion
		static fromHeadingPitchRoll(headingPitchRoll? : HeadingPitchRoll, result? : Quaternion) : Quaternion
		static fromRotationMatrix(matrix? : Matrix3, result? : Quaternion) : Quaternion
		static inverse(quaternion? : Quaternion, result? : Quaternion) : Quaternion
		static lerp(start? : Quaternion, end? : Quaternion, t? : number, result? : Quaternion) : Quaternion
		static log(quaternion? : Quaternion, result? : Cartesian3) : Cartesian3
		static magnitude(quaternion? : Quaternion) : number
		static magnitudeSquared(quaternion? : Quaternion) : number
		static multiply(left? : Quaternion, right? : Quaternion, result? : Quaternion) : Quaternion
		static multiplyByScalar(quaternion? : Quaternion, scalar? : number, result? : Quaternion) : Quaternion
		static negate(quaternion? : Quaternion, result? : Quaternion) : Quaternion
		static normalize(quaternion? : Quaternion, result? : Quaternion) : Quaternion
		static pack(value? : Quaternion, array? : Array<number>, startingIndex? : number) : Array<number>
		static slerp(start? : Quaternion, end? : Quaternion, t? : number, result? : Quaternion) : Quaternion
		static squad(q0? : Quaternion, q1? : Quaternion, s0? : Quaternion, s1? : Quaternion, t? : number, result? : Quaternion) : Quaternion
		static subtract(left? : Quaternion, right? : Quaternion, result? : Quaternion) : Quaternion
		static unpack(array? : Array<number>, startingIndex? : number, result? : Quaternion) : Quaternion
		static unpackInterpolationResult(array? : Array<number>, sourceArray? : Array<number>, firstIndex? : number, lastIndex? : number, result? : Quaternion) : Quaternion
		clone(result : Quaternion) : Quaternion
		equals(right : Quaternion) : boolean
		equalsEpsilon(right : Quaternion, epsilon? : number) : boolean
		toString() : string

	}
	export = Quaternion

}
declare module 'cesium/Source/Core/HeadingPitchRoll' {
	import Quaternion = require('cesium/Source/Core/Quaternion')
	class HeadingPitchRoll 
	{
		constructor(heading? : number, pitch? : number, roll? : number);
		//Members


		//Methods
		static clone(headingPitchRoll? : HeadingPitchRoll, result? : HeadingPitchRoll) : HeadingPitchRoll
		static equals(left : HeadingPitchRoll, right : HeadingPitchRoll) : boolean
		static equalsEpsilon(left : HeadingPitchRoll, right : HeadingPitchRoll, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromDegrees(heading? : number, pitch? : number, roll? : number, result? : HeadingPitchRoll) : HeadingPitchRoll
		static fromQuaternion(quaternion? : Quaternion, result? : HeadingPitchRoll) : HeadingPitchRoll
		clone(result : HeadingPitchRoll) : HeadingPitchRoll
		equals(right : HeadingPitchRoll) : boolean
		equalsEpsilon(right : HeadingPitchRoll, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string

	}
	export = HeadingPitchRoll

}
declare module 'cesium/Source/Core/Matrix3' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import HeadingPitchRoll = require('cesium/Source/Core/HeadingPitchRoll')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	class Matrix3 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static IDENTITY: Matrix3
		static packedLength: number
		static ZERO: Matrix3


		//Methods
		clone(result : Matrix3) : Matrix3
		equals(right : Matrix3) : boolean
		equalsEpsilon(right : Matrix3, epsilon? : number) : boolean
		toString() : string
		static abs(matrix? : Matrix3, result? : Matrix3) : Matrix3
		static add(left? : Matrix3, right? : Matrix3, result? : Matrix3) : Matrix3
		static clone(matrix? : Matrix3, result? : Matrix3) : Matrix3
		static computeEigenDecomposition(matrix? : Matrix3, result? : any) : Object
		static determinant(matrix? : Matrix3) : number
		static equals(left : Matrix3, right : Matrix3) : boolean
		static equalsEpsilon(left : Matrix3, right : Matrix3, epsilon? : number) : boolean
		static fromArray(array? : Array<number>, startingIndex? : number, result? : Matrix3) : Matrix3
		static fromColumnMajorArray(values? : Array<number>, result? : Matrix3) : Matrix3
		static fromCrossProduct(vector? : Cartesian3, result? : Matrix3) : Matrix3
		static fromHeadingPitchRoll(headingPitchRoll? : HeadingPitchRoll, result? : Matrix3) : Matrix3
		static fromQuaternion(quaternion? : Quaternion, result? : Matrix3) : Matrix3
		static fromRotationX(angle? : number, result? : Matrix3) : Matrix3
		static fromRotationY(angle? : number, result? : Matrix3) : Matrix3
		static fromRotationZ(angle? : number, result? : Matrix3) : Matrix3
		static fromRowMajorArray(values? : Array<number>, result? : Matrix3) : Matrix3
		static fromScale(scale? : Cartesian3, result? : Matrix3) : Matrix3
		static fromUniformScale(scale? : number, result? : Matrix3) : Matrix3
		static getColumn(matrix? : Matrix3, index? : number, result? : Cartesian3) : Cartesian3
		static getElementIndex(row? : number, column? : number) : number
		static getMaximumScale(matrix? : Matrix3) : number
		static getRow(matrix? : Matrix3, index? : number, result? : Cartesian3) : Cartesian3
		static getScale(matrix? : Matrix3, result? : Cartesian3) : Cartesian3
		static inverse(matrix? : Matrix3, result? : Matrix3) : Matrix3
		static multiply(left? : Matrix3, right? : Matrix3, result? : Matrix3) : Matrix3
		static multiplyByScalar(matrix? : Matrix3, scalar? : number, result? : Matrix3) : Matrix3
		static multiplyByScale(matrix? : Matrix3, scale? : Cartesian3, result? : Matrix3) : Matrix3
		static multiplyByVector(matrix? : Matrix3, cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static negate(matrix? : Matrix3, result? : Matrix3) : Matrix3
		static pack(value? : Matrix3, array? : Array<number>, startingIndex? : number) : Array<number>
		static setColumn(matrix? : Matrix3, index? : number, cartesian? : Cartesian3, result? : Matrix3) : Matrix3
		static setRow(matrix? : Matrix3, index? : number, cartesian? : Cartesian3, result? : Matrix3) : Matrix3
		static subtract(left? : Matrix3, right? : Matrix3, result? : Matrix3) : Matrix3
		static toArray(matrix? : Matrix3, result? : Array<number>) : Array<number>
		static transpose(matrix? : Matrix3, result? : Matrix3) : Matrix3
		static unpack(array? : Array<number>, startingIndex? : number, result? : Matrix3) : Matrix3

	}
	export = Matrix3

}
declare module 'cesium/Source/Core/TranslationRotationScale' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	class TranslationRotationScale 
	{
		constructor(translation? : Cartesian3, rotation? : Quaternion, scale? : Cartesian3);
		//Members
		rotation: Quaternion
		scale: Cartesian3
		translation: Cartesian3


		//Methods
		equals(right : TranslationRotationScale) : boolean

	}
	export = TranslationRotationScale

}
declare module 'cesium/Source/Core/Matrix4' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Camera = require('cesium/Source/Scene/Camera')
	import Matrix3 = require('cesium/Source/Core/Matrix3')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	import TranslationRotationScale = require('cesium/Source/Core/TranslationRotationScale')
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	class Matrix4 
	{
		constructor(column0Row0? : number, column1Row0? : number, column2Row0? : number, column3Row0? : number, column0Row1? : number, column1Row1? : number, column2Row1? : number, column3Row1? : number, column0Row2? : number, column1Row2? : number, column2Row2? : number, column3Row2? : number, column0Row3? : number, column1Row3? : number, column2Row3? : number, column3Row3? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN0ROW2: number
		static COLUMN0ROW3: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static COLUMN1ROW2: number
		static COLUMN1ROW3: number
		static COLUMN2ROW0: number
		static COLUMN2ROW1: number
		static COLUMN2ROW2: number
		static COLUMN2ROW3: number
		static COLUMN3ROW0: number
		static COLUMN3ROW1: number
		static COLUMN3ROW2: number
		static COLUMN3ROW3: number
		static IDENTITY: Matrix4
		static packedLength: number
		static ZERO: Matrix4


		//Methods
		clone(result : Matrix4) : Matrix4
		equals(right : Matrix4) : boolean
		equalsEpsilon(right : Matrix4, epsilon? : number) : boolean
		toString() : string
		static abs(matrix? : Matrix4, result? : Matrix4) : Matrix4
		static add(left? : Matrix4, right? : Matrix4, result? : Matrix4) : Matrix4
		static clone(matrix? : Matrix4, result? : Matrix4) : Matrix4
		static computeInfinitePerspectiveOffCenter(left? : number, right? : number, bottom? : number, top? : number, near? : number, result? : Matrix4) : Matrix4
		static computeOrthographicOffCenter(left? : number, right? : number, bottom? : number, top? : number, near? : number, far? : number, result? : Matrix4) : Matrix4
		static computePerspectiveFieldOfView(fovY? : number, aspectRatio? : number, near? : number, far? : number, result? : Matrix4) : Matrix4
		static computePerspectiveOffCenter(left? : number, right? : number, bottom? : number, top? : number, near? : number, far? : number, result? : Matrix4) : Matrix4
		static computeView(position? : Cartesian3, direction? : Cartesian3, up? : Cartesian3, right? : Cartesian3, result? : Matrix4) : Matrix4
		static computeViewportTransformation(viewport : any, nearDepthRange : number, farDepthRange : number, result? : Matrix4) : Matrix4
		static equals(left : Matrix4, right : Matrix4) : boolean
		static equalsEpsilon(left : Matrix4, right : Matrix4, epsilon? : number) : boolean
		static fromArray(array? : Array<number>, startingIndex? : number, result? : Matrix4) : Matrix4
		static fromCamera(camera? : Camera, result? : Matrix4) : Matrix4
		static fromColumnMajorArray(values? : Array<number>, result? : Matrix4) : Matrix4
		static fromRotationTranslation(rotation? : Matrix3, translation? : Cartesian3, result? : Matrix4) : Matrix4
		static fromRowMajorArray(values? : Array<number>, result? : Matrix4) : Matrix4
		static fromScale(scale? : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslation(translation? : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslationQuaternionRotationScale(translation? : Cartesian3, rotation? : Quaternion, scale? : Cartesian3, result? : Matrix4) : Matrix4
		static fromTranslationRotationScale(translationRotationScale? : TranslationRotationScale, result? : Matrix4) : Matrix4
		static fromUniformScale(scale? : number, result? : Matrix4) : Matrix4
		static getColumn(matrix? : Matrix4, index? : number, result? : Cartesian4) : Cartesian4
		static getElementIndex(row? : number, column? : number) : number
		static getMaximumScale(matrix? : Matrix4) : number
		static getRotation(matrix? : Matrix4, result? : Matrix3) : Matrix3
		static getRow(matrix? : Matrix4, index? : number, result? : Cartesian4) : Cartesian4
		static getScale(matrix? : Matrix4, result? : Cartesian3) : Cartesian3
		static getTranslation(matrix? : Matrix4, result? : Cartesian3) : Cartesian3
		static inverse(matrix? : Matrix4, result? : Matrix4) : Matrix4
		static inverseTransformation(matrix? : Matrix4, result? : Matrix4) : Matrix4
		static multiply(left? : Matrix4, right? : Matrix4, result? : Matrix4) : Matrix4
		static multiplyByMatrix3(matrix? : Matrix4, rotation? : Matrix3, result? : Matrix4) : Matrix4
		static multiplyByPoint(matrix? : Matrix4, cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static multiplyByPointAsVector(matrix? : Matrix4, cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		static multiplyByScalar(matrix? : Matrix4, scalar? : number, result? : Matrix4) : Matrix4
		static multiplyByScale(matrix? : Matrix4, scale? : Cartesian3, result? : Matrix4) : Matrix4
		static multiplyByTranslation(matrix? : Matrix4, translation? : Cartesian3, result? : Matrix4) : Matrix4
		static multiplyByUniformScale(matrix? : Matrix4, scale? : number, result? : Matrix4) : Matrix4
		static multiplyByVector(matrix? : Matrix4, cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		static multiplyTransformation(left? : Matrix4, right? : Matrix4, result? : Matrix4) : Matrix4
		static negate(matrix? : Matrix4, result? : Matrix4) : Matrix4
		static pack(value? : Matrix4, array? : Array<number>, startingIndex? : number) : Array<number>
		static setColumn(matrix? : Matrix4, index? : number, cartesian? : Cartesian4, result? : Matrix4) : Matrix4
		static setRow(matrix? : Matrix4, index? : number, cartesian? : Cartesian4, result? : Matrix4) : Matrix4
		static setTranslation(matrix? : Matrix4, translation? : Cartesian3, result? : Cartesian4) : Matrix4
		static subtract(left? : Matrix4, right? : Matrix4, result? : Matrix4) : Matrix4
		static toArray(matrix? : Matrix4, result? : Array<number>) : Array<number>
		static transpose(matrix? : Matrix4, result? : Matrix4) : Matrix4
		static unpack(array? : Array<number>, startingIndex? : number, result? : Matrix4) : Matrix4

	}
	export = Matrix4

}
declare module 'cesium/Source/Core/Interval' {
	class Interval 
	{
		constructor(start? : number, stop? : number);
		//Members
		start: number
		stop: number


		//Methods

	}
	export = Interval

}
declare module 'cesium/Source/Core/Occluder' {
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	class Occluder 
	{
		constructor(occluderBoundingSphere : BoundingSphere, cameraPosition : Cartesian3);
		//Members
		cameraPosition: Cartesian3
		position: Cartesian3
		radius: number


		//Methods
		static computeOccludeePoint(occluderBoundingSphere? : BoundingSphere, occludeePosition? : Cartesian3, positions? : Array<Cartesian3>) : Object
		static computeOccludeePointFromRectangle(rectangle? : Rectangle, ellipsoid? : Ellipsoid) : Object
		static fromBoundingSphere(occluderBoundingSphere? : BoundingSphere, cameraPosition? : Cartesian3, result? : Occluder) : Occluder
		computeVisibility(occludeeBS? : BoundingSphere) : number
		isBoundingSphereVisible(occludee? : BoundingSphere) : boolean
		isPointVisible(occludee? : Cartesian3) : boolean

	}
	export = Occluder

}
declare module 'cesium/Source/Core/OrientedBoundingBox' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Matrix3 = require('cesium/Source/Core/Matrix3')
	import Interval = require('cesium/Source/Core/Interval')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Intersect = require('cesium/Source/Core/Intersect')
	import Plane = require('cesium/Source/Core/Plane')
	import Occluder = require('cesium/Source/Core/Occluder')
	class OrientedBoundingBox 
	{
		constructor(center? : Cartesian3, halfAxes? : Matrix3);
		//Members
		center: Cartesian3
		halfAxes: Matrix3


		//Methods
		static clone(box? : OrientedBoundingBox, result? : OrientedBoundingBox) : OrientedBoundingBox
		static computePlaneDistances(box? : OrientedBoundingBox, position? : Cartesian3, direction? : Cartesian3, result? : Interval) : Interval
		static distanceSquaredTo(box? : OrientedBoundingBox, cartesian? : Cartesian3) : number
		static equals(left? : OrientedBoundingBox, right? : OrientedBoundingBox) : boolean
		static fromPoints(positions? : Array<Cartesian3>, result? : OrientedBoundingBox) : OrientedBoundingBox
		static fromRectangle(rectangle? : Rectangle, minimumHeight? : number, maximumHeight? : number, ellipsoid? : Ellipsoid, result? : OrientedBoundingBox) : OrientedBoundingBox
		static intersectPlane(box? : OrientedBoundingBox, plane? : Plane) : Intersect
		static isOccluded(box? : OrientedBoundingBox, occluder? : Occluder) : boolean
		clone(result : OrientedBoundingBox) : OrientedBoundingBox
		computePlaneDistances(position? : Cartesian3, direction? : Cartesian3, result? : Interval) : Interval
		distanceSquaredTo(cartesian? : Cartesian3) : number
		equals(right : OrientedBoundingBox) : boolean
		intersectPlane(plane? : Plane) : Intersect
		isOccluded(occluder? : Occluder) : boolean

	}
	export = OrientedBoundingBox

}
declare module 'cesium/Source/Core/BoundingSphere' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Interval = require('cesium/Source/Core/Interval')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import OrientedBoundingBox = require('cesium/Source/Core/OrientedBoundingBox')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Intersect = require('cesium/Source/Core/Intersect')
	import Plane = require('cesium/Source/Core/Plane')
	import Occluder = require('cesium/Source/Core/Occluder')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	class BoundingSphere 
	{
		constructor(center? : Cartesian3, radius? : number);
		//Members
		static packedLength: number
		center: Cartesian3
		radius: number


		//Methods
		static clone(sphere? : BoundingSphere, result? : BoundingSphere) : BoundingSphere
		static computePlaneDistances(sphere? : BoundingSphere, position? : Cartesian3, direction? : Cartesian3, result? : Interval) : Interval
		static distanceSquaredTo(sphere? : BoundingSphere, cartesian? : Cartesian3) : number
		static equals(left : BoundingSphere, right : BoundingSphere) : boolean
		static expand(sphere? : BoundingSphere, point? : Cartesian3, result? : BoundingSphere) : BoundingSphere
		static fromBoundingSpheres(boundingSpheres? : Array<BoundingSphere>, result? : BoundingSphere) : BoundingSphere
		static fromCornerPoints(corner : Cartesian3, oppositeCorner : Cartesian3, result : BoundingSphere) : BoundingSphere
		static fromEllipsoid(ellipsoid? : Ellipsoid, result? : BoundingSphere) : BoundingSphere
		static fromEncodedCartesianVertices(positionsHigh? : Array<number>, positionsLow? : Array<number>, result? : BoundingSphere) : BoundingSphere
		static fromOrientedBoundingBox(orientedBoundingBox? : OrientedBoundingBox, result? : BoundingSphere) : BoundingSphere
		static fromPoints(positions? : Array<Cartesian3>, result? : BoundingSphere) : BoundingSphere
		static fromRectangle2D(rectangle? : Rectangle, projection? : any, result? : BoundingSphere) : BoundingSphere
		static fromRectangle3D(rectangle? : Rectangle, ellipsoid? : Ellipsoid, surfaceHeight? : number, result? : BoundingSphere) : BoundingSphere
		static fromRectangleWithHeights2D(rectangle? : Rectangle, projection? : any, minimumHeight? : number, maximumHeight? : number, result? : BoundingSphere) : BoundingSphere
		static fromVertices(positions? : Array<number>, center? : Cartesian3, stride? : number, result? : BoundingSphere) : BoundingSphere
		static intersectPlane(sphere? : BoundingSphere, plane? : Plane) : Intersect
		static isOccluded(sphere? : BoundingSphere, occluder? : Occluder) : boolean
		static pack(value? : BoundingSphere, array? : Array<number>, startingIndex? : number) : Array<number>
		static projectTo2D(sphere? : BoundingSphere, projection? : any, result? : BoundingSphere) : BoundingSphere
		static transform(sphere? : BoundingSphere, transform? : Matrix4, result? : BoundingSphere) : BoundingSphere
		static transformWithoutScale(sphere? : BoundingSphere, transform? : Matrix4, result? : BoundingSphere) : BoundingSphere
		static union(left? : BoundingSphere, right? : BoundingSphere, result? : BoundingSphere) : BoundingSphere
		static unpack(array? : Array<number>, startingIndex? : number, result? : BoundingSphere) : BoundingSphere
		clone(result : BoundingSphere) : BoundingSphere
		computePlaneDistances(position? : Cartesian3, direction? : Cartesian3, result? : Interval) : Interval
		distanceSquaredTo(cartesian? : Cartesian3) : number
		equals(right : BoundingSphere) : boolean
		intersectPlane(plane? : Plane) : Intersect
		isOccluded(occluder? : Occluder) : boolean

	}
	export = BoundingSphere

}
declare module 'cesium/Source/Core/CullingVolume' {
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import Intersect = require('cesium/Source/Core/Intersect')
	class CullingVolume 
	{
		constructor(planes? : Array<Cartesian4>);
		//Members
		planes: Array<Cartesian4>


		//Methods
		static fromBoundingSphere(boundingSphere? : BoundingSphere, result? : CullingVolume) : CullingVolume
		computeVisibility(boundingVolume? : any) : Intersect

	}
	export = CullingVolume

}
declare module 'cesium/Source/Core/Cartesian2' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	class Cartesian2 
	{
		constructor(x? : number, y? : number);
		//Members
		x: number
		y: number
		static packedLength: number
		static UNIT_X: Cartesian2
		static UNIT_Y: Cartesian2
		static ZERO: Cartesian2


		//Methods
		clone(result : Cartesian2) : Cartesian2
		equals(right : Cartesian2) : boolean
		equalsEpsilon(right : Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		toString() : string
		static abs(cartesian? : Cartesian2, result? : Cartesian2) : Cartesian2
		static add(left? : Cartesian2, right? : Cartesian2, result? : Cartesian2) : Cartesian2
		static angleBetween(left? : Cartesian2, right? : Cartesian2) : number
		static clone(cartesian? : Cartesian2, result? : Cartesian2) : Cartesian2
		static distance(left? : Cartesian2, right? : Cartesian2) : number
		static distanceSquared(left? : Cartesian2, right? : Cartesian2) : number
		static divideByScalar(cartesian? : Cartesian2, scalar? : number, result? : Cartesian2) : Cartesian2
		static divideComponents(left? : Cartesian2, right? : Cartesian2, result? : Cartesian2) : Cartesian2
		static dot(left? : Cartesian2, right? : Cartesian2) : number
		static equals(left : Cartesian2, right : Cartesian2) : boolean
		static equalsEpsilon(left : Cartesian2, right : Cartesian2, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static fromArray(array? : Array<number>, startingIndex? : number, result? : Cartesian2) : Cartesian2
		static fromCartesian3(cartesian? : Cartesian3, result? : Cartesian2) : Cartesian2
		static fromCartesian4(cartesian? : Cartesian4, result? : Cartesian2) : Cartesian2
		static fromElements(x? : number, y? : number, result? : Cartesian2) : Cartesian2
		static lerp(start? : Cartesian2, end? : Cartesian2, t? : number, result? : Cartesian2) : Cartesian2
		static magnitude(cartesian? : Cartesian2) : number
		static magnitudeSquared(cartesian? : Cartesian2) : number
		static maximumByComponent(first? : Cartesian2, second? : Cartesian2, result? : Cartesian2) : Cartesian2
		static maximumComponent(cartesian? : Cartesian2) : number
		static minimumByComponent(first? : Cartesian2, second? : Cartesian2, result? : Cartesian2) : Cartesian2
		static minimumComponent(cartesian? : Cartesian2) : number
		static mostOrthogonalAxis(cartesian? : Cartesian2, result? : Cartesian2) : Cartesian2
		static multiplyByScalar(cartesian? : Cartesian2, scalar? : number, result? : Cartesian2) : Cartesian2
		static multiplyComponents(left? : Cartesian2, right? : Cartesian2, result? : Cartesian2) : Cartesian2
		static negate(cartesian? : Cartesian2, result? : Cartesian2) : Cartesian2
		static normalize(cartesian? : Cartesian2, result? : Cartesian2) : Cartesian2
		static pack(value? : Cartesian2, array? : Array<number>, startingIndex? : number) : Array<number>
		static packArray(array? : Array<Cartesian2>, result? : Array<number>) : Array<number>
		static subtract(left? : Cartesian2, right? : Cartesian2, result? : Cartesian2) : Cartesian2
		static unpack(array? : Array<number>, startingIndex? : number, result? : Cartesian2) : Cartesian2
		static unpackArray(array? : Array<number>, result? : Array<Cartesian2>) : Array<Cartesian2>

	}
	export = Cartesian2

}
declare module 'cesium/Source/Core/PerspectiveFrustum' {
	import HASH_04333_PerspectiveFrustumOptions = require('cesium/Source/Core/HASH_04333_PerspectiveFrustumOptions')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import CullingVolume = require('cesium/Source/Core/CullingVolume')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	class PerspectiveFrustum 
	{
		constructor(options? : HASH_04333_PerspectiveFrustumOptions);
		//Members
		static packedLength: number
		aspectRatio: number
		far: number
		fov: number
		fovy: number
		infiniteProjectionMatrix: Matrix4
		near: number
		projectionMatrix: Matrix4
		xOffset: number
		yOffset: number


		//Methods
		static pack(value? : PerspectiveFrustum, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : PerspectiveFrustum) : PerspectiveFrustum
		clone(result : PerspectiveFrustum) : PerspectiveFrustum
		computeCullingVolume(position? : Cartesian3, direction? : Cartesian3, up? : Cartesian3) : CullingVolume
		equals(other : PerspectiveFrustum) : boolean
		getPixelDimensions(drawingBufferWidth? : number, drawingBufferHeight? : number, distance? : number, result? : Cartesian2) : Cartesian2

	}
	export = PerspectiveFrustum

}
declare module 'cesium/Source/Core/EasingFunction' {
	class EasingFunction 
	{
		constructor();
		//Members
		static BACK_IN: any
		static BACK_IN_OUT: any
		static BACK_OUT: any
		static BOUNCE_IN: any
		static BOUNCE_IN_OUT: any
		static BOUNCE_OUT: any
		static CIRCULAR_IN: any
		static CIRCULAR_IN_OUT: any
		static CIRCULAR_OUT: any
		static CUBIC_IN: any
		static CUBIC_IN_OUT: any
		static CUBIC_OUT: any
		static ELASTIC_IN: any
		static ELASTIC_IN_OUT: any
		static ELASTIC_OUT: any
		static EXPONENTIAL_IN: any
		static EXPONENTIAL_IN_OUT: any
		static EXPONENTIAL_OUT: any
		static LINEAR_NONE: any
		static QUADRACTIC_IN: any
		static QUADRACTIC_IN_OUT: any
		static QUADRACTIC_OUT: any
		static QUARTIC_IN: any
		static QUARTIC_IN_OUT: any
		static QUARTIC_OUT: any
		static QUINTIC_IN: any
		static QUINTIC_IN_OUT: any
		static QUINTIC_OUT: any
		static SINUSOIDAL_IN: any
		static SINUSOIDAL_IN_OUT: any
		static SINUSOIDAL_OUT: any


		//Methods

	}
	export = EasingFunction

}
declare module 'cesium/Source/Scene/HASH_10372_flyToOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import EasingFunction = require('cesium/Source/Core/EasingFunction')
	interface HASH_10372_flyToOptions
	{
		destination: Cartesian3|Rectangle;
		orientation?: Object;
		duration?: number;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		maximumHeight?: number;
		pitchAdjustHeight?: number;
		flyOverLongitude?: number;
		flyOverLongitudeWeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = HASH_10372_flyToOptions

}
declare module 'cesium/Source/Scene/HASH_28261_flyToBoundingSphereOptions' {
	import HeadingPitchRange = require('cesium/Source/Core/HeadingPitchRange')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import EasingFunction = require('cesium/Source/Core/EasingFunction')
	interface HASH_28261_flyToBoundingSphereOptions
	{
		duration?: number;
		offset?: HeadingPitchRange;
		complete?: any;
		cancel?: any;
		endTransform?: Matrix4;
		maximumHeight?: number;
		pitchAdjustHeight?: number;
		flyOverLongitude?: number;
		flyOverLongitudeWeight?: number;
		easingFunction?: EasingFunction|any;
	}
	export = HASH_28261_flyToBoundingSphereOptions

}
declare module 'cesium/Source/Core/Ray' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class Ray 
	{
		constructor(origin? : Cartesian3, direction? : Cartesian3);
		//Members
		direction: Cartesian3
		origin: Cartesian3


		//Methods
		static getPoint(ray? : Ray, t? : number, result? : Cartesian3) : Cartesian3

	}
	export = Ray

}
declare module 'cesium/Source/Scene/HASH_12230_setViewOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	interface HASH_12230_setViewOptions
	{
		destination?: Cartesian3|Rectangle;
		orientation?: Object;
		endTransform?: Matrix4;
	}
	export = HASH_12230_setViewOptions

}
declare module 'cesium/Source/Scene/Camera' {
	import Scene = require('cesium/Source/Scene/Scene')
	import HeadingPitchRange = require('cesium/Source/Core/HeadingPitchRange')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Event = require('cesium/Source/Core/Event')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import PerspectiveFrustum = require('cesium/Source/Core/PerspectiveFrustum')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import HASH_10372_flyToOptions = require('cesium/Source/Scene/HASH_10372_flyToOptions')
	import HASH_28261_flyToBoundingSphereOptions = require('cesium/Source/Scene/HASH_28261_flyToBoundingSphereOptions')
	import Ray = require('cesium/Source/Core/Ray')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import HASH_12230_setViewOptions = require('cesium/Source/Scene/HASH_12230_setViewOptions')
	class Camera 
	{
		constructor(scene : Scene);
		//Members
		static DEFAULT_OFFSET: HeadingPitchRange
		static DEFAULT_VIEW_FACTOR: number
		static DEFAULT_VIEW_RECTANGLE: Rectangle
		changed: Event
		constrainedAxis: Cartesian3
		defaultLookAmount: number
		defaultMoveAmount: number
		defaultRotateAmount: number
		defaultZoomAmount: number
		direction: Cartesian3
		directionWC: Cartesian3
		frustum: PerspectiveFrustum
		heading: number
		inverseTransform: Matrix4
		inverseViewMatrix: Matrix4
		maximumZoomFactor: number
		moveEnd: Event
		moveStart: Event
		percentageChanged: number
		pitch: number
		position: Cartesian3
		positionCartographic: Cartographic
		positionWC: Cartesian3
		right: Cartesian3
		rightWC: Cartesian3
		roll: number
		transform: Matrix4
		up: Cartesian3
		upWC: Cartesian3
		viewMatrix: Matrix4


		//Methods
		cameraToWorldCoordinates(cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		cameraToWorldCoordinatesPoint(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		cameraToWorldCoordinatesVector(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		cancelFlight() : void
		computeViewRectangle(ellipsoid : Ellipsoid, result : Rectangle) : Rectangle|void
		distanceToBoundingSphere(boundingSphere? : BoundingSphere) : number
		flyHome(duration : number) : void
		flyTo(options : HASH_10372_flyToOptions) : void
		flyToBoundingSphere(boundingSphere? : BoundingSphere, options? : HASH_28261_flyToBoundingSphereOptions) : void
		getMagnitude() : number
		getPickRay(windowPosition? : Cartesian2, result? : Ray) : Ray
		getPixelSize(boundingSphere? : BoundingSphere, drawingBufferWidth? : number, drawingBufferHeight? : number) : number
		getRectangleCameraCoordinates(rectangle? : Rectangle, result? : Cartesian3) : Cartesian3
		look(axis? : Cartesian3, angle? : number) : void
		lookAt(target? : Cartesian3, offset? : Cartesian3|HeadingPitchRange) : void
		lookAtTransform(transform? : Matrix4, offset? : Cartesian3|HeadingPitchRange) : void
		lookDown(amount : number) : void
		lookLeft(amount : number) : void
		lookRight(amount : number) : void
		lookUp(amount : number) : void
		move(direction? : Cartesian3, amount? : number) : void
		moveBackward(amount : number) : void
		moveDown(amount : number) : void
		moveForward(amount : number) : void
		moveLeft(amount : number) : void
		moveRight(amount : number) : void
		moveUp(amount : number) : void
		pickEllipsoid(windowPosition? : Cartesian2, ellipsoid? : Ellipsoid, result? : Cartesian3) : Cartesian3
		rotate(axis? : Cartesian3, angle? : number) : void
		rotateDown(angle : number) : void
		rotateLeft(angle : number) : void
		rotateRight(angle : number) : void
		rotateUp(angle : number) : void
		setView(options : HASH_12230_setViewOptions) : void
		switchToOrthographicFrustum() : void
		switchToPerspectiveFrustum() : void
		twistLeft(amount : number) : void
		twistRight(amount : number) : void
		viewBoundingSphere(boundingSphere? : BoundingSphere, offset? : HeadingPitchRange) : void
		worldToCameraCoordinates(cartesian? : Cartesian4, result? : Cartesian4) : Cartesian4
		worldToCameraCoordinatesPoint(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		worldToCameraCoordinatesVector(cartesian? : Cartesian3, result? : Cartesian3) : Cartesian3
		zoomIn(amount : number) : void
		zoomOut(amount : number) : void

	}
	export = Camera

}
declare module 'cesium/Source/Scene/Fog' {
	class Fog 
	{
		constructor();
		//Members
		density: number
		enabled: boolean
		screenSpaceErrorFactor: number


		//Methods

	}
	export = Fog

}
declare module 'cesium/Source/Core/Credit' {
	class Credit 
	{
		constructor(text? : string, imageUrl? : string, link? : string);
		//Members
		imageUrl: string
		link: string
		text: string


		//Methods
		static equals(left? : Credit, right? : Credit) : boolean
		equals(credit? : Credit) : boolean
		hasImage() : boolean
		hasLink() : boolean

	}
	export = Credit

}
declare module 'cesium/Source/Core/DefaultProxy' {
	class DefaultProxy 
	{
		constructor(proxy : string);
		//Members


		//Methods
		getURL(resource? : string) : string

	}
	export = DefaultProxy

}
declare module 'cesium/Source/Scene/TileDiscardPolicy' {
	class TileDiscardPolicy 
	{
		constructor();
		//Members


		//Methods
		isReady() : boolean
		shouldDiscardImage(image? : HTMLImageElement) : boolean

	}
	export = TileDiscardPolicy

}
declare module 'cesium/Source/Core/TilingScheme' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import MapProjection = require('cesium/Source/Core/MapProjection')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class TilingScheme 
	{
		constructor();
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level? : number) : number
		getNumberOfYTilesAtLevel(level? : number) : number
		positionToTileXY(position? : Cartographic, level? : number, result? : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle? : Rectangle, result? : Rectangle) : Rectangle
		tileXYToNativeRectangle(x? : number, y? : number, level? : number, result? : any) : Rectangle
		tileXYToRectangle(x? : number, y? : number, level? : number, result? : any) : Rectangle

	}
	export = TilingScheme

}
declare module 'cesium/Source/Core/RequestType' {
	class RequestType 
	{
		constructor();
		//Members
		static IMAGERY: number
		static OTHER: number
		static TERRAIN: number
		static TILES3D: number


		//Methods

	}
	export = RequestType

}
declare module 'cesium/Source/Core/HASH_58953_RequestOptions' {
	import RequestType = require('cesium/Source/Core/RequestType')
	interface HASH_58953_RequestOptions
	{
		url?: boolean;
		requestFunction?: any;
		cancelFunction?: any;
		priorityFunction?: any;
		priority?: number;
		throttle?: boolean;
		throttleByServer?: boolean;
		type?: RequestType;
	}
	export = HASH_58953_RequestOptions

}
declare module 'cesium/Source/Core/RequestState' {
	class RequestState 
	{
		constructor();
		//Members
		static ACTIVE: number
		static CANCELLED: number
		static FAILED: number
		static ISSUED: number
		static RECEIVED: number
		static UNISSUED: number


		//Methods

	}
	export = RequestState

}
declare module 'cesium/Source/Core/Request' {
	import HASH_58953_RequestOptions = require('cesium/Source/Core/HASH_58953_RequestOptions')
	import RequestState = require('cesium/Source/Core/RequestState')
	import RequestType = require('cesium/Source/Core/RequestType')
	class Request 
	{
		constructor(options? : HASH_58953_RequestOptions);
		//Members
		cancelFunction: any
		priority: number
		priorityFunction: any
		requestFunction: any
		state: RequestState
		throttle: boolean
		throttleByServer: boolean
		type: RequestType
		url: string


		//Methods

	}
	export = Request

}
declare module 'cesium/Source/Scene/ImageryLayerFeatureInfo' {
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class ImageryLayerFeatureInfo 
	{
		constructor();
		//Members
		data: Object
		description: string
		imageryLayer: Object
		name: string
		position: Cartographic


		//Methods
		configureDescriptionFromProperties(properties? : any) : void
		configureNameFromProperties(properties? : any) : void

	}
	export = ImageryLayerFeatureInfo

}
declare module 'cesium/Source/Scene/ImageryProvider' {
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Request = require('cesium/Source/Core/Request')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	class ImageryProvider 
	{
		constructor();
		//Members
		credit: Credit
		defaultAlpha: number
		defaultBrightness: number
		defaultContrast: number
		defaultGamma: number
		defaultHue: number
		defaultSaturation: number
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme


		//Methods
		static loadImage(imageryProvider? : ImageryProvider, url? : string, request? : Request) : Promise<Image | Canvas>|void
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = ImageryProvider

}
declare module 'cesium/Source/Scene/ImagerySplitDirection' {
	class ImagerySplitDirection 
	{
		constructor();
		//Members
		static LEFT: number
		static NONE: number
		static RIGHT: number


		//Methods

	}
	export = ImagerySplitDirection

}
declare module 'cesium/Source/Scene/HASH_19059_ImageryLayerOptions' {
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import ImagerySplitDirection = require('cesium/Source/Scene/ImagerySplitDirection')
	interface HASH_19059_ImageryLayerOptions
	{
		rectangle?: Rectangle;
		alpha?: number|(()=>void);
		brightness?: number|(()=>void);
		contrast?: number|(()=>void);
		hue?: number|(()=>void);
		saturation?: number|(()=>void);
		gamma?: number|(()=>void);
		splitDirection?: ImagerySplitDirection|(()=>void);
		show?: boolean;
		maximumAnisotropy?: number;
		minimumTerrainLevel?: number;
		maximumTerrainLevel?: number;
	}
	export = HASH_19059_ImageryLayerOptions

}
declare module 'cesium/Source/Scene/ImageryLayer' {
	import ImageryProvider = require('cesium/Source/Scene/ImageryProvider')
	import HASH_19059_ImageryLayerOptions = require('cesium/Source/Scene/HASH_19059_ImageryLayerOptions')
	import ImagerySplitDirection = require('cesium/Source/Scene/ImagerySplitDirection')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	class ImageryLayer 
	{
		constructor(imageryProvider : ImageryProvider, options? : HASH_19059_ImageryLayerOptions);
		//Members
		static DEFAULT_BRIGHTNESS: number
		static DEFAULT_CONTRAST: number
		static DEFAULT_GAMMA: number
		static DEFAULT_HUE: number
		static DEFAULT_SATURATION: number
		static DEFAULT_SPLIT: ImagerySplitDirection
		alpha: number
		brightness: number
		contrast: number
		gamma: number
		hue: number
		imageryProvider: ImageryProvider
		rectangle: Rectangle
		saturation: number
		show: boolean
		splitDirection: ImagerySplitDirection


		//Methods
		destroy() : void
		getViewableRectangle() : Promise<Rectangle>
		isBaseLayer() : boolean
		isDestroyed() : boolean

	}
	export = ImageryLayer

}
declare module 'cesium/Source/Scene/ImageryLayerCollection' {
	import Event = require('cesium/Source/Core/Event')
	import ImageryLayer = require('cesium/Source/Scene/ImageryLayer')
	import ImageryProvider = require('cesium/Source/Scene/ImageryProvider')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Ray = require('cesium/Source/Core/Ray')
	import Scene = require('cesium/Source/Scene/Scene')
	class ImageryLayerCollection 
	{
		constructor();
		//Members
		layerAdded: Event
		layerMoved: Event
		layerRemoved: Event
		layerShownOrHidden: Event
		length: number


		//Methods
		add(layer? : ImageryLayer, index? : number) : void
		addImageryProvider(imageryProvider? : ImageryProvider, index? : number) : ImageryLayer
		contains(layer? : ImageryLayer) : boolean
		destroy() : void
		get(index? : number) : ImageryLayer
		indexOf(layer? : ImageryLayer) : number
		isDestroyed() : boolean
		lower(layer? : ImageryLayer) : void
		lowerToBottom(layer? : ImageryLayer) : void
		pickImageryLayerFeatures(ray? : Ray, scene? : Scene) : Promise<Array<ImageryLayerFeatureInfo>>|void
		raise(layer? : ImageryLayer) : void
		raiseToTop(layer? : ImageryLayer) : void
		remove(layer? : ImageryLayer, destroy? : boolean) : boolean
		removeAll(destroy : boolean) : void

	}
	export = ImageryLayerCollection

}
declare module 'cesium/Source/Scene/ShadowMode' {
	class ShadowMode 
	{
		constructor();
		//Members
		static CAST_ONLY: number
		static DISABLED: number
		static ENABLED: number
		static RECEIVE_ONLY: number


		//Methods

	}
	export = ShadowMode

}
declare module 'cesium/Source/Core/TileAvailability' {
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class TileAvailability 
	{
		constructor(tilingScheme : TilingScheme, maximumLevel : number);
		//Members


		//Methods
		addAvailableTileRange(level? : number, startX? : number, startY? : number, endX? : number, endY? : number) : void
		computeBestAvailableLevelOverRectangle(rectangle? : Rectangle) : number
		computeChildMaskForTile(level? : number, x? : number, y? : number) : number
		computeMaximumLevelAtPosition(position? : Cartographic) : number
		isTileAvailable(level? : number, x? : number, y? : number) : boolean

	}
	export = TileAvailability

}
declare module 'cesium/Source/Core/TerrainData' {
	import Credit = require('cesium/Source/Core/Credit')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	class TerrainData 
	{
		constructor();
		//Members
		credits: Array<Credit>
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle? : Rectangle, longitude? : number, latitude? : number) : number
		isChildAvailable(thisX? : number, thisY? : number, childX? : number, childY? : number) : boolean
		upsample(tilingScheme? : TilingScheme, thisX? : number, thisY? : number, thisLevel? : number, descendantX? : number, descendantY? : number, descendantLevel? : number) : Promise<TerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = TerrainData

}
declare module 'cesium/Source/Core/TerrainProvider' {
	import TileAvailability = require('cesium/Source/Core/TileAvailability')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import TerrainData = require('cesium/Source/Core/TerrainData')
	import Request = require('cesium/Source/Core/Request')
	class TerrainProvider 
	{
		constructor();
		//Members
		static heightmapTerrainQuality: number
		availability: TileAvailability
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: TilingScheme


		//Methods
		static getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid? : Ellipsoid, tileImageWidth? : number, numberOfTilesAtLevelZero? : number) : number
		static getRegularGridIndices(width? : number, height? : number) : Uint16Array
		getLevelMaximumGeometricError(level? : number) : number
		getTileDataAvailable(x? : number, y? : number, level? : number) : boolean
		requestTileGeometry(x? : number, y? : number, level? : number, request? : Request) : Promise<TerrainData>|void

	}
	export = TerrainProvider

}
declare module 'cesium/Source/Scene/Globe' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Color = require('cesium/Source/Core/Color')
	import ImageryLayerCollection = require('cesium/Source/Scene/ImageryLayerCollection')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import Event = require('cesium/Source/Core/Event')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ray = require('cesium/Source/Core/Ray')
	import Scene = require('cesium/Source/Scene/Scene')
	class Globe 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		baseColor: Color
		depthTestAgainstTerrain: boolean
		ellipsoid: Ellipsoid
		enableLighting: boolean
		imageryLayers: ImageryLayerCollection
		lightingFadeInDistance: number
		lightingFadeOutDistance: number
		maximumScreenSpaceError: number
		oceanNormalMapUrl: string
		shadows: ShadowMode
		show: boolean
		showWaterEffect: boolean
		terrainProvider: TerrainProvider
		terrainProviderChanged: Event
		tileCacheSize: number
		tileLoadProgressEvent: Event


		//Methods
		destroy() : void
		getHeight(cartographic? : Cartographic) : number|void
		isDestroyed() : boolean
		pick(ray? : Ray, scene? : Scene, result? : Cartesian3) : Cartesian3|void

	}
	export = Globe

}
declare module 'cesium/Source/Scene/HASH_44217_PrimitiveCollectionOptions' {
	interface HASH_44217_PrimitiveCollectionOptions
	{
		show?: boolean;
		destroyPrimitives?: boolean;
	}
	export = HASH_44217_PrimitiveCollectionOptions

}
declare module 'cesium/Source/Scene/PrimitiveCollection' {
	import HASH_44217_PrimitiveCollectionOptions = require('cesium/Source/Scene/HASH_44217_PrimitiveCollectionOptions')
	class PrimitiveCollection 
	{
		constructor(options? : HASH_44217_PrimitiveCollectionOptions);
		//Members
		destroyPrimitives: boolean
		length: number
		show: boolean


		//Methods
		add(primitive? : any) : Object
		contains(primitive : any) : boolean
		destroy() : void
		get(index? : number) : Object
		isDestroyed() : boolean
		lower(primitive : any) : void
		lowerToBottom(primitive : any) : void
		raise(primitive : any) : void
		raiseToTop(primitive : any) : void
		remove(primitive : any) : boolean
		removeAll() : void

	}
	export = PrimitiveCollection

}
declare module 'cesium/Source/Scene/SceneMode' {
	class SceneMode 
	{
		constructor();
		//Members
		static COLUMBUS_VIEW: number
		static MORPHING: number
		static SCENE2D: number
		static SCENE3D: number


		//Methods
		static getMorphTime(value? : SceneMode) : number

	}
	export = SceneMode

}
declare module 'cesium/Source/Scene/HASH_54429_MoonOptions' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_54429_MoonOptions
	{
		show?: boolean;
		textureUrl?: string;
		ellipsoid?: Ellipsoid;
		onlySunLighting?: boolean;
	}
	export = HASH_54429_MoonOptions

}
declare module 'cesium/Source/Scene/Moon' {
	import HASH_54429_MoonOptions = require('cesium/Source/Scene/HASH_54429_MoonOptions')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	class Moon 
	{
		constructor(options? : HASH_54429_MoonOptions);
		//Members
		ellipsoid: Ellipsoid
		onlySunLighting: boolean
		show: boolean
		textureUrl: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Moon

}
declare module 'cesium/Source/Scene/CameraEventType' {
	class CameraEventType 
	{
		constructor();
		//Members
		static LEFT_DRAG: number
		static MIDDLE_DRAG: number
		static PINCH: number
		static RIGHT_DRAG: number
		static WHEEL: number


		//Methods

	}
	export = CameraEventType

}
declare module 'cesium/Source/Scene/ScreenSpaceCameraController' {
	import Scene = require('cesium/Source/Scene/Scene')
	import CameraEventType = require('cesium/Source/Scene/CameraEventType')
	class ScreenSpaceCameraController 
	{
		constructor(scene : Scene);
		//Members
		bounceAnimationTime: number
		enableCollisionDetection: boolean
		enableInputs: boolean
		enableLook: boolean
		enableRotate: boolean
		enableTilt: boolean
		enableTranslate: boolean
		enableZoom: boolean
		inertiaSpin: number
		inertiaTranslate: number
		inertiaZoom: number
		lookEventTypes: CameraEventType|Array<any>|void
		maximumMovementRatio: number
		maximumZoomDistance: number
		minimumCollisionTerrainHeight: number
		minimumPickingTerrainHeight: number
		minimumTrackBallHeight: number
		minimumZoomDistance: number
		rotateEventTypes: CameraEventType|Array<any>|void
		tiltEventTypes: CameraEventType|Array<any>|void
		translateEventTypes: CameraEventType|Array<any>|void
		zoomEventTypes: CameraEventType|Array<any>|void


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = ScreenSpaceCameraController

}
declare module 'cesium/Source/Scene/HASH_63121_ShadowMapOptions' {
	import Camera = require('cesium/Source/Scene/Camera')
	interface HASH_63121_ShadowMapOptions
	{
		lightCamera: Camera;
		enabled?: boolean;
		isPointLight?: boolean;
		pointLightRadius?: boolean;
		cascadesEnabled?: boolean;
		numberOfCascades?: number;
		maximumDistance?: number;
		size?: number;
		softShadows?: boolean;
		darkness?: number;
		normalOffset?: boolean;
	}
	export = HASH_63121_ShadowMapOptions

}
declare module 'cesium/Source/Scene/ShadowMap' {
	import HASH_63121_ShadowMapOptions = require('cesium/Source/Scene/HASH_63121_ShadowMapOptions')
	class ShadowMap 
	{
		constructor(options? : HASH_63121_ShadowMapOptions);
		//Members
		darkness: number
		enabled: boolean
		maximumDistance: number
		normalOffset: boolean
		size: number
		softShadows: boolean


		//Methods

	}
	export = ShadowMap

}
declare module 'cesium/Source/Scene/SkyAtmosphere' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	class SkyAtmosphere 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		brightnessShift: number
		ellipsoid: Ellipsoid
		hueShift: number
		saturationShift: number
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SkyAtmosphere

}
declare module 'cesium/Source/Scene/HASH_16137_SkyBoxOptions' {
	interface HASH_16137_SkyBoxOptions
	{
		sources?: Object;
		show?: boolean;
	}
	export = HASH_16137_SkyBoxOptions

}
declare module 'cesium/Source/Scene/SkyBox' {
	import HASH_16137_SkyBoxOptions = require('cesium/Source/Scene/HASH_16137_SkyBoxOptions')
	class SkyBox 
	{
		constructor(options? : HASH_16137_SkyBoxOptions);
		//Members
		show: boolean
		sources: Object


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update() : void

	}
	export = SkyBox

}
declare module 'cesium/Source/Scene/Sun' {
	class Sun 
	{
		constructor();
		//Members
		glowFactor: number
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Sun

}
declare module 'cesium/Source/Scene/Scene' {
	import HASH_31547_SceneOptions = require('cesium/Source/Scene/HASH_31547_SceneOptions')
	import Color = require('cesium/Source/Core/Color')
	import Camera = require('cesium/Source/Scene/Camera')
	import Fog = require('cesium/Source/Scene/Fog')
	import Globe = require('cesium/Source/Scene/Globe')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import ImageryLayerCollection = require('cesium/Source/Scene/ImageryLayerCollection')
	import MapProjection = require('cesium/Source/Core/MapProjection')
	import SceneMode = require('cesium/Source/Scene/SceneMode')
	import Moon = require('cesium/Source/Scene/Moon')
	import Event = require('cesium/Source/Core/Event')
	import ScreenSpaceCameraController = require('cesium/Source/Scene/ScreenSpaceCameraController')
	import ShadowMap = require('cesium/Source/Scene/ShadowMap')
	import SkyAtmosphere = require('cesium/Source/Scene/SkyAtmosphere')
	import SkyBox = require('cesium/Source/Scene/SkyBox')
	import Sun = require('cesium/Source/Scene/Sun')
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class Scene 
	{
		constructor(options? : HASH_31547_SceneOptions);
		//Members
		backgroundColor: Color
		camera: Camera
		canvas: HTMLCanvasElement
		completeMorphOnUserInput: boolean
		debugCommandFilter: (()=>void)
		debugFrustumStatistics: Object
		debugShowCommands: boolean
		debugShowDepthFrustum: number
		debugShowFramesPerSecond: boolean
		debugShowFrustumPlanes: boolean
		debugShowFrustums: boolean
		debugShowGlobeDepth: boolean
		drawingBufferHeight: number
		drawingBufferWidth: number
		farToNearRatio: number
		fog: Fog
		fxaa: boolean
		globe: Globe
		groundPrimitives: PrimitiveCollection
		id: string
		imageryLayers: ImageryLayerCollection
		imagerySplitPosition: number
		mapMode2D: boolean
		mapProjection: MapProjection
		maximumAliasedLineWidth: number
		maximumCubeMapSize: number
		minimumDisableDepthTestDistance: number
		mode: SceneMode
		moon: Moon
		morphComplete: Event
		morphStart: Event
		morphTime: number
		nearToFarDistance2D: number
		orderIndependentTranslucency: boolean
		pickPositionSupported: boolean
		pickTranslucentDepth: boolean
		postRender: Event
		preRender: Event
		primitives: PrimitiveCollection
		renderError: Event
		rethrowRenderErrors: boolean
		scene3DOnly: boolean
		screenSpaceCameraController: ScreenSpaceCameraController
		shadowMap: ShadowMap
		skyAtmosphere: SkyAtmosphere
		skyBox: SkyBox
		sun: Sun
		sunBloom: boolean
		terrainExaggeration: number
		terrainProvider: TerrainProvider
		terrainProviderChanged: Event
		useDepthPicking: boolean
		useWebVR: boolean


		//Methods
		cartesianToCanvasCoordinates(position? : Cartesian3, result? : Cartesian2) : Cartesian2
		completeMorph() : void
		destroy() : void
		drillPick(windowPosition? : Cartesian2, limit? : number) : Array<Object>
		getCompressedTextureFormatSupported(format? : string) : boolean
		isDestroyed() : boolean
		morphTo2D(duration : number) : void
		morphTo3D(duration : number) : void
		morphToColumbusView(duration : number) : void
		pick(windowPosition? : Cartesian2, width? : number, height? : number) : Object
		pickPosition(windowPosition? : Cartesian2, result? : Cartesian3) : Cartesian3

	}
	export = Scene

}
declare module 'cesium/Source/Core/HASH_52378_BingMapsGeocoderServiceOptions' {
	import Scene = require('cesium/Source/Scene/Scene')
	interface HASH_52378_BingMapsGeocoderServiceOptions
	{
		scene: Scene;
		key?: string;
	}
	export = HASH_52378_BingMapsGeocoderServiceOptions

}
declare module 'cesium/Source/Core/BingMapsGeocoderService' {
	import HASH_52378_BingMapsGeocoderServiceOptions = require('cesium/Source/Core/HASH_52378_BingMapsGeocoderServiceOptions')
	class BingMapsGeocoderService 
	{
		constructor(options? : HASH_52378_BingMapsGeocoderServiceOptions);
		//Members


		//Methods
		geocode(query? : string) : any

	}
	export = BingMapsGeocoderService

}
declare module 'cesium/Source/Core/BoundingRectangle' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Intersect = require('cesium/Source/Core/Intersect')
	class BoundingRectangle 
	{
		constructor(x? : number, y? : number, width? : number, height? : number);
		//Members
		static packedLength: number
		height: number
		width: number
		x: number
		y: number


		//Methods
		static clone(rectangle? : BoundingRectangle, result? : BoundingRectangle) : BoundingRectangle
		static equals(left : BoundingRectangle, right : BoundingRectangle) : boolean
		static expand(rectangle? : BoundingRectangle, point? : Cartesian2, result? : BoundingRectangle) : BoundingRectangle
		static fromPoints(positions? : Array<Cartesian2>, result? : BoundingRectangle) : BoundingRectangle
		static fromRectangle(rectangle? : Rectangle, projection? : any, result? : BoundingRectangle) : BoundingRectangle
		static intersect(left? : BoundingRectangle, right? : BoundingRectangle) : Intersect
		static pack(value? : BoundingRectangle, array? : Array<number>, startingIndex? : number) : Array<number>
		static union(left? : BoundingRectangle, right? : BoundingRectangle, result? : BoundingRectangle) : BoundingRectangle
		static unpack(array? : Array<number>, startingIndex? : number, result? : BoundingRectangle) : BoundingRectangle
		clone(result : BoundingRectangle) : BoundingRectangle
		equals(right : BoundingRectangle) : boolean
		intersect(right? : BoundingRectangle) : Intersect

	}
	export = BoundingRectangle

}
declare module 'cesium/Source/Core/VertexFormat' {
	class VertexFormat 
	{
		constructor(options? : any);
		//Members
		static ALL: VertexFormat
		static DEFAULT: VertexFormat
		static packedLength: number
		static POSITION_AND_COLOR: VertexFormat
		static POSITION_AND_NORMAL: VertexFormat
		static POSITION_AND_ST: VertexFormat
		static POSITION_NORMAL_AND_ST: VertexFormat
		static POSITION_ONLY: VertexFormat
		bitangent: boolean
		color: boolean
		normal: boolean
		position: boolean
		st: boolean
		tangent: boolean


		//Methods
		static clone(vertexFormat? : VertexFormat, result? : VertexFormat) : VertexFormat
		static pack(value? : VertexFormat, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : VertexFormat) : VertexFormat

	}
	export = VertexFormat

}
declare module 'cesium/Source/Core/HASH_77487_BoxGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_77487_BoxGeometryOptions
	{
		minimum: Cartesian3;
		maximum: Cartesian3;
		vertexFormat?: VertexFormat;
	}
	export = HASH_77487_BoxGeometryOptions

}
declare module 'cesium/Source/Core/ComponentDatatype' {
	class ComponentDatatype 
	{
		constructor();
		//Members
		static DOUBLE: number
		static INT: number
		static UNSIGNED_INT: number
		static BYTE: number
		static FLOAT: number
		static SHORT: number
		static UNSIGNED_BYTE: number
		static UNSIGNED_SHORT: number


		//Methods
		static createArrayBufferView(componentDatatype? : ComponentDatatype, buffer? : ArrayBuffer, byteOffset? : number, length? : number) : Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array
		static createTypedArray(componentDatatype? : ComponentDatatype, valuesOrLength? : number|Array<any>) : Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array
		static fromName(name? : string) : ComponentDatatype
		static fromTypedArray(array? : TypedArray) : ComponentDatatype
		static getSizeInBytes(componentDatatype? : ComponentDatatype) : number
		static validate(componentDatatype? : ComponentDatatype) : boolean

	}
	export = ComponentDatatype

}
declare module 'cesium/Source/Core/HASH_17002_GeometryAttributeOptions' {
	import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	interface HASH_17002_GeometryAttributeOptions
	{
		componentDatatype?: ComponentDatatype;
		componentsPerAttribute?: number;
		normalize?: boolean;
		values?: TypedArray;
	}
	export = HASH_17002_GeometryAttributeOptions

}
declare module 'cesium/Source/Core/GeometryAttribute' {
	import HASH_17002_GeometryAttributeOptions = require('cesium/Source/Core/HASH_17002_GeometryAttributeOptions')
	import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	class GeometryAttribute 
	{
		constructor(options? : HASH_17002_GeometryAttributeOptions);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		values: TypedArray


		//Methods

	}
	export = GeometryAttribute

}
declare module 'cesium/Source/Core/GeometryAttributes' {
	import GeometryAttribute = require('cesium/Source/Core/GeometryAttribute')
	class GeometryAttributes 
	{
		constructor();
		//Members
		bitangent: GeometryAttribute
		color: GeometryAttribute
		normal: GeometryAttribute
		position: GeometryAttribute
		st: GeometryAttribute
		tangent: GeometryAttribute


		//Methods

	}
	export = GeometryAttributes

}
declare module 'cesium/Source/Core/PrimitiveType' {
	class PrimitiveType 
	{
		constructor();
		//Members
		static LINE_LOOP: number
		static LINE_STRIP: number
		static LINES: number
		static POINTS: number
		static TRIANGLE_FAN: number
		static TRIANGLE_STRIP: number
		static TRIANGLES: number


		//Methods

	}
	export = PrimitiveType

}
declare module 'cesium/Source/Core/HASH_79973_GeometryOptions' {
	import GeometryAttributes = require('cesium/Source/Core/GeometryAttributes')
	import PrimitiveType = require('cesium/Source/Core/PrimitiveType')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	interface HASH_79973_GeometryOptions
	{
		attributes: GeometryAttributes;
		primitiveType?: PrimitiveType;
		indices?: Uint16Array|Uint32Array;
		boundingSphere?: BoundingSphere;
	}
	export = HASH_79973_GeometryOptions

}
declare module 'cesium/Source/Core/Geometry' {
	import HASH_79973_GeometryOptions = require('cesium/Source/Core/HASH_79973_GeometryOptions')
	import GeometryAttributes = require('cesium/Source/Core/GeometryAttributes')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import PrimitiveType = require('cesium/Source/Core/PrimitiveType')
	class Geometry 
	{
		constructor(options? : HASH_79973_GeometryOptions);
		//Members
		attributes: GeometryAttributes
		boundingSphere: BoundingSphere
		indices: Array<any>
		primitiveType: PrimitiveType


		//Methods
		static computeNumberOfVertices(geometry? : Geometry) : number

	}
	export = Geometry

}
declare module 'cesium/Source/Core/HASH_11099_fromDimensionsOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_11099_fromDimensionsOptions
	{
		dimensions: Cartesian3;
		vertexFormat?: VertexFormat;
	}
	export = HASH_11099_fromDimensionsOptions

}
declare module 'cesium/Source/Core/BoxGeometry' {
	import HASH_77487_BoxGeometryOptions = require('cesium/Source/Core/HASH_77487_BoxGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	import AxisAlignedBoundingBox = require('cesium/Source/Core/AxisAlignedBoundingBox')
	import HASH_11099_fromDimensionsOptions = require('cesium/Source/Core/HASH_11099_fromDimensionsOptions')
	class BoxGeometry 
	{
		constructor(options? : HASH_77487_BoxGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(boxGeometry? : BoxGeometry) : Geometry|void
		static fromAxisAlignedBoundingBox(boundingBox? : AxisAlignedBoundingBox) : BoxGeometry
		static fromDimensions(options : HASH_11099_fromDimensionsOptions) : BoxGeometry
		static pack(value? : BoxGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : BoxGeometry) : BoxGeometry

	}
	export = BoxGeometry

}
declare module 'cesium/Source/Core/HASH_22432_BoxOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_22432_BoxOutlineGeometryOptions
	{
		minimum: Cartesian3;
		maximum: Cartesian3;
	}
	export = HASH_22432_BoxOutlineGeometryOptions

}
declare module 'cesium/Source/Core/HASH_05942_fromDimensionsOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_05942_fromDimensionsOptions
	{
		dimensions: Cartesian3;
	}
	export = HASH_05942_fromDimensionsOptions

}
declare module 'cesium/Source/Core/BoxOutlineGeometry' {
	import HASH_22432_BoxOutlineGeometryOptions = require('cesium/Source/Core/HASH_22432_BoxOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	import AxisAlignedBoundingBox = require('cesium/Source/Core/AxisAlignedBoundingBox')
	import HASH_05942_fromDimensionsOptions = require('cesium/Source/Core/HASH_05942_fromDimensionsOptions')
	class BoxOutlineGeometry 
	{
		constructor(options : HASH_22432_BoxOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(boxGeometry? : BoxOutlineGeometry) : Geometry|void
		static fromAxisAlignedBoundingBox(boundingBox? : AxisAlignedBoundingBox) : BoxOutlineGeometry
		static fromDimensions(options? : HASH_05942_fromDimensionsOptions) : BoxOutlineGeometry
		static pack(value? : BoxOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : BoxOutlineGeometry) : BoxOutlineGeometry

	}
	export = BoxOutlineGeometry

}
declare module 'cesium/Source/Core/CartographicGeocoderService' {
	class CartographicGeocoderService 
	{
		constructor();
		//Members


		//Methods
		geocode(query? : string) : any

	}
	export = CartographicGeocoderService

}
declare module 'cesium/Source/Core/HASH_58294_CatmullRomSplineOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_58294_CatmullRomSplineOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		firstTangent?: Cartesian3;
		lastTangent?: Cartesian3;
	}
	export = HASH_58294_CatmullRomSplineOptions

}
declare module 'cesium/Source/Core/CatmullRomSpline' {
	import HASH_58294_CatmullRomSplineOptions = require('cesium/Source/Core/HASH_58294_CatmullRomSplineOptions')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class CatmullRomSpline 
	{
		constructor(options? : HASH_58294_CatmullRomSplineOptions);
		//Members
		firstTangent: Cartesian3
		lastTangent: Cartesian3
		points: Array<Cartesian3>
		times: Array<number>


		//Methods
		evaluate(time? : number, result? : Cartesian3) : Cartesian3
		findTimeInterval(time? : number) : number

	}
	export = CatmullRomSpline

}
declare module 'cesium/Source/Core/HASH_14184_CesiumTerrainProviderOptions' {
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_14184_CesiumTerrainProviderOptions
	{
		url: string;
		proxy?: DefaultProxy;
		requestVertexNormals?: boolean;
		requestWaterMask?: boolean;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = HASH_14184_CesiumTerrainProviderOptions

}
declare module 'cesium/Source/Core/HASH_25555_GeographicTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	interface HASH_25555_GeographicTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		rectangle?: Rectangle;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
	}
	export = HASH_25555_GeographicTilingSchemeOptions

}
declare module 'cesium/Source/Core/GeographicTilingScheme' {
	import HASH_25555_GeographicTilingSchemeOptions = require('cesium/Source/Core/HASH_25555_GeographicTilingSchemeOptions')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import MapProjection = require('cesium/Source/Core/MapProjection')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class GeographicTilingScheme 
	{
		constructor(options? : HASH_25555_GeographicTilingSchemeOptions);
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level? : number) : number
		getNumberOfYTilesAtLevel(level? : number) : number
		positionToTileXY(position? : Cartographic, level? : number, result? : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle? : Rectangle, result? : Rectangle) : Rectangle
		tileXYToNativeRectangle(x? : number, y? : number, level? : number, result? : any) : Rectangle
		tileXYToRectangle(x? : number, y? : number, level? : number, result? : any) : Rectangle

	}
	export = GeographicTilingScheme

}
declare module 'cesium/Source/Core/CesiumTerrainProvider' {
	import HASH_14184_CesiumTerrainProviderOptions = require('cesium/Source/Core/HASH_14184_CesiumTerrainProviderOptions')
	import TileAvailability = require('cesium/Source/Core/TileAvailability')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import GeographicTilingScheme = require('cesium/Source/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Source/Core/TerrainData')
	import Request = require('cesium/Source/Core/Request')
	class CesiumTerrainProvider 
	{
		constructor(options? : HASH_14184_CesiumTerrainProviderOptions);
		//Members
		availability: TileAvailability
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		requestVertexNormals: boolean
		requestWaterMask: boolean
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level? : number) : number
		getTileDataAvailable(x? : number, y? : number, level? : number) : boolean
		requestTileGeometry(x? : number, y? : number, level? : number, request? : Request) : Promise<TerrainData>|void

	}
	export = CesiumTerrainProvider

}
declare module 'cesium/Source/Core/HASH_93791_CircleGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_93791_CircleGeometryOptions
	{
		center: Cartesian3;
		radius: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		granularity?: number;
		vertexFormat?: VertexFormat;
		extrudedHeight?: number;
		stRotation?: number;
	}
	export = HASH_93791_CircleGeometryOptions

}
declare module 'cesium/Source/Core/CircleGeometry' {
	import HASH_93791_CircleGeometryOptions = require('cesium/Source/Core/HASH_93791_CircleGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class CircleGeometry 
	{
		constructor(options? : HASH_93791_CircleGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(circleGeometry? : CircleGeometry) : Geometry|void
		static pack(value? : CircleGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : CircleGeometry) : CircleGeometry

	}
	export = CircleGeometry

}
declare module 'cesium/Source/Core/HASH_32548_CircleOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_32548_CircleOutlineGeometryOptions
	{
		center: Cartesian3;
		radius: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		granularity?: number;
		extrudedHeight?: number;
		numberOfVerticalLines?: number;
	}
	export = HASH_32548_CircleOutlineGeometryOptions

}
declare module 'cesium/Source/Core/CircleOutlineGeometry' {
	import HASH_32548_CircleOutlineGeometryOptions = require('cesium/Source/Core/HASH_32548_CircleOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class CircleOutlineGeometry 
	{
		constructor(options? : HASH_32548_CircleOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(circleGeometry? : CircleOutlineGeometry) : Geometry|void
		static pack(value? : CircleOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : CircleOutlineGeometry) : CircleOutlineGeometry

	}
	export = CircleOutlineGeometry

}
declare module 'cesium/Source/Core/TimeStandard' {
	class TimeStandard 
	{
		constructor();
		//Members
		static TAI: number
		static UTC: number


		//Methods

	}
	export = TimeStandard

}
declare module 'cesium/Source/Core/LeapSecond' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class LeapSecond 
	{
		constructor(date? : JulianDate, offset? : number);
		//Members
		julianDate: JulianDate
		offset: number


		//Methods

	}
	export = LeapSecond

}
declare module 'cesium/Source/Core/GregorianDate' {
	class GregorianDate 
	{
		constructor();
		//Members
		day: number
		hour: number
		isLeapSecond: boolean
		millisecond: number
		minute: number
		month: number
		second: number
		year: number


		//Methods

	}
	export = GregorianDate

}
declare module 'cesium/Source/Core/JulianDate' {
	import TimeStandard = require('cesium/Source/Core/TimeStandard')
	import LeapSecond = require('cesium/Source/Core/LeapSecond')
	import GregorianDate = require('cesium/Source/Core/GregorianDate')
	class JulianDate 
	{
		constructor(julianDayNumber? : number, secondsOfDay? : number, timeStandard? : TimeStandard);
		//Members
		static leapSeconds: Array<LeapSecond>
		dayNumber: number
		secondsOfDay: number


		//Methods
		static addDays(julianDate? : JulianDate, days? : number, result? : JulianDate) : JulianDate
		static addHours(julianDate? : JulianDate, hours? : number, result? : JulianDate) : JulianDate
		static addMinutes(julianDate? : JulianDate, minutes? : number, result? : JulianDate) : JulianDate
		static addSeconds(julianDate? : JulianDate, seconds? : number, result? : JulianDate) : JulianDate
		static clone(julianDate? : JulianDate, result? : JulianDate) : JulianDate
		static compare(left? : JulianDate, right? : JulianDate) : number
		static computeTaiMinusUtc(julianDate? : JulianDate) : number
		static daysDifference(left? : JulianDate, right? : JulianDate) : number
		static equals(left : JulianDate, right : JulianDate) : boolean
		static equalsEpsilon(left : JulianDate, right : JulianDate, epsilon? : number) : boolean
		static fromDate(date? : Date, result? : JulianDate) : JulianDate
		static fromGregorianDate(date? : GregorianDate, result? : JulianDate) : JulianDate
		static fromIso8601(iso8601String? : string, result? : JulianDate) : JulianDate
		static greaterThan(left? : JulianDate, right? : JulianDate) : boolean
		static greaterThanOrEquals(left? : JulianDate, right? : JulianDate) : boolean
		static lessThan(left? : JulianDate, right? : JulianDate) : boolean
		static lessThanOrEquals(left? : JulianDate, right? : JulianDate) : boolean
		static now(result : JulianDate) : JulianDate
		static secondsDifference(left? : JulianDate, right? : JulianDate) : number
		static toDate(julianDate? : JulianDate) : Date
		static toGregorianDate(julianDate? : JulianDate, result? : GregorianDate) : GregorianDate
		static toIso8601(julianDate? : JulianDate, precision? : number) : string
		static totalDays(julianDate? : JulianDate) : number
		clone(result : JulianDate) : JulianDate
		equals(right : JulianDate) : boolean
		equalsEpsilon(right : JulianDate, epsilon? : number) : boolean
		toString() : string

	}
	export = JulianDate

}
declare module 'cesium/Source/Core/ClockStep' {
	class ClockStep 
	{
		constructor();
		//Members
		static SYSTEM_CLOCK: number
		static SYSTEM_CLOCK_MULTIPLIER: number
		static TICK_DEPENDENT: number


		//Methods

	}
	export = ClockStep

}
declare module 'cesium/Source/Core/ClockRange' {
	class ClockRange 
	{
		constructor();
		//Members
		static CLAMPED: number
		static LOOP_STOP: number
		static UNBOUNDED: number


		//Methods

	}
	export = ClockRange

}
declare module 'cesium/Source/Core/HASH_76136_ClockOptions' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import ClockStep = require('cesium/Source/Core/ClockStep')
	import ClockRange = require('cesium/Source/Core/ClockRange')
	interface HASH_76136_ClockOptions
	{
		startTime?: JulianDate;
		stopTime?: JulianDate;
		currentTime?: JulianDate;
		multiplier?: number;
		clockStep?: ClockStep;
		clockRange?: ClockRange;
		canAnimate?: boolean;
		shouldAnimate?: boolean;
	}
	export = HASH_76136_ClockOptions

}
declare module 'cesium/Source/Core/Clock' {
	import HASH_76136_ClockOptions = require('cesium/Source/Core/HASH_76136_ClockOptions')
	import ClockRange = require('cesium/Source/Core/ClockRange')
	import ClockStep = require('cesium/Source/Core/ClockStep')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Event = require('cesium/Source/Core/Event')
	class Clock 
	{
		constructor(options? : HASH_76136_ClockOptions);
		//Members
		canAnimate: boolean
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		onTick: Event
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		tick() : JulianDate

	}
	export = Clock

}
declare module 'cesium/Source/Core/ColorGeometryInstanceAttribute' {
	import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	import Color = require('cesium/Source/Core/Color')
	class ColorGeometryInstanceAttribute 
	{
		constructor(red? : number, green? : number, blue? : number, alpha? : number);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		value: Uint8Array


		//Methods
		static equals(left : ColorGeometryInstanceAttribute, right : ColorGeometryInstanceAttribute) : boolean
		static fromColor(color? : Color) : ColorGeometryInstanceAttribute
		static toValue(color? : Color, result? : Uint8Array) : Uint8Array

	}
	export = ColorGeometryInstanceAttribute

}
declare module 'cesium/Source/Core/CornerType' {
	class CornerType 
	{
		constructor();
		//Members
		static BEVELED: number
		static MITERED: number
		static ROUNDED: number


		//Methods

	}
	export = CornerType

}
declare module 'cesium/Source/Core/HASH_79644_CorridorGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import CornerType = require('cesium/Source/Core/CornerType')
	interface HASH_79644_CorridorGeometryOptions
	{
		positions: Array<Cartesian3>;
		width: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		cornerType?: CornerType;
	}
	export = HASH_79644_CorridorGeometryOptions

}
declare module 'cesium/Source/Core/CorridorGeometry' {
	import HASH_79644_CorridorGeometryOptions = require('cesium/Source/Core/HASH_79644_CorridorGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class CorridorGeometry 
	{
		constructor(options? : HASH_79644_CorridorGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(corridorGeometry? : CorridorGeometry) : Geometry|void
		static pack(value? : CorridorGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : CorridorGeometry) : CorridorGeometry

	}
	export = CorridorGeometry

}
declare module 'cesium/Source/Core/HASH_10539_CorridorOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import CornerType = require('cesium/Source/Core/CornerType')
	interface HASH_10539_CorridorOutlineGeometryOptions
	{
		positions: Array<Cartesian3>;
		width: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		extrudedHeight?: number;
		cornerType?: CornerType;
	}
	export = HASH_10539_CorridorOutlineGeometryOptions

}
declare module 'cesium/Source/Core/CorridorOutlineGeometry' {
	import HASH_10539_CorridorOutlineGeometryOptions = require('cesium/Source/Core/HASH_10539_CorridorOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class CorridorOutlineGeometry 
	{
		constructor(options? : HASH_10539_CorridorOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(corridorOutlineGeometry? : CorridorOutlineGeometry) : Geometry|void
		static pack(value? : CorridorOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : CorridorOutlineGeometry) : CorridorOutlineGeometry

	}
	export = CorridorOutlineGeometry

}
declare module 'cesium/Source/Core/CubicRealPolynomial' {
	class CubicRealPolynomial 
	{
		constructor();
		//Members


		//Methods
		static computeDiscriminant(a? : number, b? : number, c? : number, d? : number) : number
		static computeRealRoots(a? : number, b? : number, c? : number, d? : number) : Array<number>

	}
	export = CubicRealPolynomial

}
declare module 'cesium/Source/Core/HASH_11668_CylinderGeometryOptions' {
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_11668_CylinderGeometryOptions
	{
		length: number;
		topRadius: number;
		bottomRadius: number;
		slices?: number;
		vertexFormat?: VertexFormat;
	}
	export = HASH_11668_CylinderGeometryOptions

}
declare module 'cesium/Source/Core/CylinderGeometry' {
	import HASH_11668_CylinderGeometryOptions = require('cesium/Source/Core/HASH_11668_CylinderGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class CylinderGeometry 
	{
		constructor(options? : HASH_11668_CylinderGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(cylinderGeometry? : CylinderGeometry) : Geometry|void
		static pack(value? : CylinderGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : CylinderGeometry) : CylinderGeometry

	}
	export = CylinderGeometry

}
declare module 'cesium/Source/Core/HASH_40797_CylinderOutlineGeometryOptions' {
	interface HASH_40797_CylinderOutlineGeometryOptions
	{
		length: number;
		topRadius: number;
		bottomRadius: number;
		slices?: number;
		numberOfVerticalLines?: number;
	}
	export = HASH_40797_CylinderOutlineGeometryOptions

}
declare module 'cesium/Source/Core/CylinderOutlineGeometry' {
	import HASH_40797_CylinderOutlineGeometryOptions = require('cesium/Source/Core/HASH_40797_CylinderOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class CylinderOutlineGeometry 
	{
		constructor(options? : HASH_40797_CylinderOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(cylinderGeometry? : CylinderOutlineGeometry) : Geometry|void
		static pack(value? : CylinderOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : CylinderOutlineGeometry) : CylinderOutlineGeometry

	}
	export = CylinderOutlineGeometry

}
declare module 'cesium/Source/Core/DeveloperError' {
	class DeveloperError 
	{
		constructor(message? : string);
		//Members
		message: string
		name: string
		stack: string


		//Methods

	}
	export = DeveloperError

}
declare module 'cesium/Source/Core/DistanceDisplayCondition' {
	class DistanceDisplayCondition 
	{
		constructor(near? : number, far? : number);
		//Members
		far: number
		near: number


		//Methods
		static clone(value : DistanceDisplayCondition, result : DistanceDisplayCondition) : DistanceDisplayCondition
		static equals(left? : DistanceDisplayCondition, right? : DistanceDisplayCondition) : boolean
		clone(result : DistanceDisplayCondition) : DistanceDisplayCondition
		equals(other? : DistanceDisplayCondition) : boolean

	}
	export = DistanceDisplayCondition

}
declare module 'cesium/Source/Core/DistanceDisplayConditionGeometryInstanceAttribute' {
	import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	class DistanceDisplayConditionGeometryInstanceAttribute 
	{
		constructor(near? : number, far? : number);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		value: Float32Array


		//Methods
		static fromDistanceDisplayCondition(distanceDisplayCondition? : DistanceDisplayCondition) : DistanceDisplayConditionGeometryInstanceAttribute
		static toValue(distanceDisplayCondition? : DistanceDisplayCondition, result? : Float32Array) : Float32Array

	}
	export = DistanceDisplayConditionGeometryInstanceAttribute

}
declare module 'cesium/Source/Core/HASH_16607_EllipseGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_16607_EllipseGeometryOptions
	{
		center: Cartesian3;
		semiMajorAxis: number;
		semiMinorAxis: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		extrudedHeight?: number;
		rotation?: number;
		stRotation?: number;
		granularity?: number;
		vertexFormat?: VertexFormat;
	}
	export = HASH_16607_EllipseGeometryOptions

}
declare module 'cesium/Source/Core/EllipseGeometry' {
	import HASH_16607_EllipseGeometryOptions = require('cesium/Source/Core/HASH_16607_EllipseGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class EllipseGeometry 
	{
		constructor(options? : HASH_16607_EllipseGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipseGeometry? : EllipseGeometry) : Geometry|void
		static pack(value? : EllipseGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : EllipseGeometry) : EllipseGeometry

	}
	export = EllipseGeometry

}
declare module 'cesium/Source/Core/HASH_76966_EllipseOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_76966_EllipseOutlineGeometryOptions
	{
		center: Cartesian3;
		semiMajorAxis: number;
		semiMinorAxis: number;
		ellipsoid?: Ellipsoid;
		height?: number;
		extrudedHeight?: number;
		rotation?: number;
		granularity?: number;
		numberOfVerticalLines?: number;
	}
	export = HASH_76966_EllipseOutlineGeometryOptions

}
declare module 'cesium/Source/Core/EllipseOutlineGeometry' {
	import HASH_76966_EllipseOutlineGeometryOptions = require('cesium/Source/Core/HASH_76966_EllipseOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class EllipseOutlineGeometry 
	{
		constructor(options? : HASH_76966_EllipseOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipseGeometry? : EllipseOutlineGeometry) : Geometry|void
		static pack(value? : EllipseOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : EllipseOutlineGeometry) : EllipseOutlineGeometry

	}
	export = EllipseOutlineGeometry

}
declare module 'cesium/Source/Core/EllipsoidGeodesic' {
	import Cartographic = require('cesium/Source/Core/Cartographic')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	class EllipsoidGeodesic 
	{
		constructor(start? : Cartographic, end? : Cartographic, ellipsoid? : Ellipsoid);
		//Members
		ellipsoid: Ellipsoid
		end: Cartographic
		endHeading: number
		start: Cartographic
		startHeading: number
		surfaceDistance: number


		//Methods
		interpolateUsingFraction(fraction? : number, result? : Cartographic) : Cartographic
		interpolateUsingSurfaceDistance(distance? : number, result? : Cartographic) : Cartographic
		setEndPoints(start? : Cartographic, end? : Cartographic) : void

	}
	export = EllipsoidGeodesic

}
declare module 'cesium/Source/Core/HASH_16567_EllipsoidGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_16567_EllipsoidGeometryOptions
	{
		radii?: Cartesian3;
		stackPartitions?: number;
		slicePartitions?: number;
		vertexFormat?: VertexFormat;
	}
	export = HASH_16567_EllipsoidGeometryOptions

}
declare module 'cesium/Source/Core/EllipsoidGeometry' {
	import HASH_16567_EllipsoidGeometryOptions = require('cesium/Source/Core/HASH_16567_EllipsoidGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class EllipsoidGeometry 
	{
		constructor(options? : HASH_16567_EllipsoidGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipsoidGeometry? : EllipsoidGeometry) : Geometry|void
		static pack(value? : EllipsoidGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : EllipsoidGeometry) : EllipsoidGeometry

	}
	export = EllipsoidGeometry

}
declare module 'cesium/Source/Core/HASH_97746_EllipsoidOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_97746_EllipsoidOutlineGeometryOptions
	{
		radii?: Cartesian3;
		stackPartitions?: number;
		slicePartitions?: number;
		subdivisions?: number;
	}
	export = HASH_97746_EllipsoidOutlineGeometryOptions

}
declare module 'cesium/Source/Core/EllipsoidOutlineGeometry' {
	import HASH_97746_EllipsoidOutlineGeometryOptions = require('cesium/Source/Core/HASH_97746_EllipsoidOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class EllipsoidOutlineGeometry 
	{
		constructor(options? : HASH_97746_EllipsoidOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(ellipsoidGeometry? : EllipsoidOutlineGeometry) : Geometry|void
		static pack(value? : EllipsoidOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : EllipsoidOutlineGeometry) : EllipsoidOutlineGeometry

	}
	export = EllipsoidOutlineGeometry

}
declare module 'cesium/Source/Core/EllipsoidTangentPlane' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Plane = require('cesium/Source/Core/Plane')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	class EllipsoidTangentPlane 
	{
		constructor(origin : Cartesian3, ellipsoid? : Ellipsoid);
		//Members
		ellipsoid: Ellipsoid
		origin: Cartesian3
		plane: Plane
		xAxis: Cartesian3
		yAxis: Cartesian3


		//Methods
		static fromPoints(ellipsoid? : Ellipsoid, cartesians? : Cartesian3) : void
		projectPointOntoPlane(cartesian? : Cartesian3, result? : Cartesian2) : Cartesian2
		projectPointsOntoEllipsoid(cartesians? : Array<Cartesian2>, result? : Array<Cartesian3>) : Array<Cartesian3>
		projectPointsOntoPlane(cartesians? : Array<Cartesian3>, result? : Array<Cartesian2>) : Array<Cartesian2>
		projectPointsToNearestOnPlane(cartesians? : Array<Cartesian3>, result? : Array<Cartesian2>) : Array<Cartesian2>
		projectPointToNearestOnPlane(cartesian? : Cartesian3, result? : Cartesian2) : Cartesian2

	}
	export = EllipsoidTangentPlane

}
declare module 'cesium/Source/Core/HASH_20202_EllipsoidTerrainProviderOptions' {
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_20202_EllipsoidTerrainProviderOptions
	{
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
	}
	export = HASH_20202_EllipsoidTerrainProviderOptions

}
declare module 'cesium/Source/Core/EllipsoidTerrainProvider' {
	import HASH_20202_EllipsoidTerrainProviderOptions = require('cesium/Source/Core/HASH_20202_EllipsoidTerrainProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import GeographicTilingScheme = require('cesium/Source/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Source/Core/TerrainData')
	import Request = require('cesium/Source/Core/Request')
	class EllipsoidTerrainProvider 
	{
		constructor(options? : HASH_20202_EllipsoidTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level? : number) : number
		getTileDataAvailable(x? : number, y? : number, level? : number) : boolean
		requestTileGeometry(x? : number, y? : number, level? : number, request? : Request) : Promise<TerrainData>|void

	}
	export = EllipsoidTerrainProvider

}
declare module 'cesium/Source/Core/EventHelper' {
	import Event = require('cesium/Source/Core/Event')
	class EventHelper 
	{
		constructor();
		//Members


		//Methods
		add(event? : Event, listener? : (()=>void), scope? : any) : any
		removeAll() : void

	}
	export = EventHelper

}
declare module 'cesium/Source/Core/ExtrapolationType' {
	class ExtrapolationType 
	{
		constructor();
		//Members
		static EXTRAPOLATE: number
		static HOLD: number
		static NONE: number


		//Methods

	}
	export = ExtrapolationType

}
declare module 'cesium/Source/Core/FeatureDetection' {
	class FeatureDetection 
	{
		constructor();
		//Members


		//Methods
		static supportsFullscreen() : boolean
		static supportsTypedArrays() : boolean
		static supportsWebWorkers() : boolean

	}
	export = FeatureDetection

}
declare module 'cesium/Source/Core/HASH_20706_OrthographicFrustumOptions' {
	interface HASH_20706_OrthographicFrustumOptions
	{
		width?: number;
		aspectRatio?: number;
		near?: number;
		far?: number;
	}
	export = HASH_20706_OrthographicFrustumOptions

}
declare module 'cesium/Source/Core/OrthographicFrustum' {
	import HASH_20706_OrthographicFrustumOptions = require('cesium/Source/Core/HASH_20706_OrthographicFrustumOptions')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import CullingVolume = require('cesium/Source/Core/CullingVolume')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	class OrthographicFrustum 
	{
		constructor(options? : HASH_20706_OrthographicFrustumOptions);
		//Members
		static packedLength: number
		aspectRatio: number
		far: number
		near: number
		projectionMatrix: Matrix4
		width: number


		//Methods
		static pack(value? : OrthographicFrustum, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : OrthographicFrustum) : OrthographicFrustum
		clone(result : OrthographicFrustum) : OrthographicFrustum
		computeCullingVolume(position? : Cartesian3, direction? : Cartesian3, up? : Cartesian3) : CullingVolume
		equals(other : OrthographicFrustum) : boolean
		getPixelDimensions(drawingBufferWidth? : number, drawingBufferHeight? : number, distance? : number, result? : Cartesian2) : Cartesian2

	}
	export = OrthographicFrustum

}
declare module 'cesium/Source/Core/HASH_16976_FrustumGeometryOptions' {
	import PerspectiveFrustum = require('cesium/Source/Core/PerspectiveFrustum')
	import OrthographicFrustum = require('cesium/Source/Core/OrthographicFrustum')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_16976_FrustumGeometryOptions
	{
		frustum: PerspectiveFrustum|OrthographicFrustum;
		origin: Cartesian3;
		orientation: Quaternion;
		vertexFormat?: VertexFormat;
	}
	export = HASH_16976_FrustumGeometryOptions

}
declare module 'cesium/Source/Core/FrustumGeometry' {
	import HASH_16976_FrustumGeometryOptions = require('cesium/Source/Core/HASH_16976_FrustumGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class FrustumGeometry 
	{
		constructor(options? : HASH_16976_FrustumGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(frustumGeometry? : FrustumGeometry) : Geometry|void
		static pack(value? : FrustumGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : FrustumGeometry) : void

	}
	export = FrustumGeometry

}
declare module 'cesium/Source/Core/HASH_16495_FrustumOutlineGeometryOptions' {
	import PerspectiveFrustum = require('cesium/Source/Core/PerspectiveFrustum')
	import OrthographicFrustum = require('cesium/Source/Core/OrthographicFrustum')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	interface HASH_16495_FrustumOutlineGeometryOptions
	{
		frustum: PerspectiveFrustum|OrthographicFrustum;
		origin: Cartesian3;
		orientation: Quaternion;
	}
	export = HASH_16495_FrustumOutlineGeometryOptions

}
declare module 'cesium/Source/Core/FrustumOutlineGeometry' {
	import HASH_16495_FrustumOutlineGeometryOptions = require('cesium/Source/Core/HASH_16495_FrustumOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class FrustumOutlineGeometry 
	{
		constructor(options : HASH_16495_FrustumOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(frustumGeometry? : FrustumOutlineGeometry) : Geometry|void
		static pack(value? : FrustumOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : FrustumOutlineGeometry) : void

	}
	export = FrustumOutlineGeometry

}
declare module 'cesium/Source/Core/Fullscreen' {
	class Fullscreen 
	{
		constructor();
		//Members
		static changeEventName: string
		static element: Object
		static enabled: boolean
		static errorEventName: string
		static fullscreen: boolean


		//Methods
		static exitFullscreen() : void
		static requestFullscreen(element? : any, vrDevice? : HMDVRDevice) : void
		static supportsFullscreen() : boolean

	}
	export = Fullscreen

}
declare module 'cesium/Source/Core/GeocoderService' {
	class GeocoderService 
	{
		constructor();
		//Members


		//Methods
		geocode(query? : string) : any

	}
	export = GeocoderService

}
declare module 'cesium/Source/Core/GeographicProjection' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class GeographicProjection 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		ellipsoid: Ellipsoid


		//Methods
		project(cartographic? : Cartographic, result? : Cartesian3) : Cartesian3
		unproject(cartesian? : Cartesian3, result? : Cartographic) : Cartographic

	}
	export = GeographicProjection

}
declare module 'cesium/Source/Core/HASH_13263_GeometryInstanceOptions' {
	import Geometry = require('cesium/Source/Core/Geometry')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	interface HASH_13263_GeometryInstanceOptions
	{
		geometry: Geometry;
		modelMatrix?: Matrix4;
		id?: Object;
		attributes?: Object;
	}
	export = HASH_13263_GeometryInstanceOptions

}
declare module 'cesium/Source/Core/GeometryInstance' {
	import HASH_13263_GeometryInstanceOptions = require('cesium/Source/Core/HASH_13263_GeometryInstanceOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	class GeometryInstance 
	{
		constructor(options? : HASH_13263_GeometryInstanceOptions);
		//Members
		attributes: Object
		geometry: Geometry
		id: Object
		modelMatrix: Matrix4


		//Methods

	}
	export = GeometryInstance

}
declare module 'cesium/Source/Core/HASH_92923_GeometryInstanceAttributeOptions' {
	import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	interface HASH_92923_GeometryInstanceAttributeOptions
	{
		componentDatatype?: ComponentDatatype;
		componentsPerAttribute?: number;
		normalize?: boolean;
		value?: Array<number>;
	}
	export = HASH_92923_GeometryInstanceAttributeOptions

}
declare module 'cesium/Source/Core/GeometryInstanceAttribute' {
	import HASH_92923_GeometryInstanceAttributeOptions = require('cesium/Source/Core/HASH_92923_GeometryInstanceAttributeOptions')
	import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	class GeometryInstanceAttribute 
	{
		constructor(options? : HASH_92923_GeometryInstanceAttributeOptions);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		value: Array<number>


		//Methods

	}
	export = GeometryInstanceAttribute

}
declare module 'cesium/Source/Core/GeometryPipeline' {
	import Geometry = require('cesium/Source/Core/Geometry')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	class GeometryPipeline 
	{
		constructor();
		//Members


		//Methods
		static compressVertices(geometry? : Geometry) : Geometry
		static computeNormal(geometry? : Geometry) : Geometry
		static computeTangentAndBitangent(geometry? : Geometry) : Geometry
		static createAttributeLocations(geometry? : Geometry) : Object
		static createLineSegmentsForVectors(geometry? : Geometry, attributeName? : string, length? : number) : Geometry
		static encodeAttribute(geometry? : Geometry, attributeName? : string, attributeHighName? : string, attributeLowName? : string) : Geometry
		static fitToUnsignedShortIndices(geometry? : Geometry) : Array<Geometry>
		static projectTo2D(geometry? : Geometry, attributeName? : string, attributeName3D? : string, attributeName2D? : string, projection? : any) : Geometry
		static reorderForPostVertexCache(geometry? : Geometry, cacheCapacity? : number) : Geometry
		static reorderForPreVertexCache(geometry? : Geometry) : Geometry
		static toWireframe(geometry? : Geometry) : Geometry
		static transformToWorldCoordinates(instance? : GeometryInstance) : GeometryInstance

	}
	export = GeometryPipeline

}
declare module 'cesium/Source/Core/HASH_83055_GoogleEarthEnterpriseMetadataOptions' {
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	interface HASH_83055_GoogleEarthEnterpriseMetadataOptions
	{
		url: string;
		proxy?: DefaultProxy;
	}
	export = HASH_83055_GoogleEarthEnterpriseMetadataOptions

}
declare module 'cesium/Source/Core/GoogleEarthEnterpriseMetadata' {
	import HASH_83055_GoogleEarthEnterpriseMetadataOptions = require('cesium/Source/Core/HASH_83055_GoogleEarthEnterpriseMetadataOptions')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	class GoogleEarthEnterpriseMetadata 
	{
		constructor(options? : HASH_83055_GoogleEarthEnterpriseMetadataOptions);
		//Members
		imageryPresent: boolean
		key: ArrayBuffer
		negativeAltitudeExponentBias: number
		negativeAltitudeThreshold: number
		protoImagery: boolean
		providers: Object
		proxy: DefaultProxy
		readyPromise: Promise<boolean>
		terrainPresent: boolean
		url: string


		//Methods
		static quadKeyToTileXY(quadkey? : string) : void
		static tileXYToQuadKey(x? : number, y? : number, level? : number) : void

	}
	export = GoogleEarthEnterpriseMetadata

}
declare module 'cesium/Source/Core/HASH_93468_GoogleEarthEnterpriseTerrainDataOptions' {
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_93468_GoogleEarthEnterpriseTerrainDataOptions
	{
		buffer: ArrayBuffer;
		negativeAltitudeExponentBias: number;
		negativeElevationThreshold: number;
		childTileMask?: number;
		createdByUpsampling?: boolean;
		credits?: Array<Credit>;
	}
	export = HASH_93468_GoogleEarthEnterpriseTerrainDataOptions

}
declare module 'cesium/Source/Core/HASH_50902_HeightmapTerrainDataOptions' {
	interface HASH_50902_HeightmapTerrainDataOptions
	{
		heightScale?: number;
		heightOffset?: number;
		elementsPerHeight?: number;
		stride?: number;
		elementMultiplier?: number;
		isBigEndian?: boolean;
		lowestEncodedHeight?: number;
		highestEncodedHeight?: number;
	}
	export = HASH_50902_HeightmapTerrainDataOptions

}
declare module 'cesium/Source/Core/HASH_20159_HeightmapTerrainDataOptions' {
	import HASH_50902_HeightmapTerrainDataOptions = require('cesium/Source/Core/HASH_50902_HeightmapTerrainDataOptions')
	interface HASH_20159_HeightmapTerrainDataOptions
	{
		buffer: TypedArray;
		width: number;
		height: number;
		childTileMask?: number;
		structure?: HASH_50902_HeightmapTerrainDataOptions;
		createdByUpsampling?: boolean;
	}
	export = HASH_20159_HeightmapTerrainDataOptions

}
declare module 'cesium/Source/Core/HeightmapTerrainData' {
	import HASH_20159_HeightmapTerrainDataOptions = require('cesium/Source/Core/HASH_20159_HeightmapTerrainDataOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	class HeightmapTerrainData 
	{
		constructor(options? : HASH_20159_HeightmapTerrainDataOptions);
		//Members
		credits: Array<Credit>
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle? : Rectangle, longitude? : number, latitude? : number) : number
		isChildAvailable(thisX? : number, thisY? : number, childX? : number, childY? : number) : boolean
		upsample(tilingScheme? : TilingScheme, thisX? : number, thisY? : number, thisLevel? : number, descendantX? : number, descendantY? : number, descendantLevel? : number) : Promise<HeightmapTerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = HeightmapTerrainData

}
declare module 'cesium/Source/Core/GoogleEarthEnterpriseTerrainData' {
	import HASH_93468_GoogleEarthEnterpriseTerrainDataOptions = require('cesium/Source/Core/HASH_93468_GoogleEarthEnterpriseTerrainDataOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import HeightmapTerrainData = require('cesium/Source/Core/HeightmapTerrainData')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	class GoogleEarthEnterpriseTerrainData 
	{
		constructor(options? : HASH_93468_GoogleEarthEnterpriseTerrainDataOptions);
		//Members
		credits: Array<Credit>
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle? : Rectangle, longitude? : number, latitude? : number) : number
		isChildAvailable(thisX? : number, thisY? : number, childX? : number, childY? : number) : boolean
		upsample(tilingScheme? : TilingScheme, thisX? : number, thisY? : number, thisLevel? : number, descendantX? : number, descendantY? : number, descendantLevel? : number) : Promise<HeightmapTerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = GoogleEarthEnterpriseTerrainData

}
declare module 'cesium/Source/Core/HASH_12141_GoogleEarthEnterpriseTerrainProviderOptions' {
	import GoogleEarthEnterpriseMetadata = require('cesium/Source/Core/GoogleEarthEnterpriseMetadata')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_12141_GoogleEarthEnterpriseTerrainProviderOptions
	{
		url: string;
		metadata: GoogleEarthEnterpriseMetadata;
		proxy?: DefaultProxy;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = HASH_12141_GoogleEarthEnterpriseTerrainProviderOptions

}
declare module 'cesium/Source/Core/GoogleEarthEnterpriseTerrainProvider' {
	import HASH_12141_GoogleEarthEnterpriseTerrainProviderOptions = require('cesium/Source/Core/HASH_12141_GoogleEarthEnterpriseTerrainProviderOptions')
	import TileAvailability = require('cesium/Source/Core/TileAvailability')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import TerrainData = require('cesium/Source/Core/TerrainData')
	import Request = require('cesium/Source/Core/Request')
	class GoogleEarthEnterpriseTerrainProvider 
	{
		constructor(options? : HASH_12141_GoogleEarthEnterpriseTerrainProviderOptions);
		//Members
		availability: TileAvailability
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: TilingScheme
		url: string


		//Methods
		getLevelMaximumGeometricError(level? : number) : number
		getTileDataAvailable(x? : number, y? : number, level? : number) : boolean
		requestTileGeometry(x? : number, y? : number, level? : number, request? : Request) : Promise<TerrainData>|void

	}
	export = GoogleEarthEnterpriseTerrainProvider

}
declare module 'cesium/Source/Core/HermitePolynomialApproximation' {
	class HermitePolynomialApproximation 
	{
		constructor();
		//Members


		//Methods
		static getRequiredDataPoints(degree? : number, inputOrder? : number) : number
		static interpolate(x? : number, xTable? : Array<number>, yTable? : Array<number>, yStride? : number, inputOrder? : number, outputOrder? : number, result? : Array<number>) : Array<number>
		static interpolateOrderZero(x? : number, xTable? : Array<number>, yTable? : Array<number>, yStride? : number, result? : Array<number>) : Array<number>

	}
	export = HermitePolynomialApproximation

}
declare module 'cesium/Source/Core/HASH_18370_HermiteSplineOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_18370_HermiteSplineOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		inTangents: Array<Cartesian3>;
		outTangents: Array<Cartesian3>;
	}
	export = HASH_18370_HermiteSplineOptions

}
declare module 'cesium/Source/Core/HASH_57082_createC1Options' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_57082_createC1Options
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		tangents: Array<Cartesian3>;
	}
	export = HASH_57082_createC1Options

}
declare module 'cesium/Source/Core/HASH_82505_LinearSplineOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_82505_LinearSplineOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
	}
	export = HASH_82505_LinearSplineOptions

}
declare module 'cesium/Source/Core/LinearSpline' {
	import HASH_82505_LinearSplineOptions = require('cesium/Source/Core/HASH_82505_LinearSplineOptions')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class LinearSpline 
	{
		constructor(options : HASH_82505_LinearSplineOptions);
		//Members
		points: Array<Cartesian3>
		times: Array<number>


		//Methods
		evaluate(time? : number, result? : Cartesian3) : Cartesian3
		findTimeInterval(time? : number) : number

	}
	export = LinearSpline

}
declare module 'cesium/Source/Core/HASH_35250_createClampedCubicOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_35250_createClampedCubicOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
		firstTangent: Cartesian3;
		lastTangent: Cartesian3;
	}
	export = HASH_35250_createClampedCubicOptions

}
declare module 'cesium/Source/Core/HASH_82505_createNaturalCubicOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	interface HASH_82505_createNaturalCubicOptions
	{
		times: Array<number>;
		points: Array<Cartesian3>;
	}
	export = HASH_82505_createNaturalCubicOptions

}
declare module 'cesium/Source/Core/HermiteSpline' {
	import HASH_18370_HermiteSplineOptions = require('cesium/Source/Core/HASH_18370_HermiteSplineOptions')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import HASH_57082_createC1Options = require('cesium/Source/Core/HASH_57082_createC1Options')
	import LinearSpline = require('cesium/Source/Core/LinearSpline')
	import HASH_35250_createClampedCubicOptions = require('cesium/Source/Core/HASH_35250_createClampedCubicOptions')
	import HASH_82505_createNaturalCubicOptions = require('cesium/Source/Core/HASH_82505_createNaturalCubicOptions')
	class HermiteSpline 
	{
		constructor(options : HASH_18370_HermiteSplineOptions);
		//Members
		inTangents: Array<Cartesian3>
		outTangents: Array<Cartesian3>
		points: Array<Cartesian3>
		times: Array<number>


		//Methods
		static createC1(options? : HASH_57082_createC1Options) : HermiteSpline
		static createClampedCubic(options? : HASH_35250_createClampedCubicOptions) : HermiteSpline|LinearSpline
		static createNaturalCubic(options? : HASH_82505_createNaturalCubicOptions) : HermiteSpline|LinearSpline
		evaluate(time? : number, result? : Cartesian3) : Cartesian3
		findTimeInterval(time? : number) : number

	}
	export = HermiteSpline

}
declare module 'cesium/Source/Core/IndexDatatype' {
	class IndexDatatype 
	{
		constructor();
		//Members
		static UNSIGNED_BYTE: number
		static UNSIGNED_INT: number
		static UNSIGNED_SHORT: number


		//Methods
		static createTypedArray(numberOfVertices? : number, indicesLengthOrArray? : any) : Uint16Array|Uint32Array
		static createTypedArrayFromArrayBuffer(numberOfVertices? : number, sourceArray? : ArrayBuffer, byteOffset? : number, length? : number) : Uint16Array|Uint32Array
		static getSizeInBytes(indexDatatype? : IndexDatatype) : number
		static validate(indexDatatype? : IndexDatatype) : boolean

	}
	export = IndexDatatype

}
declare module 'cesium/Source/Core/InterpolationAlgorithm' {
	class InterpolationAlgorithm 
	{
		constructor();
		//Members
		static type: string


		//Methods
		static getRequiredDataPoints(degree? : number) : number
		static interpolate(x? : number, xTable? : Array<number>, yTable? : Array<number>, yStride? : number, inputOrder? : number, outputOrder? : number, result? : Array<number>) : Array<number>
		static interpolateOrderZero(x? : number, xTable? : Array<number>, yTable? : Array<number>, yStride? : number, result? : Array<number>) : Array<number>

	}
	export = InterpolationAlgorithm

}
declare module 'cesium/Source/Core/IntersectionTests' {
	import Interval = require('cesium/Source/Core/Interval')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import Ray = require('cesium/Source/Core/Ray')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Plane = require('cesium/Source/Core/Plane')
	class IntersectionTests 
	{
		constructor();
		//Members


		//Methods
		static lineSegmentSphere(p0? : Cartesian3, p1? : Cartesian3, sphere? : BoundingSphere, result? : Interval) : Interval
		static lineSegmentTriangle(v0? : Cartesian3, v1? : Cartesian3, p0? : Cartesian3, p1? : Cartesian3, p2? : Cartesian3, cullBackFaces? : boolean, result? : Cartesian3) : Cartesian3
		static raySphere(ray? : Ray, sphere? : BoundingSphere, result? : Interval) : Interval
		static rayTriangle(ray? : Ray, p0? : Cartesian3, p1? : Cartesian3, p2? : Cartesian3, cullBackFaces? : boolean, result? : Cartesian3) : Cartesian3
		static rayTriangleParametric(ray? : Ray, p0? : Cartesian3, p1? : Cartesian3, p2? : Cartesian3, cullBackFaces? : boolean) : number
		static grazingAltitudeLocation(ray? : Ray, ellipsoid? : Ellipsoid) : Cartesian3
		static lineSegmentPlane(endPoint0? : Cartesian3, endPoint1? : Cartesian3, plane? : Plane, result? : Cartesian3) : Cartesian3
		static rayEllipsoid(ray? : Ray, ellipsoid? : Ellipsoid) : Interval
		static rayPlane(ray? : Ray, plane? : Plane, result? : Cartesian3) : Cartesian3
		static trianglePlaneIntersection(p0? : Cartesian3, p1? : Cartesian3, p2? : Cartesian3, plane? : Plane) : Object

	}
	export = IntersectionTests

}
declare module 'cesium/Source/Core/Intersections2D' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class Intersections2D 
	{
		constructor();
		//Members


		//Methods
		static clipTriangleAtAxisAlignedThreshold(threshold? : number, keepAbove? : boolean, u0? : number, u1? : number, u2? : number, result? : Array<number>) : Array<number>
		static computeBarycentricCoordinates(x? : number, y? : number, x1? : number, y1? : number, x2? : number, y2? : number, x3? : number, y3? : number, result? : Cartesian3) : Cartesian3

	}
	export = Intersections2D

}
declare module 'cesium/Source/Core/Iso8601' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class Iso8601 
	{
		constructor();
		//Members
		static MAXIMUM_INTERVAL: JulianDate
		static MAXIMUM_VALUE: JulianDate
		static MINIMUM_VALUE: JulianDate


		//Methods

	}
	export = Iso8601

}
declare module 'cesium/Source/Core/KeyboardEventModifier' {
	class KeyboardEventModifier 
	{
		constructor();
		//Members
		static ALT: number
		static CTRL: number
		static SHIFT: number


		//Methods

	}
	export = KeyboardEventModifier

}
declare module 'cesium/Source/Core/LagrangePolynomialApproximation' {
	class LagrangePolynomialApproximation 
	{
		constructor();
		//Members


		//Methods
		static getRequiredDataPoints(degree? : number) : number
		static interpolateOrderZero(x? : number, xTable? : Array<number>, yTable? : Array<number>, yStride? : number, result? : Array<number>) : Array<number>

	}
	export = LagrangePolynomialApproximation

}
declare module 'cesium/Source/Core/LinearApproximation' {
	class LinearApproximation 
	{
		constructor();
		//Members


		//Methods
		static getRequiredDataPoints(degree? : number) : number
		static interpolateOrderZero(x? : number, xTable? : Array<number>, yTable? : Array<number>, yStride? : number, result? : Array<number>) : Array<number>

	}
	export = LinearApproximation

}
declare module 'cesium/Source/Core/Math' {
	class Math 
	{
		constructor();
		//Members
		static DEGREES_PER_RADIAN: number
		static EPSILON1: number
		static EPSILON2: number
		static EPSILON3: number
		static EPSILON4: number
		static EPSILON5: number
		static EPSILON6: number
		static EPSILON7: number
		static EPSILON8: number
		static EPSILON9: number
		static EPSILON10: number
		static EPSILON11: number
		static EPSILON12: number
		static EPSILON13: number
		static EPSILON14: number
		static EPSILON15: number
		static EPSILON16: number
		static EPSILON17: number
		static EPSILON18: number
		static EPSILON19: number
		static EPSILON20: number
		static GRAVITATIONALPARAMETER: number
		static LUNAR_RADIUS: number
		static ONE_OVER_PI: number
		static ONE_OVER_TWO_PI: number
		static PI: number
		static PI_OVER_FOUR: number
		static PI_OVER_SIX: number
		static PI_OVER_THREE: number
		static PI_OVER_TWO: number
		static RADIANS_PER_ARCSECOND: number
		static RADIANS_PER_DEGREE: number
		static SIXTY_FOUR_KILOBYTES: number
		static SOLAR_RADIUS: number
		static THREE_PI_OVER_TWO: number
		static TWO_PI: number


		//Methods
		static acosClamped(value? : number) : number
		static asinClamped(value? : number) : number
		static chordLength(angle? : number, radius? : number) : number
		static clamp(value? : number, min? : number, max? : number) : number
		static clampToLatitudeRange(angle? : number) : number
		static convertLongitudeRange(angle? : number) : number
		static cosh(value? : number) : number
		static equalsEpsilon(left? : number, right? : number, relativeEpsilon? : number, absoluteEpsilon? : number) : boolean
		static factorial(n? : number) : number
		static fromSNorm(value? : number, rangeMax? : number) : number
		static incrementWrap(n : number, maximumValue : number, minimumValue : number) : number
		static isPowerOfTwo(n? : number) : boolean
		static lerp(p? : number, q? : number, time? : number) : number
		static logBase(number? : number, base? : number) : number
		static mod(m? : number, n? : number) : number
		static negativePiToPi(angle? : number) : number
		static nextPowerOfTwo(n? : number) : number
		static nextRandomNumber() : number
		static randomBetween(min? : number, max? : number) : number
		static setRandomNumberSeed(seed? : number) : void
		static sign(value? : number) : number
		static signNotZero(value? : number) : number
		static sinh(value? : number) : number
		static toDegrees(radians? : number) : number
		static toRadians(degrees? : number) : number
		static toSNorm(value? : number, rangeMax? : number) : number
		static zeroToTwoPi(angle? : number) : number

	}
	export = Math

}
declare module 'cesium/Source/Core/Matrix2' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	class Matrix2 
	{
		constructor(column0Row0? : number, column1Row0? : number, column0Row1? : number, column1Row1? : number);
		//Members
		length: number
		static COLUMN0ROW0: number
		static COLUMN0ROW1: number
		static COLUMN1ROW0: number
		static COLUMN1ROW1: number
		static IDENTITY: Matrix2
		static packedLength: number
		static ZERO: Matrix2


		//Methods
		clone(result : Matrix2) : Matrix2
		equals(right : Matrix2) : boolean
		equalsEpsilon(right : Matrix2, epsilon? : number) : boolean
		toString() : string
		static abs(matrix? : Matrix2, result? : Matrix2) : Matrix2
		static add(left? : Matrix2, right? : Matrix2, result? : Matrix2) : Matrix2
		static clone(matrix? : Matrix2, result? : Matrix2) : Matrix2
		static equals(left : Matrix2, right : Matrix2) : boolean
		static equalsEpsilon(left : Matrix2, right : Matrix2, epsilon? : number) : boolean
		static fromArray(array? : Array<number>, startingIndex? : number, result? : Matrix2) : Matrix2
		static fromColumnMajorArray(values? : Array<number>, result? : Matrix2) : Matrix2
		static fromRotation(angle? : number, result? : Matrix2) : Matrix2
		static fromRowMajorArray(values? : Array<number>, result? : Matrix2) : Matrix2
		static fromScale(scale? : Cartesian2, result? : Matrix2) : Matrix2
		static fromUniformScale(scale? : number, result? : Matrix2) : Matrix2
		static getColumn(matrix? : Matrix2, index? : number, result? : Cartesian2) : Cartesian2
		static getElementIndex(row? : number, column? : number) : number
		static getMaximumScale(matrix? : Matrix2) : number
		static getRow(matrix? : Matrix2, index? : number, result? : Cartesian2) : Cartesian2
		static getScale(matrix? : Matrix2, result? : Cartesian2) : Cartesian2
		static multiply(left? : Matrix2, right? : Matrix2, result? : Matrix2) : Matrix2
		static multiplyByScalar(matrix? : Matrix2, scalar? : number, result? : Matrix2) : Matrix2
		static multiplyByScale(matrix? : Matrix2, scale? : Cartesian2, result? : Matrix2) : Matrix2
		static multiplyByVector(matrix? : Matrix2, cartesian? : Cartesian2, result? : Cartesian2) : Cartesian2
		static negate(matrix? : Matrix2, result? : Matrix2) : Matrix2
		static pack(value? : Matrix2, array? : Array<number>, startingIndex? : number) : Array<number>
		static setColumn(matrix? : Matrix2, index? : number, cartesian? : Cartesian2, result? : Cartesian2) : Matrix2
		static setRow(matrix? : Matrix2, index? : number, cartesian? : Cartesian2, result? : Matrix2) : Matrix2
		static subtract(left? : Matrix2, right? : Matrix2, result? : Matrix2) : Matrix2
		static toArray(matrix? : Matrix2, result? : Array<number>) : Array<number>
		static transpose(matrix? : Matrix2, result? : Matrix2) : Matrix2
		static unpack(array? : Array<number>, startingIndex? : number, result? : Matrix2) : Matrix2

	}
	export = Matrix2

}
declare module 'cesium/Source/Core/NearFarScalar' {
	class NearFarScalar 
	{
		constructor(near? : number, nearValue? : number, far? : number, farValue? : number);
		//Members
		static packedLength: number
		far: number
		farValue: number
		near: number
		nearValue: number


		//Methods
		static clone(nearFarScalar? : NearFarScalar, result? : NearFarScalar) : NearFarScalar
		static equals(left : NearFarScalar, right : NearFarScalar) : boolean
		static pack(value? : NearFarScalar, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : NearFarScalar) : NearFarScalar
		clone(result : NearFarScalar) : NearFarScalar
		equals(right : NearFarScalar) : boolean

	}
	export = NearFarScalar

}
declare module 'cesium/Source/Core/HASH_64228_OrthographicOffCenterFrustumOptions' {
	interface HASH_64228_OrthographicOffCenterFrustumOptions
	{
		left?: number;
		right?: number;
		top?: number;
		bottom?: number;
		near?: number;
		far?: number;
	}
	export = HASH_64228_OrthographicOffCenterFrustumOptions

}
declare module 'cesium/Source/Core/OrthographicOffCenterFrustum' {
	import HASH_64228_OrthographicOffCenterFrustumOptions = require('cesium/Source/Core/HASH_64228_OrthographicOffCenterFrustumOptions')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import CullingVolume = require('cesium/Source/Core/CullingVolume')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	class OrthographicOffCenterFrustum 
	{
		constructor(options? : HASH_64228_OrthographicOffCenterFrustumOptions);
		//Members
		bottom: number
		far: number
		left: number
		near: number
		projectionMatrix: Matrix4
		right: number
		top: number


		//Methods
		clone(result : OrthographicOffCenterFrustum) : OrthographicOffCenterFrustum
		computeCullingVolume(position? : Cartesian3, direction? : Cartesian3, up? : Cartesian3) : CullingVolume
		equals(other : OrthographicOffCenterFrustum) : boolean
		getPixelDimensions(drawingBufferWidth? : number, drawingBufferHeight? : number, distance? : number, result? : Cartesian2) : Cartesian2

	}
	export = OrthographicOffCenterFrustum

}
declare module 'cesium/Source/Core/Packable' {
	class Packable 
	{
		constructor();
		//Members
		static packedLength: number


		//Methods
		static pack(value? : any, array? : Array<number>, startingIndex? : number) : void
		static unpack(array? : Array<number>, startingIndex? : number, result? : any) : Object

	}
	export = Packable

}
declare module 'cesium/Source/Core/PackableForInterpolation' {
	class PackableForInterpolation 
	{
		constructor();
		//Members
		static packedInterpolationLength: number


		//Methods
		static convertPackedArrayForInterpolation(packedArray? : Array<number>, startingIndex? : number, lastIndex? : number, result? : Array<number>) : void
		static unpackInterpolationResult(array? : Array<number>, sourceArray? : Array<number>, startingIndex? : number, lastIndex? : number, result? : any) : Object

	}
	export = PackableForInterpolation

}
declare module 'cesium/Source/Core/HASH_64228_PerspectiveOffCenterFrustumOptions' {
	interface HASH_64228_PerspectiveOffCenterFrustumOptions
	{
		left?: number;
		right?: number;
		top?: number;
		bottom?: number;
		near?: number;
		far?: number;
	}
	export = HASH_64228_PerspectiveOffCenterFrustumOptions

}
declare module 'cesium/Source/Core/PerspectiveOffCenterFrustum' {
	import HASH_64228_PerspectiveOffCenterFrustumOptions = require('cesium/Source/Core/HASH_64228_PerspectiveOffCenterFrustumOptions')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import CullingVolume = require('cesium/Source/Core/CullingVolume')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	class PerspectiveOffCenterFrustum 
	{
		constructor(options? : HASH_64228_PerspectiveOffCenterFrustumOptions);
		//Members
		bottom: number
		far: number
		infiniteProjectionMatrix: Matrix4
		left: number
		near: number
		projectionMatrix: Matrix4
		right: number
		top: number


		//Methods
		clone(result : PerspectiveOffCenterFrustum) : PerspectiveOffCenterFrustum
		computeCullingVolume(position? : Cartesian3, direction? : Cartesian3, up? : Cartesian3) : CullingVolume
		equals(other : PerspectiveOffCenterFrustum) : boolean
		getPixelDimensions(drawingBufferWidth? : number, drawingBufferHeight? : number, distance? : number, result? : Cartesian2) : Cartesian2

	}
	export = PerspectiveOffCenterFrustum

}
declare module 'cesium/Source/Core/PinBuilder' {
	import Color = require('cesium/Source/Core/Color')
	class PinBuilder 
	{
		constructor();
		//Members


		//Methods
		fromColor(color? : Color, size? : number) : HTMLCanvasElement
		fromMakiIconId(id? : string, color? : Color, size? : number) : HTMLCanvasElement|Promise<HTMLCanvasElement>
		fromText(text? : string, color? : Color, size? : number) : HTMLCanvasElement
		fromUrl(url? : string, color? : Color, size? : number) : HTMLCanvasElement|Promise<HTMLCanvasElement>

	}
	export = PinBuilder

}
declare module 'cesium/Source/Core/PixelFormat' {
	class PixelFormat 
	{
		constructor();
		//Members
		static ALPHA: number
		static DEPTH_COMPONENT: number
		static DEPTH_STENCIL: number
		static LUMINANCE: number
		static LUMINANCE_ALPHA: number
		static RGB: number
		static RGB_DXT1: number
		static RGB_ETC1: number
		static RGB_PVRTC_2BPPV1: number
		static RGB_PVRTC_4BPPV1: number
		static RGBA: number
		static RGBA_DXT1: number
		static RGBA_DXT3: number
		static RGBA_DXT5: number
		static RGBA_PVRTC_2BPPV1: number
		static RGBA_PVRTC_4BPPV1: number


		//Methods

	}
	export = PixelFormat

}
declare module 'cesium/Source/Core/PolygonHierarchy' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class PolygonHierarchy 
	{
		constructor(positions? : Array<Cartesian3>, holes? : Array<PolygonHierarchy>);
		//Members
		holes: Array<PolygonHierarchy>
		positions: Array<Cartesian3>


		//Methods

	}
	export = PolygonHierarchy

}
declare module 'cesium/Source/Core/HASH_20578_PolygonGeometryOptions' {
	import PolygonHierarchy = require('cesium/Source/Core/PolygonHierarchy')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_20578_PolygonGeometryOptions
	{
		polygonHierarchy: PolygonHierarchy;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		stRotation?: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		perPositionHeight?: boolean;
		closeTop?: boolean;
		closeBottom?: boolean;
	}
	export = HASH_20578_PolygonGeometryOptions

}
declare module 'cesium/Source/Core/HASH_34325_fromPositionsOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_34325_fromPositionsOptions
	{
		positions: Array<Cartesian3>;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		stRotation?: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		perPositionHeight?: boolean;
		closeTop?: boolean;
		closeBottom?: boolean;
	}
	export = HASH_34325_fromPositionsOptions

}
declare module 'cesium/Source/Core/PolygonGeometry' {
	import HASH_20578_PolygonGeometryOptions = require('cesium/Source/Core/HASH_20578_PolygonGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	import HASH_34325_fromPositionsOptions = require('cesium/Source/Core/HASH_34325_fromPositionsOptions')
	class PolygonGeometry 
	{
		constructor(options? : HASH_20578_PolygonGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polygonGeometry? : PolygonGeometry) : Geometry|void
		static fromPositions(options : HASH_34325_fromPositionsOptions) : PolygonGeometry
		static pack(value? : PolygonGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : PolygonGeometry) : void

	}
	export = PolygonGeometry

}
declare module 'cesium/Source/Core/HASH_17624_PolygonOutlineGeometryOptions' {
	import PolygonHierarchy = require('cesium/Source/Core/PolygonHierarchy')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_17624_PolygonOutlineGeometryOptions
	{
		polygonHierarchy: PolygonHierarchy;
		height?: number;
		extrudedHeight?: number;
		vertexFormat?: VertexFormat;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		perPositionHeight?: boolean;
	}
	export = HASH_17624_PolygonOutlineGeometryOptions

}
declare module 'cesium/Source/Core/HASH_11633_fromPositionsOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_11633_fromPositionsOptions
	{
		positions: Array<Cartesian3>;
		height?: number;
		extrudedHeight?: number;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		perPositionHeight?: boolean;
	}
	export = HASH_11633_fromPositionsOptions

}
declare module 'cesium/Source/Core/PolygonOutlineGeometry' {
	import HASH_17624_PolygonOutlineGeometryOptions = require('cesium/Source/Core/HASH_17624_PolygonOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	import HASH_11633_fromPositionsOptions = require('cesium/Source/Core/HASH_11633_fromPositionsOptions')
	class PolygonOutlineGeometry 
	{
		constructor(options? : HASH_17624_PolygonOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polygonGeometry? : PolygonOutlineGeometry) : Geometry|void
		static fromPositions(options : HASH_11633_fromPositionsOptions) : PolygonOutlineGeometry
		static pack(value? : PolygonOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : PolygonOutlineGeometry) : PolygonOutlineGeometry

	}
	export = PolygonOutlineGeometry

}
declare module 'cesium/Source/Core/HASH_90456_PolylineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Color = require('cesium/Source/Core/Color')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_90456_PolylineGeometryOptions
	{
		positions: Array<Cartesian3>;
		width?: number;
		colors?: Array<Color>;
		colorsPerVertex?: boolean;
		followSurface?: boolean;
		granularity?: number;
		vertexFormat?: VertexFormat;
		ellipsoid?: Ellipsoid;
	}
	export = HASH_90456_PolylineGeometryOptions

}
declare module 'cesium/Source/Core/PolylineGeometry' {
	import HASH_90456_PolylineGeometryOptions = require('cesium/Source/Core/HASH_90456_PolylineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class PolylineGeometry 
	{
		constructor(options? : HASH_90456_PolylineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polylineGeometry? : PolylineGeometry) : Geometry|void
		static pack(value? : PolylineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : PolylineGeometry) : PolylineGeometry

	}
	export = PolylineGeometry

}
declare module 'cesium/Source/Core/HASH_47549_PolylineVolumeGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import CornerType = require('cesium/Source/Core/CornerType')
	interface HASH_47549_PolylineVolumeGeometryOptions
	{
		polylinePositions: Array<Cartesian3>;
		shapePositions: Array<Cartesian2>;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		vertexFormat?: VertexFormat;
		cornerType?: CornerType;
	}
	export = HASH_47549_PolylineVolumeGeometryOptions

}
declare module 'cesium/Source/Core/PolylineVolumeGeometry' {
	import HASH_47549_PolylineVolumeGeometryOptions = require('cesium/Source/Core/HASH_47549_PolylineVolumeGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class PolylineVolumeGeometry 
	{
		constructor(options? : HASH_47549_PolylineVolumeGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polylineVolumeGeometry? : PolylineVolumeGeometry) : Geometry|void
		static pack(value? : PolylineVolumeGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : PolylineVolumeGeometry) : PolylineVolumeGeometry

	}
	export = PolylineVolumeGeometry

}
declare module 'cesium/Source/Core/HASH_77826_PolylineVolumeOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import CornerType = require('cesium/Source/Core/CornerType')
	interface HASH_77826_PolylineVolumeOutlineGeometryOptions
	{
		polylinePositions: Array<Cartesian3>;
		shapePositions: Array<Cartesian2>;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		cornerType?: CornerType;
	}
	export = HASH_77826_PolylineVolumeOutlineGeometryOptions

}
declare module 'cesium/Source/Core/PolylineVolumeOutlineGeometry' {
	import HASH_77826_PolylineVolumeOutlineGeometryOptions = require('cesium/Source/Core/HASH_77826_PolylineVolumeOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class PolylineVolumeOutlineGeometry 
	{
		constructor(options? : HASH_77826_PolylineVolumeOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(polylineVolumeOutlineGeometry? : PolylineVolumeOutlineGeometry) : Geometry|void
		static pack(value? : PolylineVolumeOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : PolylineVolumeOutlineGeometry) : PolylineVolumeOutlineGeometry

	}
	export = PolylineVolumeOutlineGeometry

}
declare module 'cesium/Source/Core/QuadraticRealPolynomial' {
	class QuadraticRealPolynomial 
	{
		constructor();
		//Members


		//Methods
		static computeDiscriminant(a? : number, b? : number, c? : number) : number
		static computeRealRoots(a? : number, b? : number, c? : number) : Array<number>

	}
	export = QuadraticRealPolynomial

}
declare module 'cesium/Source/Core/HASH_10829_QuantizedMeshTerrainDataOptions' {
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import OrientedBoundingBox = require('cesium/Source/Core/OrientedBoundingBox')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_10829_QuantizedMeshTerrainDataOptions
	{
		quantizedVertices: Uint16Array;
		indices: Uint16Array|Uint32Array;
		minimumHeight: number;
		maximumHeight: number;
		boundingSphere: BoundingSphere;
		orientedBoundingBox?: OrientedBoundingBox;
		horizonOcclusionPoint: Cartesian3;
		westIndices: Array<number>;
		southIndices: Array<number>;
		eastIndices: Array<number>;
		northIndices: Array<number>;
		westSkirtHeight: number;
		southSkirtHeight: number;
		eastSkirtHeight: number;
		northSkirtHeight: number;
		childTileMask?: number;
		createdByUpsampling?: boolean;
		encodedNormals?: Uint8Array;
		waterMask?: Uint8Array;
		credits?: Array<Credit>;
	}
	export = HASH_10829_QuantizedMeshTerrainDataOptions

}
declare module 'cesium/Source/Core/QuantizedMeshTerrainData' {
	import HASH_10829_QuantizedMeshTerrainDataOptions = require('cesium/Source/Core/HASH_10829_QuantizedMeshTerrainDataOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	class QuantizedMeshTerrainData 
	{
		constructor(options? : HASH_10829_QuantizedMeshTerrainDataOptions);
		//Members
		credits: Array<Credit>
		waterMask: Uint8Array|HTMLImageElement|HTMLCanvasElement


		//Methods
		interpolateHeight(rectangle? : Rectangle, longitude? : number, latitude? : number) : number
		isChildAvailable(thisX? : number, thisY? : number, childX? : number, childY? : number) : boolean
		upsample(tilingScheme? : TilingScheme, thisX? : number, thisY? : number, thisLevel? : number, descendantX? : number, descendantY? : number, descendantLevel? : number) : Promise<QuantizedMeshTerrainData>|void
		wasCreatedByUpsampling() : boolean

	}
	export = QuantizedMeshTerrainData

}
declare module 'cesium/Source/Core/QuarticRealPolynomial' {
	class QuarticRealPolynomial 
	{
		constructor();
		//Members


		//Methods
		static computeDiscriminant(a? : number, b? : number, c? : number, d? : number, e? : number) : number
		static computeRealRoots(a? : number, b? : number, c? : number, d? : number, e? : number) : Array<number>

	}
	export = QuarticRealPolynomial

}
declare module 'cesium/Source/Core/HASH_10384_QuaternionSplineOptions' {
	import Quaternion = require('cesium/Source/Core/Quaternion')
	interface HASH_10384_QuaternionSplineOptions
	{
		times: Array<number>;
		points: Array<Quaternion>;
		firstInnerQuadrangle?: Quaternion;
		lastInnerQuadrangle?: Quaternion;
	}
	export = HASH_10384_QuaternionSplineOptions

}
declare module 'cesium/Source/Core/QuaternionSpline' {
	import HASH_10384_QuaternionSplineOptions = require('cesium/Source/Core/HASH_10384_QuaternionSplineOptions')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	class QuaternionSpline 
	{
		constructor(options? : HASH_10384_QuaternionSplineOptions);
		//Members
		innerQuadrangles: Array<Quaternion>
		points: Array<Quaternion>
		times: Array<number>


		//Methods
		evaluate(time? : number, result? : Quaternion) : Quaternion
		findTimeInterval(time? : number) : number

	}
	export = QuaternionSpline

}
declare module 'cesium/Source/Core/Queue' {
	class Queue 
	{
		constructor();
		//Members
		length: number


		//Methods
		clear() : void
		contains(item? : any) : void
		dequeue() : Object
		enqueue(item? : any) : void
		peek() : Object
		sort(compareFunction? : any) : void

	}
	export = Queue

}
declare module 'cesium/Source/Core/HASH_42066_RectangleGeometryOptions' {
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_42066_RectangleGeometryOptions
	{
		rectangle: Rectangle;
		vertexFormat?: VertexFormat;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		rotation?: number;
		stRotation?: number;
		extrudedHeight?: number;
		closeTop?: boolean;
		closeBottom?: boolean;
	}
	export = HASH_42066_RectangleGeometryOptions

}
declare module 'cesium/Source/Core/RectangleGeometry' {
	import HASH_42066_RectangleGeometryOptions = require('cesium/Source/Core/HASH_42066_RectangleGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class RectangleGeometry 
	{
		constructor(options? : HASH_42066_RectangleGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(rectangleGeometry? : RectangleGeometry) : Geometry|void
		static pack(value? : RectangleGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : RectangleGeometry) : RectangleGeometry

	}
	export = RectangleGeometry

}
declare module 'cesium/Source/Core/HASH_20906_RectangleOutlineGeometryOptions' {
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_20906_RectangleOutlineGeometryOptions
	{
		rectangle: Rectangle;
		ellipsoid?: Ellipsoid;
		granularity?: number;
		height?: number;
		rotation?: number;
		extrudedHeight?: number;
	}
	export = HASH_20906_RectangleOutlineGeometryOptions

}
declare module 'cesium/Source/Core/RectangleOutlineGeometry' {
	import HASH_20906_RectangleOutlineGeometryOptions = require('cesium/Source/Core/HASH_20906_RectangleOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class RectangleOutlineGeometry 
	{
		constructor(options? : HASH_20906_RectangleOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(rectangleGeometry? : RectangleOutlineGeometry) : Geometry|void
		static pack(value? : RectangleOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : RectangleOutlineGeometry) : RectangleOutlineGeometry

	}
	export = RectangleOutlineGeometry

}
declare module 'cesium/Source/Core/ReferenceFrame' {
	class ReferenceFrame 
	{
		constructor();
		//Members
		static FIXED: number
		static INERTIAL: number


		//Methods

	}
	export = ReferenceFrame

}
declare module 'cesium/Source/Core/RequestErrorEvent' {
	class RequestErrorEvent 
	{
		constructor(statusCode? : number, response? : any, responseHeaders? : string|any);
		//Members
		response: Object
		responseHeaders: Object
		statusCode: number


		//Methods
		toString() : string

	}
	export = RequestErrorEvent

}
declare module 'cesium/Source/Core/RuntimeError' {
	class RuntimeError 
	{
		constructor(message? : string);
		//Members
		message: string
		name: string
		stack: string


		//Methods

	}
	export = RuntimeError

}
declare module 'cesium/Source/Core/ScreenSpaceEventHandler' {
	class ScreenSpaceEventHandler 
	{
		constructor(element? : HTMLCanvasElement);
		//Members
		static mouseEmulationIgnoreMilliseconds: number


		//Methods
		destroy() : void
		getInputAction(type? : number, modifier? : number) : void
		isDestroyed() : boolean
		removeInputAction(type? : number, modifier? : number) : void
		setInputAction(action? : (()=>void), type? : number, modifier? : number) : void

	}
	export = ScreenSpaceEventHandler

}
declare module 'cesium/Source/Core/ScreenSpaceEventType' {
	class ScreenSpaceEventType 
	{
		constructor();
		//Members
		static LEFT_CLICK: number
		static LEFT_DOUBLE_CLICK: number
		static LEFT_DOWN: number
		static LEFT_UP: number
		static MIDDLE_CLICK: number
		static MIDDLE_DOWN: number
		static MIDDLE_UP: number
		static MOUSE_MOVE: number
		static PINCH_END: number
		static PINCH_MOVE: number
		static PINCH_START: number
		static RIGHT_CLICK: number
		static RIGHT_DOWN: number
		static RIGHT_UP: number
		static WHEEL: number


		//Methods

	}
	export = ScreenSpaceEventType

}
declare module 'cesium/Source/Core/ShowGeometryInstanceAttribute' {
	import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	class ShowGeometryInstanceAttribute 
	{
		constructor(show? : boolean);
		//Members
		componentDatatype: ComponentDatatype
		componentsPerAttribute: number
		normalize: boolean
		value: Uint8Array


		//Methods
		static toValue(show? : boolean, result? : Uint8Array) : Uint8Array

	}
	export = ShowGeometryInstanceAttribute

}
declare module 'cesium/Source/Core/Simon1994PlanetaryPositions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class Simon1994PlanetaryPositions 
	{
		constructor();
		//Members


		//Methods
		static computeMoonPositionInEarthInertialFrame(julianDate : JulianDate, result : Cartesian3) : Cartesian3
		static computeSunPositionInEarthInertialFrame(julianDate : JulianDate, result : Cartesian3) : Cartesian3

	}
	export = Simon1994PlanetaryPositions

}
declare module 'cesium/Source/Core/HASH_19123_SimplePolylineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Color = require('cesium/Source/Core/Color')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_19123_SimplePolylineGeometryOptions
	{
		positions: Array<Cartesian3>;
		colors?: Array<Color>;
		colorsPerVertex?: boolean;
		followSurface?: boolean;
		granularity?: number;
		ellipsoid?: Ellipsoid;
	}
	export = HASH_19123_SimplePolylineGeometryOptions

}
declare module 'cesium/Source/Core/SimplePolylineGeometry' {
	import HASH_19123_SimplePolylineGeometryOptions = require('cesium/Source/Core/HASH_19123_SimplePolylineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class SimplePolylineGeometry 
	{
		constructor(options? : HASH_19123_SimplePolylineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(simplePolylineGeometry? : SimplePolylineGeometry) : Geometry
		static pack(value? : SimplePolylineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : SimplePolylineGeometry) : SimplePolylineGeometry

	}
	export = SimplePolylineGeometry

}
declare module 'cesium/Source/Core/HASH_12545_SphereGeometryOptions' {
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_12545_SphereGeometryOptions
	{
		radius?: number;
		stackPartitions?: number;
		slicePartitions?: number;
		vertexFormat?: VertexFormat;
	}
	export = HASH_12545_SphereGeometryOptions

}
declare module 'cesium/Source/Core/SphereGeometry' {
	import HASH_12545_SphereGeometryOptions = require('cesium/Source/Core/HASH_12545_SphereGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class SphereGeometry 
	{
		constructor(options? : HASH_12545_SphereGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(sphereGeometry? : SphereGeometry) : Geometry
		static pack(value? : SphereGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : SphereGeometry) : SphereGeometry

	}
	export = SphereGeometry

}
declare module 'cesium/Source/Core/HASH_34008_SphereOutlineGeometryOptions' {
	interface HASH_34008_SphereOutlineGeometryOptions
	{
		radius?: number;
		stackPartitions?: number;
		slicePartitions?: number;
		subdivisions?: number;
	}
	export = HASH_34008_SphereOutlineGeometryOptions

}
declare module 'cesium/Source/Core/SphereOutlineGeometry' {
	import HASH_34008_SphereOutlineGeometryOptions = require('cesium/Source/Core/HASH_34008_SphereOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	class SphereOutlineGeometry 
	{
		constructor(options? : HASH_34008_SphereOutlineGeometryOptions);
		//Members
		static packedLength: number


		//Methods
		static createGeometry(sphereGeometry? : SphereOutlineGeometry) : Geometry
		static pack(value? : SphereOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : SphereOutlineGeometry) : SphereOutlineGeometry

	}
	export = SphereOutlineGeometry

}
declare module 'cesium/Source/Core/Spline' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	class Spline 
	{
		constructor();
		//Members
		points: Array<Cartesian3>|Array<Quaternion>
		times: Array<number>


		//Methods
		evaluate(time? : number, result? : Cartesian3|Quaternion) : Cartesian3|Quaternion
		findTimeInterval(time? : number, startIndex? : number) : number

	}
	export = Spline

}
declare module 'cesium/Source/Core/TaskProcessor' {
	class TaskProcessor 
	{
		constructor(workerName : string, maximumActiveTasks? : number);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		scheduleTask(parameters? : any, transferableObjects? : Array<any>) : Promise<Object>|void

	}
	export = TaskProcessor

}
declare module 'cesium/Source/Core/TileProviderError' {
	import ImageryProvider = require('cesium/Source/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import Event = require('cesium/Source/Core/Event')
	class TileProviderError 
	{
		constructor(provider : ImageryProvider|TerrainProvider, message : string, x? : number, y? : number, level? : number, timesRetried? : number, error? : Error);
		//Members
		error: Error
		level: number
		message: string
		provider: ImageryProvider|TerrainProvider
		retry: boolean
		timesRetried: number
		x: number
		y: number


		//Methods
		static handleError(previousError? : TileProviderError, provider? : ImageryProvider|TerrainProvider, event? : Event, message? : string, x? : number, y? : number, level? : number, retryFunction? : any, errorDetails? : Error) : TileProviderError
		static handleSuccess(previousError? : TileProviderError) : void

	}
	export = TileProviderError

}
declare module 'cesium/Source/Core/HASH_11464_TimeIntervalOptions' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	interface HASH_11464_TimeIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = HASH_11464_TimeIntervalOptions

}
declare module 'cesium/Source/Core/HASH_18417_fromIso8601Options' {
	interface HASH_18417_fromIso8601Options
	{
		iso8601: string;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		data?: Object;
	}
	export = HASH_18417_fromIso8601Options

}
declare module 'cesium/Source/Core/TimeInterval' {
	import HASH_11464_TimeIntervalOptions = require('cesium/Source/Core/HASH_11464_TimeIntervalOptions')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import HASH_18417_fromIso8601Options = require('cesium/Source/Core/HASH_18417_fromIso8601Options')
	class TimeInterval 
	{
		constructor(options? : HASH_11464_TimeIntervalOptions);
		//Members
		static EMPTY: TimeInterval
		data: Object
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		start: JulianDate
		stop: JulianDate


		//Methods
		static clone(timeInterval : TimeInterval, result : TimeInterval) : TimeInterval
		static contains(timeInterval? : TimeInterval, julianDate? : JulianDate) : boolean
		static equals(left : TimeInterval, right : TimeInterval, dataComparer : any) : boolean
		static equalsEpsilon(left : TimeInterval, right : TimeInterval, epsilon? : number, dataComparer? : any) : boolean
		static fromIso8601(options : HASH_18417_fromIso8601Options, result : TimeInterval) : TimeInterval
		static intersect(left? : TimeInterval, right? : TimeInterval, result? : TimeInterval, mergeCallback? : any) : TimeInterval
		static toIso8601(timeInterval? : TimeInterval, precision? : number) : string
		clone(result : TimeInterval) : TimeInterval
		equals(right : TimeInterval, dataComparer : any) : boolean
		equalsEpsilon(right : TimeInterval, epsilon? : number, dataComparer? : any) : boolean
		toString() : string

	}
	export = TimeInterval

}
declare module 'cesium/Source/Core/HASH_04394_fromIso8601Options' {
	interface HASH_04394_fromIso8601Options
	{
		iso8601: string;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		leadingInterval?: boolean;
		trailingInterval?: boolean;
		dataCallback?: (()=>void);
	}
	export = HASH_04394_fromIso8601Options

}
declare module 'cesium/Source/Core/HASH_87132_fromIso8601DateArrayOptions' {
	interface HASH_87132_fromIso8601DateArrayOptions
	{
		iso8601Dates: Array<string>;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		leadingInterval?: boolean;
		trailingInterval?: boolean;
		dataCallback?: (()=>void);
	}
	export = HASH_87132_fromIso8601DateArrayOptions

}
declare module 'cesium/Source/Core/HASH_64199_fromIso8601DurationArrayOptions' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	interface HASH_64199_fromIso8601DurationArrayOptions
	{
		epoch: JulianDate;
		iso8601Durations: string;
		relativeToPrevious?: boolean;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		leadingInterval?: boolean;
		trailingInterval?: boolean;
		dataCallback?: (()=>void);
	}
	export = HASH_64199_fromIso8601DurationArrayOptions

}
declare module 'cesium/Source/Core/HASH_43108_fromJulianDateArrayOptions' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	interface HASH_43108_fromJulianDateArrayOptions
	{
		julianDates: Array<JulianDate>;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
		leadingInterval?: boolean;
		trailingInterval?: boolean;
		dataCallback?: (()=>void);
	}
	export = HASH_43108_fromJulianDateArrayOptions

}
declare module 'cesium/Source/Core/HASH_20707_findIntervalOptions' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	interface HASH_20707_findIntervalOptions
	{
		start?: JulianDate;
		stop?: JulianDate;
		isStartIncluded?: boolean;
		isStopIncluded?: boolean;
	}
	export = HASH_20707_findIntervalOptions

}
declare module 'cesium/Source/Core/TimeIntervalCollection' {
	import TimeInterval = require('cesium/Source/Core/TimeInterval')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import HASH_04394_fromIso8601Options = require('cesium/Source/Core/HASH_04394_fromIso8601Options')
	import HASH_87132_fromIso8601DateArrayOptions = require('cesium/Source/Core/HASH_87132_fromIso8601DateArrayOptions')
	import HASH_64199_fromIso8601DurationArrayOptions = require('cesium/Source/Core/HASH_64199_fromIso8601DurationArrayOptions')
	import HASH_43108_fromJulianDateArrayOptions = require('cesium/Source/Core/HASH_43108_fromJulianDateArrayOptions')
	import HASH_20707_findIntervalOptions = require('cesium/Source/Core/HASH_20707_findIntervalOptions')
	class TimeIntervalCollection 
	{
		constructor(intervals? : Array<TimeInterval>);
		//Members
		changedEvent: Event
		isEmpty: boolean
		isStartIncluded: boolean
		isStopIncluded: boolean
		length: number
		start: JulianDate
		stop: JulianDate


		//Methods
		static fromIso8601(options : HASH_04394_fromIso8601Options, result : TimeIntervalCollection) : TimeIntervalCollection
		static fromIso8601DateArray(options : HASH_87132_fromIso8601DateArrayOptions, result : TimeIntervalCollection) : TimeIntervalCollection
		static fromIso8601DurationArray(options : HASH_64199_fromIso8601DurationArrayOptions, result : TimeIntervalCollection) : TimeIntervalCollection
		static fromJulianDateArray(options : HASH_43108_fromJulianDateArrayOptions, result : TimeIntervalCollection) : TimeIntervalCollection
		addInterval(interval? : TimeInterval, dataComparer? : any) : void
		contains(julianDate? : JulianDate) : boolean
		equals(right : TimeIntervalCollection, dataComparer : any) : boolean
		findDataForIntervalContainingDate(date? : JulianDate) : Object
		findInterval(options : HASH_20707_findIntervalOptions) : TimeInterval
		findIntervalContainingDate(date? : JulianDate) : TimeInterval|void
		get(index? : number) : TimeInterval
		indexOf(date? : JulianDate) : number
		intersect(other? : TimeIntervalCollection, dataComparer? : any, mergeCallback? : any) : TimeIntervalCollection
		removeAll() : void
		removeInterval(interval? : TimeInterval) : void

	}
	export = TimeIntervalCollection

}
declare module 'cesium/Source/Core/Transforms' {
	import Matrix3 = require('cesium/Source/Core/Matrix3')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	import HeadingPitchRoll = require('cesium/Source/Core/HeadingPitchRoll')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import TimeInterval = require('cesium/Source/Core/TimeInterval')
	class Transforms 
	{
		constructor();
		//Members


		//Methods
		static computeFixedToIcrfMatrix(date? : JulianDate, result? : Matrix3) : Matrix3
		static computeIcrfToFixedMatrix(date? : JulianDate, result? : Matrix3) : Matrix3
		static computeTemeToPseudoFixedMatrix(date? : JulianDate, result? : Matrix3) : Matrix3
		static eastNorthUpToFixedFrame(origin? : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static headingPitchRollQuaternion(origin? : Cartesian3, headingPitchRoll? : HeadingPitchRoll, ellipsoid? : Ellipsoid, fixedFrameTransform? : any, result? : Quaternion) : Quaternion
		static headingPitchRollToFixedFrame(origin? : Cartesian3, headingPitchRoll? : HeadingPitchRoll, ellipsoid? : Ellipsoid, fixedFrameTransform? : any, result? : Matrix4) : Matrix4
		static localFrameToFixedFrameGenerator(firstAxis? : string, secondAxis? : string) : any
		static northEastDownToFixedFrame(origin? : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static northUpEastToFixedFrame(origin? : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static northWestUpToFixedFrame(origin? : Cartesian3, ellipsoid? : Ellipsoid, result? : Matrix4) : Matrix4
		static pointToWindowCoordinates(modelViewProjectionMatrix? : Matrix4, viewportTransformation? : Matrix4, point? : Cartesian3, result? : Cartesian2) : Cartesian2
		static preloadIcrfFixed(timeInterval? : TimeInterval) : Promise<void>

	}
	export = Transforms

}
declare module 'cesium/Source/Core/TridiagonalSystemSolver' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class TridiagonalSystemSolver 
	{
		constructor();
		//Members


		//Methods
		static solve(diagonal? : Array<number>, lower? : Array<number>, upper? : Array<number>, right? : Array<Cartesian3>) : Array<Cartesian3>

	}
	export = TridiagonalSystemSolver

}
declare module 'cesium/Source/Core/TrustedServers' {
	class TrustedServers 
	{
		constructor();
		//Members


		//Methods
		static add(host? : string, port? : number) : void
		static clear() : void
		static contains(url? : string) : boolean
		static remove(host? : string, port? : number) : void

	}
	export = TrustedServers

}
declare module 'cesium/Source/Core/HASH_83822_VRTheWorldTerrainProviderOptions' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_83822_VRTheWorldTerrainProviderOptions
	{
		url: string;
		proxy?: Object;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = HASH_83822_VRTheWorldTerrainProviderOptions

}
declare module 'cesium/Source/Core/VRTheWorldTerrainProvider' {
	import HASH_83822_VRTheWorldTerrainProviderOptions = require('cesium/Source/Core/HASH_83822_VRTheWorldTerrainProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import GeographicTilingScheme = require('cesium/Source/Core/GeographicTilingScheme')
	import TerrainData = require('cesium/Source/Core/TerrainData')
	import Request = require('cesium/Source/Core/Request')
	class VRTheWorldTerrainProvider 
	{
		constructor(options? : HASH_83822_VRTheWorldTerrainProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasVertexNormals: boolean
		hasWaterMask: boolean
		ready: boolean
		readyPromise: Promise<boolean>
		tilingScheme: GeographicTilingScheme


		//Methods
		getLevelMaximumGeometricError(level? : number) : number
		getTileDataAvailable(x? : number, y? : number, level? : number) : boolean
		requestTileGeometry(x? : number, y? : number, level? : number, request? : Request) : Promise<TerrainData>|void

	}
	export = VRTheWorldTerrainProvider

}
declare module 'cesium/Source/Core/HASH_50591_VideoSynchronizerOptions' {
	import Clock = require('cesium/Source/Core/Clock')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	interface HASH_50591_VideoSynchronizerOptions
	{
		clock?: Clock;
		element?: HTMLVideoElement;
		epoch?: JulianDate;
		tolerance?: number;
	}
	export = HASH_50591_VideoSynchronizerOptions

}
declare module 'cesium/Source/Core/VideoSynchronizer' {
	import HASH_50591_VideoSynchronizerOptions = require('cesium/Source/Core/HASH_50591_VideoSynchronizerOptions')
	import Clock = require('cesium/Source/Core/Clock')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class VideoSynchronizer 
	{
		constructor(options? : HASH_50591_VideoSynchronizerOptions);
		//Members
		clock: Clock
		element: HTMLVideoElement
		epoch: JulianDate
		tolerance: number


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = VideoSynchronizer

}
declare module 'cesium/Source/Core/Visibility' {
	class Visibility 
	{
		constructor();
		//Members
		static FULL: number
		static NONE: number
		static PARTIAL: number


		//Methods

	}
	export = Visibility

}
declare module 'cesium/Source/Core/HASH_19570_WallGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_19570_WallGeometryOptions
	{
		positions: Array<Cartesian3>;
		granularity?: number;
		maximumHeights?: Array<number>;
		minimumHeights?: Array<number>;
		ellipsoid?: Ellipsoid;
		vertexFormat?: VertexFormat;
	}
	export = HASH_19570_WallGeometryOptions

}
declare module 'cesium/Source/Core/HASH_38943_fromConstantHeightsOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	interface HASH_38943_fromConstantHeightsOptions
	{
		positions: Array<Cartesian3>;
		maximumHeight?: number;
		minimumHeight?: number;
		ellipsoid?: Ellipsoid;
		vertexFormat?: VertexFormat;
	}
	export = HASH_38943_fromConstantHeightsOptions

}
declare module 'cesium/Source/Core/WallGeometry' {
	import HASH_19570_WallGeometryOptions = require('cesium/Source/Core/HASH_19570_WallGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	import HASH_38943_fromConstantHeightsOptions = require('cesium/Source/Core/HASH_38943_fromConstantHeightsOptions')
	class WallGeometry 
	{
		constructor(options? : HASH_19570_WallGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(wallGeometry? : WallGeometry) : Geometry|void
		static fromConstantHeights(options : HASH_38943_fromConstantHeightsOptions) : WallGeometry
		static pack(value? : WallGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : WallGeometry) : WallGeometry

	}
	export = WallGeometry

}
declare module 'cesium/Source/Core/HASH_18210_WallOutlineGeometryOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_18210_WallOutlineGeometryOptions
	{
		positions: Array<Cartesian3>;
		granularity?: number;
		maximumHeights?: Array<number>;
		minimumHeights?: Array<number>;
		ellipsoid?: Ellipsoid;
	}
	export = HASH_18210_WallOutlineGeometryOptions

}
declare module 'cesium/Source/Core/HASH_06081_fromConstantHeightsOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_06081_fromConstantHeightsOptions
	{
		positions: Array<Cartesian3>;
		maximumHeight?: number;
		minimumHeight?: number;
		ellipsoid?: Ellipsoid;
	}
	export = HASH_06081_fromConstantHeightsOptions

}
declare module 'cesium/Source/Core/WallOutlineGeometry' {
	import HASH_18210_WallOutlineGeometryOptions = require('cesium/Source/Core/HASH_18210_WallOutlineGeometryOptions')
	import Geometry = require('cesium/Source/Core/Geometry')
	import HASH_06081_fromConstantHeightsOptions = require('cesium/Source/Core/HASH_06081_fromConstantHeightsOptions')
	class WallOutlineGeometry 
	{
		constructor(options? : HASH_18210_WallOutlineGeometryOptions);
		//Members
		packedLength: number


		//Methods
		static createGeometry(wallGeometry? : WallOutlineGeometry) : Geometry|void
		static fromConstantHeights(options : HASH_06081_fromConstantHeightsOptions) : WallOutlineGeometry
		static pack(value? : WallOutlineGeometry, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : WallOutlineGeometry) : WallOutlineGeometry

	}
	export = WallOutlineGeometry

}
declare module 'cesium/Source/Core/WebGLConstants' {
	class WebGLConstants 
	{
		constructor();
		//Members


		//Methods

	}
	export = WebGLConstants

}
declare module 'cesium/Source/Core/WebMercatorProjection' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class WebMercatorProjection 
	{
		constructor(ellipsoid? : Ellipsoid);
		//Members
		static MaximumLatitude: number
		ellipsoid: Ellipsoid


		//Methods
		static geodeticLatitudeToMercatorAngle(latitude? : number) : number
		static mercatorAngleToGeodeticLatitude(mercatorAngle? : number) : number
		project(cartographic? : Cartographic, result? : Cartesian3) : Cartesian3
		unproject(cartesian? : Cartesian3, result? : Cartographic) : Cartographic

	}
	export = WebMercatorProjection

}
declare module 'cesium/Source/Core/HASH_25154_WebMercatorTilingSchemeOptions' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	interface HASH_25154_WebMercatorTilingSchemeOptions
	{
		ellipsoid?: Ellipsoid;
		numberOfLevelZeroTilesX?: number;
		numberOfLevelZeroTilesY?: number;
		rectangleSouthwestInMeters?: Cartesian2;
		rectangleNortheastInMeters?: Cartesian2;
	}
	export = HASH_25154_WebMercatorTilingSchemeOptions

}
declare module 'cesium/Source/Core/WebMercatorTilingScheme' {
	import HASH_25154_WebMercatorTilingSchemeOptions = require('cesium/Source/Core/HASH_25154_WebMercatorTilingSchemeOptions')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import MapProjection = require('cesium/Source/Core/MapProjection')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	class WebMercatorTilingScheme 
	{
		constructor(options? : HASH_25154_WebMercatorTilingSchemeOptions);
		//Members
		ellipsoid: Ellipsoid
		projection: MapProjection
		rectangle: Rectangle


		//Methods
		getNumberOfXTilesAtLevel(level? : number) : number
		getNumberOfYTilesAtLevel(level? : number) : number
		positionToTileXY(position? : Cartographic, level? : number, result? : Cartesian2) : Cartesian2
		rectangleToNativeRectangle(rectangle? : Rectangle, result? : Rectangle) : Rectangle
		tileXYToNativeRectangle(x? : number, y? : number, level? : number, result? : any) : Rectangle
		tileXYToRectangle(x? : number, y? : number, level? : number, result? : any) : Rectangle

	}
	export = WebMercatorTilingScheme

}
declare module 'cesium/Source/Core/HASH_17837_WeightSplineOptions' {
	interface HASH_17837_WeightSplineOptions
	{
		times: Array<number>;
		weights: Array<number>;
	}
	export = HASH_17837_WeightSplineOptions

}
declare module 'cesium/Source/Core/WeightSpline' {
	import HASH_17837_WeightSplineOptions = require('cesium/Source/Core/HASH_17837_WeightSplineOptions')
	class WeightSpline 
	{
		constructor(options : HASH_17837_WeightSplineOptions);
		//Members
		times: Array<number>
		weights: Array<number>


		//Methods
		evaluate(time? : number, result? : Array<number>) : Array<number>
		findTimeInterval(time? : number) : number

	}
	export = WeightSpline

}
declare module 'cesium/Source/Core/WindingOrder' {
	class WindingOrder 
	{
		constructor();
		//Members
		static CLOCKWISE: number
		static COUNTER_CLOCKWISE: number


		//Methods

	}
	export = WindingOrder

}
declare module 'cesium/Source/Core/barycentricCoordinates' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	function barycentricCoordinates(point : Cartesian2|Cartesian3, p0 : Cartesian2|Cartesian3, p1 : Cartesian2|Cartesian3, p2 : Cartesian2|Cartesian3, result? : Cartesian3) : Cartesian3;
	export = barycentricCoordinates

}
declare module 'cesium/Source/Core/binarySearch' {
	function binarySearch(array : Array<any>, itemToFind : any, comparator : any) : number;
	export = binarySearch

}
declare module 'cesium/Source/Core/cancelAnimationFrame' {
	function cancelAnimationFrame(requestID : number) : void;
	export = cancelAnimationFrame

}
declare module 'cesium/Source/Core/clone' {
	function clone(object : any, deep? : boolean) : Object;
	export = clone

}
declare module 'cesium/Source/Core/combine' {
	function combine(object1? : any, object2? : any, deep? : boolean) : Object;
	export = combine

}
declare module 'cesium/Source/Core/createGuid' {
	function createGuid() : string;
	export = createGuid

}
declare module 'cesium/Source/Core/defaultValue' {
	function defaultValue<T>(a,b:T) : T;
	export = defaultValue

}
declare module 'cesium/Source/Core/defined' {
	function defined(value : any) : boolean;
	export = defined

}
declare module 'cesium/Source/Core/destroyObject' {
	function destroyObject(object : any, message? : string) : void;
	export = destroyObject

}
declare module 'cesium/Source/Core/formatError' {
	function formatError(object : any) : string;
	export = formatError

}
declare module 'cesium/Source/Core/getAbsoluteUri' {
	function getAbsoluteUri(relative : string, base? : string) : string;
	export = getAbsoluteUri

}
declare module 'cesium/Source/Core/getBaseUri' {
	function getBaseUri(uri : string, includeQuery? : boolean) : string;
	export = getBaseUri

}
declare module 'cesium/Source/Core/getExtensionFromUri' {
	function getExtensionFromUri(uri : string) : string;
	export = getExtensionFromUri

}
declare module 'cesium/Source/Core/getFilenameFromUri' {
	function getFilenameFromUri(uri : string) : string;
	export = getFilenameFromUri

}
declare module 'cesium/Source/Core/getImagePixels' {
	function getImagePixels(image : HTMLImageElement, width : number, height : number) : CanvasPixelArray;
	export = getImagePixels

}
declare module 'cesium/Source/Core/getTimestamp' {
	function getTimestamp() : number;
	export = getTimestamp

}
declare module 'cesium/Source/Core/isArray' {
	function isArray(value : any) : boolean;
	export = isArray

}
declare module 'cesium/Source/Core/isLeapYear' {
	function isLeapYear(year : number) : boolean;
	export = isLeapYear

}
declare module 'cesium/Source/Core/loadArrayBuffer' {
	import Request = require('cesium/Source/Core/Request')
	function loadArrayBuffer(url : string, headers? : any, request? : Request) : Promise<ArrayBuffer>|void;
	export = loadArrayBuffer

}
declare module 'cesium/Source/Core/loadBlob' {
	import Request = require('cesium/Source/Core/Request')
	function loadBlob(url : string, headers? : any, request? : Request) : Promise<Blob>|void;
	export = loadBlob

}
declare module 'cesium/Source/Core/loadCRN' {
	import Request = require('cesium/Source/Core/Request')
	function loadCRN(urlOrBuffer : string|ArrayBuffer, headers? : any, request? : Request) : Promise<CompressedTextureBuffer>|void;
	export = loadCRN

}
declare module 'cesium/Source/Core/loadImage' {
	import Request = require('cesium/Source/Core/Request')
	function loadImage(url : string, allowCrossOrigin? : boolean, request? : Request) : Promise<HTMLImageElement>|void;
	export = loadImage

}
declare module 'cesium/Source/Core/loadImageViaBlob' {
	import Request = require('cesium/Source/Core/Request')
	function loadImageViaBlob(url : string, request? : Request) : Promise<HTMLImageElement>|void;
	export = loadImageViaBlob

}
declare module 'cesium/Source/Core/loadJson' {
	import Request = require('cesium/Source/Core/Request')
	function loadJson(url : string, headers? : any, request? : Request) : Promise<Object>|void;
	export = loadJson

}
declare module 'cesium/Source/Core/HASH_62193_loadJsonpOptions' {
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	interface HASH_62193_loadJsonpOptions
	{
		parameters?: Object;
		callbackParameterName?: string;
		proxy?: DefaultProxy;
	}
	export = HASH_62193_loadJsonpOptions

}
declare module 'cesium/Source/Core/loadJsonp' {
	import HASH_62193_loadJsonpOptions = require('cesium/Source/Core/HASH_62193_loadJsonpOptions')
	import Request = require('cesium/Source/Core/Request')
	function loadJsonp(url : string, options? : HASH_62193_loadJsonpOptions, request? : Request) : Promise<Object>|void;
	export = loadJsonp

}
declare module 'cesium/Source/Core/loadKTX' {
	import Request = require('cesium/Source/Core/Request')
	function loadKTX(urlOrBuffer : string|ArrayBuffer, headers? : any, request? : Request) : Promise<CompressedTextureBuffer>|void;
	export = loadKTX

}
declare module 'cesium/Source/Core/loadText' {
	import Request = require('cesium/Source/Core/Request')
	function loadText(url : string, headers? : any, request? : Request) : Promise<string>|void;
	export = loadText

}
declare module 'cesium/Source/Core/HASH_58967_loadWithXhrOptions' {
	import Request = require('cesium/Source/Core/Request')
	interface HASH_58967_loadWithXhrOptions
	{
		url: string;
		responseType?: string;
		method?: string;
		data?: string;
		headers?: Object;
		overrideMimeType?: string;
		request?: Request;
	}
	export = HASH_58967_loadWithXhrOptions

}
declare module 'cesium/Source/Core/loadWithXhr' {
	import HASH_58967_loadWithXhrOptions = require('cesium/Source/Core/HASH_58967_loadWithXhrOptions')
	function loadWithXhr(options? : HASH_58967_loadWithXhrOptions) : Promise<Object>|void;
	export = loadWithXhr

}
declare module 'cesium/Source/Core/loadXML' {
	import Request = require('cesium/Source/Core/Request')
	function loadXML(url : string, headers? : any, request? : Request) : Promise<XMLDocument>|void;
	export = loadXML

}
declare module 'cesium/Source/Core/mergeSort' {
	function mergeSort(array : Array<any>, comparator : any, userDefinedObject? : any) : void;
	export = mergeSort

}
declare module 'cesium/Source/Core/objectToQuery' {
	function objectToQuery(obj : any) : string;
	export = objectToQuery

}
declare module 'cesium/Source/Core/pointInsideTriangle' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	function pointInsideTriangle(point : Cartesian2|Cartesian3, p0 : Cartesian2|Cartesian3, p1 : Cartesian2|Cartesian3, p2 : Cartesian2|Cartesian3) : boolean;
	export = pointInsideTriangle

}
declare module 'cesium/Source/Core/queryToObject' {
	function queryToObject(queryString : string) : Object;
	export = queryToObject

}
declare module 'cesium/Source/Core/requestAnimationFrame' {
	function requestAnimationFrame(callback : any) : number;
	export = requestAnimationFrame

}
declare module 'cesium/Source/Core/sampleTerrain' {
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	function sampleTerrain(terrainProvider : TerrainProvider, level : number, positions : Array<Cartographic>) : Promise<Array<Cartographic>>;
	export = sampleTerrain

}
declare module 'cesium/Source/Core/sampleTerrainMostDetailed' {
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import Cartographic = require('cesium/Source/Core/Cartographic')
	function sampleTerrainMostDetailed(terrainProvider : TerrainProvider, positions : Array<Cartographic>) : Promise<Array<Cartographic>>;
	export = sampleTerrainMostDetailed

}
declare module 'cesium/Source/Core/subdivideArray' {
	function subdivideArray(array : Array<any>, numberOfArrays : number) : void;
	export = subdivideArray

}
declare module 'cesium/Source/DataSources/Property' {
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class Property 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = Property

}
declare module 'cesium/Source/DataSources/HASH_82736_BillboardGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_82736_BillboardGraphicsOptions
	{
		image?: Property|string|any;
		show?: Property|string|any;
		scale?: Property|string|any;
		horizontalOrigin?: Property|string|any;
		verticalOrigin?: Property|string|any;
		eyeOffset?: Property|string|any;
		pixelOffset?: Property|string|any;
		rotation?: Property|string|any;
		alignedAxis?: Property|string|any;
		width?: Property|string|any;
		height?: Property|string|any;
		color?: Property|string|any;
		scaleByDistance?: Property|string|any;
		translucencyByDistance?: Property|string|any;
		pixelOffsetScaleByDistance?: Property|string|any;
		imageSubRegion?: Property|string|any;
		sizeInMeters?: Property|string|any;
		heightReference?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_82736_BillboardGraphicsOptions

}
declare module 'cesium/Source/DataSources/BillboardGraphics' {
	import HASH_82736_BillboardGraphicsOptions = require('cesium/Source/DataSources/HASH_82736_BillboardGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	class BillboardGraphics 
	{
		constructor(options? : HASH_82736_BillboardGraphicsOptions);
		//Members
		alignedAxis: Property|string|any
		color: Property|string|any
		definitionChanged: Event
		disableDepthTestDistance: Property|string|any
		distanceDisplayCondition: Property|string|any
		eyeOffset: Property|string|any
		height: Property|string|any
		heightReference: Property|string|any
		horizontalOrigin: Property|string|any
		image: Property|string|any
		imageSubRegion: Property|string|any
		pixelOffset: Property|string|any
		pixelOffsetScaleByDistance: Property|string|any
		rotation: Property|string|any
		scale: Property|string|any
		scaleByDistance: Property|string|any
		show: Property|string|any
		sizeInMeters: Property|string|any
		translucencyByDistance: Property|string|any
		verticalOrigin: Property|string|any
		width: Property|string|any


		//Methods
		clone(result : BillboardGraphics) : BillboardGraphics
		merge(source? : BillboardGraphics) : void

	}
	export = BillboardGraphics

}
declare module 'cesium/Source/DataSources/HASH_23612_EntityClusterOptions' {
	interface HASH_23612_EntityClusterOptions
	{
		enabled?: boolean;
		pixelRange?: number;
		minimumClusterSize?: number;
		clusterBillboards?: boolean;
		clusterLabels?: boolean;
		clusterPoints?: boolean;
	}
	export = HASH_23612_EntityClusterOptions

}
declare module 'cesium/Source/DataSources/EntityCluster' {
	import HASH_23612_EntityClusterOptions = require('cesium/Source/DataSources/HASH_23612_EntityClusterOptions')
	import Event = require('cesium/Source/Core/Event')
	class EntityCluster 
	{
		constructor(options? : HASH_23612_EntityClusterOptions);
		//Members
		clusterBillboards: boolean
		clusterEvent: Event
		clusterLabels: boolean
		clusterPoints: boolean
		enabled: boolean
		minimumClusterSize: number
		pixelRange: number


		//Methods
		destroy() : void

	}
	export = EntityCluster

}
declare module 'cesium/Source/DataSources/DataSourceClock' {
	import ClockRange = require('cesium/Source/Core/ClockRange')
	import ClockStep = require('cesium/Source/Core/ClockStep')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Event = require('cesium/Source/Core/Event')
	import Clock = require('cesium/Source/Core/Clock')
	class DataSourceClock 
	{
		constructor();
		//Members
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		definitionChanged: Event
		multiplier: number
		startTime: JulianDate
		stopTime: JulianDate


		//Methods
		clone(result : DataSourceClock) : DataSourceClock
		equals(other? : DataSourceClock) : boolean
		getValue() : Clock
		merge(source? : DataSourceClock) : void

	}
	export = DataSourceClock

}
declare module 'cesium/Source/DataSources/DataSource' {
	import Event = require('cesium/Source/Core/Event')
	import DataSourceClock = require('cesium/Source/DataSources/DataSourceClock')
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class DataSource 
	{
		constructor();
		//Members
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		update(time? : JulianDate) : boolean

	}
	export = DataSource

}
declare module 'cesium/Source/DataSources/PositionProperty' {
	import Event = require('cesium/Source/Core/Event')
	import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	import Property = require('cesium/Source/DataSources/Property')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PositionProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time? : JulianDate, referenceFrame? : ReferenceFrame, result? : Cartesian3) : Cartesian3

	}
	export = PositionProperty

}
declare module 'cesium/Source/DataSources/MaterialProperty' {
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class MaterialProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = MaterialProperty

}
declare module 'cesium/Source/DataSources/HASH_02544_BoxGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_02544_BoxGraphicsOptions
	{
		dimensions?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_02544_BoxGraphicsOptions

}
declare module 'cesium/Source/DataSources/BoxGraphics' {
	import HASH_02544_BoxGraphicsOptions = require('cesium/Source/DataSources/HASH_02544_BoxGraphicsOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class BoxGraphics 
	{
		constructor(options? : HASH_02544_BoxGraphicsOptions);
		//Members
		definitionChanged: Event
		dimensions: Property|string|any
		distanceDisplayCondition: Property|string|any
		fill: Property|string|any
		material: MaterialProperty
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		shadows: Property|string|any
		show: Property|string|any


		//Methods
		clone(result : BoxGraphics) : BoxGraphics
		merge(source? : BoxGraphics) : void

	}
	export = BoxGraphics

}
declare module 'cesium/Source/DataSources/HASH_10753_CorridorGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_10753_CorridorGraphicsOptions
	{
		positions?: Property|string|any;
		width?: Property|string|any;
		cornerType?: Property|string|any;
		height?: Property|string|any;
		extrudedHeight?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		granularity?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_10753_CorridorGraphicsOptions

}
declare module 'cesium/Source/DataSources/CorridorGraphics' {
	import HASH_10753_CorridorGraphicsOptions = require('cesium/Source/DataSources/HASH_10753_CorridorGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class CorridorGraphics 
	{
		constructor(options? : HASH_10753_CorridorGraphicsOptions);
		//Members
		cornerType: Property|string|any
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		extrudedHeight: Property|string|any
		fill: Property|string|any
		granularity: Property|string|any
		height: Property|string|any
		material: MaterialProperty
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		positions: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		width: Property|string|any


		//Methods
		clone(result : CorridorGraphics) : CorridorGraphics
		merge(source? : CorridorGraphics) : void

	}
	export = CorridorGraphics

}
declare module 'cesium/Source/DataSources/HASH_15996_CylinderGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_15996_CylinderGraphicsOptions
	{
		length?: Property|string|any;
		topRadius?: Property|string|any;
		bottomRadius?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		numberOfVerticalLines?: Property|string|any;
		slices?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_15996_CylinderGraphicsOptions

}
declare module 'cesium/Source/DataSources/CylinderGraphics' {
	import HASH_15996_CylinderGraphicsOptions = require('cesium/Source/DataSources/HASH_15996_CylinderGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class CylinderGraphics 
	{
		constructor(options? : HASH_15996_CylinderGraphicsOptions);
		//Members
		bottomRadius: Property|string|any
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		fill: Property|string|any
		length: Property|string|any
		material: MaterialProperty
		numberOfVerticalLines: Property|string|any
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		slices: Property|string|any
		topRadius: Property|string|any


		//Methods
		clone(result : CylinderGraphics) : CylinderGraphics
		merge(source? : CylinderGraphics) : void

	}
	export = CylinderGraphics

}
declare module 'cesium/Source/DataSources/HASH_02018_EllipseGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_02018_EllipseGraphicsOptions
	{
		semiMajorAxis?: Property|string|any;
		semiMinorAxis?: Property|string|any;
		height?: Property|string|any;
		extrudedHeight?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		numberOfVerticalLines?: Property|string|any;
		rotation?: Property|string|any;
		stRotation?: Property|string|any;
		granularity?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_02018_EllipseGraphicsOptions

}
declare module 'cesium/Source/DataSources/EllipseGraphics' {
	import HASH_02018_EllipseGraphicsOptions = require('cesium/Source/DataSources/HASH_02018_EllipseGraphicsOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class EllipseGraphics 
	{
		constructor(options? : HASH_02018_EllipseGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		extrudedHeight: Property|string|any
		fill: Property|string|any
		granularity: Property|string|any
		height: Property|string|any
		material: MaterialProperty
		numberOfVerticalLines: Property|string|any
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		rotation: Property|string|any
		semiMajorAxis: Property|string|any
		semiMinorAxis: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		stRotation: Property|string|any


		//Methods
		clone(result : EllipseGraphics) : EllipseGraphics
		merge(source? : EllipseGraphics) : void

	}
	export = EllipseGraphics

}
declare module 'cesium/Source/DataSources/HASH_13829_EllipsoidGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_13829_EllipsoidGraphicsOptions
	{
		radii?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		subdivisions?: Property|string|any;
		stackPartitions?: Property|string|any;
		slicePartitions?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_13829_EllipsoidGraphicsOptions

}
declare module 'cesium/Source/DataSources/EllipsoidGraphics' {
	import HASH_13829_EllipsoidGraphicsOptions = require('cesium/Source/DataSources/HASH_13829_EllipsoidGraphicsOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class EllipsoidGraphics 
	{
		constructor(options? : HASH_13829_EllipsoidGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		fill: Property|string|any
		material: MaterialProperty
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		radii: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		slicePartitions: Property|string|any
		stackPartitions: Property|string|any
		subdivisions: Property|string|any


		//Methods
		clone(result : EllipsoidGraphics) : EllipsoidGraphics
		merge(source? : EllipsoidGraphics) : void

	}
	export = EllipsoidGraphics

}
declare module 'cesium/Source/DataSources/HASH_14601_LabelGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_14601_LabelGraphicsOptions
	{
		text?: Property|string|any;
		font?: Property|string|any;
		style?: Property|string|any;
		fillColor?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		show?: Property|string|any;
		showBackground?: Property|string|any;
		backgroundColor?: Property|string|any;
		backgroundPadding?: Property|string|any;
		scale?: Property|string|any;
		horizontalOrigin?: Property|string|any;
		verticalOrigin?: Property|string|any;
		eyeOffset?: Property|string|any;
		pixelOffset?: Property|string|any;
		translucencyByDistance?: Property|string|any;
		pixelOffsetScaleByDistance?: Property|string|any;
		scaleByDistance?: Property|string|any;
		heightReference?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_14601_LabelGraphicsOptions

}
declare module 'cesium/Source/DataSources/LabelGraphics' {
	import HASH_14601_LabelGraphicsOptions = require('cesium/Source/DataSources/HASH_14601_LabelGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	class LabelGraphics 
	{
		constructor(options? : HASH_14601_LabelGraphicsOptions);
		//Members
		backgroundColor: Property|string|any
		backgroundPadding: Property|string|any
		definitionChanged: Event
		disableDepthTestDistance: Property|string|any
		distanceDisplayCondition: Property|string|any
		eyeOffset: Property|string|any
		fillColor: Property|string|any
		font: Property|string|any
		heightReference: Property|string|any
		horizontalOrigin: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		pixelOffset: Property|string|any
		pixelOffsetScaleByDistance: Property|string|any
		scale: Property|string|any
		scaleByDistance: Property|string|any
		show: Property|string|any
		showBackground: Property|string|any
		style: Property|string|any
		text: Property|string|any
		translucencyByDistance: Property|string|any
		verticalOrigin: Property|string|any


		//Methods
		clone(result : LabelGraphics) : LabelGraphics
		merge(source? : LabelGraphics) : void

	}
	export = LabelGraphics

}
declare module 'cesium/Source/DataSources/HASH_78997_ModelGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_78997_ModelGraphicsOptions
	{
		uri?: Property|string|any;
		show?: Property|string|any;
		scale?: Property|string|any;
		minimumPixelSize?: Property|string|any;
		maximumScale?: Property|string|any;
		incrementallyLoadTextures?: Property|string|any;
		runAnimations?: Property|string|any;
		nodeTransformations?: Property|string|any;
		shadows?: Property|string|any;
		heightReference?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
		silhouetteColor?: Property|string|any;
		silhouetteSize?: Property|string|any;
		color?: Property|string|any;
		colorBlendMode?: Property|string|any;
		colorBlendAmount?: Property|string|any;
	}
	export = HASH_78997_ModelGraphicsOptions

}
declare module 'cesium/Source/DataSources/PropertyBag' {
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PropertyBag 
	{
		constructor(value? : any, createPropertyCallback? : (()=>void));
		//Members
		definitionChanged: Event
		isConstant: boolean
		propertyNames: Array<any>


		//Methods
		addProperty(propertyName? : string, value? : any, createPropertyCallback? : (()=>void)) : void
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object
		hasProperty(propertyName? : string) : boolean
		merge(source? : any, createPropertyCallback? : (()=>void)) : void
		removeProperty(propertyName? : string) : void

	}
	export = PropertyBag

}
declare module 'cesium/Source/DataSources/ModelGraphics' {
	import HASH_78997_ModelGraphicsOptions = require('cesium/Source/DataSources/HASH_78997_ModelGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import PropertyBag = require('cesium/Source/DataSources/PropertyBag')
	class ModelGraphics 
	{
		constructor(options? : HASH_78997_ModelGraphicsOptions);
		//Members
		color: Property|string|any
		colorBlendAmount: Property|string|any
		colorBlendMode: Property|string|any
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		heightReference: Property|string|any
		incrementallyLoadTextures: Property|string|any
		maximumScale: Property|string|any
		minimumPixelSize: Property|string|any
		nodeTransformations: PropertyBag
		runAnimations: Property|string|any
		scale: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		silhouetteColor: Property|string|any
		silhouetteSize: Property|string|any
		uri: Property|string|any


		//Methods
		clone(result : ModelGraphics) : ModelGraphics
		merge(source? : ModelGraphics) : void

	}
	export = ModelGraphics

}
declare module 'cesium/Source/DataSources/HASH_22183_PathGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_22183_PathGraphicsOptions
	{
		leadTime?: Property|string|any;
		trailTime?: Property|string|any;
		show?: Property|string|any;
		width?: Property|string|any;
		material?: MaterialProperty;
		resolution?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_22183_PathGraphicsOptions

}
declare module 'cesium/Source/DataSources/PathGraphics' {
	import HASH_22183_PathGraphicsOptions = require('cesium/Source/DataSources/HASH_22183_PathGraphicsOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class PathGraphics 
	{
		constructor(options? : HASH_22183_PathGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		leadTime: Property|string|any
		material: MaterialProperty
		resolution: Property|string|any
		show: Property|string|any
		trailTime: Property|string|any
		width: Property|string|any


		//Methods
		clone(result : PathGraphics) : PathGraphics
		merge(source? : PathGraphics) : void

	}
	export = PathGraphics

}
declare module 'cesium/Source/DataSources/HASH_15381_PointGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_15381_PointGraphicsOptions
	{
		color?: Property|string|any;
		pixelSize?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		show?: Property|string|any;
		scaleByDistance?: Property|string|any;
		translucencyByDistance?: Property|string|any;
		heightReference?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_15381_PointGraphicsOptions

}
declare module 'cesium/Source/DataSources/PointGraphics' {
	import HASH_15381_PointGraphicsOptions = require('cesium/Source/DataSources/HASH_15381_PointGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	class PointGraphics 
	{
		constructor(options? : HASH_15381_PointGraphicsOptions);
		//Members
		color: Property|string|any
		definitionChanged: Event
		disableDepthTestDistance: Property|string|any
		distanceDisplayCondition: Property|string|any
		heightReference: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		pixelSize: Property|string|any
		scaleByDistance: Property|string|any
		show: Property|string|any
		translucencyByDistance: Property|string|any


		//Methods
		clone(result : PointGraphics) : PointGraphics
		merge(source? : PointGraphics) : void

	}
	export = PointGraphics

}
declare module 'cesium/Source/DataSources/HASH_84774_PolygonGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_84774_PolygonGraphicsOptions
	{
		hierarchy?: Property|string|any;
		height?: Property|string|any;
		extrudedHeight?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		stRotation?: Property|string|any;
		granularity?: Property|string|any;
		perPositionHeight?: Property|string|any;
		closeTop?: boolean;
		closeBottom?: boolean;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_84774_PolygonGraphicsOptions

}
declare module 'cesium/Source/DataSources/PolygonGraphics' {
	import HASH_84774_PolygonGraphicsOptions = require('cesium/Source/DataSources/HASH_84774_PolygonGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class PolygonGraphics 
	{
		constructor(options? : HASH_84774_PolygonGraphicsOptions);
		//Members
		closeBottom: Property|string|any
		closeTop: Property|string|any
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		extrudedHeight: Property|string|any
		fill: Property|string|any
		granularity: Property|string|any
		height: Property|string|any
		hierarchy: Property|string|any
		material: MaterialProperty
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		perPositionHeight: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		stRotation: Property|string|any


		//Methods
		clone(result : PolygonGraphics) : PolygonGraphics
		merge(source? : PolygonGraphics) : void

	}
	export = PolygonGraphics

}
declare module 'cesium/Source/DataSources/HASH_21342_PolylineGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_21342_PolylineGraphicsOptions
	{
		positions?: Property|string|any;
		followSurface?: Property|string|any;
		width?: Property|string|any;
		show?: Property|string|any;
		material?: MaterialProperty;
		granularity?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_21342_PolylineGraphicsOptions

}
declare module 'cesium/Source/DataSources/PolylineGraphics' {
	import HASH_21342_PolylineGraphicsOptions = require('cesium/Source/DataSources/HASH_21342_PolylineGraphicsOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class PolylineGraphics 
	{
		constructor(options? : HASH_21342_PolylineGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		followSurface: Property|string|any
		granularity: Property|string|any
		material: MaterialProperty
		positions: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		width: Property|string|any


		//Methods
		clone(result : PolylineGraphics) : PolylineGraphics
		merge(source? : PolylineGraphics) : void

	}
	export = PolylineGraphics

}
declare module 'cesium/Source/DataSources/HASH_87817_PolylineVolumeGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_87817_PolylineVolumeGraphicsOptions
	{
		positions?: Property|string|any;
		shape?: Property|string|any;
		cornerType?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		granularity?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_87817_PolylineVolumeGraphicsOptions

}
declare module 'cesium/Source/DataSources/PolylineVolumeGraphics' {
	import HASH_87817_PolylineVolumeGraphicsOptions = require('cesium/Source/DataSources/HASH_87817_PolylineVolumeGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class PolylineVolumeGraphics 
	{
		constructor(options? : HASH_87817_PolylineVolumeGraphicsOptions);
		//Members
		cornerType: Property|string|any
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		fill: Property|string|any
		granularity: Property|string|any
		material: MaterialProperty
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		positions: Property|string|any
		shadows: Property|string|any
		shape: Property|string|any
		show: Property|string|any


		//Methods
		clone(result : PolylineVolumeGraphics) : PolylineVolumeGraphics
		merge(source? : PolylineVolumeGraphics) : void

	}
	export = PolylineVolumeGraphics

}
declare module 'cesium/Source/DataSources/HASH_88260_RectangleGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_88260_RectangleGraphicsOptions
	{
		coordinates?: Property|string|any;
		height?: Property|string|any;
		extrudedHeight?: Property|string|any;
		closeTop?: Property|string|any;
		closeBottom?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		rotation?: Property|string|any;
		stRotation?: Property|string|any;
		granularity?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_88260_RectangleGraphicsOptions

}
declare module 'cesium/Source/DataSources/RectangleGraphics' {
	import HASH_88260_RectangleGraphicsOptions = require('cesium/Source/DataSources/HASH_88260_RectangleGraphicsOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class RectangleGraphics 
	{
		constructor(options? : HASH_88260_RectangleGraphicsOptions);
		//Members
		closeBottom: Property|string|any
		closeTop: Property|string|any
		coordinates: Property|string|any
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		extrudedHeight: Property|string|any
		fill: Property|string|any
		granularity: Property|string|any
		height: Property|string|any
		material: MaterialProperty
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		rotation: Property|string|any
		shadows: Property|string|any
		show: Property|string|any
		stRotation: Property|string|any


		//Methods
		clone(result : RectangleGraphics) : RectangleGraphics
		merge(source? : RectangleGraphics) : void

	}
	export = RectangleGraphics

}
declare module 'cesium/Source/DataSources/HASH_74211_WallGraphicsOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	interface HASH_74211_WallGraphicsOptions
	{
		positions?: Property|string|any;
		maximumHeights?: Property|string|any;
		minimumHeights?: Property|string|any;
		show?: Property|string|any;
		fill?: Property|string|any;
		material?: MaterialProperty;
		outline?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
		granularity?: Property|string|any;
		shadows?: Property|string|any;
		distanceDisplayCondition?: Property|string|any;
	}
	export = HASH_74211_WallGraphicsOptions

}
declare module 'cesium/Source/DataSources/WallGraphics' {
	import HASH_74211_WallGraphicsOptions = require('cesium/Source/DataSources/HASH_74211_WallGraphicsOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	class WallGraphics 
	{
		constructor(options? : HASH_74211_WallGraphicsOptions);
		//Members
		definitionChanged: Event
		distanceDisplayCondition: Property|string|any
		fill: Property|string|any
		granularity: Property|string|any
		material: MaterialProperty
		maximumHeights: Property|string|any
		minimumHeights: Property|string|any
		outline: Property|string|any
		outlineColor: Property|string|any
		outlineWidth: Property|string|any
		positions: Property|string|any
		shadows: Property|string|any
		show: Property|string|any


		//Methods
		clone(result : WallGraphics) : WallGraphics
		merge(source? : WallGraphics) : void

	}
	export = WallGraphics

}
declare module 'cesium/Source/DataSources/HASH_66752_EntityOptions' {
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import Property = require('cesium/Source/DataSources/Property')
	import PositionProperty = require('cesium/Source/DataSources/PositionProperty')
	import Entity = require('cesium/Source/DataSources/Entity')
	import BillboardGraphics = require('cesium/Source/DataSources/BillboardGraphics')
	import BoxGraphics = require('cesium/Source/DataSources/BoxGraphics')
	import CorridorGraphics = require('cesium/Source/DataSources/CorridorGraphics')
	import CylinderGraphics = require('cesium/Source/DataSources/CylinderGraphics')
	import EllipseGraphics = require('cesium/Source/DataSources/EllipseGraphics')
	import EllipsoidGraphics = require('cesium/Source/DataSources/EllipsoidGraphics')
	import LabelGraphics = require('cesium/Source/DataSources/LabelGraphics')
	import ModelGraphics = require('cesium/Source/DataSources/ModelGraphics')
	import PathGraphics = require('cesium/Source/DataSources/PathGraphics')
	import PointGraphics = require('cesium/Source/DataSources/PointGraphics')
	import PolygonGraphics = require('cesium/Source/DataSources/PolygonGraphics')
	import PolylineGraphics = require('cesium/Source/DataSources/PolylineGraphics')
	import PropertyBag = require('cesium/Source/DataSources/PropertyBag')
	import PolylineVolumeGraphics = require('cesium/Source/DataSources/PolylineVolumeGraphics')
	import RectangleGraphics = require('cesium/Source/DataSources/RectangleGraphics')
	import WallGraphics = require('cesium/Source/DataSources/WallGraphics')
	interface HASH_66752_EntityOptions
	{
		id?: string;
		name?: string;
		availability?: TimeIntervalCollection;
		show?: boolean;
		description?: Property|string|any;
		position?: PositionProperty;
		orientation?: Property|string|any;
		viewFrom?: Property|string|any;
		parent?: Entity;
		billboard?: BillboardGraphics;
		box?: BoxGraphics;
		corridor?: CorridorGraphics;
		cylinder?: CylinderGraphics;
		ellipse?: EllipseGraphics;
		ellipsoid?: EllipsoidGraphics;
		label?: LabelGraphics;
		model?: ModelGraphics;
		path?: PathGraphics;
		point?: PointGraphics;
		polygon?: PolygonGraphics;
		polyline?: PolylineGraphics;
		properties?: PropertyBag;
		polylineVolume?: PolylineVolumeGraphics;
		rectangle?: RectangleGraphics;
		wall?: WallGraphics;
	}
	export = HASH_66752_EntityOptions

}
declare module 'cesium/Source/DataSources/Entity' {
	import HASH_66752_EntityOptions = require('cesium/Source/DataSources/HASH_66752_EntityOptions')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import BillboardGraphics = require('cesium/Source/DataSources/BillboardGraphics')
	import BoxGraphics = require('cesium/Source/DataSources/BoxGraphics')
	import CorridorGraphics = require('cesium/Source/DataSources/CorridorGraphics')
	import CylinderGraphics = require('cesium/Source/DataSources/CylinderGraphics')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import EllipseGraphics = require('cesium/Source/DataSources/EllipseGraphics')
	import EllipsoidGraphics = require('cesium/Source/DataSources/EllipsoidGraphics')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import LabelGraphics = require('cesium/Source/DataSources/LabelGraphics')
	import ModelGraphics = require('cesium/Source/DataSources/ModelGraphics')
	import PathGraphics = require('cesium/Source/DataSources/PathGraphics')
	import PointGraphics = require('cesium/Source/DataSources/PointGraphics')
	import PolygonGraphics = require('cesium/Source/DataSources/PolygonGraphics')
	import PolylineGraphics = require('cesium/Source/DataSources/PolylineGraphics')
	import PolylineVolumeGraphics = require('cesium/Source/DataSources/PolylineVolumeGraphics')
	import PositionProperty = require('cesium/Source/DataSources/PositionProperty')
	import PropertyBag = require('cesium/Source/DataSources/PropertyBag')
	import RectangleGraphics = require('cesium/Source/DataSources/RectangleGraphics')
	import WallGraphics = require('cesium/Source/DataSources/WallGraphics')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class Entity 
	{
		constructor(options? : HASH_66752_EntityOptions);
		//Members
		availability: TimeIntervalCollection
		billboard: BillboardGraphics
		box: BoxGraphics
		corridor: CorridorGraphics
		cylinder: CylinderGraphics
		definitionChanged: Event
		description: Property|string|any
		ellipse: EllipseGraphics
		ellipsoid: EllipsoidGraphics
		entityCollection: EntityCollection
		id: string
		isShowing: boolean
		label: LabelGraphics
		model: ModelGraphics
		name: string
		orientation: Property|string|any
		parent: Entity
		path: PathGraphics
		point: PointGraphics
		polygon: PolygonGraphics
		polyline: PolylineGraphics
		polylineVolume: PolylineVolumeGraphics
		position: PositionProperty
		properties: PropertyBag
		propertyNames: Array<any>
		rectangle: RectangleGraphics
		show: boolean
		viewFrom: Property|string|any
		wall: WallGraphics


		//Methods
		addProperty(propertyName? : string) : void
		computeModelMatrix(time? : JulianDate, result? : Matrix4) : Matrix4
		isAvailable(time? : JulianDate) : boolean
		merge(source? : Entity) : void
		removeProperty(propertyName? : string) : void

	}
	export = Entity

}
declare module 'cesium/Source/DataSources/CompositeEntityCollection' {
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import DataSource = require('cesium/Source/DataSources/DataSource')
	import Event = require('cesium/Source/Core/Event')
	import Entity = require('cesium/Source/DataSources/Entity')
	import TimeInterval = require('cesium/Source/Core/TimeInterval')
	class CompositeEntityCollection 
	{
		constructor(collections? : Array<EntityCollection>, owner? : DataSource|CompositeEntityCollection);
		//Members
		collectionChanged: Event
		id: string
		owner: DataSource|CompositeEntityCollection
		values: Array<Entity>


		//Methods
		addCollection(collection? : EntityCollection, index? : number) : void
		computeAvailability() : TimeInterval
		contains(entity? : Entity) : boolean
		containsCollection(collection? : EntityCollection) : boolean
		getById(id? : string) : Entity
		getCollection(index? : number) : void
		getCollectionsLength() : void
		indexOfCollection(collection? : EntityCollection) : number
		lowerCollection(collection? : EntityCollection) : void
		lowerCollectionToBottom(collection? : EntityCollection) : void
		raiseCollection(collection? : EntityCollection) : void
		raiseCollectionToTop(collection? : EntityCollection) : void
		removeAllCollections() : void
		removeCollection(collection? : EntityCollection) : boolean
		resumeEvents() : void
		suspendEvents() : void

	}
	export = CompositeEntityCollection

}
declare module 'cesium/Source/DataSources/EntityCollection' {
	import DataSource = require('cesium/Source/DataSources/DataSource')
	import CompositeEntityCollection = require('cesium/Source/DataSources/CompositeEntityCollection')
	import Event = require('cesium/Source/Core/Event')
	import Entity = require('cesium/Source/DataSources/Entity')
	import TimeInterval = require('cesium/Source/Core/TimeInterval')
	class EntityCollection 
	{
		constructor(owner? : DataSource|CompositeEntityCollection);
		//Members
		collectionChanged: Event
		id: string
		owner: DataSource|CompositeEntityCollection
		show: boolean
		values: Array<Entity>


		//Methods
		static collectionChangedEventCallback(collection? : EntityCollection, added? : Array<Entity>, removed? : Array<Entity>, changed? : Array<Entity>) : void
		add(entity? : Entity) : Entity
		computeAvailability() : TimeInterval
		contains(entity? : Entity) : boolean
		getById(id? : string) : Entity
		getOrCreateEntity(id? : string) : Entity
		remove(entity? : Entity) : boolean
		removeAll() : void
		removeById(id? : string) : boolean
		resumeEvents() : void
		suspendEvents() : void

	}
	export = EntityCollection

}
declare module 'cesium/Source/DataSources/BillboardVisualizer' {
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class BillboardVisualizer 
	{
		constructor(entityCluster : EntityCluster, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = BillboardVisualizer

}
declare module 'cesium/Source/Scene/HASH_49651_MaterialOptions' {
	interface HASH_49651_MaterialOptions
	{
		strict?: boolean;
		translucent?: boolean|(()=>void);
		fabric: Object;
	}
	export = HASH_49651_MaterialOptions

}
declare module 'cesium/Source/Scene/Material' {
	import HASH_49651_MaterialOptions = require('cesium/Source/Scene/HASH_49651_MaterialOptions')
	class Material 
	{
		constructor(options? : HASH_49651_MaterialOptions);
		//Members
		static AlphaMapType: string
		static BumpMapType: string
		static CheckerboardType: string
		static ColorType: string
		static DefaultCubeMapId: string
		static DefaultImageId: string
		static DiffuseMapType: string
		static DotType: string
		static EmissionMapType: string
		static FadeType: string
		static GridType: string
		static ImageType: string
		static NormalMapType: string
		static PolylineArrowType: string
		static PolylineDashType: string
		static PolylineGlowType: string
		static PolylineOutlineType: string
		static RimLightingType: string
		static SpecularMapType: string
		static StripeType: string
		static WaterType: string
		materials: Object
		shaderSource: string
		translucent: boolean|(()=>void)
		type: string
		uniforms: Object


		//Methods
		static fromType(type? : string, uniforms? : any) : Material
		destroy() : void
		isDestroyed() : boolean
		isTranslucent() : void

	}
	export = Material

}
declare module 'cesium/Source/Scene/HASH_96818_AppearanceOptions' {
	import Material = require('cesium/Source/Scene/Material')
	interface HASH_96818_AppearanceOptions
	{
		translucent?: boolean;
		closed?: boolean;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = HASH_96818_AppearanceOptions

}
declare module 'cesium/Source/Scene/Appearance' {
	import HASH_96818_AppearanceOptions = require('cesium/Source/Scene/HASH_96818_AppearanceOptions')
	import Material = require('cesium/Source/Scene/Material')
	class Appearance 
	{
		constructor(options? : HASH_96818_AppearanceOptions);
		//Members
		closed: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = Appearance

}
declare module 'cesium/Source/DataSources/DynamicGeometryUpdater' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class DynamicGeometryUpdater 
	{
		constructor();
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : void

	}
	export = DynamicGeometryUpdater

}
declare module 'cesium/Source/DataSources/BoxGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class BoxGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = BoxGeometryUpdater

}
declare module 'cesium/Source/DataSources/CallbackProperty' {
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class CallbackProperty 
	{
		constructor(callback : any, isConstant : boolean);
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time : JulianDate, result : any) : Object
		setCallback(callback? : any, isConstant? : boolean) : void

	}
	export = CallbackProperty

}
declare module 'cesium/Source/DataSources/HASH_80122_CheckerboardMaterialPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_80122_CheckerboardMaterialPropertyOptions
	{
		evenColor?: Property|string|any;
		oddColor?: Property|string|any;
		repeat?: Property|string|any;
	}
	export = HASH_80122_CheckerboardMaterialPropertyOptions

}
declare module 'cesium/Source/DataSources/CheckerboardMaterialProperty' {
	import HASH_80122_CheckerboardMaterialPropertyOptions = require('cesium/Source/DataSources/HASH_80122_CheckerboardMaterialPropertyOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class CheckerboardMaterialProperty 
	{
		constructor(options? : HASH_80122_CheckerboardMaterialPropertyOptions);
		//Members
		definitionChanged: Event
		evenColor: Property|string|any
		isConstant: boolean
		oddColor: Property|string|any
		repeat: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = CheckerboardMaterialProperty

}
declare module 'cesium/Source/DataSources/ColorMaterialProperty' {
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class ColorMaterialProperty 
	{
		constructor(color? : Property|string|any);
		//Members
		color: Property|string|any
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = ColorMaterialProperty

}
declare module 'cesium/Source/DataSources/CompositeMaterialProperty' {
	import Event = require('cesium/Source/Core/Event')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class CompositeMaterialProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = CompositeMaterialProperty

}
declare module 'cesium/Source/DataSources/CompositePositionProperty' {
	import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	import Event = require('cesium/Source/Core/Event')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class CompositePositionProperty 
	{
		constructor(referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object
		getValueInReferenceFrame(time? : JulianDate, referenceFrame? : ReferenceFrame, result? : Cartesian3) : Cartesian3

	}
	export = CompositePositionProperty

}
declare module 'cesium/Source/DataSources/CompositeProperty' {
	import Event = require('cesium/Source/Core/Event')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class CompositeProperty 
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = CompositeProperty

}
declare module 'cesium/Source/DataSources/ConstantPositionProperty' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class ConstantPositionProperty 
	{
		constructor(value? : Cartesian3, referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object
		getValueInReferenceFrame(time? : JulianDate, referenceFrame? : ReferenceFrame, result? : Cartesian3) : Cartesian3
		setValue(value? : Cartesian3, referenceFrame? : ReferenceFrame) : void

	}
	export = ConstantPositionProperty

}
declare module 'cesium/Source/DataSources/ConstantProperty' {
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class ConstantProperty 
	{
		constructor(value? : any);
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time : JulianDate, result : any) : Object
		setValue(value? : any) : void
		toString() : string
		valueOf() : any

	}
	export = ConstantProperty

}
declare module 'cesium/Source/DataSources/CorridorGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class CorridorGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection, groundPrimitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = CorridorGeometryUpdater

}
declare module 'cesium/Source/DataSources/CustomDataSource' {
	import DataSource = require('cesium/Source/DataSources/DataSource')
	import Event = require('cesium/Source/Core/Event')
	import DataSourceClock = require('cesium/Source/DataSources/DataSourceClock')
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	class CustomDataSource extends DataSource
	{
		constructor(name? : string);
		//Members
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods

	}
	export = CustomDataSource

}
declare module 'cesium/Source/DataSources/CylinderGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class CylinderGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = CylinderGeometryUpdater

}
declare module 'cesium/Source/DataSources/HASH_14781_loadOptions' {
	interface HASH_14781_loadOptions
	{
		sourceUri?: string;
		query?: Object;
	}
	export = HASH_14781_loadOptions

}
declare module 'cesium/Source/DataSources/HASH_14781_processOptions' {
	interface HASH_14781_processOptions
	{
		sourceUri?: string;
		query?: Object;
	}
	export = HASH_14781_processOptions

}
declare module 'cesium/Source/DataSources/CzmlDataSource' {
	import DataSource = require('cesium/Source/DataSources/DataSource')
	import Event = require('cesium/Source/Core/Event')
	import DataSourceClock = require('cesium/Source/DataSources/DataSourceClock')
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import HASH_14781_loadOptions = require('cesium/Source/DataSources/HASH_14781_loadOptions')
	import TimeInterval = require('cesium/Source/Core/TimeInterval')
	import HASH_14781_processOptions = require('cesium/Source/DataSources/HASH_14781_processOptions')
	class CzmlDataSource extends DataSource
	{
		constructor(name? : string);
		//Members
		static updaters: Array<any>
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		static load(czml? : string|any, options? : HASH_14781_loadOptions) : Promise<CzmlDataSource>
		static processMaterialPacketData(object? : any, propertyName? : string, packetData? : any, interval? : TimeInterval, sourceUri? : string, entityCollection? : EntityCollection) : void
		static processPacketData(type? : (()=>void), object? : any, propertyName? : string, packetData? : any, interval? : TimeInterval, sourceUri? : string, entityCollection? : EntityCollection) : void
		static processPositionPacketData(object? : any, propertyName? : string, packetData? : any, interval? : TimeInterval, sourceUri? : string, entityCollection? : EntityCollection) : void
		load(czml? : string|any, options? : HASH_14781_loadOptions) : Promise<CzmlDataSource>
		process(czml? : string|any, options? : HASH_14781_processOptions) : Promise<CzmlDataSource>

	}
	export = CzmlDataSource

}
declare module 'cesium/Source/DataSources/DataSourceCollection' {
	import Event = require('cesium/Source/Core/Event')
	import DataSource = require('cesium/Source/DataSources/DataSource')
	class DataSourceCollection 
	{
		constructor();
		//Members
		dataSourceAdded: Event
		dataSourceRemoved: Event
		length: number


		//Methods
		add(dataSource? : DataSource|Promise<DataSource>) : Promise<DataSource>
		contains(dataSource? : DataSource) : boolean
		destroy() : void
		get(index? : number) : DataSource
		indexOf(dataSource? : DataSource) : number
		isDestroyed() : boolean
		remove(dataSource? : DataSource, destroy? : boolean) : boolean
		removeAll(destroy : boolean) : void

	}
	export = DataSourceCollection

}
declare module 'cesium/Source/DataSources/HASH_61006_DataSourceDisplayOptions' {
	import Scene = require('cesium/Source/Scene/Scene')
	import DataSourceCollection = require('cesium/Source/DataSources/DataSourceCollection')
	interface HASH_61006_DataSourceDisplayOptions
	{
		scene: Scene;
		dataSourceCollection: DataSourceCollection;
		visualizersCallback?: any;
	}
	export = HASH_61006_DataSourceDisplayOptions

}
declare module 'cesium/Source/DataSources/DataSourceDisplay' {
	import HASH_61006_DataSourceDisplayOptions = require('cesium/Source/DataSources/HASH_61006_DataSourceDisplayOptions')
	import DataSourceCollection = require('cesium/Source/DataSources/DataSourceCollection')
	import CustomDataSource = require('cesium/Source/DataSources/CustomDataSource')
	import Scene = require('cesium/Source/Scene/Scene')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class DataSourceDisplay 
	{
		constructor(options? : HASH_61006_DataSourceDisplayOptions);
		//Members
		static defaultVisualizersCallback: any
		dataSources: DataSourceCollection
		defaultDataSource: CustomDataSource
		ready: boolean
		scene: Scene


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = DataSourceDisplay

}
declare module 'cesium/Source/DataSources/EllipseGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class EllipseGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection, groundPrimitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = EllipseGeometryUpdater

}
declare module 'cesium/Source/DataSources/EllipsoidGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class EllipsoidGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = EllipsoidGeometryUpdater

}
declare module 'cesium/Source/DataSources/EntityView' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class EntityView 
	{
		constructor(entity : Entity, scene : Scene, ellipsoid? : Ellipsoid);
		//Members
		static defaultOffset3D: Cartesian3
		boundingSphere: BoundingSphere
		ellipsoid: Ellipsoid
		entity: Entity
		scene: Scene


		//Methods
		update(time? : JulianDate, boundingSphere? : BoundingSphere) : void

	}
	export = EntityView

}
declare module 'cesium/Source/DataSources/HASH_64231_loadOptions' {
	import Color = require('cesium/Source/Core/Color')
	interface HASH_64231_loadOptions
	{
		sourceUri?: string;
		markerSize?: number;
		markerSymbol?: string;
		markerColor?: Color;
		stroke?: Color;
		strokeWidth?: number;
		fill?: Color;
		clampToGround?: boolean;
	}
	export = HASH_64231_loadOptions

}
declare module 'cesium/Source/DataSources/HASH_54054_loadOptions' {
	import Color = require('cesium/Source/Core/Color')
	interface HASH_54054_loadOptions
	{
		sourceUri?: string;
		describe?: any;
		markerSize?: number;
		markerSymbol?: string;
		markerColor?: Color;
		stroke?: Color;
		strokeWidth?: number;
		fill?: Color;
		clampToGround?: boolean;
	}
	export = HASH_54054_loadOptions

}
declare module 'cesium/Source/DataSources/GeoJsonDataSource' {
	import DataSource = require('cesium/Source/DataSources/DataSource')
	import Color = require('cesium/Source/Core/Color')
	import Event = require('cesium/Source/Core/Event')
	import DataSourceClock = require('cesium/Source/DataSources/DataSourceClock')
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import HASH_64231_loadOptions = require('cesium/Source/DataSources/HASH_64231_loadOptions')
	import HASH_54054_loadOptions = require('cesium/Source/DataSources/HASH_54054_loadOptions')
	class GeoJsonDataSource extends DataSource
	{
		constructor(name? : string);
		//Members
		static clampToGround: boolean
		static crsLinkHrefs: Object
		static crsLinkTypes: Object
		static crsNames: Object
		static fill: Color
		static markerColor: Color
		static markerSize: number
		static markerSymbol: string
		static stroke: Color
		static strokeWidth: number
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		show: boolean


		//Methods
		static load(data? : string|any, options? : HASH_64231_loadOptions) : Promise<GeoJsonDataSource>
		load(data? : string|any, options? : HASH_54054_loadOptions) : Promise<GeoJsonDataSource>

	}
	export = GeoJsonDataSource

}
declare module 'cesium/Source/DataSources/GeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import Property = require('cesium/Source/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class GeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = GeometryUpdater

}
declare module 'cesium/Source/DataSources/GeometryVisualizer' {
	import GeometryUpdater = require('cesium/Source/DataSources/GeometryUpdater')
	import Scene = require('cesium/Source/Scene/Scene')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class GeometryVisualizer 
	{
		constructor(type : GeometryUpdater, scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = GeometryVisualizer

}
declare module 'cesium/Source/DataSources/HASH_13659_GridMaterialPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_13659_GridMaterialPropertyOptions
	{
		color?: Property|string|any;
		cellAlpha?: Property|string|any;
		lineCount?: Property|string|any;
		lineThickness?: Property|string|any;
		lineOffset?: Property|string|any;
	}
	export = HASH_13659_GridMaterialPropertyOptions

}
declare module 'cesium/Source/DataSources/GridMaterialProperty' {
	import HASH_13659_GridMaterialPropertyOptions = require('cesium/Source/DataSources/HASH_13659_GridMaterialPropertyOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class GridMaterialProperty 
	{
		constructor(options? : HASH_13659_GridMaterialPropertyOptions);
		//Members
		cellAlpha: Property|string|any
		color: Property|string|any
		definitionChanged: Event
		isConstant: boolean
		lineCount: Property|string|any
		lineOffset: Property|string|any
		lineThickness: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = GridMaterialProperty

}
declare module 'cesium/Source/DataSources/HASH_12727_ImageMaterialPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_12727_ImageMaterialPropertyOptions
	{
		image?: Property|string|any;
		repeat?: Property|string|any;
		color?: Property|string|any;
		transparent?: Property|string|any;
	}
	export = HASH_12727_ImageMaterialPropertyOptions

}
declare module 'cesium/Source/DataSources/ImageMaterialProperty' {
	import HASH_12727_ImageMaterialPropertyOptions = require('cesium/Source/DataSources/HASH_12727_ImageMaterialPropertyOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class ImageMaterialProperty 
	{
		constructor(options? : HASH_12727_ImageMaterialPropertyOptions);
		//Members
		color: Property|string|any
		definitionChanged: Event
		image: Property|string|any
		isConstant: boolean
		repeat: Property|string|any
		transparent: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = ImageMaterialProperty

}
declare module 'cesium/Source/DataSources/KmlCamera' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import HeadingPitchRoll = require('cesium/Source/Core/HeadingPitchRoll')
	class KmlCamera 
	{
		constructor(position : Cartesian3, headingPitchRoll : HeadingPitchRoll);
		//Members


		//Methods

	}
	export = KmlCamera

}
declare module 'cesium/Source/DataSources/KmlLookAt' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import HeadingPitchRange = require('cesium/Source/Core/HeadingPitchRange')
	class KmlLookAt 
	{
		constructor(position : Cartesian3, headingPitchRange : HeadingPitchRange);
		//Members


		//Methods

	}
	export = KmlLookAt

}
declare module 'cesium/Source/DataSources/KmlTourFlyTo' {
	import KmlCamera = require('cesium/Source/DataSources/KmlCamera')
	import KmlLookAt = require('cesium/Source/DataSources/KmlLookAt')
	import Camera = require('cesium/Source/Scene/Camera')
	class KmlTourFlyTo 
	{
		constructor(duration : number, flyToMode : string, view : KmlCamera|KmlLookAt);
		//Members


		//Methods
		getCameraOptions(cameraOptions? : any) : Object
		play(done? : any, camera? : Camera, cameraOptions? : any) : void
		stop() : void

	}
	export = KmlTourFlyTo

}
declare module 'cesium/Source/DataSources/KmlTourWait' {
	class KmlTourWait 
	{
		constructor(duration : number);
		//Members


		//Methods
		play(done? : any) : void
		stop() : void

	}
	export = KmlTourWait

}
declare module 'cesium/Source/Widgets/ClockViewModel' {
	import Clock = require('cesium/Source/Core/Clock')
	import ClockRange = require('cesium/Source/Core/ClockRange')
	import ClockStep = require('cesium/Source/Core/ClockStep')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class ClockViewModel 
	{
		constructor(clock? : Clock);
		//Members
		canAnimate: boolean
		clock: Clock
		clockRange: ClockRange
		clockStep: ClockStep
		currentTime: JulianDate
		multiplier: number
		shouldAnimate: boolean
		startTime: JulianDate
		stopTime: JulianDate
		systemTime: JulianDate


		//Methods
		destroy() : void
		isDestroyed() : boolean
		synchronize() : void

	}
	export = ClockViewModel

}
declare module 'cesium/Source/Widgets/Command' {
	import Event = require('cesium/Source/Core/Event')
	class Command 
	{
		constructor();
		//Members
		afterExecute: Event
		beforeExecute: Event
		canExecute: boolean


		//Methods

	}
	export = Command

}
declare module 'cesium/Source/Widgets/BaseLayerPicker/HASH_10194_ProviderViewModelOptions' {
	import Command = require('cesium/Source/Widgets/Command')
	interface HASH_10194_ProviderViewModelOptions
	{
		name: string;
		tooltip: string;
		iconUrl: string;
		creationFunction: any|Command;
	}
	export = HASH_10194_ProviderViewModelOptions

}
declare module 'cesium/Source/Widgets/BaseLayerPicker/ProviderViewModel' {
	import HASH_10194_ProviderViewModelOptions = require('cesium/Source/Widgets/BaseLayerPicker/HASH_10194_ProviderViewModelOptions')
	import Command = require('cesium/Source/Widgets/Command')
	class ProviderViewModel 
	{
		constructor(options : HASH_10194_ProviderViewModelOptions);
		//Members
		creationCommand: Command
		iconUrl: string
		name: string
		tooltip: string


		//Methods

	}
	export = ProviderViewModel

}
declare module 'cesium/Source/Widgets/Viewer/HASH_33110_ViewerOptions' {
	import ClockViewModel = require('cesium/Source/Widgets/ClockViewModel')
	import ProviderViewModel = require('cesium/Source/Widgets/BaseLayerPicker/ProviderViewModel')
	import ImageryProvider = require('cesium/Source/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import SkyBox = require('cesium/Source/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Source/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Source/Scene/SceneMode')
	import MapProjection = require('cesium/Source/Core/MapProjection')
	import Globe = require('cesium/Source/Scene/Globe')
	import DataSourceCollection = require('cesium/Source/DataSources/DataSourceCollection')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	import MapMode2D = require('cesium/Source/Scene/MapMode2D')
	interface HASH_33110_ViewerOptions
	{
		animation?: boolean;
		baseLayerPicker?: boolean;
		fullscreenButton?: boolean;
		vrButton?: boolean;
		geocoder?: boolean;
		homeButton?: boolean;
		infoBox?: boolean;
		sceneModePicker?: boolean;
		selectionIndicator?: boolean;
		timeline?: boolean;
		navigationHelpButton?: boolean;
		navigationInstructionsInitiallyVisible?: boolean;
		scene3DOnly?: boolean;
		clockViewModel?: ClockViewModel;
		selectedImageryProviderViewModel?: ProviderViewModel;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		fullscreenElement?: Element|string;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		automaticallyTrackDataSourceClocks?: boolean;
		contextOptions?: Object;
		sceneMode?: SceneMode;
		mapProjection?: MapProjection;
		globe?: Globe;
		orderIndependentTranslucency?: boolean;
		creditContainer?: Element|string;
		dataSources?: DataSourceCollection;
		terrainExaggeration?: number;
		shadows?: boolean;
		terrainShadows?: ShadowMode;
		mapMode2D?: MapMode2D;
		projectionPicker?: boolean;
	}
	export = HASH_33110_ViewerOptions

}
declare module 'cesium/Source/Widgets/HASH_05452_ToggleButtonViewModelOptions' {
	interface HASH_05452_ToggleButtonViewModelOptions
	{
		toggled?: boolean;
		tooltip?: string;
	}
	export = HASH_05452_ToggleButtonViewModelOptions

}
declare module 'cesium/Source/Widgets/ToggleButtonViewModel' {
	import Command = require('cesium/Source/Widgets/Command')
	import HASH_05452_ToggleButtonViewModelOptions = require('cesium/Source/Widgets/HASH_05452_ToggleButtonViewModelOptions')
	class ToggleButtonViewModel 
	{
		constructor(command : Command, options? : HASH_05452_ToggleButtonViewModelOptions);
		//Members
		command: Command
		toggled: boolean
		tooltip: string


		//Methods

	}
	export = ToggleButtonViewModel

}
declare module 'cesium/Source/Widgets/Animation/AnimationViewModel' {
	import ClockViewModel = require('cesium/Source/Widgets/ClockViewModel')
	import Command = require('cesium/Source/Widgets/Command')
	import ToggleButtonViewModel = require('cesium/Source/Widgets/ToggleButtonViewModel')
	class AnimationViewModel 
	{
		constructor(clockViewModel : ClockViewModel);
		//Members
		static defaultDateFormatter: any
		static defaultTicks: Array<number>
		static defaultTimeFormatter: any
		clockViewModel: ClockViewModel
		dateFormatter: any
		dateLabel: string
		faster: Command
		multiplierLabel: string
		pauseViewModel: ToggleButtonViewModel
		playForwardViewModel: ToggleButtonViewModel
		playRealtimeViewModel: ToggleButtonViewModel
		playReverseViewModel: ToggleButtonViewModel
		shuttleRingAngle: number
		shuttleRingDragging: boolean
		slower: Command
		snapToTicks: boolean
		timeFormatter: any
		timeLabel: string


		//Methods
		getShuttleRingTicks() : Array<number>
		setShuttleRingTicks(positiveTicks? : Array<number>) : void

	}
	export = AnimationViewModel

}
declare module 'cesium/Source/Widgets/Animation/Animation' {
	import AnimationViewModel = require('cesium/Source/Widgets/Animation/AnimationViewModel')
	class Animation 
	{
		constructor(container : Element|string, viewModel : AnimationViewModel);
		//Members
		container: Element
		viewModel: AnimationViewModel


		//Methods
		applyThemeChanges() : void
		destroy() : void
		isDestroyed() : boolean
		resize() : void

	}
	export = Animation

}
declare module 'cesium/Source/Widgets/BaseLayerPicker/HASH_59688_BaseLayerPickerOptions' {
	import Globe = require('cesium/Source/Scene/Globe')
	import ProviderViewModel = require('cesium/Source/Widgets/BaseLayerPicker/ProviderViewModel')
	interface HASH_59688_BaseLayerPickerOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = HASH_59688_BaseLayerPickerOptions

}
declare module 'cesium/Source/Widgets/BaseLayerPicker/HASH_59688_BaseLayerPickerViewModelOptions' {
	import Globe = require('cesium/Source/Scene/Globe')
	import ProviderViewModel = require('cesium/Source/Widgets/BaseLayerPicker/ProviderViewModel')
	interface HASH_59688_BaseLayerPickerViewModelOptions
	{
		globe: Globe;
		imageryProviderViewModels?: Array<ProviderViewModel>;
		selectedImageryProviderViewModel?: ProviderViewModel;
		terrainProviderViewModels?: Array<ProviderViewModel>;
		selectedTerrainProviderViewModel?: ProviderViewModel;
	}
	export = HASH_59688_BaseLayerPickerViewModelOptions

}
declare module 'cesium/Source/Widgets/BaseLayerPicker/BaseLayerPickerViewModel' {
	import HASH_59688_BaseLayerPickerViewModelOptions = require('cesium/Source/Widgets/BaseLayerPicker/HASH_59688_BaseLayerPickerViewModelOptions')
	import Globe = require('cesium/Source/Scene/Globe')
	import ProviderViewModel = require('cesium/Source/Widgets/BaseLayerPicker/ProviderViewModel')
	import Command = require('cesium/Source/Widgets/Command')
	class BaseLayerPickerViewModel 
	{
		constructor(options? : HASH_59688_BaseLayerPickerViewModelOptions);
		//Members
		buttonImageUrl: string
		buttonTooltip: string
		dropDownVisible: boolean
		globe: Globe
		imageryProviderViewModels: Array<ProviderViewModel>
		selectedImagery: ProviderViewModel
		selectedTerrain: ProviderViewModel
		terrainProviderViewModels: Array<ProviderViewModel>
		toggleDropDown: Command


		//Methods

	}
	export = BaseLayerPickerViewModel

}
declare module 'cesium/Source/Widgets/BaseLayerPicker/BaseLayerPicker' {
	import HASH_59688_BaseLayerPickerOptions = require('cesium/Source/Widgets/BaseLayerPicker/HASH_59688_BaseLayerPickerOptions')
	import BaseLayerPickerViewModel = require('cesium/Source/Widgets/BaseLayerPicker/BaseLayerPickerViewModel')
	class BaseLayerPicker 
	{
		constructor(container : Element|string, options? : HASH_59688_BaseLayerPickerOptions);
		//Members
		container: Element
		viewModel: BaseLayerPickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = BaseLayerPicker

}
declare module 'cesium/Source/Widgets/CesiumWidget/HASH_68495_CesiumWidgetOptions' {
	import Clock = require('cesium/Source/Core/Clock')
	import ImageryProvider = require('cesium/Source/Scene/ImageryProvider')
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import SkyBox = require('cesium/Source/Scene/SkyBox')
	import SkyAtmosphere = require('cesium/Source/Scene/SkyAtmosphere')
	import SceneMode = require('cesium/Source/Scene/SceneMode')
	import MapProjection = require('cesium/Source/Core/MapProjection')
	import Globe = require('cesium/Source/Scene/Globe')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	import MapMode2D = require('cesium/Source/Scene/MapMode2D')
	interface HASH_68495_CesiumWidgetOptions
	{
		clock?: Clock;
		imageryProvider?: ImageryProvider;
		terrainProvider?: TerrainProvider;
		skyBox?: SkyBox;
		skyAtmosphere?: SkyAtmosphere;
		sceneMode?: SceneMode;
		scene3DOnly?: boolean;
		orderIndependentTranslucency?: boolean;
		mapProjection?: MapProjection;
		globe?: Globe;
		useDefaultRenderLoop?: boolean;
		targetFrameRate?: number;
		showRenderLoopErrors?: boolean;
		contextOptions?: Object;
		creditContainer?: Element|string;
		terrainExaggeration?: number;
		shadows?: boolean;
		terrainShadows?: ShadowMode;
		mapMode2D?: MapMode2D;
	}
	export = HASH_68495_CesiumWidgetOptions

}
declare module 'cesium/Source/Widgets/CesiumWidget/CesiumWidget' {
	import HASH_68495_CesiumWidgetOptions = require('cesium/Source/Widgets/CesiumWidget/HASH_68495_CesiumWidgetOptions')
	import Camera = require('cesium/Source/Scene/Camera')
	import Clock = require('cesium/Source/Core/Clock')
	import ImageryLayerCollection = require('cesium/Source/Scene/ImageryLayerCollection')
	import Scene = require('cesium/Source/Scene/Scene')
	import ScreenSpaceEventHandler = require('cesium/Source/Core/ScreenSpaceEventHandler')
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	class CesiumWidget 
	{
		constructor(container : Element|string, options? : HASH_68495_CesiumWidgetOptions);
		//Members
		camera: Camera
		canvas: HTMLCanvasElement
		clock: Clock
		container: Element
		creditContainer: Element
		imageryLayers: ImageryLayerCollection
		resolutionScale: number
		scene: Scene
		screenSpaceEventHandler: ScreenSpaceEventHandler
		targetFrameRate: number
		terrainProvider: TerrainProvider
		useDefaultRenderLoop: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		showErrorPanel(title? : string, message? : string, error? : string) : void

	}
	export = CesiumWidget

}
declare module 'cesium/Source/Widgets/FullscreenButton/FullscreenButtonViewModel' {
	import Command = require('cesium/Source/Widgets/Command')
	class FullscreenButtonViewModel 
	{
		constructor(fullscreenElement? : Element|string);
		//Members
		command: Command
		fullscreenElement: Element
		isFullscreen: boolean
		isFullscreenEnabled: boolean
		tooltip: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = FullscreenButtonViewModel

}
declare module 'cesium/Source/Widgets/FullscreenButton/FullscreenButton' {
	import FullscreenButtonViewModel = require('cesium/Source/Widgets/FullscreenButton/FullscreenButtonViewModel')
	class FullscreenButton 
	{
		constructor(container : Element|string, fullscreenElement? : Element|string);
		//Members
		container: Element
		viewModel: FullscreenButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = FullscreenButton

}
declare module 'cesium/Source/Widgets/Geocoder/HASH_76659_GeocoderOptions' {
	import Scene = require('cesium/Source/Scene/Scene')
	import GeocoderService = require('cesium/Source/Core/GeocoderService')
	interface HASH_76659_GeocoderOptions
	{
		container: Element|string;
		scene: Scene;
		geocoderServices?: Array<GeocoderService>;
		autoComplete?: boolean;
		flightDuration?: number;
	}
	export = HASH_76659_GeocoderOptions

}
declare module 'cesium/Source/Widgets/Geocoder/HASH_96788_GeocoderViewModelOptions' {
	import Scene = require('cesium/Source/Scene/Scene')
	import GeocoderService = require('cesium/Source/Core/GeocoderService')
	interface HASH_96788_GeocoderViewModelOptions
	{
		scene: Scene;
		geocoderServices?: Array<GeocoderService>;
		flightDuration?: number;
	}
	export = HASH_96788_GeocoderViewModelOptions

}
declare module 'cesium/Source/Widgets/Geocoder/GeocoderViewModel' {
	import HASH_96788_GeocoderViewModelOptions = require('cesium/Source/Widgets/Geocoder/HASH_96788_GeocoderViewModelOptions')
	import Event = require('cesium/Source/Core/Event')
	import Scene = require('cesium/Source/Scene/Scene')
	import Command = require('cesium/Source/Widgets/Command')
	class GeocoderViewModel 
	{
		constructor(options? : HASH_96788_GeocoderViewModelOptions);
		//Members
		autoComplete: boolean
		complete: Event
		flightDuration: number|void
		isSearchInProgress: boolean
		keepExpanded: boolean
		scene: Scene
		search: Command
		searchText: string
		selectedSuggestion: Object
		suggestions: Array<Object>


		//Methods
		destroy() : void

	}
	export = GeocoderViewModel

}
declare module 'cesium/Source/Widgets/Geocoder/Geocoder' {
	import HASH_76659_GeocoderOptions = require('cesium/Source/Widgets/Geocoder/HASH_76659_GeocoderOptions')
	import GeocoderViewModel = require('cesium/Source/Widgets/Geocoder/GeocoderViewModel')
	class Geocoder 
	{
		constructor(options? : HASH_76659_GeocoderOptions);
		//Members
		container: Element
		searchSuggestionsContainer: Element
		viewModel: GeocoderViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Geocoder

}
declare module 'cesium/Source/Widgets/HomeButton/HomeButtonViewModel' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Command = require('cesium/Source/Widgets/Command')
	class HomeButtonViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		command: Command
		duration: number|void
		scene: Scene
		tooltip: string


		//Methods

	}
	export = HomeButtonViewModel

}
declare module 'cesium/Source/Widgets/HomeButton/HomeButton' {
	import Scene = require('cesium/Source/Scene/Scene')
	import HomeButtonViewModel = require('cesium/Source/Widgets/HomeButton/HomeButtonViewModel')
	class HomeButton 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: HomeButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = HomeButton

}
declare module 'cesium/Source/Widgets/InfoBox/InfoBoxViewModel' {
	import Event = require('cesium/Source/Core/Event')
	class InfoBoxViewModel 
	{
		constructor();
		//Members
		cameraClicked: Event
		cameraIconPath: string
		closeClicked: Event
		description: string
		enableCamera: boolean
		isCameraTracking: boolean
		maxHeight: number
		showInfo: boolean
		titleText: string


		//Methods
		maxHeightOffset(offset? : number) : string

	}
	export = InfoBoxViewModel

}
declare module 'cesium/Source/Widgets/InfoBox/InfoBox' {
	import InfoBoxViewModel = require('cesium/Source/Widgets/InfoBox/InfoBoxViewModel')
	class InfoBox 
	{
		constructor(container : Element|string);
		//Members
		container: Element
		frame: HTMLIFrameElement
		viewModel: InfoBoxViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = InfoBox

}
declare module 'cesium/Source/Widgets/NavigationHelpButton/HASH_18727_NavigationHelpButtonOptions' {
	interface HASH_18727_NavigationHelpButtonOptions
	{
		container: Element|string;
		instructionsInitiallyVisible?: boolean;
	}
	export = HASH_18727_NavigationHelpButtonOptions

}
declare module 'cesium/Source/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel' {
	import Command = require('cesium/Source/Widgets/Command')
	class NavigationHelpButtonViewModel 
	{
		constructor();
		//Members
		command: Command
		showClick: Command
		showInstructions: boolean
		showTouch: Command
		tooltip: string


		//Methods

	}
	export = NavigationHelpButtonViewModel

}
declare module 'cesium/Source/Widgets/NavigationHelpButton/NavigationHelpButton' {
	import HASH_18727_NavigationHelpButtonOptions = require('cesium/Source/Widgets/NavigationHelpButton/HASH_18727_NavigationHelpButtonOptions')
	import NavigationHelpButtonViewModel = require('cesium/Source/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel')
	class NavigationHelpButton 
	{
		constructor(options? : HASH_18727_NavigationHelpButtonOptions);
		//Members
		container: Element
		viewModel: NavigationHelpButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = NavigationHelpButton

}
declare module 'cesium/Source/Widgets/ProjectionPicker/ProjectionPickerViewModel' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Command = require('cesium/Source/Widgets/Command')
	import SceneMode = require('cesium/Source/Scene/SceneMode')
	class ProjectionPickerViewModel 
	{
		constructor(scene : Scene);
		//Members
		dropDownVisible: boolean
		isOrthographicProjection: Command
		scene: Scene
		sceneMode: SceneMode
		selectedTooltip: string
		switchToOrthographic: Command
		switchToPerspective: Command
		toggleDropDown: Command
		tooltipOrthographic: string
		tooltipPerspective: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = ProjectionPickerViewModel

}
declare module 'cesium/Source/Widgets/ProjectionPicker/ProjectionPicker' {
	import Scene = require('cesium/Source/Scene/Scene')
	import ProjectionPickerViewModel = require('cesium/Source/Widgets/ProjectionPicker/ProjectionPickerViewModel')
	class ProjectionPicker 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: ProjectionPickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = ProjectionPicker

}
declare module 'cesium/Source/Widgets/SceneModePicker/SceneModePickerViewModel' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Command = require('cesium/Source/Widgets/Command')
	import SceneMode = require('cesium/Source/Scene/SceneMode')
	class SceneModePickerViewModel 
	{
		constructor(scene : Scene, duration? : number);
		//Members
		dropDownVisible: boolean
		duration: number
		morphTo2D: Command
		morphTo3D: Command
		morphToColumbusView: Command
		scene: Scene
		sceneMode: SceneMode
		selectedTooltip: string
		toggleDropDown: Command
		tooltip2D: string
		tooltip3D: string
		tooltipColumbusView: string


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SceneModePickerViewModel

}
declare module 'cesium/Source/Widgets/SceneModePicker/SceneModePicker' {
	import Scene = require('cesium/Source/Scene/Scene')
	import SceneModePickerViewModel = require('cesium/Source/Widgets/SceneModePicker/SceneModePickerViewModel')
	class SceneModePicker 
	{
		constructor(container : Element|string, scene : Scene, duration? : number);
		//Members
		container: Element
		viewModel: SceneModePickerViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SceneModePicker

}
declare module 'cesium/Source/Widgets/SelectionIndicator/SelectionIndicatorViewModel' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class SelectionIndicatorViewModel 
	{
		constructor(scene : Scene, selectionIndicatorElement : Element, container : Element);
		//Members
		computeScreenSpacePosition: any
		container: Element
		isVisible: boolean
		position: Cartesian3
		scene: Scene
		selectionIndicatorElement: Element
		showSelection: boolean


		//Methods
		animateAppear() : void
		animateDepart() : void
		update() : void

	}
	export = SelectionIndicatorViewModel

}
declare module 'cesium/Source/Widgets/SelectionIndicator/SelectionIndicator' {
	import Scene = require('cesium/Source/Scene/Scene')
	import SelectionIndicatorViewModel = require('cesium/Source/Widgets/SelectionIndicator/SelectionIndicatorViewModel')
	class SelectionIndicator 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: SelectionIndicatorViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = SelectionIndicator

}
declare module 'cesium/Source/Widgets/Timeline/Timeline' {
	import Clock = require('cesium/Source/Core/Clock')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class Timeline 
	{
		constructor(container : Element, clock : Clock);
		//Members
		container: Element


		//Methods
		destroy() : void
		isDestroyed() : boolean
		resize() : void
		zoomTo(startTime? : JulianDate, stopTime? : JulianDate) : void

	}
	export = Timeline

}
declare module 'cesium/Source/Widgets/VRButton/VRButtonViewModel' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Command = require('cesium/Source/Widgets/Command')
	class VRButtonViewModel 
	{
		constructor(scene : Scene, vrElement? : Element|string);
		//Members
		command: Command
		isVREnabled: boolean
		isVRMode: boolean
		tooltip: string
		vrElement: Element


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = VRButtonViewModel

}
declare module 'cesium/Source/Widgets/VRButton/VRButton' {
	import Scene = require('cesium/Source/Scene/Scene')
	import VRButtonViewModel = require('cesium/Source/Widgets/VRButton/VRButtonViewModel')
	class VRButton 
	{
		constructor(container : Element|string, scene : Scene, vrElement? : Element|string);
		//Members
		container: Element
		viewModel: VRButtonViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = VRButton

}
declare module 'cesium/Source/Widgets/Viewer/HASH_97427_flyToOptions' {
	import HeadingPitchRange = require('cesium/Source/Core/HeadingPitchRange')
	interface HASH_97427_flyToOptions
	{
		duration?: number;
		maximumHeight?: number;
		offset?: HeadingPitchRange;
	}
	export = HASH_97427_flyToOptions

}
declare module 'cesium/Source/Widgets/Viewer/Viewer' {
	import HASH_33110_ViewerOptions = require('cesium/Source/Widgets/Viewer/HASH_33110_ViewerOptions')
	import Animation = require('cesium/Source/Widgets/Animation/Animation')
	import BaseLayerPicker = require('cesium/Source/Widgets/BaseLayerPicker/BaseLayerPicker')
	import Camera = require('cesium/Source/Scene/Camera')
	import CesiumWidget = require('cesium/Source/Widgets/CesiumWidget/CesiumWidget')
	import Clock = require('cesium/Source/Core/Clock')
	import DataSource = require('cesium/Source/DataSources/DataSource')
	import ClockViewModel = require('cesium/Source/Widgets/ClockViewModel')
	import DataSourceDisplay = require('cesium/Source/DataSources/DataSourceDisplay')
	import DataSourceCollection = require('cesium/Source/DataSources/DataSourceCollection')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import FullscreenButton = require('cesium/Source/Widgets/FullscreenButton/FullscreenButton')
	import Geocoder = require('cesium/Source/Widgets/Geocoder/Geocoder')
	import HomeButton = require('cesium/Source/Widgets/HomeButton/HomeButton')
	import ImageryLayerCollection = require('cesium/Source/Scene/ImageryLayerCollection')
	import InfoBox = require('cesium/Source/Widgets/InfoBox/InfoBox')
	import NavigationHelpButton = require('cesium/Source/Widgets/NavigationHelpButton/NavigationHelpButton')
	import ProjectionPicker = require('cesium/Source/Widgets/ProjectionPicker/ProjectionPicker')
	import Scene = require('cesium/Source/Scene/Scene')
	import SceneModePicker = require('cesium/Source/Widgets/SceneModePicker/SceneModePicker')
	import ScreenSpaceEventHandler = require('cesium/Source/Core/ScreenSpaceEventHandler')
	import Entity = require('cesium/Source/DataSources/Entity')
	import Event = require('cesium/Source/Core/Event')
	import SelectionIndicator = require('cesium/Source/Widgets/SelectionIndicator/SelectionIndicator')
	import ShadowMap = require('cesium/Source/Scene/ShadowMap')
	import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	import Timeline = require('cesium/Source/Widgets/Timeline/Timeline')
	import VRButton = require('cesium/Source/Widgets/VRButton/VRButton')
	import ImageryLayer = require('cesium/Source/Scene/ImageryLayer')
	import HASH_97427_flyToOptions = require('cesium/Source/Widgets/Viewer/HASH_97427_flyToOptions')
	import HeadingPitchRange = require('cesium/Source/Core/HeadingPitchRange')
	class Viewer 
	{
		constructor(container : Element|string, options? : HASH_33110_ViewerOptions);
		//Members
		allowDataSourcesToSuspendAnimation: boolean
		animation: Animation
		baseLayerPicker: BaseLayerPicker
		bottomContainer: Element
		camera: Camera
		canvas: HTMLCanvasElement
		cesiumLogo: Element
		cesiumWidget: CesiumWidget
		clock: Clock
		clockTrackedDataSource: DataSource
		clockViewModel: ClockViewModel
		container: Element
		dataSourceDisplay: DataSourceDisplay
		dataSources: DataSourceCollection
		entities: EntityCollection
		fullscreenButton: FullscreenButton
		geocoder: Geocoder
		homeButton: HomeButton
		imageryLayers: ImageryLayerCollection
		infoBox: InfoBox
		navigationHelpButton: NavigationHelpButton
		projectionPicker: ProjectionPicker
		resolutionScale: number
		scene: Scene
		sceneModePicker: SceneModePicker
		screenSpaceEventHandler: ScreenSpaceEventHandler
		selectedEntity: Entity
		selectedEntityChanged: Event
		selectionIndicator: SelectionIndicator
		shadowMap: ShadowMap
		shadows: boolean
		targetFrameRate: number
		terrainProvider: TerrainProvider
		terrainShadows: ShadowMode
		timeline: Timeline
		trackedEntity: Entity
		trackedEntityChanged: Event
		useDefaultRenderLoop: boolean
		vrButton: VRButton


		//Methods
		destroy() : void
		extend(mixin? : any, options? : any) : void
		flyTo(target? : Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Promise<Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer>, options? : HASH_97427_flyToOptions) : Promise<boolean>
		forceResize() : void
		isDestroyed() : boolean
		render() : void
		resize() : void
		zoomTo(target? : Entity|Array<Entity>|EntityCollection|DataSource|ImageryLayer|Promise<Entity | Array<Entity> | EntityCollection | DataSource | ImageryLayer>, offset? : HeadingPitchRange) : Promise<boolean>

	}
	export = Viewer

}
declare module 'cesium/Source/DataSources/KMLTour' {
	import Event = require('cesium/Source/Core/Event')
	import KmlTourFlyTo = require('cesium/Source/DataSources/KmlTourFlyTo')
	import KmlTourWait = require('cesium/Source/DataSources/KmlTourWait')
	import Viewer = require('cesium/Source/Widgets/Viewer/Viewer')
	class KMLTour 
	{
		constructor(name : string, id : string, playlist : Array<any>);
		//Members
		entryEnd: Event
		entryStart: Event
		id: any
		name: any
		playlist: Array<any>
		playlistIndex: number
		tourEnd: Event
		tourStart: Event


		//Methods
		addPlaylistEntry(entry? : KmlTourFlyTo|KmlTourWait) : void
		play(viewer? : Viewer, cameraOptions? : any) : void
		stop() : void

	}
	export = KMLTour

}
declare module 'cesium/Source/DataSources/HASH_35569_loadOptions' {
	import Camera = require('cesium/Source/Scene/Camera')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	interface HASH_35569_loadOptions
	{
		camera: Camera;
		canvas: HTMLCanvasElement;
		proxy?: DefaultProxy;
		sourceUri?: string;
		clampToGround?: boolean;
		query?: Object;
	}
	export = HASH_35569_loadOptions

}
declare module 'cesium/Source/DataSources/HASH_10124_loadOptions' {
	interface HASH_10124_loadOptions
	{
		sourceUri?: number;
		clampToGround?: boolean;
		query?: Object;
	}
	export = HASH_10124_loadOptions

}
declare module 'cesium/Source/DataSources/KmlDataSource' {
	import Camera = require('cesium/Source/Scene/Camera')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import DataSource = require('cesium/Source/DataSources/DataSource')
	import Event = require('cesium/Source/Core/Event')
	import DataSourceClock = require('cesium/Source/DataSources/DataSourceClock')
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import HASH_35569_loadOptions = require('cesium/Source/DataSources/HASH_35569_loadOptions')
	import HASH_10124_loadOptions = require('cesium/Source/DataSources/HASH_10124_loadOptions')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class KmlDataSource extends DataSource
	{
		constructor();
		//Members
		changedEvent: Event
		clock: DataSourceClock
		clustering: EntityCluster
		entities: EntityCollection
		errorEvent: Event
		isLoading: boolean
		loadingEvent: Event
		name: string
		refreshEvent: Event
		show: boolean
		unsupportedNodeEvent: Event


		//Methods
		static load(data? : string|Document|Blob, options? : HASH_35569_loadOptions) : Promise<KmlDataSource>
		load(data? : string|Document|Blob, options? : HASH_10124_loadOptions) : Promise<KmlDataSource>
		update(time? : JulianDate) : boolean

	}
	export = KmlDataSource

}
declare module 'cesium/Source/DataSources/LabelVisualizer' {
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class LabelVisualizer 
	{
		constructor(entityCluster : EntityCluster, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = LabelVisualizer

}
declare module 'cesium/Source/DataSources/ModelVisualizer' {
	import Scene = require('cesium/Source/Scene/Scene')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class ModelVisualizer 
	{
		constructor(scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = ModelVisualizer

}
declare module 'cesium/Source/DataSources/HASH_88437_NodeTransformationPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_88437_NodeTransformationPropertyOptions
	{
		translation?: Property|string|any;
		rotation?: Property|string|any;
		scale?: Property|string|any;
	}
	export = HASH_88437_NodeTransformationPropertyOptions

}
declare module 'cesium/Source/DataSources/NodeTransformationProperty' {
	import HASH_88437_NodeTransformationPropertyOptions = require('cesium/Source/DataSources/HASH_88437_NodeTransformationPropertyOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import TranslationRotationScale = require('cesium/Source/Core/TranslationRotationScale')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class NodeTransformationProperty 
	{
		constructor(options? : HASH_88437_NodeTransformationPropertyOptions);
		//Members
		definitionChanged: Event
		isConstant: boolean
		rotation: Property|string|any
		scale: Property|string|any
		translation: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : TranslationRotationScale) : TranslationRotationScale

	}
	export = NodeTransformationProperty

}
declare module 'cesium/Source/DataSources/PathVisualizer' {
	import Scene = require('cesium/Source/Scene/Scene')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PathVisualizer 
	{
		constructor(scene : Scene, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = PathVisualizer

}
declare module 'cesium/Source/DataSources/PointVisualizer' {
	import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PointVisualizer 
	{
		constructor(entityCluster : EntityCluster, entityCollection : EntityCollection);
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = PointVisualizer

}
declare module 'cesium/Source/DataSources/PolygonGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PolygonGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection, groundPrimitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = PolygonGeometryUpdater

}
declare module 'cesium/Source/DataSources/PolylineArrowMaterialProperty' {
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PolylineArrowMaterialProperty 
	{
		constructor(color? : Property|string|any);
		//Members
		color: Property|string|any
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = PolylineArrowMaterialProperty

}
declare module 'cesium/Source/DataSources/HASH_55158_PolylineDashMaterialPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_55158_PolylineDashMaterialPropertyOptions
	{
		color?: Property|string|any;
		gapColor?: Property|string|any;
		dashLength?: Property|string|any;
		dashPattern?: Property|string|any;
	}
	export = HASH_55158_PolylineDashMaterialPropertyOptions

}
declare module 'cesium/Source/DataSources/PolylineDashMaterialProperty' {
	import HASH_55158_PolylineDashMaterialPropertyOptions = require('cesium/Source/DataSources/HASH_55158_PolylineDashMaterialPropertyOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PolylineDashMaterialProperty 
	{
		constructor(options? : HASH_55158_PolylineDashMaterialPropertyOptions);
		//Members
		color: Property|string|any
		dashLength: Property|string|any
		dashPattern: Property|string|any
		definitionChanged: Event
		gapColor: Property|string|any
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = PolylineDashMaterialProperty

}
declare module 'cesium/Source/DataSources/PolylineGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import Property = require('cesium/Source/DataSources/Property')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PolylineGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		depthFailMaterialProperty: MaterialProperty
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = PolylineGeometryUpdater

}
declare module 'cesium/Source/DataSources/HASH_07128_PolylineGlowMaterialPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_07128_PolylineGlowMaterialPropertyOptions
	{
		color?: Property|string|any;
		glowPower?: Property|string|any;
	}
	export = HASH_07128_PolylineGlowMaterialPropertyOptions

}
declare module 'cesium/Source/DataSources/PolylineGlowMaterialProperty' {
	import HASH_07128_PolylineGlowMaterialPropertyOptions = require('cesium/Source/DataSources/HASH_07128_PolylineGlowMaterialPropertyOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PolylineGlowMaterialProperty 
	{
		constructor(options? : HASH_07128_PolylineGlowMaterialPropertyOptions);
		//Members
		color: Property|string|any
		definitionChanged: Event
		glowPower: Property|string|any
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = PolylineGlowMaterialProperty

}
declare module 'cesium/Source/DataSources/HASH_16057_PolylineOutlineMaterialPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_16057_PolylineOutlineMaterialPropertyOptions
	{
		color?: Property|string|any;
		outlineColor?: Property|string|any;
		outlineWidth?: Property|string|any;
	}
	export = HASH_16057_PolylineOutlineMaterialPropertyOptions

}
declare module 'cesium/Source/DataSources/PolylineOutlineMaterialProperty' {
	import HASH_16057_PolylineOutlineMaterialPropertyOptions = require('cesium/Source/DataSources/HASH_16057_PolylineOutlineMaterialPropertyOptions')
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PolylineOutlineMaterialProperty 
	{
		constructor(options? : HASH_16057_PolylineOutlineMaterialPropertyOptions);
		//Members
		color: Property|string|any
		definitionChanged: Event
		isConstant: boolean
		outlineColor: Property|string|any
		outlineWidth: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = PolylineOutlineMaterialProperty

}
declare module 'cesium/Source/DataSources/PolylineVolumeGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PolylineVolumeGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = PolylineVolumeGeometryUpdater

}
declare module 'cesium/Source/DataSources/PositionPropertyArray' {
	import Property = require('cesium/Source/DataSources/Property')
	import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	import Event = require('cesium/Source/Core/Event')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PositionPropertyArray 
	{
		constructor(value? : Array<Property>, referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time : JulianDate, result : Array<Cartesian3>) : Array<Cartesian3>
		getValueInReferenceFrame(time? : JulianDate, referenceFrame? : ReferenceFrame, result? : Cartesian3) : Cartesian3
		setValue(value? : Array<Property>) : void

	}
	export = PositionPropertyArray

}
declare module 'cesium/Source/DataSources/PropertyArray' {
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class PropertyArray 
	{
		constructor(value? : Array<Property>);
		//Members
		definitionChanged: Event
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : Array<any>) : Array<Object>
		setValue(value? : Array<Property>) : void

	}
	export = PropertyArray

}
declare module 'cesium/Source/DataSources/RectangleGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class RectangleGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		onTerrain: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection, groundPrimitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = RectangleGeometryUpdater

}
declare module 'cesium/Source/DataSources/ReferenceProperty' {
	import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	import Event = require('cesium/Source/Core/Event')
	import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class ReferenceProperty 
	{
		constructor(targetCollection : EntityCollection, targetId : string, targetPropertyNames : Array<string>);
		//Members
		definitionChanged: Event
		isConstant: boolean
		referenceFrame: ReferenceFrame
		resolvedProperty: Property|string|any
		targetCollection: EntityCollection
		targetId: string
		targetPropertyNames: Array<string>


		//Methods
		static fromString(targetCollection? : EntityCollection, referenceString? : string) : ReferenceProperty
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object
		getValueInReferenceFrame(time? : JulianDate, referenceFrame? : ReferenceFrame, result? : Cartesian3) : Cartesian3

	}
	export = ReferenceProperty

}
declare module 'cesium/Source/DataSources/Rotation' {
	class Rotation 
	{
		constructor();
		//Members
		static packedLength: number


		//Methods
		static convertPackedArrayForInterpolation(packedArray? : Array<number>, startingIndex? : number, lastIndex? : number, result? : Array<number>) : void
		static pack(value? : Rotation, array? : Array<number>, startingIndex? : number) : Array<number>
		static unpack(array? : Array<number>, startingIndex? : number, result? : Rotation) : Rotation
		static unpackInterpolationResult(array? : Array<number>, sourceArray? : Array<number>, firstIndex? : number, lastIndex? : number, result? : Rotation) : Rotation

	}
	export = Rotation

}
declare module 'cesium/Source/DataSources/HASH_78190_setInterpolationOptionsOptions' {
	import InterpolationAlgorithm = require('cesium/Source/Core/InterpolationAlgorithm')
	interface HASH_78190_setInterpolationOptionsOptions
	{
		interpolationAlgorithm?: InterpolationAlgorithm;
		interpolationDegree?: number;
	}
	export = HASH_78190_setInterpolationOptionsOptions

}
declare module 'cesium/Source/DataSources/SampledPositionProperty' {
	import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	import ExtrapolationType = require('cesium/Source/Core/ExtrapolationType')
	import Event = require('cesium/Source/Core/Event')
	import InterpolationAlgorithm = require('cesium/Source/Core/InterpolationAlgorithm')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Property = require('cesium/Source/DataSources/Property')
	import HASH_78190_setInterpolationOptionsOptions = require('cesium/Source/DataSources/HASH_78190_setInterpolationOptionsOptions')
	class SampledPositionProperty 
	{
		constructor(referenceFrame? : ReferenceFrame, numberOfDerivatives? : number);
		//Members
		backwardExtrapolationDuration: number
		backwardExtrapolationType: ExtrapolationType
		definitionChanged: Event
		forwardExtrapolationDuration: number
		forwardExtrapolationType: ExtrapolationType
		interpolationAlgorithm: InterpolationAlgorithm
		interpolationDegree: number
		isConstant: boolean
		numberOfDerivatives: boolean
		referenceFrame: ReferenceFrame


		//Methods
		addSample(time? : JulianDate, position? : Cartesian3, derivatives? : Array<Cartesian3>) : void
		addSamples(times? : Array<JulianDate>, positions? : Array<Cartesian3>, derivatives? : Array<Array<any>>) : void
		addSamplesPackedArray(packedSamples? : Array<number>, epoch? : JulianDate) : void
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : Cartesian3) : Cartesian3
		getValueInReferenceFrame(time? : JulianDate, referenceFrame? : ReferenceFrame, result? : Cartesian3) : Cartesian3
		setInterpolationOptions(options : HASH_78190_setInterpolationOptionsOptions) : void

	}
	export = SampledPositionProperty

}
declare module 'cesium/Source/DataSources/SampledProperty' {
	import Packable = require('cesium/Source/Core/Packable')
	import ExtrapolationType = require('cesium/Source/Core/ExtrapolationType')
	import Event = require('cesium/Source/Core/Event')
	import InterpolationAlgorithm = require('cesium/Source/Core/InterpolationAlgorithm')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Property = require('cesium/Source/DataSources/Property')
	import HASH_78190_setInterpolationOptionsOptions = require('cesium/Source/DataSources/HASH_78190_setInterpolationOptionsOptions')
	class SampledProperty 
	{
		constructor(type : number|Packable, derivativeTypes? : Array<Packable>);
		//Members
		backwardExtrapolationDuration: number
		backwardExtrapolationType: ExtrapolationType
		definitionChanged: Event
		derivativeTypes: Array<Packable>
		forwardExtrapolationDuration: number
		forwardExtrapolationType: ExtrapolationType
		interpolationAlgorithm: InterpolationAlgorithm
		interpolationDegree: number
		isConstant: boolean
		type: Object


		//Methods
		addSample(time? : JulianDate, value? : Packable, derivatives? : Array<Packable>) : void
		addSamples(times? : Array<JulianDate>, values? : Array<Packable>, derivativeValues? : Array<Array<any>>) : void
		addSamplesPackedArray(packedSamples? : Array<number>, epoch? : JulianDate) : void
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object
		setInterpolationOptions(options : HASH_78190_setInterpolationOptionsOptions) : void

	}
	export = SampledProperty

}
declare module 'cesium/Source/DataSources/HASH_64588_StripeMaterialPropertyOptions' {
	import Property = require('cesium/Source/DataSources/Property')
	interface HASH_64588_StripeMaterialPropertyOptions
	{
		evenColor?: Property|string|any;
		oddColor?: Property|string|any;
		repeat?: Property|string|any;
		offset?: Property|string|any;
		orientation?: Property|string|any;
	}
	export = HASH_64588_StripeMaterialPropertyOptions

}
declare module 'cesium/Source/DataSources/StripeMaterialProperty' {
	import HASH_64588_StripeMaterialPropertyOptions = require('cesium/Source/DataSources/HASH_64588_StripeMaterialPropertyOptions')
	import Event = require('cesium/Source/Core/Event')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class StripeMaterialProperty 
	{
		constructor(options? : HASH_64588_StripeMaterialPropertyOptions);
		//Members
		definitionChanged: Event
		evenColor: Property|string|any
		isConstant: boolean
		oddColor: Property|string|any
		offset: Property|string|any
		orientation: Property|string|any
		repeat: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getType(time? : JulianDate) : string
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = StripeMaterialProperty

}
declare module 'cesium/Source/DataSources/StripeOrientation' {
	class StripeOrientation 
	{
		constructor();
		//Members
		static HORIZONTAL: number
		static VERTICAL: number


		//Methods

	}
	export = StripeOrientation

}
declare module 'cesium/Source/DataSources/TimeIntervalCollectionPositionProperty' {
	import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	import Event = require('cesium/Source/Core/Event')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class TimeIntervalCollectionPositionProperty 
	{
		constructor(referenceFrame? : ReferenceFrame);
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean
		referenceFrame: ReferenceFrame


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object
		getValueInReferenceFrame(time? : JulianDate, referenceFrame? : ReferenceFrame, result? : Cartesian3) : Cartesian3

	}
	export = TimeIntervalCollectionPositionProperty

}
declare module 'cesium/Source/DataSources/TimeIntervalCollectionProperty' {
	import Event = require('cesium/Source/Core/Event')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import Property = require('cesium/Source/DataSources/Property')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class TimeIntervalCollectionProperty extends Property
	{
		constructor();
		//Members
		definitionChanged: Event
		intervals: TimeIntervalCollection
		isConstant: boolean


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time? : JulianDate, result? : any) : Object

	}
	export = TimeIntervalCollectionProperty

}
declare module 'cesium/Source/DataSources/VelocityOrientationProperty' {
	import Property = require('cesium/Source/DataSources/Property')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Event = require('cesium/Source/Core/Event')
	import Quaternion = require('cesium/Source/Core/Quaternion')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class VelocityOrientationProperty extends Property
	{
		constructor(position? : Property|string|any, ellipsoid? : Ellipsoid);
		//Members
		definitionChanged: Event
		ellipsoid: Property|string|any
		isConstant: boolean
		position: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time : JulianDate, result : Quaternion) : Quaternion

	}
	export = VelocityOrientationProperty

}
declare module 'cesium/Source/DataSources/VelocityVectorProperty' {
	import Property = require('cesium/Source/DataSources/Property')
	import Event = require('cesium/Source/Core/Event')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class VelocityVectorProperty 
	{
		constructor(position? : Property|string|any, normalize? : boolean);
		//Members
		definitionChanged: Event
		isConstant: boolean
		normalize: boolean
		position: Property|string|any


		//Methods
		equals(other : Property|string|any) : boolean
		getValue(time : JulianDate, result : Cartesian3) : Cartesian3

	}
	export = VelocityVectorProperty

}
declare module 'cesium/Source/DataSources/Visualizer' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class Visualizer 
	{
		constructor();
		//Members


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update(time? : JulianDate) : boolean

	}
	export = Visualizer

}
declare module 'cesium/Source/DataSources/WallGeometryUpdater' {
	import Entity = require('cesium/Source/DataSources/Entity')
	import Scene = require('cesium/Source/Scene/Scene')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Property = require('cesium/Source/DataSources/Property')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class WallGeometryUpdater 
	{
		constructor(entity : Entity, scene : Scene);
		//Members
		static materialAppearanceType: Appearance
		static perInstanceColorAppearanceType: Appearance
		distanceDisplayConditionProperty: Property|string|any
		entity: Entity
		fillEnabled: boolean
		fillMaterialProperty: MaterialProperty
		geometryChanged: boolean
		hasConstantFill: boolean
		hasConstantOutline: boolean
		isClosed: boolean
		isDynamic: boolean
		outlineColorProperty: Property|string|any
		outlineEnabled: boolean
		outlineWidth: number
		shadowsProperty: Property|string|any


		//Methods
		createDynamicUpdater(primitives? : PrimitiveCollection) : DynamicGeometryUpdater
		createFillGeometryInstance(time? : JulianDate) : GeometryInstance
		createOutlineGeometryInstance(time? : JulianDate) : GeometryInstance
		destroy() : void
		isDestroyed() : boolean
		isFilled(time? : JulianDate) : boolean
		isOutlineVisible(time? : JulianDate) : boolean

	}
	export = WallGeometryUpdater

}
declare module 'cesium/Source/Scene/HASH_78996_ArcGisMapServerImageryProviderOptions' {
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_78996_ArcGisMapServerImageryProviderOptions
	{
		url: string;
		token?: string;
		tileDiscardPolicy?: TileDiscardPolicy;
		proxy?: DefaultProxy;
		usePreCachedTilesIfAvailable?: boolean;
		layers?: string;
		enablePickFeatures?: boolean;
		rectangle?: Rectangle;
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		tileWidth?: number;
		tileHeight?: number;
		maximumLevel?: number;
	}
	export = HASH_78996_ArcGisMapServerImageryProviderOptions

}
declare module 'cesium/Source/Scene/ArcGisMapServerImageryProvider' {
	import HASH_78996_ArcGisMapServerImageryProviderOptions = require('cesium/Source/Scene/HASH_78996_ArcGisMapServerImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class ArcGisMapServerImageryProvider 
	{
		constructor(options? : HASH_78996_ArcGisMapServerImageryProviderOptions);
		//Members
		credit: Credit
		enablePickFeatures: boolean
		errorEvent: Event
		hasAlphaChannel: boolean
		layers: string
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		token: string
		url: string
		usingPrecachedTiles: boolean


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = ArcGisMapServerImageryProvider

}
declare module 'cesium/Source/Scene/HeightReference' {
	class HeightReference 
	{
		constructor();
		//Members
		static CLAMP_TO_GROUND: number
		static NONE: number
		static RELATIVE_TO_GROUND: number


		//Methods

	}
	export = HeightReference

}
declare module 'cesium/Source/Scene/HorizontalOrigin' {
	class HorizontalOrigin 
	{
		constructor();
		//Members
		static CENTER: number
		static LEFT: number
		static RIGHT: number


		//Methods

	}
	export = HorizontalOrigin

}
declare module 'cesium/Source/Scene/VerticalOrigin' {
	class VerticalOrigin 
	{
		constructor();
		//Members
		static BASELINE: number
		static BOTTOM: number
		static CENTER: number
		static TOP: number


		//Methods

	}
	export = VerticalOrigin

}
declare module 'cesium/Source/Scene/Billboard' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Color = require('cesium/Source/Core/Color')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	import HeightReference = require('cesium/Source/Scene/HeightReference')
	import HorizontalOrigin = require('cesium/Source/Scene/HorizontalOrigin')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import NearFarScalar = require('cesium/Source/Core/NearFarScalar')
	import VerticalOrigin = require('cesium/Source/Scene/VerticalOrigin')
	import Scene = require('cesium/Source/Scene/Scene')
	import BoundingRectangle = require('cesium/Source/Core/BoundingRectangle')
	class Billboard 
	{
		constructor();
		//Members
		alignedAxis: Cartesian3
		color: Color
		disableDepthTestDistance: number
		distanceDisplayCondition: DistanceDisplayCondition
		eyeOffset: Cartesian3
		height: number
		heightReference: HeightReference
		horizontalOrigin: HorizontalOrigin
		id: Object
		image: string
		pixelOffset: Cartesian2
		pixelOffsetScaleByDistance: NearFarScalar
		position: Cartesian3
		ready: boolean
		rotation: number
		scale: number
		scaleByDistance: NearFarScalar
		show: boolean
		sizeInMeters: boolean
		translucencyByDistance: NearFarScalar
		verticalOrigin: VerticalOrigin
		width: number


		//Methods
		computeScreenSpacePosition(scene? : Scene, result? : Cartesian2) : Cartesian2
		equals(other? : Billboard) : boolean
		setImage(id? : string, image? : HTMLImageElement|HTMLCanvasElement|string|any) : void
		setImageSubRegion(id? : string, subRegion? : BoundingRectangle) : void

	}
	export = Billboard

}
declare module 'cesium/Source/Scene/BlendOption' {
	class BlendOption 
	{
		constructor();
		//Members
		static OPAQUE: number
		static OPAQUE_AND_TRANSLUCENT: number
		static TRANSLUCENT: number


		//Methods

	}
	export = BlendOption

}
declare module 'cesium/Source/Scene/HASH_47802_BillboardCollectionOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Scene = require('cesium/Source/Scene/Scene')
	import BlendOption = require('cesium/Source/Scene/BlendOption')
	interface HASH_47802_BillboardCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
		scene?: Scene;
		blendOption?: BlendOption;
	}
	export = HASH_47802_BillboardCollectionOptions

}
declare module 'cesium/Source/Scene/BillboardCollection' {
	import HASH_47802_BillboardCollectionOptions = require('cesium/Source/Scene/HASH_47802_BillboardCollectionOptions')
	import BlendOption = require('cesium/Source/Scene/BlendOption')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Billboard = require('cesium/Source/Scene/Billboard')
	class BillboardCollection 
	{
		constructor(options? : HASH_47802_BillboardCollectionOptions);
		//Members
		blendOption: BlendOption
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(billboard : any) : Billboard
		contains(billboard : Billboard) : boolean
		destroy() : void
		get(index? : number) : Billboard
		isDestroyed() : boolean
		remove(billboard? : Billboard) : boolean
		removeAll() : void
		update() : void

	}
	export = BillboardCollection

}
declare module 'cesium/Source/Scene/HASH_34956_BingMapsImageryProviderOptions' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	interface HASH_34956_BingMapsImageryProviderOptions
	{
		url: string;
		key?: string;
		tileProtocol?: string;
		mapStyle?: string;
		culture?: string;
		ellipsoid?: Ellipsoid;
		tileDiscardPolicy?: TileDiscardPolicy;
		proxy?: DefaultProxy;
	}
	export = HASH_34956_BingMapsImageryProviderOptions

}
declare module 'cesium/Source/Scene/BingMapsStyle' {
	class BingMapsStyle 
	{
		constructor();
		//Members
		static AERIAL: string
		static AERIAL_WITH_LABELS: string
		static CANVAS_DARK: string
		static CANVAS_GRAY: string
		static CANVAS_LIGHT: string
		static COLLINS_BART: string
		static ORDNANCE_SURVEY: string
		static ROAD: string


		//Methods

	}
	export = BingMapsStyle

}
declare module 'cesium/Source/Scene/BingMapsImageryProvider' {
	import HASH_34956_BingMapsImageryProviderOptions = require('cesium/Source/Scene/HASH_34956_BingMapsImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import BingMapsStyle = require('cesium/Source/Scene/BingMapsStyle')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class BingMapsImageryProvider 
	{
		constructor(options? : HASH_34956_BingMapsImageryProviderOptions);
		//Members
		credit: Credit
		culture: string
		defaultGamma: number
		errorEvent: Event
		hasAlphaChannel: boolean
		key: string
		mapStyle: BingMapsStyle
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		static quadKeyToTileXY(quadkey? : string) : void
		static tileXYToQuadKey(x? : number, y? : number, level? : number) : void
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = BingMapsImageryProvider

}
declare module 'cesium/Source/Scene/BlendEquation' {
	class BlendEquation 
	{
		constructor();
		//Members
		static ADD: number
		static MAX: number
		static MIN: number
		static REVERSE_SUBTRACT: number
		static SUBTRACT: number


		//Methods

	}
	export = BlendEquation

}
declare module 'cesium/Source/Scene/BlendFunction' {
	class BlendFunction 
	{
		constructor();
		//Members
		static CONSTANT_ALPHA: number
		static CONSTANT_COLOR: number
		static DESTINATION_ALPHA: number
		static DESTINATION_COLOR: number
		static ONE: number
		static ONE_MINUS_CONSTANT_ALPHA: number
		static ONE_MINUS_CONSTANT_COLOR: number
		static ONE_MINUS_DESTINATION_ALPHA: number
		static ONE_MINUS_DESTINATION_COLOR: number
		static ONE_MINUS_SOURCE_ALPHA: number
		static ONE_MINUS_SOURCE_COLOR: number
		static SOURCE_ALPHA: number
		static SOURCE_ALPHA_SATURATE: number
		static SOURCE_COLOR: number
		static ZERO: number


		//Methods

	}
	export = BlendFunction

}
declare module 'cesium/Source/Scene/BlendingState' {
	class BlendingState 
	{
		constructor();
		//Members
		static ADDITIVE_BLEND: Object
		static ALPHA_BLEND: Object
		static DISABLED: Object
		static PRE_MULTIPLIED_ALPHA_BLEND: Object


		//Methods

	}
	export = BlendingState

}
declare module 'cesium/Source/Scene/BoxEmitter' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class BoxEmitter 
	{
		constructor(dimensions : Cartesian3);
		//Members
		dimensions: Cartesian3


		//Methods

	}
	export = BoxEmitter

}
declare module 'cesium/Source/Scene/CameraEventAggregator' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import CameraEventType = require('cesium/Source/Scene/CameraEventType')
	import KeyboardEventModifier = require('cesium/Source/Core/KeyboardEventModifier')
	class CameraEventAggregator 
	{
		constructor(canvas? : HTMLCanvasElement);
		//Members
		anyButtonDown: boolean
		currentMousePosition: Cartesian2


		//Methods
		destroy() : void
		getButtonPressTime(type? : CameraEventType, modifier? : KeyboardEventModifier) : Date
		getButtonReleaseTime(type? : CameraEventType, modifier? : KeyboardEventModifier) : Date
		getLastMovement(type? : CameraEventType, modifier? : KeyboardEventModifier) : Object|void
		getMovement(type? : CameraEventType, modifier? : KeyboardEventModifier) : Object
		getStartMousePosition(type? : CameraEventType, modifier? : KeyboardEventModifier) : Cartesian2
		isButtonDown(type? : CameraEventType, modifier? : KeyboardEventModifier) : boolean
		isDestroyed() : boolean
		isMoving(type? : CameraEventType, modifier? : KeyboardEventModifier) : boolean
		reset() : void

	}
	export = CameraEventAggregator

}
declare module 'cesium/Source/Scene/HASH_74468_Cesium3DTilesetOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	interface HASH_74468_Cesium3DTilesetOptions
	{
		url: string;
		show?: boolean;
		modelMatrix?: Matrix4;
		shadows?: ShadowMode;
		maximumScreenSpaceError?: number;
		maximumMemoryUsage?: number;
		cullWithChildrenBounds?: boolean;
		dynamicScreenSpaceError?: boolean;
		dynamicScreenSpaceErrorDensity?: number;
		dynamicScreenSpaceErrorFactor?: number;
		dynamicScreenSpaceErrorHeightFalloff?: number;
		skipLevelOfDetail?: boolean;
		baseScreenSpaceError?: number;
		skipScreenSpaceErrorFactor?: number;
		skipLevels?: number;
		immediatelyLoadDesiredLevelOfDetail?: boolean;
		loadSiblings?: boolean;
		debugFreezeFrame?: boolean;
		debugColorizeTiles?: boolean;
		debugWireframe?: boolean;
		debugShowBoundingVolume?: boolean;
		debugShowContentBoundingVolume?: boolean;
		debugShowViewerRequestVolume?: boolean;
		debugShowGeometricError?: boolean;
		debugShowRenderingStatistics?: boolean;
		debugShowMemoryUsage?: boolean;
		debugShowUrl?: boolean;
	}
	export = HASH_74468_Cesium3DTilesetOptions

}
declare module 'cesium/Source/Scene/Cesium3DTileColorBlendMode' {
	class Cesium3DTileColorBlendMode 
	{
		constructor();
		//Members
		static HIGHLIGHT: number
		static MIX: number
		static REPLACE: number


		//Methods

	}
	export = Cesium3DTileColorBlendMode

}
declare module 'cesium/Source/Scene/FrameState' {
	class FrameState
	{
	constructor();
	}
	export = FrameState

}
declare module 'cesium/Source/Scene/StyleExpression' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	import Color = require('cesium/Source/Core/Color')
	import Cesium3DTileFeature = require('cesium/Source/Scene/Cesium3DTileFeature')
	import FrameState = require('cesium/Source/Scene/FrameState')
	class StyleExpression 
	{
		constructor();
		//Members


		//Methods
		evaluate(frameState? : any, feature? : Cesium3DTileFeature, result? : any) : boolean|number|string|RegExp|Cartesian2|Cartesian3|Cartesian4|Color
		evaluateColor(frameState? : FrameState, feature? : Cesium3DTileFeature, result? : Color) : Color

	}
	export = StyleExpression

}
declare module 'cesium/Source/Scene/Cesium3DTileStyle' {
	import StyleExpression = require('cesium/Source/Scene/StyleExpression')
	class Cesium3DTileStyle 
	{
		constructor(style? : string|any);
		//Members
		color: StyleExpression
		meta: StyleExpression
		pointSize: StyleExpression
		ready: boolean
		readyPromise: Promise<Cesium3DTileStyle>
		show: StyleExpression
		style: Object


		//Methods

	}
	export = Cesium3DTileStyle

}
declare module 'cesium/Source/Scene/Cesium3DTileset' {
	import HASH_74468_Cesium3DTilesetOptions = require('cesium/Source/Scene/HASH_74468_Cesium3DTilesetOptions')
	import Event = require('cesium/Source/Core/Event')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import Cesium3DTileColorBlendMode = require('cesium/Source/Scene/Cesium3DTileColorBlendMode')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	import Cesium3DTileStyle = require('cesium/Source/Scene/Cesium3DTileStyle')
	class Cesium3DTileset 
	{
		constructor(options? : HASH_74468_Cesium3DTilesetOptions);
		//Members
		allTilesLoaded: Event
		asset: Object
		basePath: string
		baseScreenSpaceError: number
		boundingSphere: BoundingSphere
		colorBlendAmount: number
		colorBlendMode: Cesium3DTileColorBlendMode
		debugColorizeTiles: boolean
		debugFreezeFrame: boolean
		debugShowBoundingVolume: boolean
		debugShowContentBoundingVolume: boolean
		debugShowGeometricError: boolean
		debugShowMemoryUsage: boolean
		debugShowRenderingStatistics: boolean
		debugShowUrl: boolean
		debugShowViewerRequestVolume: boolean
		debugWireframe: boolean
		dynamicScreenSpaceError: boolean
		dynamicScreenSpaceErrorDensity: number
		dynamicScreenSpaceErrorFactor: number
		dynamicScreenSpaceErrorHeightFalloff: number
		immediatelyLoadDesiredLevelOfDetail: boolean
		loadProgress: Event
		loadSiblings: boolean
		maximumMemoryUsage: number
		maximumScreenSpaceError: number
		modelMatrix: Matrix4
		properties: Object
		ready: boolean
		readyPromise: Promise<Cesium3DTileset>
		shadows: ShadowMode
		show: boolean
		skipLevelOfDetail: boolean
		skipLevels: number
		skipScreenSpaceErrorFactor: number
		style: Cesium3DTileStyle
		tileLoad: Event
		tilesLoaded: boolean
		tileUnload: Event
		tileVisible: Event
		timeSinceLoad: number
		totalMemoryUsageInBytes: number
		url: string


		//Methods
		static loadJson(tilesetUrl? : string) : Promise<Object>
		destroy() : void
		isDestroyed() : boolean
		makeStyleDirty() : void
		trimLoadedTiles() : void
		update() : void

	}
	export = Cesium3DTileset

}
declare module 'cesium/Source/Scene/Cesium3DTileFeature' {
	import Color = require('cesium/Source/Core/Color')
	import Cesium3DTileset = require('cesium/Source/Scene/Cesium3DTileset')
	class Cesium3DTileFeature 
	{
		constructor();
		//Members
		color: Color
		primitive: Cesium3DTileset
		show: boolean
		tileset: Cesium3DTileset


		//Methods
		getProperty(name? : string) : any
		getPropertyNames(results? : Array<string>) : Array<string>
		hasProperty(name? : string) : boolean
		setProperty(name? : string, value? : any) : void

	}
	export = Cesium3DTileFeature

}
declare module 'cesium/Source/Scene/Cesium3DTileContent' {
	import Cesium3DTileFeature = require('cesium/Source/Scene/Cesium3DTileFeature')
	class Cesium3DTileContent 
	{
		constructor();
		//Members
		batchTableByteLength: number
		featuresLength: number
		geometryByteLength: number
		innerContents: Array<any>
		pointsLength: number
		readyPromise: Promise<Cesium3DTileContent>
		texturesByteLength: number
		trianglesLength: number
		url: string


		//Methods
		getFeature(batchId? : number) : Cesium3DTileFeature
		hasProperty(batchId? : number, name? : string) : boolean

	}
	export = Cesium3DTileContent

}
declare module 'cesium/Source/Scene/Cesium3DTile' {
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Cesium3DTileContent = require('cesium/Source/Scene/Cesium3DTileContent')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import Cesium3DTileset = require('cesium/Source/Scene/Cesium3DTileset')
	class Cesium3DTile 
	{
		constructor();
		//Members
		boundingSphere: BoundingSphere
		children: Array<Cesium3DTile>
		computedTransform: Matrix4
		content: Cesium3DTileContent
		expireDate: JulianDate
		expireDuration: number
		geometricError: number
		parent: Cesium3DTile
		tileset: Cesium3DTileset
		transform: Matrix4


		//Methods

	}
	export = Cesium3DTile

}
declare module 'cesium/Source/Scene/CircleEmitter' {
	class CircleEmitter 
	{
		constructor(radius? : number);
		//Members
		angle: number
		radius: number


		//Methods

	}
	export = CircleEmitter

}
declare module 'cesium/Source/Scene/ClassificationOption' {
	class ClassificationOption 
	{
		constructor();
		//Members
		static BOTH: number
		static CESIUM_3D_TILE: number
		static TERRAIN: number


		//Methods

	}
	export = ClassificationOption

}
declare module 'cesium/Source/Scene/HASH_17430_ClassificationPrimitiveOptions' {
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	interface HASH_17430_ClassificationPrimitiveOptions
	{
		geometryInstances?: Array<any>|GeometryInstance;
		show?: boolean;
		vertexCacheOptimize?: boolean;
		interleave?: boolean;
		compressVertices?: boolean;
		releaseGeometryInstances?: boolean;
		allowPicking?: boolean;
		asynchronous?: boolean;
		classificationType?: ClassificationType;
		debugShowBoundingVolume?: boolean;
		debugShowShadowVolume?: boolean;
	}
	export = HASH_17430_ClassificationPrimitiveOptions

}
declare module 'cesium/Source/Scene/ClassificationPrimitive' {
	import HASH_17430_ClassificationPrimitiveOptions = require('cesium/Source/Scene/HASH_17430_ClassificationPrimitiveOptions')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import Scene = require('cesium/Source/Scene/Scene')
	class ClassificationPrimitive 
	{
		constructor(options? : HASH_17430_ClassificationPrimitiveOptions);
		//Members
		allowPicking: boolean
		asynchronous: boolean
		classificationType: ClassificationType
		compressVertices: boolean
		debugShowBoundingVolume: boolean
		debugShowShadowVolume: boolean
		geometryInstances: Array<any>|GeometryInstance
		interleave: boolean
		ready: boolean
		readyPromise: Promise<ClassificationPrimitive>
		releaseGeometryInstances: boolean
		show: boolean
		vertexCacheOptimize: boolean


		//Methods
		static isSupported(scene? : Scene) : boolean
		destroy() : void
		getGeometryInstanceAttributes(id? : any) : Object
		isDestroyed() : boolean
		update() : void

	}
	export = ClassificationPrimitive

}
declare module 'cesium/Source/Scene/ColorBlendMode' {
	class ColorBlendMode 
	{
		constructor();
		//Members


		//Methods

	}
	export = ColorBlendMode

}
declare module 'cesium/Source/Scene/ConditionsExpression' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	import Color = require('cesium/Source/Core/Color')
	import FrameState = require('cesium/Source/Scene/FrameState')
	import Cesium3DTileFeature = require('cesium/Source/Scene/Cesium3DTileFeature')
	class ConditionsExpression 
	{
		constructor(conditionsExpression? : any, defines? : any);
		//Members
		conditionsExpression: Object


		//Methods
		evaluate(frameState? : FrameState, feature? : Cesium3DTileFeature, result? : any) : boolean|number|string|RegExp|Cartesian2|Cartesian3|Cartesian4|Color
		evaluateColor(frameState? : FrameState, feature? : Cesium3DTileFeature, result? : Color) : Color

	}
	export = ConditionsExpression

}
declare module 'cesium/Source/Scene/ConeEmitter' {
	class ConeEmitter 
	{
		constructor(angle? : number);
		//Members


		//Methods

	}
	export = ConeEmitter

}
declare module 'cesium/Source/Scene/CreditDisplay' {
	import Credit = require('cesium/Source/Core/Credit')
	class CreditDisplay 
	{
		constructor(container : HTMLElement, delimiter? : string);
		//Members
		container: HTMLElement


		//Methods
		addCredit(credit? : Credit) : void
		addDefaultCredit(credit? : Credit) : void
		beginFrame() : void
		destroy() : void
		endFrame() : void
		isDestroyed() : boolean
		removeDefaultCredit(credit? : Credit) : void

	}
	export = CreditDisplay

}
declare module 'cesium/Source/Scene/CullFace' {
	class CullFace 
	{
		constructor();
		//Members
		static BACK: number
		static FRONT: number
		static FRONT_AND_BACK: number


		//Methods

	}
	export = CullFace

}
declare module 'cesium/Source/Scene/HASH_19429_DebugAppearanceOptions' {
	interface HASH_19429_DebugAppearanceOptions
	{
		attributeName: string;
		perInstanceAttribute?: boolean;
		glslDatatype?: string;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = HASH_19429_DebugAppearanceOptions

}
declare module 'cesium/Source/Scene/DebugAppearance' {
	import HASH_19429_DebugAppearanceOptions = require('cesium/Source/Scene/HASH_19429_DebugAppearanceOptions')
	import Material = require('cesium/Source/Scene/Material')
	class DebugAppearance 
	{
		constructor(options? : HASH_19429_DebugAppearanceOptions);
		//Members
		attributeName: string
		closed: boolean
		fragmentShaderSource: string
		glslDatatype: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = DebugAppearance

}
declare module 'cesium/Source/Scene/HASH_11011_DebugCameraPrimitiveOptions' {
	import Camera = require('cesium/Source/Scene/Camera')
	import Color = require('cesium/Source/Core/Color')
	interface HASH_11011_DebugCameraPrimitiveOptions
	{
		camera: Camera;
		color?: Color;
		updateOnChange?: boolean;
		show?: boolean;
		id?: Object;
	}
	export = HASH_11011_DebugCameraPrimitiveOptions

}
declare module 'cesium/Source/Scene/DebugCameraPrimitive' {
	import HASH_11011_DebugCameraPrimitiveOptions = require('cesium/Source/Scene/HASH_11011_DebugCameraPrimitiveOptions')
	class DebugCameraPrimitive 
	{
		constructor(options? : HASH_11011_DebugCameraPrimitiveOptions);
		//Members
		id: Object
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = DebugCameraPrimitive

}
declare module 'cesium/Source/Scene/HASH_47307_DebugModelMatrixPrimitiveOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	interface HASH_47307_DebugModelMatrixPrimitiveOptions
	{
		length?: number;
		width?: number;
		modelMatrix?: Matrix4;
		show?: boolean;
		id?: Object;
	}
	export = HASH_47307_DebugModelMatrixPrimitiveOptions

}
declare module 'cesium/Source/Scene/DebugModelMatrixPrimitive' {
	import HASH_47307_DebugModelMatrixPrimitiveOptions = require('cesium/Source/Scene/HASH_47307_DebugModelMatrixPrimitiveOptions')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	class DebugModelMatrixPrimitive 
	{
		constructor(options? : HASH_47307_DebugModelMatrixPrimitiveOptions);
		//Members
		id: Object
		length: number
		modelMatrix: Matrix4
		show: boolean
		width: number


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = DebugModelMatrixPrimitive

}
declare module 'cesium/Source/Scene/DepthFunction' {
	class DepthFunction 
	{
		constructor();
		//Members
		static ALWAYS: number
		static EQUAL: number
		static GREATER: number
		static GREATER_OR_EQUAL: number
		static LESS: number
		static LESS_OR_EQUAL: number
		static NEVER: number
		static NOT_EQUAL: number


		//Methods

	}
	export = DepthFunction

}
declare module 'cesium/Source/Scene/HASH_09809_DiscardMissingTileImagePolicyOptions' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	interface HASH_09809_DiscardMissingTileImagePolicyOptions
	{
		missingImageUrl: string;
		pixelsToCheck: Array<Cartesian2>;
		disableCheckIfAllPixelsAreTransparent?: boolean;
	}
	export = HASH_09809_DiscardMissingTileImagePolicyOptions

}
declare module 'cesium/Source/Scene/DiscardMissingTileImagePolicy' {
	import HASH_09809_DiscardMissingTileImagePolicyOptions = require('cesium/Source/Scene/HASH_09809_DiscardMissingTileImagePolicyOptions')
	class DiscardMissingTileImagePolicy 
	{
		constructor(options? : HASH_09809_DiscardMissingTileImagePolicyOptions);
		//Members


		//Methods
		isReady() : boolean
		shouldDiscardImage(image? : HTMLImageElement) : boolean

	}
	export = DiscardMissingTileImagePolicy

}
declare module 'cesium/Source/Scene/HASH_57656_EllipsoidSurfaceAppearanceOptions' {
	import Material = require('cesium/Source/Scene/Material')
	interface HASH_57656_EllipsoidSurfaceAppearanceOptions
	{
		flat?: boolean;
		faceForward?: boolean;
		translucent?: boolean;
		aboveGround?: boolean;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = HASH_57656_EllipsoidSurfaceAppearanceOptions

}
declare module 'cesium/Source/Scene/EllipsoidSurfaceAppearance' {
	import HASH_57656_EllipsoidSurfaceAppearanceOptions = require('cesium/Source/Scene/HASH_57656_EllipsoidSurfaceAppearanceOptions')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Material = require('cesium/Source/Scene/Material')
	class EllipsoidSurfaceAppearance 
	{
		constructor(options? : HASH_57656_EllipsoidSurfaceAppearanceOptions);
		//Members
		static VERTEX_FORMAT: VertexFormat
		aboveGround: boolean
		closed: boolean
		faceForward: boolean
		flat: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = EllipsoidSurfaceAppearance

}
declare module 'cesium/Source/Scene/Expression' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	import Color = require('cesium/Source/Core/Color')
	import FrameState = require('cesium/Source/Scene/FrameState')
	import Cesium3DTileFeature = require('cesium/Source/Scene/Cesium3DTileFeature')
	class Expression 
	{
		constructor(expression? : string, defines? : any);
		//Members
		expression: string


		//Methods
		evaluate(frameState? : FrameState, feature? : Cesium3DTileFeature, result? : any) : boolean|number|string|RegExp|Cartesian2|Cartesian3|Cartesian4|Color
		evaluateColor(frameState? : FrameState, feature? : Cesium3DTileFeature, result? : Color) : Color

	}
	export = Expression

}
declare module 'cesium/Source/Scene/HASH_21310_FrameRateMonitorOptions' {
	import Scene = require('cesium/Source/Scene/Scene')
	interface HASH_21310_FrameRateMonitorOptions
	{
		scene: Scene;
		samplingWindow?: number;
		quietPeriod?: number;
		warmupPeriod?: number;
		minimumFrameRateDuringWarmup?: number;
		minimumFrameRateAfterWarmup?: number;
	}
	export = HASH_21310_FrameRateMonitorOptions

}
declare module 'cesium/Source/Scene/FrameRateMonitor' {
	import HASH_21310_FrameRateMonitorOptions = require('cesium/Source/Scene/HASH_21310_FrameRateMonitorOptions')
	import Event = require('cesium/Source/Core/Event')
	import Scene = require('cesium/Source/Scene/Scene')
	class FrameRateMonitor 
	{
		constructor(options? : HASH_21310_FrameRateMonitorOptions);
		//Members
		static defaultSettings: Object
		lastFramesPerSecond: number
		lowFrameRate: Event
		minimumFrameRateAfterWarmup: number
		minimumFrameRateDuringWarmup: number
		nominalFrameRate: Event
		quietPeriod: number
		samplingWindow: number
		scene: Scene
		warmupPeriod: number


		//Methods
		static fromScene(scene? : Scene) : FrameRateMonitor
		destroy() : void
		isDestroyed() : boolean
		pause() : void
		unpause() : void

	}
	export = FrameRateMonitor

}
declare module 'cesium/Source/Scene/GetFeatureInfoFormat' {
	class GetFeatureInfoFormat 
	{
		constructor(type : string, format? : string, callback? : (()=>void));
		//Members


		//Methods

	}
	export = GetFeatureInfoFormat

}
declare module 'cesium/Source/Scene/HASH_31040_GoogleEarthEnterpriseImageryProviderOptions' {
	import GoogleEarthEnterpriseMetadata = require('cesium/Source/Core/GoogleEarthEnterpriseMetadata')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_31040_GoogleEarthEnterpriseImageryProviderOptions
	{
		url: string;
		metadata: GoogleEarthEnterpriseMetadata;
		proxy?: DefaultProxy;
		ellipsoid?: Ellipsoid;
		tileDiscardPolicy?: TileDiscardPolicy;
		credit?: Credit|string;
	}
	export = HASH_31040_GoogleEarthEnterpriseImageryProviderOptions

}
declare module 'cesium/Source/Scene/GoogleEarthEnterpriseImageryProvider' {
	import HASH_31040_GoogleEarthEnterpriseImageryProviderOptions = require('cesium/Source/Scene/HASH_31040_GoogleEarthEnterpriseImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class GoogleEarthEnterpriseImageryProvider 
	{
		constructor(options? : HASH_31040_GoogleEarthEnterpriseImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = GoogleEarthEnterpriseImageryProvider

}
declare module 'cesium/Source/Scene/HASH_75679_GoogleEarthEnterpriseMapsProviderOptions' {
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	interface HASH_75679_GoogleEarthEnterpriseMapsProviderOptions
	{
		url: string;
		channel: number;
		path?: string;
		maximumLevel?: number;
		tileDiscardPolicy?: TileDiscardPolicy;
		ellipsoid?: Ellipsoid;
		proxy?: DefaultProxy;
	}
	export = HASH_75679_GoogleEarthEnterpriseMapsProviderOptions

}
declare module 'cesium/Source/Scene/GoogleEarthEnterpriseMapsProvider' {
	import HASH_75679_GoogleEarthEnterpriseMapsProviderOptions = require('cesium/Source/Scene/HASH_75679_GoogleEarthEnterpriseMapsProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class GoogleEarthEnterpriseMapsProvider 
	{
		constructor(options? : HASH_75679_GoogleEarthEnterpriseMapsProviderOptions);
		//Members
		channel: number
		credit: Credit
		defaultGamma: number
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		path: string
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		requestType: string
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string
		version: number


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = GoogleEarthEnterpriseMapsProvider

}
declare module 'cesium/Source/Scene/HASH_39786_GridImageryProviderOptions' {
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Color = require('cesium/Source/Core/Color')
	interface HASH_39786_GridImageryProviderOptions
	{
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		cells?: number;
		color?: Color;
		glowColor?: Color;
		glowWidth?: number;
		backgroundColor?: Color;
		tileWidth?: number;
		tileHeight?: number;
		canvasSize?: number;
	}
	export = HASH_39786_GridImageryProviderOptions

}
declare module 'cesium/Source/Scene/GridImageryProvider' {
	import HASH_39786_GridImageryProviderOptions = require('cesium/Source/Scene/HASH_39786_GridImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class GridImageryProvider 
	{
		constructor(options? : HASH_39786_GridImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme


		//Methods
		_createGridCanvas() : void
		_drawGrid() : void
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = GridImageryProvider

}
declare module 'cesium/Source/Scene/HASH_17430_GroundPrimitiveOptions' {
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	interface HASH_17430_GroundPrimitiveOptions
	{
		geometryInstances?: Array<any>|GeometryInstance;
		show?: boolean;
		vertexCacheOptimize?: boolean;
		interleave?: boolean;
		compressVertices?: boolean;
		releaseGeometryInstances?: boolean;
		allowPicking?: boolean;
		asynchronous?: boolean;
		classificationType?: ClassificationType;
		debugShowBoundingVolume?: boolean;
		debugShowShadowVolume?: boolean;
	}
	export = HASH_17430_GroundPrimitiveOptions

}
declare module 'cesium/Source/Scene/GroundPrimitive' {
	import HASH_17430_GroundPrimitiveOptions = require('cesium/Source/Scene/HASH_17430_GroundPrimitiveOptions')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	class GroundPrimitive 
	{
		constructor(options? : HASH_17430_GroundPrimitiveOptions);
		//Members
		static isSupported: any
		allowPicking: boolean
		asynchronous: boolean
		classificationType: ClassificationType
		compressVertices: boolean
		debugShowBoundingVolume: boolean
		debugShowShadowVolume: boolean
		geometryInstances: Array<any>|GeometryInstance
		interleave: boolean
		ready: boolean
		readyPromise: Promise<GroundPrimitive>
		releaseGeometryInstances: boolean
		show: boolean
		vertexCacheOptimize: boolean


		//Methods
		static initializeTerrainHeights() : Promise<any>
		destroy() : void
		getGeometryInstanceAttributes(id? : any) : Object
		isDestroyed() : boolean
		update() : void

	}
	export = GroundPrimitive

}
declare module 'cesium/Source/Scene/LabelStyle' {
	class LabelStyle 
	{
		constructor();
		//Members
		static FILL: number
		static FILL_AND_OUTLINE: number
		static OUTLINE: number


		//Methods

	}
	export = LabelStyle

}
declare module 'cesium/Source/Scene/Label' {
	import Color = require('cesium/Source/Core/Color')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import HeightReference = require('cesium/Source/Scene/HeightReference')
	import HorizontalOrigin = require('cesium/Source/Scene/HorizontalOrigin')
	import NearFarScalar = require('cesium/Source/Core/NearFarScalar')
	import LabelStyle = require('cesium/Source/Scene/LabelStyle')
	import VerticalOrigin = require('cesium/Source/Scene/VerticalOrigin')
	import Scene = require('cesium/Source/Scene/Scene')
	class Label 
	{
		constructor();
		//Members
		backgroundColor: Color
		backgroundPadding: Cartesian2
		disableDepthTestDistance: number
		distanceDisplayCondition: DistanceDisplayCondition
		eyeOffset: Cartesian3
		fillColor: Color
		font: string
		heightReference: HeightReference
		horizontalOrigin: HorizontalOrigin
		id: Object
		outlineColor: Color
		outlineWidth: number
		pixelOffset: Cartesian2
		pixelOffsetScaleByDistance: NearFarScalar
		position: Cartesian3
		scale: number
		scaleByDistance: NearFarScalar
		show: boolean
		showBackground: boolean
		style: LabelStyle
		text: string
		translucencyByDistance: NearFarScalar
		verticalOrigin: VerticalOrigin


		//Methods
		computeScreenSpacePosition(scene? : Scene, result? : Cartesian2) : Cartesian2
		equals(other? : Label) : boolean
		isDestroyed() : boolean

	}
	export = Label

}
declare module 'cesium/Source/Scene/HASH_47802_LabelCollectionOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Scene = require('cesium/Source/Scene/Scene')
	import BlendOption = require('cesium/Source/Scene/BlendOption')
	interface HASH_47802_LabelCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
		scene?: Scene;
		blendOption?: BlendOption;
	}
	export = HASH_47802_LabelCollectionOptions

}
declare module 'cesium/Source/Scene/LabelCollection' {
	import HASH_47802_LabelCollectionOptions = require('cesium/Source/Scene/HASH_47802_LabelCollectionOptions')
	import BlendOption = require('cesium/Source/Scene/BlendOption')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Label = require('cesium/Source/Scene/Label')
	class LabelCollection 
	{
		constructor(options? : HASH_47802_LabelCollectionOptions);
		//Members
		blendOption: BlendOption
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(options : any) : Label
		contains(label? : Label) : boolean
		destroy() : void
		get(index? : number) : Label
		isDestroyed() : boolean
		remove(label? : Label) : boolean
		removeAll() : void

	}
	export = LabelCollection

}
declare module 'cesium/Source/Scene/HASH_05225_MapboxImageryProviderOptions' {
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_05225_MapboxImageryProviderOptions
	{
		url?: string;
		mapId: string;
		accessToken?: string;
		format?: string;
		proxy?: Object;
		ellipsoid?: Ellipsoid;
		minimumLevel?: number;
		maximumLevel?: number;
		rectangle?: Rectangle;
		credit?: Credit|string;
	}
	export = HASH_05225_MapboxImageryProviderOptions

}
declare module 'cesium/Source/Scene/MapboxImageryProvider' {
	import HASH_05225_MapboxImageryProviderOptions = require('cesium/Source/Scene/HASH_05225_MapboxImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class MapboxImageryProvider 
	{
		constructor(options? : HASH_05225_MapboxImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = MapboxImageryProvider

}
declare module 'cesium/Source/Scene/HASH_21243_MaterialAppearanceOptions' {
	import Material = require('cesium/Source/Scene/Material')
	interface HASH_21243_MaterialAppearanceOptions
	{
		flat?: boolean;
		faceForward?: boolean;
		translucent?: boolean;
		closed?: boolean;
		materialSupport?: any;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = HASH_21243_MaterialAppearanceOptions

}
declare module 'cesium/Source/Scene/MaterialAppearance' {
	import HASH_21243_MaterialAppearanceOptions = require('cesium/Source/Scene/HASH_21243_MaterialAppearanceOptions')
	import Material = require('cesium/Source/Scene/Material')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	class MaterialAppearance 
	{
		constructor(options? : HASH_21243_MaterialAppearanceOptions);
		//Members
		static MaterialSupport: any
		closed: boolean
		faceForward: boolean
		flat: boolean
		fragmentShaderSource: string
		material: Material
		materialSupport: any
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = MaterialAppearance

}
declare module 'cesium/Source/Scene/HASH_29197_ModelOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	import HeightReference = require('cesium/Source/Scene/HeightReference')
	import Scene = require('cesium/Source/Scene/Scene')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	import Color = require('cesium/Source/Core/Color')
	import ColorBlendMode = require('cesium/Source/Scene/ColorBlendMode')
	interface HASH_29197_ModelOptions
	{
		gltf?: Object|ArrayBuffer|Uint8Array;
		basePath?: string;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		maximumScale?: number;
		id?: Object;
		allowPicking?: boolean;
		incrementallyLoadTextures?: boolean;
		asynchronous?: boolean;
		shadows?: ShadowMode;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
		heightReference?: HeightReference;
		scene?: Scene;
		distanceDisplayCondition?: DistanceDisplayCondition;
		color?: Color;
		colorBlendMode?: ColorBlendMode;
		colorBlendAmount?: number;
		silhouetteColor?: Color;
		silhouetteSize?: number;
	}
	export = HASH_29197_ModelOptions

}
declare module 'cesium/Source/Scene/ModelAnimationLoop' {
	class ModelAnimationLoop 
	{
		constructor();
		//Members
		static MIRRORED_REPEAT: number
		static NONE: number
		static REPEAT: number


		//Methods

	}
	export = ModelAnimationLoop

}
declare module 'cesium/Source/Scene/ModelAnimation' {
	import ModelAnimationLoop = require('cesium/Source/Scene/ModelAnimationLoop')
	import Event = require('cesium/Source/Core/Event')
	import JulianDate = require('cesium/Source/Core/JulianDate')
	class ModelAnimation 
	{
		constructor();
		//Members
		delay: number
		loop: ModelAnimationLoop
		name: string
		removeOnStop: boolean
		reverse: boolean
		speedup: number
		start: Event
		startTime: JulianDate
		stop: Event
		stopTime: JulianDate
		update: Event


		//Methods

	}
	export = ModelAnimation

}
declare module 'cesium/Source/Scene/HASH_16783_addOptions' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Source/Scene/ModelAnimationLoop')
	interface HASH_16783_addOptions
	{
		name: string;
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = HASH_16783_addOptions

}
declare module 'cesium/Source/Scene/HASH_94757_addAllOptions' {
	import JulianDate = require('cesium/Source/Core/JulianDate')
	import ModelAnimationLoop = require('cesium/Source/Scene/ModelAnimationLoop')
	interface HASH_94757_addAllOptions
	{
		startTime?: JulianDate;
		delay?: number;
		stopTime?: JulianDate;
		removeOnStop?: boolean;
		speedup?: number;
		reverse?: boolean;
		loop?: ModelAnimationLoop;
	}
	export = HASH_94757_addAllOptions

}
declare module 'cesium/Source/Scene/ModelAnimationCollection' {
	import Event = require('cesium/Source/Core/Event')
	import ModelAnimation = require('cesium/Source/Scene/ModelAnimation')
	import HASH_16783_addOptions = require('cesium/Source/Scene/HASH_16783_addOptions')
	import HASH_94757_addAllOptions = require('cesium/Source/Scene/HASH_94757_addAllOptions')
	class ModelAnimationCollection 
	{
		constructor();
		//Members
		animationAdded: Event
		animationRemoved: Event
		length: number


		//Methods
		add(options : HASH_16783_addOptions) : ModelAnimation
		addAll(options : HASH_94757_addAllOptions) : Array<ModelAnimation>
		contains(animation? : ModelAnimation) : boolean
		get(index? : number) : ModelAnimation
		remove(animation? : ModelAnimation) : boolean
		removeAll() : void

	}
	export = ModelAnimationCollection

}
declare module 'cesium/Source/Scene/HASH_53232_fromGltfOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	interface HASH_53232_fromGltfOptions
	{
		url: string;
		headers?: Object;
		basePath?: string;
		show?: boolean;
		modelMatrix?: Matrix4;
		scale?: number;
		minimumPixelSize?: number;
		maximumScale?: number;
		id?: Object;
		allowPicking?: boolean;
		incrementallyLoadTextures?: boolean;
		asynchronous?: boolean;
		shadows?: ShadowMode;
		debugShowBoundingVolume?: boolean;
		debugWireframe?: boolean;
	}
	export = HASH_53232_fromGltfOptions

}
declare module 'cesium/Source/Scene/ModelMaterial' {
	class ModelMaterial 
	{
		constructor();
		//Members
		id: string
		name: string


		//Methods
		getValue(name? : string) : Object
		setValue(name? : string, value? : any) : void

	}
	export = ModelMaterial

}
declare module 'cesium/Source/Scene/ModelMesh' {
	import ModelMaterial = require('cesium/Source/Scene/ModelMaterial')
	class ModelMesh 
	{
		constructor();
		//Members
		id: string
		materials: Array<ModelMaterial>
		name: string


		//Methods

	}
	export = ModelMesh

}
declare module 'cesium/Source/Scene/ModelNode' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	class ModelNode 
	{
		constructor();
		//Members
		id: string
		matrix: Matrix4
		name: string
		show: boolean


		//Methods

	}
	export = ModelNode

}
declare module 'cesium/Source/Scene/Model' {
	import HASH_29197_ModelOptions = require('cesium/Source/Scene/HASH_29197_ModelOptions')
	import ModelAnimationCollection = require('cesium/Source/Scene/ModelAnimationCollection')
	import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	import Color = require('cesium/Source/Core/Color')
	import ColorBlendMode = require('cesium/Source/Scene/ColorBlendMode')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	import HASH_53232_fromGltfOptions = require('cesium/Source/Scene/HASH_53232_fromGltfOptions')
	import Scene = require('cesium/Source/Scene/Scene')
	import ModelMaterial = require('cesium/Source/Scene/ModelMaterial')
	import ModelMesh = require('cesium/Source/Scene/ModelMesh')
	import ModelNode = require('cesium/Source/Scene/ModelNode')
	class Model 
	{
		constructor(options? : HASH_29197_ModelOptions);
		//Members
		activeAnimations: ModelAnimationCollection
		allowPicking: boolean
		asynchronous: boolean
		basePath: string
		boundingSphere: BoundingSphere
		color: Color
		colorBlendAmount: number
		colorBlendMode: ColorBlendMode
		debugShowBoundingVolume: boolean
		debugWireframe: boolean
		distanceDisplayCondition: DistanceDisplayCondition
		gltf: Object
		id: Object
		incrementallyLoadTextures: boolean
		maximumScale: number
		minimumPixelSize: number
		modelMatrix: Matrix4
		pendingTextureLoads: number
		ready: boolean
		readyPromise: Promise<Model>
		scale: number
		shadows: ShadowMode
		show: boolean
		silhouetteColor: Color
		silhouetteSize: number


		//Methods
		static fromGltf(options : HASH_53232_fromGltfOptions) : Model
		static silhouetteSupported(scene? : Scene) : boolean
		destroy() : void
		getMaterial(name? : string) : ModelMaterial
		getMesh(name? : string) : ModelMesh
		getNode(name? : string) : ModelNode
		isDestroyed() : boolean
		update() : void

	}
	export = Model

}
declare module 'cesium/Source/Scene/NeverTileDiscardPolicy' {
	class NeverTileDiscardPolicy 
	{
		constructor();
		//Members


		//Methods
		isReady() : boolean
		shouldDiscardImage(image? : HTMLImageElement) : boolean

	}
	export = NeverTileDiscardPolicy

}
declare module 'cesium/Source/Scene/HASH_08462_ParticleOptions' {
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Color = require('cesium/Source/Core/Color')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	interface HASH_08462_ParticleOptions
	{
		mass?: number;
		position?: Cartesian3;
		velocity?: Cartesian3;
		life?: number;
		image?: Object;
		startColor?: Color;
		endColor?: Color;
		startScale?: number;
		endScale?: number;
		size?: Cartesian2;
	}
	export = HASH_08462_ParticleOptions

}
declare module 'cesium/Source/Scene/Particle' {
	import HASH_08462_ParticleOptions = require('cesium/Source/Scene/HASH_08462_ParticleOptions')
	import Color = require('cesium/Source/Core/Color')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	class Particle 
	{
		constructor(options? : HASH_08462_ParticleOptions);
		//Members
		age: number
		endColor: Color
		endScale: number
		image: Object
		life: number
		mass: number
		normalizedAge: number
		position: Cartesian3
		size: Cartesian2
		startColor: Color
		startScale: number
		velocity: Cartesian3


		//Methods

	}
	export = Particle

}
declare module 'cesium/Source/Scene/HASH_83506_ParticleBurstOptions' {
	interface HASH_83506_ParticleBurstOptions
	{
		time?: number;
		minimum?: number;
		maximum?: number;
	}
	export = HASH_83506_ParticleBurstOptions

}
declare module 'cesium/Source/Scene/ParticleBurst' {
	import HASH_83506_ParticleBurstOptions = require('cesium/Source/Scene/HASH_83506_ParticleBurstOptions')
	class ParticleBurst 
	{
		constructor(options? : HASH_83506_ParticleBurstOptions);
		//Members
		complete: boolean
		maximum: number
		minimum: number
		time: number


		//Methods

	}
	export = ParticleBurst

}
declare module 'cesium/Source/Scene/ParticleEmitter' {
	class ParticleEmitter 
	{
		constructor();
		//Members


		//Methods

	}
	export = ParticleEmitter

}
declare module 'cesium/Source/Scene/HASH_18907_ParticleSystemOptions' {
	import ParticleEmitter = require('cesium/Source/Scene/ParticleEmitter')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Color = require('cesium/Source/Core/Color')
	import ParticleBurst = require('cesium/Source/Scene/ParticleBurst')
	interface HASH_18907_ParticleSystemOptions
	{
		show?: boolean;
		forces?: any;
		emitter?: ParticleEmitter;
		modelMatrix?: Matrix4;
		emitterModelMatrix?: Matrix4;
		startColor?: Color;
		endColor?: Color;
		startScale?: number;
		endScale?: number;
		rate?: number;
		bursts?: Array<ParticleBurst>;
		loop?: boolean;
		speed?: number;
		minimumSpeed?: number;
		maximumSpeed?: number;
		life?: number;
		minimumLife?: number;
		maximumLife?: number;
		mass?: number;
		minimumMass?: number;
		maximumMass?: number;
		image?: Object;
		width?: number;
		minimumWidth?: number;
		maximumWidth?: number;
		height?: number;
		minimumHeight?: number;
		maximumHeight?: number;
		lifeTime?: number;
	}
	export = HASH_18907_ParticleSystemOptions

}
declare module 'cesium/Source/Scene/ParticleSystem' {
	import HASH_18907_ParticleSystemOptions = require('cesium/Source/Scene/HASH_18907_ParticleSystemOptions')
	import Event = require('cesium/Source/Core/Event')
	import ParticleEmitter = require('cesium/Source/Scene/ParticleEmitter')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Color = require('cesium/Source/Core/Color')
	class ParticleSystem 
	{
		constructor(options? : HASH_18907_ParticleSystemOptions);
		//Members
		complete: Event
		emitter: ParticleEmitter
		emitterModelMatrix: Matrix4
		endColor: Color
		endScale: number
		forces: any
		image: Object
		isComplete: boolean
		lifeTime: number
		loop: boolean
		maximumHeight: number
		maximumLife: number
		maximumMass: number
		maximumSpeed: number
		maximumWidth: number
		minimumHeight: number
		minimumLife: number
		minimumMass: number
		minimumSpeed: number
		minimumWidth: number
		modelMatrix: Matrix4
		rate: number
		show: boolean
		startColor: Color
		startScale: number


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = ParticleSystem

}
declare module 'cesium/Source/Scene/HASH_82923_PerInstanceColorAppearanceOptions' {
	interface HASH_82923_PerInstanceColorAppearanceOptions
	{
		flat?: boolean;
		faceForward?: boolean;
		translucent?: boolean;
		closed?: boolean;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = HASH_82923_PerInstanceColorAppearanceOptions

}
declare module 'cesium/Source/Scene/PerInstanceColorAppearance' {
	import HASH_82923_PerInstanceColorAppearanceOptions = require('cesium/Source/Scene/HASH_82923_PerInstanceColorAppearanceOptions')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Material = require('cesium/Source/Scene/Material')
	class PerInstanceColorAppearance 
	{
		constructor(options? : HASH_82923_PerInstanceColorAppearanceOptions);
		//Members
		static FLAT_VERTEX_FORMAT: VertexFormat
		static VERTEX_FORMAT: VertexFormat
		closed: boolean
		faceForward: boolean
		flat: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = PerInstanceColorAppearance

}
declare module 'cesium/Source/Scene/PointPrimitive' {
	import Color = require('cesium/Source/Core/Color')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import NearFarScalar = require('cesium/Source/Core/NearFarScalar')
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Scene = require('cesium/Source/Scene/Scene')
	class PointPrimitive 
	{
		constructor();
		//Members
		color: Color
		disableDepthTestDistance: number
		distanceDisplayCondition: DistanceDisplayCondition
		id: Object
		outlineColor: Color
		outlineWidth: number
		pixelSize: number
		position: Cartesian3
		scaleByDistance: NearFarScalar
		show: boolean
		translucencyByDistance: NearFarScalar


		//Methods
		computeScreenSpacePosition(scene? : Scene, result? : Cartesian2) : Cartesian2
		equals(other? : PointPrimitive) : boolean

	}
	export = PointPrimitive

}
declare module 'cesium/Source/Scene/HASH_07160_PointPrimitiveCollectionOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import BlendOption = require('cesium/Source/Scene/BlendOption')
	interface HASH_07160_PointPrimitiveCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
		blendOption?: BlendOption;
	}
	export = HASH_07160_PointPrimitiveCollectionOptions

}
declare module 'cesium/Source/Scene/PointPrimitiveCollection' {
	import HASH_07160_PointPrimitiveCollectionOptions = require('cesium/Source/Scene/HASH_07160_PointPrimitiveCollectionOptions')
	import BlendOption = require('cesium/Source/Scene/BlendOption')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import PointPrimitive = require('cesium/Source/Scene/PointPrimitive')
	class PointPrimitiveCollection 
	{
		constructor(options? : HASH_07160_PointPrimitiveCollectionOptions);
		//Members
		blendOption: BlendOption
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(pointPrimitive : any) : PointPrimitive
		contains(pointPrimitive : PointPrimitive) : boolean
		destroy() : void
		get(index? : number) : PointPrimitive
		isDestroyed() : boolean
		remove(pointPrimitive? : PointPrimitive) : boolean
		removeAll() : void

	}
	export = PointPrimitiveCollection

}
declare module 'cesium/Source/Scene/HASH_14219_PolylineOptions' {
	import Material = require('cesium/Source/Scene/Material')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	interface HASH_14219_PolylineOptions
	{
		show?: boolean;
		width?: number;
		loop?: boolean;
		material?: Material;
		positions?: Array<Cartesian3>;
		id?: Object;
		distanceDisplayCondition?: DistanceDisplayCondition;
	}
	export = HASH_14219_PolylineOptions

}
declare module 'cesium/Source/Scene/HASH_16992_PolylineCollectionOptions' {
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	interface HASH_16992_PolylineCollectionOptions
	{
		modelMatrix?: Matrix4;
		debugShowBoundingVolume?: boolean;
	}
	export = HASH_16992_PolylineCollectionOptions

}
declare module 'cesium/Source/Scene/PolylineCollection' {
	import HASH_16992_PolylineCollectionOptions = require('cesium/Source/Scene/HASH_16992_PolylineCollectionOptions')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import Polyline = require('cesium/Source/Scene/Polyline')
	class PolylineCollection 
	{
		constructor(options? : HASH_16992_PolylineCollectionOptions);
		//Members
		debugShowBoundingVolume: boolean
		length: number
		modelMatrix: Matrix4


		//Methods
		add(polyline : any) : Polyline
		contains(polyline? : Polyline) : boolean
		destroy() : void
		get(index? : number) : Polyline
		isDestroyed() : boolean
		remove(polyline? : Polyline) : boolean
		removeAll() : void
		update() : void

	}
	export = PolylineCollection

}
declare module 'cesium/Source/Scene/Polyline' {
	import HASH_14219_PolylineOptions = require('cesium/Source/Scene/HASH_14219_PolylineOptions')
	import PolylineCollection = require('cesium/Source/Scene/PolylineCollection')
	import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	import Material = require('cesium/Source/Scene/Material')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class Polyline 
	{
		constructor(options? : HASH_14219_PolylineOptions, polylineCollection? : PolylineCollection);
		//Members
		distanceDisplayCondition: DistanceDisplayCondition
		id: Object
		loop: boolean
		material: Material
		positions: Array<Cartesian3>
		show: boolean
		width: number


		//Methods

	}
	export = Polyline

}
declare module 'cesium/Source/Scene/HASH_77166_PolylineColorAppearanceOptions' {
	interface HASH_77166_PolylineColorAppearanceOptions
	{
		translucent?: boolean;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = HASH_77166_PolylineColorAppearanceOptions

}
declare module 'cesium/Source/Scene/PolylineColorAppearance' {
	import HASH_77166_PolylineColorAppearanceOptions = require('cesium/Source/Scene/HASH_77166_PolylineColorAppearanceOptions')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Material = require('cesium/Source/Scene/Material')
	class PolylineColorAppearance 
	{
		constructor(options? : HASH_77166_PolylineColorAppearanceOptions);
		//Members
		static VERTEX_FORMAT: VertexFormat
		closed: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = PolylineColorAppearance

}
declare module 'cesium/Source/Scene/HASH_14205_PolylineMaterialAppearanceOptions' {
	import Material = require('cesium/Source/Scene/Material')
	interface HASH_14205_PolylineMaterialAppearanceOptions
	{
		translucent?: boolean;
		material?: Material;
		vertexShaderSource?: string;
		fragmentShaderSource?: string;
		renderState?: RenderState;
	}
	export = HASH_14205_PolylineMaterialAppearanceOptions

}
declare module 'cesium/Source/Scene/PolylineMaterialAppearance' {
	import HASH_14205_PolylineMaterialAppearanceOptions = require('cesium/Source/Scene/HASH_14205_PolylineMaterialAppearanceOptions')
	import VertexFormat = require('cesium/Source/Core/VertexFormat')
	import Material = require('cesium/Source/Scene/Material')
	class PolylineMaterialAppearance 
	{
		constructor(options? : HASH_14205_PolylineMaterialAppearanceOptions);
		//Members
		static VERTEX_FORMAT: VertexFormat
		closed: boolean
		fragmentShaderSource: string
		material: Material
		renderState: Object
		translucent: boolean
		vertexFormat: VertexFormat
		vertexShaderSource: string


		//Methods
		getFragmentShaderSource() : string
		getRenderState() : Object
		isTranslucent() : boolean

	}
	export = PolylineMaterialAppearance

}
declare module 'cesium/Source/Scene/HASH_42775_PrimitiveOptions' {
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	interface HASH_42775_PrimitiveOptions
	{
		geometryInstances?: Array<GeometryInstance>|GeometryInstance;
		appearance?: Appearance;
		show?: boolean;
		modelMatrix?: Matrix4;
		vertexCacheOptimize?: boolean;
		interleave?: boolean;
		compressVertices?: boolean;
		releaseGeometryInstances?: boolean;
		allowPicking?: boolean;
		cull?: boolean;
		asynchronous?: boolean;
		debugShowBoundingVolume?: boolean;
		shadows?: ShadowMode;
	}
	export = HASH_42775_PrimitiveOptions

}
declare module 'cesium/Source/Scene/Primitive' {
	import HASH_42775_PrimitiveOptions = require('cesium/Source/Scene/HASH_42775_PrimitiveOptions')
	import Appearance = require('cesium/Source/Scene/Appearance')
	import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	class Primitive 
	{
		constructor(options? : HASH_42775_PrimitiveOptions);
		//Members
		allowPicking: boolean
		appearance: Appearance
		asynchronous: boolean
		compressVertices: boolean
		cull: boolean
		debugShowBoundingVolume: boolean
		depthFailAppearance: Appearance
		geometryInstances: Array<GeometryInstance>|GeometryInstance
		interleave: boolean
		modelMatrix: Matrix4
		ready: boolean
		readyPromise: Promise<Primitive>
		releaseGeometryInstances: boolean
		shadows: ShadowMode
		show: boolean
		vertexCacheOptimize: boolean


		//Methods
		destroy() : void
		getGeometryInstanceAttributes(id? : any) : Object
		isDestroyed() : boolean
		update() : void

	}
	export = Primitive

}
declare module 'cesium/Source/Scene/SceneTransforms' {
	import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	import Scene = require('cesium/Source/Scene/Scene')
	import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	class SceneTransforms 
	{
		constructor();
		//Members


		//Methods
		static wgs84ToDrawingBufferCoordinates(scene? : Scene, position? : Cartesian3, result? : Cartesian2) : Cartesian2
		static wgs84ToWindowCoordinates(scene? : Scene, position? : Cartesian3, result? : Cartesian2) : Cartesian2

	}
	export = SceneTransforms

}
declare module 'cesium/Source/Scene/HASH_59616_SingleTileImageryProviderOptions' {
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Credit = require('cesium/Source/Core/Credit')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_59616_SingleTileImageryProviderOptions
	{
		url: string;
		rectangle?: Rectangle;
		credit?: Credit|string;
		ellipsoid?: Ellipsoid;
		proxy?: Object;
	}
	export = HASH_59616_SingleTileImageryProviderOptions

}
declare module 'cesium/Source/Scene/SingleTileImageryProvider' {
	import HASH_59616_SingleTileImageryProviderOptions = require('cesium/Source/Scene/HASH_59616_SingleTileImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class SingleTileImageryProvider 
	{
		constructor(options? : HASH_59616_SingleTileImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = SingleTileImageryProvider

}
declare module 'cesium/Source/Scene/SphereEmitter' {
	class SphereEmitter 
	{
		constructor(radius? : number);
		//Members
		radius: number


		//Methods

	}
	export = SphereEmitter

}
declare module 'cesium/Source/Scene/StencilFunction' {
	class StencilFunction 
	{
		constructor();
		//Members
		static ALWAYS: number
		static EQUAL: number
		static GREATER: number
		static GREATER_OR_EQUAL: number
		static LESS: number
		static LESS_OR_EQUAL: number
		static NEVER: number
		static NOT_EQUAL: number


		//Methods

	}
	export = StencilFunction

}
declare module 'cesium/Source/Scene/StencilOperation' {
	class StencilOperation 
	{
		constructor();
		//Members
		static DECREMENT: number
		static DECREMENT_WRAP: number
		static INCREMENT: number
		static INCREMENT_WRAP: number
		static INVERT: number
		static KEEP: number
		static REPLACE: number
		static ZERO: number


		//Methods

	}
	export = StencilOperation

}
declare module 'cesium/Source/Scene/HASH_18064_TileCoordinatesImageryProviderOptions' {
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Color = require('cesium/Source/Core/Color')
	interface HASH_18064_TileCoordinatesImageryProviderOptions
	{
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		color?: Color;
		tileWidth?: number;
		tileHeight?: number;
	}
	export = HASH_18064_TileCoordinatesImageryProviderOptions

}
declare module 'cesium/Source/Scene/TileCoordinatesImageryProvider' {
	import HASH_18064_TileCoordinatesImageryProviderOptions = require('cesium/Source/Scene/HASH_18064_TileCoordinatesImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class TileCoordinatesImageryProvider 
	{
		constructor(options? : HASH_18064_TileCoordinatesImageryProviderOptions);
		//Members
		credit: Credit
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = TileCoordinatesImageryProvider

}
declare module 'cesium/Source/Scene/HASH_21472_TimeDynamicImageryOptions' {
	import Clock = require('cesium/Source/Core/Clock')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	interface HASH_21472_TimeDynamicImageryOptions
	{
		clock: Clock;
		times: TimeIntervalCollection;
		requestImageFunction: (()=>void);
		reloadFunction: (()=>void);
	}
	export = HASH_21472_TimeDynamicImageryOptions

}
declare module 'cesium/Source/Scene/TimeDynamicImagery' {
	import HASH_21472_TimeDynamicImageryOptions = require('cesium/Source/Scene/HASH_21472_TimeDynamicImageryOptions')
	import Clock = require('cesium/Source/Core/Clock')
	import TimeInterval = require('cesium/Source/Core/TimeInterval')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import Request = require('cesium/Source/Core/Request')
	class TimeDynamicImagery 
	{
		constructor(options : HASH_21472_TimeDynamicImageryOptions);
		//Members
		clock: Clock
		currentInterval: TimeInterval
		times: TimeIntervalCollection


		//Methods
		checkApproachingInterval(x? : number, y? : number, level? : number, request? : Request) : void
		getFromCache(x? : number, y? : number, level? : number, request? : Request) : Promise<HTMLImageElement>|void

	}
	export = TimeDynamicImagery

}
declare module 'cesium/Source/Scene/UrlTemplateImageryProvider' {
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class UrlTemplateImageryProvider 
	{
		constructor(options? : Promise<any>|any);
		//Members
		credit: Credit
		enablePickFeatures: boolean
		errorEvent: Event
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		pickFeaturesUrl: string
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string
		urlSchemeZeroPadding: Object


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		reinitialize(options? : Promise<any>|any) : void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = UrlTemplateImageryProvider

}
declare module 'cesium/Source/Scene/ViewportQuad' {
	import BoundingRectangle = require('cesium/Source/Core/BoundingRectangle')
	import Material = require('cesium/Source/Scene/Material')
	class ViewportQuad 
	{
		constructor(rectangle? : BoundingRectangle, material? : Material);
		//Members
		material: Material
		rectangle: BoundingRectangle
		show: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean
		update() : void

	}
	export = ViewportQuad

}
declare module 'cesium/Source/Scene/HASH_19052_WebMapServiceImageryProviderOptions' {
	import GetFeatureInfoFormat = require('cesium/Source/Scene/GetFeatureInfoFormat')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_19052_WebMapServiceImageryProviderOptions
	{
		url: string;
		layers: string;
		parameters?: Object;
		getFeatureInfoParameters?: Object;
		enablePickFeatures?: boolean;
		getFeatureInfoFormats?: Array<GetFeatureInfoFormat>;
		rectangle?: Rectangle;
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		tileWidth?: number;
		tileHeight?: number;
		minimumLevel?: number;
		maximumLevel?: number;
		credit?: Credit|string;
		proxy?: Object;
		subdomains?: string|Array<string>;
	}
	export = HASH_19052_WebMapServiceImageryProviderOptions

}
declare module 'cesium/Source/Scene/WebMapServiceImageryProvider' {
	import HASH_19052_WebMapServiceImageryProviderOptions = require('cesium/Source/Scene/HASH_19052_WebMapServiceImageryProviderOptions')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class WebMapServiceImageryProvider 
	{
		constructor(options? : HASH_19052_WebMapServiceImageryProviderOptions);
		//Members
		static DefaultParameters: any
		static GetFeatureInfoDefaultParameters: any
		credit: Credit
		enablePickFeatures: boolean
		errorEvent: Event
		hasAlphaChannel: boolean
		layers: string
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		url: string


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = WebMapServiceImageryProvider

}
declare module 'cesium/Source/Scene/HASH_10686_WebMapTileServiceImageryProviderOptions' {
	import Clock = require('cesium/Source/Core/Clock')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_10686_WebMapTileServiceImageryProviderOptions
	{
		url: string;
		format?: string;
		layer: string;
		style: string;
		tileMatrixSetID: string;
		tileMatrixLabels?: Array<any>;
		clock?: Clock;
		times?: TimeIntervalCollection;
		dimensions?: Object;
		tileWidth?: number;
		tileHeight?: number;
		tilingScheme?: TilingScheme;
		proxy?: Object;
		rectangle?: Rectangle;
		minimumLevel?: number;
		maximumLevel?: number;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
		subdomains?: string|Array<string>;
	}
	export = HASH_10686_WebMapTileServiceImageryProviderOptions

}
declare module 'cesium/Source/Scene/WebMapTileServiceImageryProvider' {
	import HASH_10686_WebMapTileServiceImageryProviderOptions = require('cesium/Source/Scene/HASH_10686_WebMapTileServiceImageryProviderOptions')
	import Clock = require('cesium/Source/Core/Clock')
	import Credit = require('cesium/Source/Core/Credit')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	import Request = require('cesium/Source/Core/Request')
	class WebMapTileServiceImageryProvider 
	{
		constructor(options? : HASH_10686_WebMapTileServiceImageryProviderOptions);
		//Members
		clock: Clock
		credit: Credit
		dimensions: Object
		errorEvent: Event
		format: string
		hasAlphaChannel: boolean
		maximumLevel: number
		minimumLevel: number
		proxy: DefaultProxy
		ready: boolean
		readyPromise: Promise<boolean>
		rectangle: Rectangle
		tileDiscardPolicy: TileDiscardPolicy
		tileHeight: number
		tileWidth: number
		tilingScheme: TilingScheme
		times: TimeIntervalCollection
		url: string


		//Methods
		getTileCredits(x? : number, y? : number, level? : number) : Array<Credit>
		pickFeatures(x? : number, y? : number, level? : number, longitude? : number, latitude? : number) : Promise<Array<ImageryLayerFeatureInfo>>|void
		requestImage(x? : number, y? : number, level? : number, request? : Request) : Promise<Image | Canvas>|void

	}
	export = WebMapTileServiceImageryProvider

}
declare module 'cesium/Source/Scene/HASH_18275_createOpenStreetMapImageryProviderOptions' {
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	import Credit = require('cesium/Source/Core/Credit')
	interface HASH_18275_createOpenStreetMapImageryProviderOptions
	{
		url?: string;
		fileExtension?: string;
		proxy?: Object;
		rectangle?: Rectangle;
		minimumLevel?: number;
		maximumLevel?: number;
		ellipsoid?: Ellipsoid;
		credit?: Credit|string;
	}
	export = HASH_18275_createOpenStreetMapImageryProviderOptions

}
declare module 'cesium/Source/Scene/createOpenStreetMapImageryProvider' {
	import UrlTemplateImageryProvider = require('cesium/Source/Scene/UrlTemplateImageryProvider')
	import HASH_18275_createOpenStreetMapImageryProviderOptions = require('cesium/Source/Scene/HASH_18275_createOpenStreetMapImageryProviderOptions')
	function createOpenStreetMapImageryProvider(options? : HASH_18275_createOpenStreetMapImageryProviderOptions) : UrlTemplateImageryProvider;
	export = createOpenStreetMapImageryProvider

}
declare module 'cesium/Source/Scene/HASH_19370_createTangentSpaceDebugPrimitiveOptions' {
	import Geometry = require('cesium/Source/Core/Geometry')
	import Matrix4 = require('cesium/Source/Core/Matrix4')
	interface HASH_19370_createTangentSpaceDebugPrimitiveOptions
	{
		geometry: Geometry;
		length?: number;
		modelMatrix?: Matrix4;
	}
	export = HASH_19370_createTangentSpaceDebugPrimitiveOptions

}
declare module 'cesium/Source/Scene/createTangentSpaceDebugPrimitive' {
	import Primitive = require('cesium/Source/Scene/Primitive')
	import HASH_19370_createTangentSpaceDebugPrimitiveOptions = require('cesium/Source/Scene/HASH_19370_createTangentSpaceDebugPrimitiveOptions')
	function createTangentSpaceDebugPrimitive(options? : HASH_19370_createTangentSpaceDebugPrimitiveOptions) : Primitive;
	export = createTangentSpaceDebugPrimitive

}
declare module 'cesium/Source/Scene/HASH_22857_createTileMapServiceImageryProviderOptions' {
	import Credit = require('cesium/Source/Core/Credit')
	import Rectangle = require('cesium/Source/Core/Rectangle')
	import TilingScheme = require('cesium/Source/Core/TilingScheme')
	import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	interface HASH_22857_createTileMapServiceImageryProviderOptions
	{
		url?: string;
		fileExtension?: string;
		proxy?: Object;
		credit?: Credit|string;
		minimumLevel?: number;
		maximumLevel?: number;
		rectangle?: Rectangle;
		tilingScheme?: TilingScheme;
		ellipsoid?: Ellipsoid;
		tileWidth?: number;
		tileHeight?: number;
		flipXY?: boolean;
	}
	export = HASH_22857_createTileMapServiceImageryProviderOptions

}
declare module 'cesium/Source/Scene/createTileMapServiceImageryProvider' {
	import UrlTemplateImageryProvider = require('cesium/Source/Scene/UrlTemplateImageryProvider')
	import HASH_22857_createTileMapServiceImageryProviderOptions = require('cesium/Source/Scene/HASH_22857_createTileMapServiceImageryProviderOptions')
	function createTileMapServiceImageryProvider(options? : HASH_22857_createTileMapServiceImageryProviderOptions) : UrlTemplateImageryProvider;
	export = createTileMapServiceImageryProvider

}
declare module 'cesium/Source/Scene/global' {
	import ParticleBurst = require('cesium/Source/Scene/ParticleBurst')
	import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	import PixelFormat = require('cesium/Source/Core/PixelFormat')
	import Cesium3DTile = require('cesium/Source/Scene/Cesium3DTile')
	import Cesium3DTileset = require('cesium/Source/Scene/Cesium3DTileset')
	function global() : void;
	export = global

}
declare module 'cesium/Source/Widgets/SvgPathBindingHandler' {
	class SvgPathBindingHandler 
	{
		constructor();
		//Members


		//Methods

	}
	export = SvgPathBindingHandler

}
declare module 'cesium/Source/Widgets/createCommand' {
	function createCommand(func : (()=>void), canExecute? : boolean) : void;
	export = createCommand

}
declare module 'cesium/Source/Widgets/Cesium3DTilesInspector/Cesium3DTilesInspectorViewModel' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Cesium3DTileColorBlendMode = require('cesium/Source/Scene/Cesium3DTileColorBlendMode')
	import Cesium3DTileFeature = require('cesium/Source/Scene/Cesium3DTileFeature')
	import Cesium3DTile = require('cesium/Source/Scene/Cesium3DTile')
	import Cesium3DTileset = require('cesium/Source/Scene/Cesium3DTileset')
	class Cesium3DTilesInspectorViewModel 
	{
		constructor(scene : Scene, performanceContainer : HTMLElement);
		//Members
		baseScreenSpaceError: number
		colorBlendMode: Cesium3DTileColorBlendMode
		colorBlendModes: Array<Object>
		colorize: boolean
		displayVisible: boolean
		dynamicScreenSpaceError: boolean
		dynamicScreenSpaceErrorDensity: number
		dynamicScreenSpaceErrorDensitySliderValue: number
		dynamicScreenSpaceErrorFactor: number
		editorError: string
		feature: Cesium3DTileFeature
		freezeFrame: boolean
		immediatelyLoadDesiredLevelOfDetail: boolean
		inspectorVisible: boolean
		loadSiblings: boolean
		loggingVisible: boolean
		maximumScreenSpaceError: number
		optimizationVisible: boolean
		performance: boolean
		performanceContainer: HTMLElement
		pickActive: boolean
		picking: boolean
		pickStatisticsText: string
		properties: Array<string>
		scene: Scene
		showBoundingVolumes: boolean
		showContentBoundingVolumes: boolean
		showGeometricError: boolean
		showMemoryUsage: boolean
		showOnlyPickedTileDebugLabel: boolean
		showPickStatistics: boolean
		showRenderingStatistics: boolean
		showRequestVolumes: boolean
		showStatistics: boolean
		showUrl: boolean
		skipLevelOfDetail: boolean
		skipLevels: number
		skipScreenSpaceErrorFactor: number
		statisticsText: string
		styleString: string
		styleVisible: boolean
		tile: Cesium3DTile
		tileDebugLabelsVisible: boolean
		tileset: Cesium3DTileset
		tilesetVisible: boolean
		updateVisible: boolean
		wireframe: boolean


		//Methods
		static getStatistics(tileset? : Cesium3DTileset, isPick? : boolean) : string
		compileStyle() : void
		destroy() : void
		isDestroyed() : boolean
		styleEditorKeyPress() : void
		toggleDisplay() : void
		toggleInspector() : void
		toggleLogging() : void
		toggleOptimization() : void
		togglePickTileset() : void
		toggleStyle() : void
		toggleTileDebugLabels() : void
		toggleTileset() : void
		toggleUpdate() : void
		trimTilesCache() : void

	}
	export = Cesium3DTilesInspectorViewModel

}
declare module 'cesium/Source/Widgets/Cesium3DTilesInspector/Cesium3DTilesInspector' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Cesium3DTilesInspectorViewModel = require('cesium/Source/Widgets/Cesium3DTilesInspector/Cesium3DTilesInspectorViewModel')
	class Cesium3DTilesInspector 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: Cesium3DTilesInspectorViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = Cesium3DTilesInspector

}
declare module 'cesium/Source/Widgets/CesiumInspector/CesiumInspectorViewModel' {
	import Scene = require('cesium/Source/Scene/Scene')
	import Command = require('cesium/Source/Widgets/Command')
	class CesiumInspectorViewModel 
	{
		constructor(scene : Scene, performanceContainer : PerformanceContainer);
		//Members
		decrementDepthFrustum: Command
		depthFrustum: number
		depthFrustumText: string
		doFilterPrimitive: Command
		doFilterTile: Command
		dropDownVisible: boolean
		filterPrimitive: boolean
		filterTile: boolean
		frustumPlanes: boolean
		frustums: boolean
		frustumStatisticText: string
		generalSwitchText: string
		generalVisible: boolean
		globeDepth: boolean
		hasPickedPrimitive: boolean
		hasPickedTile: boolean
		incrementDepthFrustum: Command
		performance: boolean
		performanceContainer: Element
		pickDepth: boolean
		pickPrimitive: Command
		pickPrimitiveActive: boolean
		pickTile: Command
		pickTileActive: boolean
		primitive: Command
		primitiveBoundingSphere: boolean
		primitiveReferenceFrame: boolean
		primitivesSwitchText: string
		primitivesVisible: boolean
		scene: Scene
		selectNE: Command
		selectNW: Command
		selectParent: Command
		selectSE: Command
		selectSW: Command
		shaderCacheText: string
		showPrimitiveBoundingSphere: Command
		showPrimitiveReferenceFrame: Command
		showTileBoundingSphere: Command
		showTileCoordinates: Command
		suspendUpdates: boolean
		terrainSwitchText: string
		terrainVisible: boolean
		tile: Command
		tileBoundingSphere: boolean
		tileCoordinates: boolean
		tileText: string
		toggleDropDown: Command
		toggleGeneral: Command
		togglePrimitives: Command
		toggleTerrain: Command
		wireframe: boolean


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = CesiumInspectorViewModel

}
declare module 'cesium/Source/Widgets/CesiumInspector/CesiumInspector' {
	import Scene = require('cesium/Source/Scene/Scene')
	import CesiumInspectorViewModel = require('cesium/Source/Widgets/CesiumInspector/CesiumInspectorViewModel')
	class CesiumInspector 
	{
		constructor(container : Element|string, scene : Scene);
		//Members
		container: Element
		viewModel: CesiumInspectorViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = CesiumInspector

}
declare module 'cesium/Source/Widgets/PerformanceWatchdog/HASH_30917_PerformanceWatchdogOptions' {
	import Scene = require('cesium/Source/Scene/Scene')
	interface HASH_30917_PerformanceWatchdogOptions
	{
		container: Element|string;
		scene: Scene;
		lowFrameRateMessage?: string;
	}
	export = HASH_30917_PerformanceWatchdogOptions

}
declare module 'cesium/Source/Widgets/PerformanceWatchdog/HASH_57217_PerformanceWatchdogViewModelOptions' {
	import Scene = require('cesium/Source/Scene/Scene')
	interface HASH_57217_PerformanceWatchdogViewModelOptions
	{
		scene: Scene;
		lowFrameRateMessage?: string;
	}
	export = HASH_57217_PerformanceWatchdogViewModelOptions

}
declare module 'cesium/Source/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModel' {
	import HASH_57217_PerformanceWatchdogViewModelOptions = require('cesium/Source/Widgets/PerformanceWatchdog/HASH_57217_PerformanceWatchdogViewModelOptions')
	import Command = require('cesium/Source/Widgets/Command')
	import Scene = require('cesium/Source/Scene/Scene')
	class PerformanceWatchdogViewModel 
	{
		constructor(options? : HASH_57217_PerformanceWatchdogViewModelOptions);
		//Members
		dismissMessage: Command
		lowFrameRateMessage: string
		lowFrameRateMessageDismissed: boolean
		scene: Scene
		showingLowFrameRateMessage: boolean


		//Methods

	}
	export = PerformanceWatchdogViewModel

}
declare module 'cesium/Source/Widgets/PerformanceWatchdog/PerformanceWatchdog' {
	import HASH_30917_PerformanceWatchdogOptions = require('cesium/Source/Widgets/PerformanceWatchdog/HASH_30917_PerformanceWatchdogOptions')
	import PerformanceWatchdogViewModel = require('cesium/Source/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModel')
	class PerformanceWatchdog 
	{
		constructor(options? : HASH_30917_PerformanceWatchdogOptions);
		//Members
		container: Element
		viewModel: PerformanceWatchdogViewModel


		//Methods
		destroy() : void
		isDestroyed() : boolean

	}
	export = PerformanceWatchdog

}
declare module 'cesium/Source/Widgets/Viewer/viewerCesium3DTilesInspectorMixin' {
	import Viewer = require('cesium/Source/Widgets/Viewer/Viewer')
	function viewerCesium3DTilesInspectorMixin(viewer : Viewer) : void;
	export = viewerCesium3DTilesInspectorMixin

}
declare module 'cesium/Source/Widgets/Viewer/viewerCesiumInspectorMixin' {
	import Viewer = require('cesium/Source/Widgets/Viewer/Viewer')
	function viewerCesiumInspectorMixin(viewer : Viewer) : void;
	export = viewerCesiumInspectorMixin

}
declare module 'cesium/Source/Widgets/Viewer/HASH_67204_viewerDragDropMixinOptions' {
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	interface HASH_67204_viewerDragDropMixinOptions
	{
		dropTarget?: Element|string;
		clearOnDrop?: boolean;
		flyToOnDrop?: boolean;
		clampToGround?: boolean;
		proxy?: DefaultProxy;
	}
	export = HASH_67204_viewerDragDropMixinOptions

}
declare module 'cesium/Source/Widgets/Viewer/viewerDragDropMixin' {
	import Viewer = require('cesium/Source/Widgets/Viewer/Viewer')
	import HASH_67204_viewerDragDropMixinOptions = require('cesium/Source/Widgets/Viewer/HASH_67204_viewerDragDropMixinOptions')
	import Event = require('cesium/Source/Core/Event')
	import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	function viewerDragDropMixin(viewer : Viewer, options? : HASH_67204_viewerDragDropMixinOptions) : void;
	export = viewerDragDropMixin

}
declare module 'cesium/Source/Widgets/Viewer/HASH_00053_viewerPerformanceWatchdogMixinOptions' {
	interface HASH_00053_viewerPerformanceWatchdogMixinOptions
	{
		lowFrameRateMessage?: string;
	}
	export = HASH_00053_viewerPerformanceWatchdogMixinOptions

}
declare module 'cesium/Source/Widgets/Viewer/viewerPerformanceWatchdogMixin' {
	import Viewer = require('cesium/Source/Widgets/Viewer/Viewer')
	import HASH_00053_viewerPerformanceWatchdogMixinOptions = require('cesium/Source/Widgets/Viewer/HASH_00053_viewerPerformanceWatchdogMixinOptions')
	function viewerPerformanceWatchdogMixin(viewer : Viewer, options? : HASH_00053_viewerPerformanceWatchdogMixinOptions) : void;
	export = viewerPerformanceWatchdogMixin

}
declare module 'cesium/Source/Workers/createTaskProcessorWorker' {
	function createTaskProcessorWorker(workerFunction : any) : any;
	export = createTaskProcessorWorker

}
declare module 'cesium/Source/Cesium' {
	export import AssociativeArray = require('cesium/Source/Core/AssociativeArray')
	export import AxisAlignedBoundingBox = require('cesium/Source/Core/AxisAlignedBoundingBox')
	export import BingMapsApi = require('cesium/Source/Core/BingMapsApi')
	export import BingMapsGeocoderService = require('cesium/Source/Core/BingMapsGeocoderService')
	export import BoundingRectangle = require('cesium/Source/Core/BoundingRectangle')
	export import BoundingSphere = require('cesium/Source/Core/BoundingSphere')
	export import BoxGeometry = require('cesium/Source/Core/BoxGeometry')
	export import BoxOutlineGeometry = require('cesium/Source/Core/BoxOutlineGeometry')
	export import Cartesian2 = require('cesium/Source/Core/Cartesian2')
	export import Cartesian3 = require('cesium/Source/Core/Cartesian3')
	export import Cartesian4 = require('cesium/Source/Core/Cartesian4')
	export import Cartographic = require('cesium/Source/Core/Cartographic')
	export import CartographicGeocoderService = require('cesium/Source/Core/CartographicGeocoderService')
	export import CatmullRomSpline = require('cesium/Source/Core/CatmullRomSpline')
	export import CesiumTerrainProvider = require('cesium/Source/Core/CesiumTerrainProvider')
	export import CircleGeometry = require('cesium/Source/Core/CircleGeometry')
	export import CircleOutlineGeometry = require('cesium/Source/Core/CircleOutlineGeometry')
	export import Clock = require('cesium/Source/Core/Clock')
	export import ClockRange = require('cesium/Source/Core/ClockRange')
	export import ClockStep = require('cesium/Source/Core/ClockStep')
	export import Color = require('cesium/Source/Core/Color')
	export import ColorGeometryInstanceAttribute = require('cesium/Source/Core/ColorGeometryInstanceAttribute')
	export import ComponentDatatype = require('cesium/Source/Core/ComponentDatatype')
	export import CornerType = require('cesium/Source/Core/CornerType')
	export import CorridorGeometry = require('cesium/Source/Core/CorridorGeometry')
	export import CorridorOutlineGeometry = require('cesium/Source/Core/CorridorOutlineGeometry')
	export import Credit = require('cesium/Source/Core/Credit')
	export import CubicRealPolynomial = require('cesium/Source/Core/CubicRealPolynomial')
	export import CullingVolume = require('cesium/Source/Core/CullingVolume')
	export import CylinderGeometry = require('cesium/Source/Core/CylinderGeometry')
	export import CylinderOutlineGeometry = require('cesium/Source/Core/CylinderOutlineGeometry')
	export import DefaultProxy = require('cesium/Source/Core/DefaultProxy')
	export import DeveloperError = require('cesium/Source/Core/DeveloperError')
	export import DistanceDisplayCondition = require('cesium/Source/Core/DistanceDisplayCondition')
	export import DistanceDisplayConditionGeometryInstanceAttribute = require('cesium/Source/Core/DistanceDisplayConditionGeometryInstanceAttribute')
	export import EasingFunction = require('cesium/Source/Core/EasingFunction')
	export import EllipseGeometry = require('cesium/Source/Core/EllipseGeometry')
	export import EllipseOutlineGeometry = require('cesium/Source/Core/EllipseOutlineGeometry')
	export import Ellipsoid = require('cesium/Source/Core/Ellipsoid')
	export import EllipsoidGeodesic = require('cesium/Source/Core/EllipsoidGeodesic')
	export import EllipsoidGeometry = require('cesium/Source/Core/EllipsoidGeometry')
	export import EllipsoidOutlineGeometry = require('cesium/Source/Core/EllipsoidOutlineGeometry')
	export import EllipsoidTangentPlane = require('cesium/Source/Core/EllipsoidTangentPlane')
	export import EllipsoidTerrainProvider = require('cesium/Source/Core/EllipsoidTerrainProvider')
	export import Event = require('cesium/Source/Core/Event')
	export import EventHelper = require('cesium/Source/Core/EventHelper')
	export import ExtrapolationType = require('cesium/Source/Core/ExtrapolationType')
	export import FeatureDetection = require('cesium/Source/Core/FeatureDetection')
	export import FrustumGeometry = require('cesium/Source/Core/FrustumGeometry')
	export import FrustumOutlineGeometry = require('cesium/Source/Core/FrustumOutlineGeometry')
	export import Fullscreen = require('cesium/Source/Core/Fullscreen')
	export import GeocoderService = require('cesium/Source/Core/GeocoderService')
	export import GeographicProjection = require('cesium/Source/Core/GeographicProjection')
	export import GeographicTilingScheme = require('cesium/Source/Core/GeographicTilingScheme')
	export import Geometry = require('cesium/Source/Core/Geometry')
	export import GeometryAttribute = require('cesium/Source/Core/GeometryAttribute')
	export import GeometryAttributes = require('cesium/Source/Core/GeometryAttributes')
	export import GeometryInstance = require('cesium/Source/Core/GeometryInstance')
	export import GeometryInstanceAttribute = require('cesium/Source/Core/GeometryInstanceAttribute')
	export import GeometryPipeline = require('cesium/Source/Core/GeometryPipeline')
	export import GoogleEarthEnterpriseMetadata = require('cesium/Source/Core/GoogleEarthEnterpriseMetadata')
	export import GoogleEarthEnterpriseTerrainData = require('cesium/Source/Core/GoogleEarthEnterpriseTerrainData')
	export import GoogleEarthEnterpriseTerrainProvider = require('cesium/Source/Core/GoogleEarthEnterpriseTerrainProvider')
	export import GregorianDate = require('cesium/Source/Core/GregorianDate')
	export import HeadingPitchRange = require('cesium/Source/Core/HeadingPitchRange')
	export import HeadingPitchRoll = require('cesium/Source/Core/HeadingPitchRoll')
	export import HeightmapTerrainData = require('cesium/Source/Core/HeightmapTerrainData')
	export import HermitePolynomialApproximation = require('cesium/Source/Core/HermitePolynomialApproximation')
	export import HermiteSpline = require('cesium/Source/Core/HermiteSpline')
	export import IndexDatatype = require('cesium/Source/Core/IndexDatatype')
	export import InterpolationAlgorithm = require('cesium/Source/Core/InterpolationAlgorithm')
	export import Intersect = require('cesium/Source/Core/Intersect')
	export import IntersectionTests = require('cesium/Source/Core/IntersectionTests')
	export import Intersections2D = require('cesium/Source/Core/Intersections2D')
	export import Interval = require('cesium/Source/Core/Interval')
	export import Iso8601 = require('cesium/Source/Core/Iso8601')
	export import JulianDate = require('cesium/Source/Core/JulianDate')
	export import KeyboardEventModifier = require('cesium/Source/Core/KeyboardEventModifier')
	export import LagrangePolynomialApproximation = require('cesium/Source/Core/LagrangePolynomialApproximation')
	export import LeapSecond = require('cesium/Source/Core/LeapSecond')
	export import LinearApproximation = require('cesium/Source/Core/LinearApproximation')
	export import LinearSpline = require('cesium/Source/Core/LinearSpline')
	export import MapProjection = require('cesium/Source/Core/MapProjection')
	export import Math = require('cesium/Source/Core/Math')
	export import Matrix2 = require('cesium/Source/Core/Matrix2')
	export import Matrix3 = require('cesium/Source/Core/Matrix3')
	export import Matrix4 = require('cesium/Source/Core/Matrix4')
	export import NearFarScalar = require('cesium/Source/Core/NearFarScalar')
	export import Occluder = require('cesium/Source/Core/Occluder')
	export import OrientedBoundingBox = require('cesium/Source/Core/OrientedBoundingBox')
	export import OrthographicFrustum = require('cesium/Source/Core/OrthographicFrustum')
	export import OrthographicOffCenterFrustum = require('cesium/Source/Core/OrthographicOffCenterFrustum')
	export import Packable = require('cesium/Source/Core/Packable')
	export import PackableForInterpolation = require('cesium/Source/Core/PackableForInterpolation')
	export import PerspectiveFrustum = require('cesium/Source/Core/PerspectiveFrustum')
	export import PerspectiveOffCenterFrustum = require('cesium/Source/Core/PerspectiveOffCenterFrustum')
	export import PinBuilder = require('cesium/Source/Core/PinBuilder')
	export import PixelFormat = require('cesium/Source/Core/PixelFormat')
	export import Plane = require('cesium/Source/Core/Plane')
	export import PolygonGeometry = require('cesium/Source/Core/PolygonGeometry')
	export import PolygonHierarchy = require('cesium/Source/Core/PolygonHierarchy')
	export import PolygonOutlineGeometry = require('cesium/Source/Core/PolygonOutlineGeometry')
	export import PolylineGeometry = require('cesium/Source/Core/PolylineGeometry')
	export import PolylineVolumeGeometry = require('cesium/Source/Core/PolylineVolumeGeometry')
	export import PolylineVolumeOutlineGeometry = require('cesium/Source/Core/PolylineVolumeOutlineGeometry')
	export import PrimitiveType = require('cesium/Source/Core/PrimitiveType')
	export import QuadraticRealPolynomial = require('cesium/Source/Core/QuadraticRealPolynomial')
	export import QuantizedMeshTerrainData = require('cesium/Source/Core/QuantizedMeshTerrainData')
	export import QuarticRealPolynomial = require('cesium/Source/Core/QuarticRealPolynomial')
	export import Quaternion = require('cesium/Source/Core/Quaternion')
	export import QuaternionSpline = require('cesium/Source/Core/QuaternionSpline')
	export import Queue = require('cesium/Source/Core/Queue')
	export import Ray = require('cesium/Source/Core/Ray')
	export import Rectangle = require('cesium/Source/Core/Rectangle')
	export import RectangleGeometry = require('cesium/Source/Core/RectangleGeometry')
	export import RectangleOutlineGeometry = require('cesium/Source/Core/RectangleOutlineGeometry')
	export import ReferenceFrame = require('cesium/Source/Core/ReferenceFrame')
	export import Request = require('cesium/Source/Core/Request')
	export import RequestErrorEvent = require('cesium/Source/Core/RequestErrorEvent')
	export import RequestState = require('cesium/Source/Core/RequestState')
	export import RequestType = require('cesium/Source/Core/RequestType')
	export import RuntimeError = require('cesium/Source/Core/RuntimeError')
	export import ScreenSpaceEventHandler = require('cesium/Source/Core/ScreenSpaceEventHandler')
	export import ScreenSpaceEventType = require('cesium/Source/Core/ScreenSpaceEventType')
	export import ShowGeometryInstanceAttribute = require('cesium/Source/Core/ShowGeometryInstanceAttribute')
	export import Simon1994PlanetaryPositions = require('cesium/Source/Core/Simon1994PlanetaryPositions')
	export import SimplePolylineGeometry = require('cesium/Source/Core/SimplePolylineGeometry')
	export import SphereGeometry = require('cesium/Source/Core/SphereGeometry')
	export import SphereOutlineGeometry = require('cesium/Source/Core/SphereOutlineGeometry')
	export import Spherical = require('cesium/Source/Core/Spherical')
	export import Spline = require('cesium/Source/Core/Spline')
	export import TaskProcessor = require('cesium/Source/Core/TaskProcessor')
	export import TerrainData = require('cesium/Source/Core/TerrainData')
	export import TerrainProvider = require('cesium/Source/Core/TerrainProvider')
	export import TileAvailability = require('cesium/Source/Core/TileAvailability')
	export import TileProviderError = require('cesium/Source/Core/TileProviderError')
	export import TilingScheme = require('cesium/Source/Core/TilingScheme')
	export import TimeInterval = require('cesium/Source/Core/TimeInterval')
	export import TimeIntervalCollection = require('cesium/Source/Core/TimeIntervalCollection')
	export import TimeStandard = require('cesium/Source/Core/TimeStandard')
	export import Transforms = require('cesium/Source/Core/Transforms')
	export import TranslationRotationScale = require('cesium/Source/Core/TranslationRotationScale')
	export import TridiagonalSystemSolver = require('cesium/Source/Core/TridiagonalSystemSolver')
	export import TrustedServers = require('cesium/Source/Core/TrustedServers')
	export import VRTheWorldTerrainProvider = require('cesium/Source/Core/VRTheWorldTerrainProvider')
	export import VertexFormat = require('cesium/Source/Core/VertexFormat')
	export import VideoSynchronizer = require('cesium/Source/Core/VideoSynchronizer')
	export import Visibility = require('cesium/Source/Core/Visibility')
	export import WallGeometry = require('cesium/Source/Core/WallGeometry')
	export import WallOutlineGeometry = require('cesium/Source/Core/WallOutlineGeometry')
	export import WebGLConstants = require('cesium/Source/Core/WebGLConstants')
	export import WebMercatorProjection = require('cesium/Source/Core/WebMercatorProjection')
	export import WebMercatorTilingScheme = require('cesium/Source/Core/WebMercatorTilingScheme')
	export import WeightSpline = require('cesium/Source/Core/WeightSpline')
	export import WindingOrder = require('cesium/Source/Core/WindingOrder')
	export import barycentricCoordinates = require('cesium/Source/Core/barycentricCoordinates')
	export import binarySearch = require('cesium/Source/Core/binarySearch')
	export import cancelAnimationFrame = require('cesium/Source/Core/cancelAnimationFrame')
	export import clone = require('cesium/Source/Core/clone')
	export import combine = require('cesium/Source/Core/combine')
	export import createGuid = require('cesium/Source/Core/createGuid')
	export import defaultValue = require('cesium/Source/Core/defaultValue')
	export import defined = require('cesium/Source/Core/defined')
	export import destroyObject = require('cesium/Source/Core/destroyObject')
	export import formatError = require('cesium/Source/Core/formatError')
	export import getAbsoluteUri = require('cesium/Source/Core/getAbsoluteUri')
	export import getBaseUri = require('cesium/Source/Core/getBaseUri')
	export import getExtensionFromUri = require('cesium/Source/Core/getExtensionFromUri')
	export import getFilenameFromUri = require('cesium/Source/Core/getFilenameFromUri')
	export import getImagePixels = require('cesium/Source/Core/getImagePixels')
	export import getTimestamp = require('cesium/Source/Core/getTimestamp')
	export import isArray = require('cesium/Source/Core/isArray')
	export import isLeapYear = require('cesium/Source/Core/isLeapYear')
	export import loadArrayBuffer = require('cesium/Source/Core/loadArrayBuffer')
	export import loadBlob = require('cesium/Source/Core/loadBlob')
	export import loadCRN = require('cesium/Source/Core/loadCRN')
	export import loadImage = require('cesium/Source/Core/loadImage')
	export import loadImageViaBlob = require('cesium/Source/Core/loadImageViaBlob')
	export import loadJson = require('cesium/Source/Core/loadJson')
	export import loadJsonp = require('cesium/Source/Core/loadJsonp')
	export import loadKTX = require('cesium/Source/Core/loadKTX')
	export import loadText = require('cesium/Source/Core/loadText')
	export import loadWithXhr = require('cesium/Source/Core/loadWithXhr')
	export import loadXML = require('cesium/Source/Core/loadXML')
	export import mergeSort = require('cesium/Source/Core/mergeSort')
	export import objectToQuery = require('cesium/Source/Core/objectToQuery')
	export import pointInsideTriangle = require('cesium/Source/Core/pointInsideTriangle')
	export import queryToObject = require('cesium/Source/Core/queryToObject')
	export import requestAnimationFrame = require('cesium/Source/Core/requestAnimationFrame')
	export import sampleTerrain = require('cesium/Source/Core/sampleTerrain')
	export import sampleTerrainMostDetailed = require('cesium/Source/Core/sampleTerrainMostDetailed')
	export import subdivideArray = require('cesium/Source/Core/subdivideArray')
	export import BillboardGraphics = require('cesium/Source/DataSources/BillboardGraphics')
	export import BillboardVisualizer = require('cesium/Source/DataSources/BillboardVisualizer')
	export import BoxGeometryUpdater = require('cesium/Source/DataSources/BoxGeometryUpdater')
	export import BoxGraphics = require('cesium/Source/DataSources/BoxGraphics')
	export import CallbackProperty = require('cesium/Source/DataSources/CallbackProperty')
	export import CheckerboardMaterialProperty = require('cesium/Source/DataSources/CheckerboardMaterialProperty')
	export import ColorMaterialProperty = require('cesium/Source/DataSources/ColorMaterialProperty')
	export import CompositeEntityCollection = require('cesium/Source/DataSources/CompositeEntityCollection')
	export import CompositeMaterialProperty = require('cesium/Source/DataSources/CompositeMaterialProperty')
	export import CompositePositionProperty = require('cesium/Source/DataSources/CompositePositionProperty')
	export import CompositeProperty = require('cesium/Source/DataSources/CompositeProperty')
	export import ConstantPositionProperty = require('cesium/Source/DataSources/ConstantPositionProperty')
	export import ConstantProperty = require('cesium/Source/DataSources/ConstantProperty')
	export import CorridorGeometryUpdater = require('cesium/Source/DataSources/CorridorGeometryUpdater')
	export import CorridorGraphics = require('cesium/Source/DataSources/CorridorGraphics')
	export import CustomDataSource = require('cesium/Source/DataSources/CustomDataSource')
	export import CylinderGeometryUpdater = require('cesium/Source/DataSources/CylinderGeometryUpdater')
	export import CylinderGraphics = require('cesium/Source/DataSources/CylinderGraphics')
	export import CzmlDataSource = require('cesium/Source/DataSources/CzmlDataSource')
	export import DataSource = require('cesium/Source/DataSources/DataSource')
	export import DataSourceClock = require('cesium/Source/DataSources/DataSourceClock')
	export import DataSourceCollection = require('cesium/Source/DataSources/DataSourceCollection')
	export import DataSourceDisplay = require('cesium/Source/DataSources/DataSourceDisplay')
	export import DynamicGeometryUpdater = require('cesium/Source/DataSources/DynamicGeometryUpdater')
	export import EllipseGeometryUpdater = require('cesium/Source/DataSources/EllipseGeometryUpdater')
	export import EllipseGraphics = require('cesium/Source/DataSources/EllipseGraphics')
	export import EllipsoidGeometryUpdater = require('cesium/Source/DataSources/EllipsoidGeometryUpdater')
	export import EllipsoidGraphics = require('cesium/Source/DataSources/EllipsoidGraphics')
	export import Entity = require('cesium/Source/DataSources/Entity')
	export import EntityCluster = require('cesium/Source/DataSources/EntityCluster')
	export import EntityCollection = require('cesium/Source/DataSources/EntityCollection')
	export import EntityView = require('cesium/Source/DataSources/EntityView')
	export import GeoJsonDataSource = require('cesium/Source/DataSources/GeoJsonDataSource')
	export import GeometryUpdater = require('cesium/Source/DataSources/GeometryUpdater')
	export import GeometryVisualizer = require('cesium/Source/DataSources/GeometryVisualizer')
	export import GridMaterialProperty = require('cesium/Source/DataSources/GridMaterialProperty')
	export import ImageMaterialProperty = require('cesium/Source/DataSources/ImageMaterialProperty')
	export import KMLTour = require('cesium/Source/DataSources/KMLTour')
	export import KmlCamera = require('cesium/Source/DataSources/KmlCamera')
	export import KmlDataSource = require('cesium/Source/DataSources/KmlDataSource')
	export import KmlLookAt = require('cesium/Source/DataSources/KmlLookAt')
	export import KmlTourFlyTo = require('cesium/Source/DataSources/KmlTourFlyTo')
	export import KmlTourWait = require('cesium/Source/DataSources/KmlTourWait')
	export import LabelGraphics = require('cesium/Source/DataSources/LabelGraphics')
	export import LabelVisualizer = require('cesium/Source/DataSources/LabelVisualizer')
	export import MaterialProperty = require('cesium/Source/DataSources/MaterialProperty')
	export import ModelGraphics = require('cesium/Source/DataSources/ModelGraphics')
	export import ModelVisualizer = require('cesium/Source/DataSources/ModelVisualizer')
	export import NodeTransformationProperty = require('cesium/Source/DataSources/NodeTransformationProperty')
	export import PathGraphics = require('cesium/Source/DataSources/PathGraphics')
	export import PathVisualizer = require('cesium/Source/DataSources/PathVisualizer')
	export import PointGraphics = require('cesium/Source/DataSources/PointGraphics')
	export import PointVisualizer = require('cesium/Source/DataSources/PointVisualizer')
	export import PolygonGeometryUpdater = require('cesium/Source/DataSources/PolygonGeometryUpdater')
	export import PolygonGraphics = require('cesium/Source/DataSources/PolygonGraphics')
	export import PolylineArrowMaterialProperty = require('cesium/Source/DataSources/PolylineArrowMaterialProperty')
	export import PolylineDashMaterialProperty = require('cesium/Source/DataSources/PolylineDashMaterialProperty')
	export import PolylineGeometryUpdater = require('cesium/Source/DataSources/PolylineGeometryUpdater')
	export import PolylineGlowMaterialProperty = require('cesium/Source/DataSources/PolylineGlowMaterialProperty')
	export import PolylineGraphics = require('cesium/Source/DataSources/PolylineGraphics')
	export import PolylineOutlineMaterialProperty = require('cesium/Source/DataSources/PolylineOutlineMaterialProperty')
	export import PolylineVolumeGeometryUpdater = require('cesium/Source/DataSources/PolylineVolumeGeometryUpdater')
	export import PolylineVolumeGraphics = require('cesium/Source/DataSources/PolylineVolumeGraphics')
	export import PositionProperty = require('cesium/Source/DataSources/PositionProperty')
	export import PositionPropertyArray = require('cesium/Source/DataSources/PositionPropertyArray')
	export import Property = require('cesium/Source/DataSources/Property')
	export import PropertyArray = require('cesium/Source/DataSources/PropertyArray')
	export import PropertyBag = require('cesium/Source/DataSources/PropertyBag')
	export import RectangleGeometryUpdater = require('cesium/Source/DataSources/RectangleGeometryUpdater')
	export import RectangleGraphics = require('cesium/Source/DataSources/RectangleGraphics')
	export import ReferenceProperty = require('cesium/Source/DataSources/ReferenceProperty')
	export import Rotation = require('cesium/Source/DataSources/Rotation')
	export import SampledPositionProperty = require('cesium/Source/DataSources/SampledPositionProperty')
	export import SampledProperty = require('cesium/Source/DataSources/SampledProperty')
	export import StripeMaterialProperty = require('cesium/Source/DataSources/StripeMaterialProperty')
	export import StripeOrientation = require('cesium/Source/DataSources/StripeOrientation')
	export import TimeIntervalCollectionPositionProperty = require('cesium/Source/DataSources/TimeIntervalCollectionPositionProperty')
	export import TimeIntervalCollectionProperty = require('cesium/Source/DataSources/TimeIntervalCollectionProperty')
	export import VelocityOrientationProperty = require('cesium/Source/DataSources/VelocityOrientationProperty')
	export import VelocityVectorProperty = require('cesium/Source/DataSources/VelocityVectorProperty')
	export import Visualizer = require('cesium/Source/DataSources/Visualizer')
	export import WallGeometryUpdater = require('cesium/Source/DataSources/WallGeometryUpdater')
	export import WallGraphics = require('cesium/Source/DataSources/WallGraphics')
	export import Appearance = require('cesium/Source/Scene/Appearance')
	export import ArcGisMapServerImageryProvider = require('cesium/Source/Scene/ArcGisMapServerImageryProvider')
	export import Billboard = require('cesium/Source/Scene/Billboard')
	export import BillboardCollection = require('cesium/Source/Scene/BillboardCollection')
	export import BingMapsImageryProvider = require('cesium/Source/Scene/BingMapsImageryProvider')
	export import BingMapsStyle = require('cesium/Source/Scene/BingMapsStyle')
	export import BlendEquation = require('cesium/Source/Scene/BlendEquation')
	export import BlendFunction = require('cesium/Source/Scene/BlendFunction')
	export import BlendOption = require('cesium/Source/Scene/BlendOption')
	export import BlendingState = require('cesium/Source/Scene/BlendingState')
	export import BoxEmitter = require('cesium/Source/Scene/BoxEmitter')
	export import Camera = require('cesium/Source/Scene/Camera')
	export import CameraEventAggregator = require('cesium/Source/Scene/CameraEventAggregator')
	export import CameraEventType = require('cesium/Source/Scene/CameraEventType')
	export import Cesium3DTile = require('cesium/Source/Scene/Cesium3DTile')
	export import Cesium3DTileColorBlendMode = require('cesium/Source/Scene/Cesium3DTileColorBlendMode')
	export import Cesium3DTileContent = require('cesium/Source/Scene/Cesium3DTileContent')
	export import Cesium3DTileFeature = require('cesium/Source/Scene/Cesium3DTileFeature')
	export import Cesium3DTileStyle = require('cesium/Source/Scene/Cesium3DTileStyle')
	export import Cesium3DTileset = require('cesium/Source/Scene/Cesium3DTileset')
	export import CircleEmitter = require('cesium/Source/Scene/CircleEmitter')
	export import ClassificationOption = require('cesium/Source/Scene/ClassificationOption')
	export import ClassificationPrimitive = require('cesium/Source/Scene/ClassificationPrimitive')
	export import ColorBlendMode = require('cesium/Source/Scene/ColorBlendMode')
	export import ConditionsExpression = require('cesium/Source/Scene/ConditionsExpression')
	export import ConeEmitter = require('cesium/Source/Scene/ConeEmitter')
	export import CreditDisplay = require('cesium/Source/Scene/CreditDisplay')
	export import CullFace = require('cesium/Source/Scene/CullFace')
	export import DebugAppearance = require('cesium/Source/Scene/DebugAppearance')
	export import DebugCameraPrimitive = require('cesium/Source/Scene/DebugCameraPrimitive')
	export import DebugModelMatrixPrimitive = require('cesium/Source/Scene/DebugModelMatrixPrimitive')
	export import DepthFunction = require('cesium/Source/Scene/DepthFunction')
	export import DiscardMissingTileImagePolicy = require('cesium/Source/Scene/DiscardMissingTileImagePolicy')
	export import EllipsoidSurfaceAppearance = require('cesium/Source/Scene/EllipsoidSurfaceAppearance')
	export import Expression = require('cesium/Source/Scene/Expression')
	export import Fog = require('cesium/Source/Scene/Fog')
	export import FrameRateMonitor = require('cesium/Source/Scene/FrameRateMonitor')
	export import FrameState = require('cesium/Source/Scene/FrameState')
	export import GetFeatureInfoFormat = require('cesium/Source/Scene/GetFeatureInfoFormat')
	export import Globe = require('cesium/Source/Scene/Globe')
	export import GoogleEarthEnterpriseImageryProvider = require('cesium/Source/Scene/GoogleEarthEnterpriseImageryProvider')
	export import GoogleEarthEnterpriseMapsProvider = require('cesium/Source/Scene/GoogleEarthEnterpriseMapsProvider')
	export import GridImageryProvider = require('cesium/Source/Scene/GridImageryProvider')
	export import GroundPrimitive = require('cesium/Source/Scene/GroundPrimitive')
	export import HeightReference = require('cesium/Source/Scene/HeightReference')
	export import HorizontalOrigin = require('cesium/Source/Scene/HorizontalOrigin')
	export import ImageryLayer = require('cesium/Source/Scene/ImageryLayer')
	export import ImageryLayerCollection = require('cesium/Source/Scene/ImageryLayerCollection')
	export import ImageryLayerFeatureInfo = require('cesium/Source/Scene/ImageryLayerFeatureInfo')
	export import ImageryProvider = require('cesium/Source/Scene/ImageryProvider')
	export import ImagerySplitDirection = require('cesium/Source/Scene/ImagerySplitDirection')
	export import Label = require('cesium/Source/Scene/Label')
	export import LabelCollection = require('cesium/Source/Scene/LabelCollection')
	export import LabelStyle = require('cesium/Source/Scene/LabelStyle')
	export import MapMode2D = require('cesium/Source/Scene/MapMode2D')
	export import MapboxImageryProvider = require('cesium/Source/Scene/MapboxImageryProvider')
	export import Material = require('cesium/Source/Scene/Material')
	export import MaterialAppearance = require('cesium/Source/Scene/MaterialAppearance')
	export import Model = require('cesium/Source/Scene/Model')
	export import ModelAnimation = require('cesium/Source/Scene/ModelAnimation')
	export import ModelAnimationCollection = require('cesium/Source/Scene/ModelAnimationCollection')
	export import ModelAnimationLoop = require('cesium/Source/Scene/ModelAnimationLoop')
	export import ModelMaterial = require('cesium/Source/Scene/ModelMaterial')
	export import ModelMesh = require('cesium/Source/Scene/ModelMesh')
	export import ModelNode = require('cesium/Source/Scene/ModelNode')
	export import Moon = require('cesium/Source/Scene/Moon')
	export import NeverTileDiscardPolicy = require('cesium/Source/Scene/NeverTileDiscardPolicy')
	export import Particle = require('cesium/Source/Scene/Particle')
	export import ParticleBurst = require('cesium/Source/Scene/ParticleBurst')
	export import ParticleEmitter = require('cesium/Source/Scene/ParticleEmitter')
	export import ParticleSystem = require('cesium/Source/Scene/ParticleSystem')
	export import PerInstanceColorAppearance = require('cesium/Source/Scene/PerInstanceColorAppearance')
	export import PointPrimitive = require('cesium/Source/Scene/PointPrimitive')
	export import PointPrimitiveCollection = require('cesium/Source/Scene/PointPrimitiveCollection')
	export import Polyline = require('cesium/Source/Scene/Polyline')
	export import PolylineCollection = require('cesium/Source/Scene/PolylineCollection')
	export import PolylineColorAppearance = require('cesium/Source/Scene/PolylineColorAppearance')
	export import PolylineMaterialAppearance = require('cesium/Source/Scene/PolylineMaterialAppearance')
	export import Primitive = require('cesium/Source/Scene/Primitive')
	export import PrimitiveCollection = require('cesium/Source/Scene/PrimitiveCollection')
	export import Scene = require('cesium/Source/Scene/Scene')
	export import SceneMode = require('cesium/Source/Scene/SceneMode')
	export import SceneTransforms = require('cesium/Source/Scene/SceneTransforms')
	export import ScreenSpaceCameraController = require('cesium/Source/Scene/ScreenSpaceCameraController')
	export import ShadowMap = require('cesium/Source/Scene/ShadowMap')
	export import ShadowMode = require('cesium/Source/Scene/ShadowMode')
	export import SingleTileImageryProvider = require('cesium/Source/Scene/SingleTileImageryProvider')
	export import SkyAtmosphere = require('cesium/Source/Scene/SkyAtmosphere')
	export import SkyBox = require('cesium/Source/Scene/SkyBox')
	export import SphereEmitter = require('cesium/Source/Scene/SphereEmitter')
	export import StencilFunction = require('cesium/Source/Scene/StencilFunction')
	export import StencilOperation = require('cesium/Source/Scene/StencilOperation')
	export import StyleExpression = require('cesium/Source/Scene/StyleExpression')
	export import Sun = require('cesium/Source/Scene/Sun')
	export import TileCoordinatesImageryProvider = require('cesium/Source/Scene/TileCoordinatesImageryProvider')
	export import TileDiscardPolicy = require('cesium/Source/Scene/TileDiscardPolicy')
	export import TimeDynamicImagery = require('cesium/Source/Scene/TimeDynamicImagery')
	export import UrlTemplateImageryProvider = require('cesium/Source/Scene/UrlTemplateImageryProvider')
	export import VerticalOrigin = require('cesium/Source/Scene/VerticalOrigin')
	export import ViewportQuad = require('cesium/Source/Scene/ViewportQuad')
	export import WebMapServiceImageryProvider = require('cesium/Source/Scene/WebMapServiceImageryProvider')
	export import WebMapTileServiceImageryProvider = require('cesium/Source/Scene/WebMapTileServiceImageryProvider')
	export import createOpenStreetMapImageryProvider = require('cesium/Source/Scene/createOpenStreetMapImageryProvider')
	export import createTangentSpaceDebugPrimitive = require('cesium/Source/Scene/createTangentSpaceDebugPrimitive')
	export import createTileMapServiceImageryProvider = require('cesium/Source/Scene/createTileMapServiceImageryProvider')
	export import global = require('cesium/Source/Scene/global')
	export import ClockViewModel = require('cesium/Source/Widgets/ClockViewModel')
	export import Command = require('cesium/Source/Widgets/Command')
	export import SvgPathBindingHandler = require('cesium/Source/Widgets/SvgPathBindingHandler')
	export import ToggleButtonViewModel = require('cesium/Source/Widgets/ToggleButtonViewModel')
	export import createCommand = require('cesium/Source/Widgets/createCommand')
	export import Animation = require('cesium/Source/Widgets/Animation/Animation')
	export import AnimationViewModel = require('cesium/Source/Widgets/Animation/AnimationViewModel')
	export import BaseLayerPicker = require('cesium/Source/Widgets/BaseLayerPicker/BaseLayerPicker')
	export import BaseLayerPickerViewModel = require('cesium/Source/Widgets/BaseLayerPicker/BaseLayerPickerViewModel')
	export import ProviderViewModel = require('cesium/Source/Widgets/BaseLayerPicker/ProviderViewModel')
	export import Cesium3DTilesInspector = require('cesium/Source/Widgets/Cesium3DTilesInspector/Cesium3DTilesInspector')
	export import Cesium3DTilesInspectorViewModel = require('cesium/Source/Widgets/Cesium3DTilesInspector/Cesium3DTilesInspectorViewModel')
	export import CesiumInspector = require('cesium/Source/Widgets/CesiumInspector/CesiumInspector')
	export import CesiumInspectorViewModel = require('cesium/Source/Widgets/CesiumInspector/CesiumInspectorViewModel')
	export import CesiumWidget = require('cesium/Source/Widgets/CesiumWidget/CesiumWidget')
	export import FullscreenButton = require('cesium/Source/Widgets/FullscreenButton/FullscreenButton')
	export import FullscreenButtonViewModel = require('cesium/Source/Widgets/FullscreenButton/FullscreenButtonViewModel')
	export import Geocoder = require('cesium/Source/Widgets/Geocoder/Geocoder')
	export import GeocoderViewModel = require('cesium/Source/Widgets/Geocoder/GeocoderViewModel')
	export import HomeButton = require('cesium/Source/Widgets/HomeButton/HomeButton')
	export import HomeButtonViewModel = require('cesium/Source/Widgets/HomeButton/HomeButtonViewModel')
	export import InfoBox = require('cesium/Source/Widgets/InfoBox/InfoBox')
	export import InfoBoxViewModel = require('cesium/Source/Widgets/InfoBox/InfoBoxViewModel')
	export import NavigationHelpButton = require('cesium/Source/Widgets/NavigationHelpButton/NavigationHelpButton')
	export import NavigationHelpButtonViewModel = require('cesium/Source/Widgets/NavigationHelpButton/NavigationHelpButtonViewModel')
	export import PerformanceWatchdog = require('cesium/Source/Widgets/PerformanceWatchdog/PerformanceWatchdog')
	export import PerformanceWatchdogViewModel = require('cesium/Source/Widgets/PerformanceWatchdog/PerformanceWatchdogViewModel')
	export import ProjectionPicker = require('cesium/Source/Widgets/ProjectionPicker/ProjectionPicker')
	export import ProjectionPickerViewModel = require('cesium/Source/Widgets/ProjectionPicker/ProjectionPickerViewModel')
	export import SceneModePicker = require('cesium/Source/Widgets/SceneModePicker/SceneModePicker')
	export import SceneModePickerViewModel = require('cesium/Source/Widgets/SceneModePicker/SceneModePickerViewModel')
	export import SelectionIndicator = require('cesium/Source/Widgets/SelectionIndicator/SelectionIndicator')
	export import SelectionIndicatorViewModel = require('cesium/Source/Widgets/SelectionIndicator/SelectionIndicatorViewModel')
	export import Timeline = require('cesium/Source/Widgets/Timeline/Timeline')
	export import VRButton = require('cesium/Source/Widgets/VRButton/VRButton')
	export import VRButtonViewModel = require('cesium/Source/Widgets/VRButton/VRButtonViewModel')
	export import Viewer = require('cesium/Source/Widgets/Viewer/Viewer')
	export import viewerCesium3DTilesInspectorMixin = require('cesium/Source/Widgets/Viewer/viewerCesium3DTilesInspectorMixin')
	export import viewerCesiumInspectorMixin = require('cesium/Source/Widgets/Viewer/viewerCesiumInspectorMixin')
	export import viewerDragDropMixin = require('cesium/Source/Widgets/Viewer/viewerDragDropMixin')
	export import viewerPerformanceWatchdogMixin = require('cesium/Source/Widgets/Viewer/viewerPerformanceWatchdogMixin')
	export import createTaskProcessorWorker = require('cesium/Source/Workers/createTaskProcessorWorker')

}
declare module 'cesium' {
	}
