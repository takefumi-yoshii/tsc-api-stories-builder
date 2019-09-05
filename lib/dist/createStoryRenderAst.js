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
exports.createStoryRenderAst = function (props) { return [
    ts.createImportDeclaration(undefined, undefined, ts.createImportClause(undefined, ts.createNamedImports([
        ts.createImportSpecifier(undefined, ts.createIdentifier('storiesOf'))
    ])), ts.createStringLiteral('@storybook/react')),
    ts.createImportDeclaration(undefined, undefined, ts.createImportClause(undefined, ts.createNamedImports([
        ts.createImportSpecifier(undefined, ts.createIdentifier(props.declarationName))
    ])), ts.createStringLiteral(props.fileInfo.importModulePath)),
    ts.createExpressionStatement(ts.createCall(ts.createPropertyAccess(ts.createCall(ts.createIdentifier('storiesOf'), undefined, [
        ts.createStringLiteral(props.fileInfo.storiesName),
        ts.createIdentifier('module')
    ]), ts.createIdentifier('add')), undefined, [
        ts.createStringLiteral(props.fileInfo.name),
        ts.createIdentifier(props.declarationName)
    ]))
]; };
