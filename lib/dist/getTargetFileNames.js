"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ts = __importStar(require("typescript"));
// ______________________________________________________
//
function isExpectedNode(node, declarationName) {
    var res = false;
    if (ts.isVariableDeclarationList(node)) {
        ts.forEachChild(node, function (child) {
            if (ts.isVariableDeclaration(child)) {
                if (ts.isIdentifier(child.name)) {
                    if (child.name.text === declarationName) {
                        res = true;
                    }
                }
            }
        });
    }
    return res;
}
// ______________________________________________________
//
function isTargetSoure(source, declarationName) {
    var res = false;
    function visit(node) {
        if (isExpectedNode(node, declarationName)) {
            res = true;
        }
        ts.forEachChild(node, visit);
    }
    visit(source);
    return res;
}
// ______________________________________________________
//
function getTargetFileNames(sources, declarationName) {
    var srcFiles = [];
    sources.forEach(function (source) {
        if (isTargetSoure(source, declarationName)) {
            var fileName = source.getSourceFile().fileName;
            srcFiles.push(fileName);
        }
    });
    return srcFiles;
}
exports.getTargetFileNames = getTargetFileNames;
