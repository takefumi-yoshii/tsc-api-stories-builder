import * as ts from 'typescript'
import { FileInfo } from './type'
// ______________________________________________________
//
type Props = {
  declarationName: string
  fileInfo: FileInfo
}
export const createStoryRegisterAst = (props: Props) => [
  ts.createImportDeclaration(
    undefined,
    undefined,
    ts.createImportClause(
      undefined,
      ts.createNamedImports([
        ts.createImportSpecifier(
          undefined,
          ts.createIdentifier('storiesOf')
        )
      ])
    ),
    ts.createStringLiteral('@storybook/react')
  ),
  ts.createImportDeclaration(
    undefined,
    undefined,
    ts.createImportClause(
      undefined,
      ts.createNamedImports([
        ts.createImportSpecifier(
          undefined,
          ts.createIdentifier(props.declarationName)
        )
      ])
    ),
    ts.createStringLiteral(props.fileInfo.importModulePath)
  ),
  ts.createExpressionStatement(
    ts.createCall(
      ts.createIdentifier(props.declarationName),
      undefined,
      [
        ts.createCall(
          ts.createIdentifier('storiesOf'),
          undefined,
          [
            ts.createStringLiteral(
              props.fileInfo.storiesName
            ),
            ts.createIdentifier('module')
          ]
        )
      ]
    )
  )
]
