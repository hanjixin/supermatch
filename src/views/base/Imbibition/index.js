import React from 'react'
// 组件
import Imbibition from '../../../components/Imbibition'

const ImbibitionBox = () => {
  const props = {
    scrollHide: true,
    background: '#00aff2',
    height: '80px',
    width: '100%',
    continuedHeight:  800,
  }
  return (
    <div style={{ height: '3000px' }}>
      <Imbibition {...props} />
    </div>
  )
}
export default ImbibitionBox
