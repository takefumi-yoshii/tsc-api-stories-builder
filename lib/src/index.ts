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
    getTargetFileNames(sourceFiles, declarationName) // 対象ファイルの絞り込み
      .map(mapFileInfo(srcDir, distDir)) // メタ情報を構築
      .map(fileInfo => {
        // StoryRender関数を実行するASTを構築
        const ast = createStoryRenderAst({
          declarationName,
          fileInfo
        })
        const fileBody = printNode(ast) // ASTを文字列に変換
        const fileName = `${fileInfo.distDir}/${fileInfo.name}.${fileInfo.ext}`
        emitFile(fileInfo.distDir, fileName, fileBody) // ファイル出力
      })
  }
  function emitStoryRegisterFiles(declarationName: string) {
    getTargetFileNames(sourceFiles, declarationName) // 対象ファイルの絞り込み
      .map(mapFileInfo(srcDir, distDir)) // メタ情報を構築
      .map(fileInfo => {
        // StoryRegister関数を実行するASTを構築
        const ast = createStoryRegisterAst({
          declarationName,
          fileInfo
        })
        const fileBody = printNode(ast) // ASTを文字列に変換
        const fileName = `${fileInfo.distDir}/${fileInfo.name}.${fileInfo.ext}`
        emitFile(fileInfo.distDir, fileName, fileBody) // ファイル出力
      })
  }
  // ツール実行直後「.stroies.tsx」が出力されているディレクトリは削除する
  cleanUp()
  // StoryRender関数を実行するファイルを出力する
  emitStoryRenderFiles(conf.storyRenderDeclarationName)
  // StoryRegister関数を実行するファイルを出力する
  emitStoryRegisterFiles(conf.storyRegisterDeclarationName)
}
