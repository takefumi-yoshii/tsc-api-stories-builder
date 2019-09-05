import { FileInfo } from './type'
// ______________________________________________________
//
export function mapFileInfo(src: string, dist: string) {
  return (fileName: string): FileInfo => {
    const dir = fileName.split('/')
    const [name, ...ext] = dir[dir.length - 1].split('.')
    dir.pop()
    return {
      importModulePath: [...dir, name].join('/'),
      storiesName: dir.join('/').replace(src, ''),
      name,
      ext: ext.join('.'),
      distDir: dir.join('/').replace(src, dist)
    }
  }
}
