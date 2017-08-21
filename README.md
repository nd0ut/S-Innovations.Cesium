# cesium-typings-generator
Note: This project based on https://github.com/s-innovations/S-Innovations.Cesium

## Changes
 - adapted for mono compiler
 - added all used .NET dependencies and compiled .exe (if you don't want to compile)
 - fixed some bugs with newer versions of cesium
 - ability to select needed cesium version

## How it works
Typings are generated from Cesium API Docs at https://cesiumjs.org/releases/1.36/Build/Documentation/index.html

## Requirements
 - mono
 - readlink
 - node

## How to use
```
npm i
CESIUM_VERSION=1.36 npm run build
```

By default it fetches last version.

Then you can find declaration file at dist/cesium.d.ts