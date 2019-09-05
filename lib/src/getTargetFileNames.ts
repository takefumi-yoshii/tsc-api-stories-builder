import * as ts from 'typescript'
// ______________________________________________________
//
function isExpectedNode(
  node: ts.Node,
  declarationName: string
) {
  let res = false
  if (ts.isVariableDeclarationList(node)) {
    ts.forEachChild(node, child => {
      if (ts.isVariableDeclaration(child)) {
        if (ts.isIdentifier(child.name)) {
          if (child.name.text === declarationName) {
            res = true
          }
        }
      }
    })
  }
  return res
}
// ______________________________________________________
//
function isTargetSoure(
  source: ts.SourceFile,
  declarationName: string
) {
  let res = false
  function visit(node: ts.Node) {
    if (isExpectedNode(node, declarationName)) {
      res = true
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return res
}
// ______________________________________________________
//
export function getTargetFileNames(
  sources: readonly ts.SourceFile[],
  declarationName: string
): string[] {
  const srcFiles: string[] = []
  sources.forEach(source => {
    if (isTargetSoure(source, declarationName)) {
      const { fileName } = source.getSourceFile()
      srcFiles.push(fileName)
    }
  })
  return srcFiles
}
