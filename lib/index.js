const path = require("path")
    , abs = require("abs")
    ;

module.exports = function packageJsonPath(dir) {
    return path.join(abs(dir), "package.json");
};
