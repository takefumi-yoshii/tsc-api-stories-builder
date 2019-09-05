import React, {
  useState,
  useMemo,
  useCallback
} from 'react'
import styled from 'styled-components'
import TabItem from './TabItem'
// ______________________________________________________
//
type Item = {
  id: string
  label: string
}
type ContainerProps = {
  className?: string
  currentID: string
  items: Item[]
  fontSize?: number
  clickCallback?: (id: string) => void
}
type Props = {
  className?: string
  fontSize?: number
  items: (Item & { isCurrent: boolean })[]
  onClick: (id: string) => void
}
// ______________________________________________________
//
const FunctionComponent: React.FC<Props> = props => (
  <ul className={props.className}>
    {props.items.map(item => (
      <li key={item.id}>
        <TabItem
          id={item.id}
          isCurrent={item.isCurrent}
          fontSize={props.fontSize}
          onClick={props.onClick}
        >
          {item.label}
        </TabItem>
      </li>
    ))}
  </ul>
)
// ______________________________________________________
//
const StyledFunctionComponent = styled(FunctionComponent)`
  display: flex;
  margin: 0;
  padding: 0;
  > li {
    list-style: none;
    overflow: hidden;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`
// ______________________________________________________
//
export const Tab: React.FC<ContainerProps> = props => {
  const [current, setCurrent] = useState(props.currentID)
  const items = useMemo(
    () =>
      props.items.map(item => {
        return { ...item, isCurrent: item.id === current }
      }),
    [props.items, current]
  )
  const handleClick = useCallback((id: string) => {
    setCurrent(id)
    if (props.clickCallback) props.clickCallback(id)
  }, [])
  return (
    <StyledFunctionComponent
      items={items}
      className={props.className}
      onClick={handleClick}
      fontSize={props.fontSize}
    />
  )
}
// ______________________________________________________
//
export const StoryRender: React.StoryRender = () => (
  <Tab
    currentID={'1'}
    items={[
      { id: '1', label: 'ONE' },
      { id: '2', label: 'TWO' },
      { id: '3', label: 'THREE' }
    ]}
  />
)
// ______________________________________________________
//
export default Tab
