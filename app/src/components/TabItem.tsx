import React from 'react'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
  id: string
  isCurrent: boolean
  fontSize?: number
  onClick: (id: string) => void
}
// ______________________________________________________
//
const FunctionComponent: React.FC<Props> = props => (
  <button
    className={props.className}
    onClick={() => props.onClick(props.id)}
  >
    {props.children}
  </button>
)
// ______________________________________________________
//
export const TabItem = styled(FunctionComponent)`
  padding: 1em 2em;
  color: #fff;
  outline: none;
  border: none;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize * 0.1 : 1.6}rem;
  background-color: ${({ theme, isCurrent }) =>
    isCurrent
      ? theme.colors.primaryHigh
      : theme.colors.primary};
  transition-duration: 0.2s;
  transition-property: background-color;
  pointer-events: ${({ isCurrent }) =>
    isCurrent ? 'none' : 'inherit'};
  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.primaryHigh};
    cursor: pointer;
  }
`
// ______________________________________________________
//
export default TabItem
