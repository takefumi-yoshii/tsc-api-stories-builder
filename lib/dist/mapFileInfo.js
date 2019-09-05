"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ______________________________________________________
//
function mapFileInfo(src, dist) {
    return function (file) {
        var dir = file.split('/');
        var _a = dir[dir.length - 1].split('.'), name = _a[0], ext = _a.slice(1);
        dir.pop();
        return {
            importModulePath: dir.concat([name]).join('/'),
            storiesName: dir.join('/').replace(src, ''),
            name: name,
            ext: ext.join('.'),
            distDir: dir.join('/').replace(src, dist)
        };
    };
}
exports.mapFileInfo = mapFileInfo;
