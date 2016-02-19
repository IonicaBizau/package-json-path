# package-json-path [![Version](https://img.shields.io/npm/v/package-json-path.svg)](https://www.npmjs.com/package/package-json-path) [![Downloads](https://img.shields.io/npm/dt/package-json-path.svg)](https://www.npmjs.com/package/package-json-path)

> Get the package.json path in a specific directory.

## Installation

```sh
$ npm i --save package-json-path
```

## Example

```js
const packPath = require("package-json-path");

console.log(packPath("~/path/to/my/module"));
// => /home/ionicabizau/path/to/my/module/package.json

console.log(packPath("relative/path/to/module"));
// => /home/ionicabizau/Documents/.../relative/path/to/module/package.json
```

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[ISC][license] © [][website]

[license]: http://showalicense.com/?fullname=&year=2016#license-isc
[website]: 
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md