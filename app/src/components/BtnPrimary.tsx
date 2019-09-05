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
export const BtnPrimary = styled(FunctionComponent)`
  ${styles.ResetButton}
  padding: 1em 2em;
  border-radius: 2em;
  color: #fff;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize * 0.1 : 1.6}rem;
  background-color: ${({ theme }) => theme.colors.primary};
  transition-duration: 0.2s;
  transition-property: background-color;
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.primaryHigh};
    cursor: pointer;
  }
`
// ______________________________________________________
//
export const StoryRender: React.StoryRender = () => (
  <BtnPrimary>BtnPrimary</BtnPrimary>
)
// ______________________________________________________
//
export default BtnPrimary
