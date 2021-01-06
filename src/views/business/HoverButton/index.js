import React from 'react'
import HoverButton from '../../../components/HoverButton'

// const defaultDirection = {
//   TopLeft: 'top-left',
//   TopRight: 'top-right',
//   BottomLeft: 'bottom-left',
//   BottomRight: 'bottom-right',
// }

function HoverButtonBox() {
  return (
    <div>
      {Array(500)
        .fill(0)
        .map((_, index) => (
          <p key={`${index}`}>{index}</p>
        ))}
      <HoverButton
        title={'我是按钮'}
        size={80}
        padding={ 18 }
        fontSize={ 16 }
        color={ 'white' }
        bgColor={ 'rgba(102,104,236,1)' }
        borderColor={'white'}
        isCircle={true}
        shadow={true}
        offset={ [80, 20]}
        direction={'bottom-right'}
      ></HoverButton>
    </div>
  )
}

export default HoverButtonBox
