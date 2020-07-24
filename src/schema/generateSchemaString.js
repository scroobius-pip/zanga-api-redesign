"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var _1 = __importDefault(require("./"));
var fs = require("fs");
console.log(_1["default"]);
var data = "\nconst data = `" + _1["default"] + "`\nexport default data\n";
console.log('Generating Schema String');
fs.writeFile('./src/schema/schemaString.ts', data, function (err) {
    if (err)
        console.error(err);
    console.log('Successfully Generated Schema String');
});
