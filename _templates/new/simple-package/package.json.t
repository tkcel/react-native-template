---
to: packages/<%= packageName %>/package.json
---
{
  "name": "@react-native-template/<%= packageName %>",
  "version": "0.0.2",
  "author": "YutaUra <yuuta3594@outlook.jp>",
  "license": "MIT",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "browser": "dist/umd/index.js",
  "types": "dist/types/index.d.ts",
  "directories": {},
  "files": [
    "dist"
  ],
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1"
  }
}
