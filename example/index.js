const packPath = require("../lib");

console.log(packPath("~/path/to/my/module"));
// => /home/ionicabizau/path/to/my/module/package.json

console.log(packPath("relative/path/to/module"));
// => /home/ionicabizau/Documents/.../relative/path/to/module/package.json
