import React from 'react'

// 组件
import WaterProgress from '../../../components/WaterProgress'

import { options } from '../../../consts/info/WaterProgress'

const WaterProgressBox = () => {
  const progress = 30
  const size = 100

  const props = {
    options: options,
    progress,
    size,
  }

  return (
    <WaterProgress {...props}>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        {progress}%
      </div>
    </WaterProgress>
  )
}

export default WaterProgressBox
