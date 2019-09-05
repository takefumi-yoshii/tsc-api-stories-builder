import React from 'react'
import styled from 'styled-components'
import * as styles from '../styles'
// ______________________________________________________
//
type Props = {
  className?: string
  fontSize?: number
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void
}
// ______________________________________________________
//
const FunctionComponent: React.FC<Props> = props => (
  <button
    className={props.className}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)
// ______________________________________________________
//
export const BtnSecondary = styled(FunctionComponent)`
  ${styles.ResetButton}
  padding: 1em 2em;
  border-radius: 2em;
  color: #fff;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize * 0.1 : 1.6}rem;
  background-color: ${({ theme }) =>
    theme.colors.secondary};
  transition-duration: 0.2s;
  transition-property: background-color;
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.secondaryHigh};
    cursor: pointer;
  }
`
// ______________________________________________________
//
export const StoryRegister: React.StoryRegister = story =>
  story
    .addParameters({ options: { panelPosition: 'right' } })
    .add('BtnSecondary', () => (
      <>
        <BtnSecondary fontSize={12}>
          FontSize 12
        </BtnSecondary>
        <BtnSecondary fontSize={14}>
          FontSize 14
        </BtnSecondary>
        <BtnSecondary fontSize={16}>
          FontSize 16
        </BtnSecondary>
      </>
    ))
// ______________________________________________________
//
export default BtnSecondary
