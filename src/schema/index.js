"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var graphql_import_1 = require("graphql-import");
var path_1 = __importDefault(require("path"));
var schema = graphql_import_1.importSchema(path_1["default"].join(__dirname, 'schema.graphql'));
exports["default"] = schema;
