import React from 'react'
import styled from 'styled-components'
import BtnPrimary from '../components/BtnPrimary'
import BtnSecondary from '../components/BtnSecondary'
// ______________________________________________________
//
type Props = {
  className?: string
}
const View: React.FC<Props> = props => (
  <div className={props.className}>
    <BtnPrimary>BtnPrimary</BtnPrimary>
    <BtnSecondary>BtnSecondary</BtnSecondary>
  </div>
)
// ______________________________________________________
//
export default styled(View)``
