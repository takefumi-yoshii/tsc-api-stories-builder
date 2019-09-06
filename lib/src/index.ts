import * as fs from 'fs-extra'
import * as path from 'path'
import { Config, config } from './config'
import { createProgram } from './createProgram'
import { getTargetFileNames } from './getTargetFileNames'
import { mapFileInfo } from './mapFileInfo'
import { printNode } from './printNode'
import { emitFile } from './emitFile'
import { createStoryRenderAst } from './createStoryRenderAst'
import { createStoryRegisterAst } from './createStoryRegisterAst'
// ______________________________________________________
//
export function run(cliConfig: Config) {
  const conf = { ...config, ...cliConfig }
  const srcDir = path.resolve(conf.srcDir)
  const distDir = path.resolve(conf.distDir)
  const program = createProgram(path.resolve(conf.baseDir))
  const sourceFiles = program.getSourceFiles()

  function cleanUp() {
    fs.removeSync(distDir)
  }
  function emitStoryRenderFiles(declarationName: string) {
    getTargetFileNames(sourceFiles, declarationName)
      .map(mapFileInfo(srcDir, distDir))
      .map(fileInfo => {
        const ast = createStoryRenderAst({
          declarationName,
          fileInfo
        })
        const fileBody = printNode(ast)
        const fileName = `${fileInfo.distDir}/${fileInfo.name}.${fileInfo.ext}`
        emitFile(fileInfo.distDir, fileName, fileBody)
      })
  }
  function emitStoryRegisterFiles(declarationName: string) {
    getTargetFileNames(sourceFiles, declarationName)
      .map(mapFileInfo(srcDir, distDir))
      .map(fileInfo => {
        const ast = createStoryRegisterAst({
          declarationName,
          fileInfo
        })
        const fileBody = printNode(ast)
        const fileName = `${fileInfo.distDir}/${fileInfo.name}.${fileInfo.ext}`
        emitFile(fileInfo.distDir, fileName, fileBody)
      })
  }
  cleanUp()
  emitStoryRenderFiles(conf.storyRenderDeclarationName)
  emitStoryRegisterFiles(conf.storyRegisterDeclarationName)
}
