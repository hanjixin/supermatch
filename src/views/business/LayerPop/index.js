import React, { useState } from 'react'
import { Button } from 'antd'

import LayerPop from '../../../components/LayerPop'

function LayerPopBox() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>
        点击显示
      </Button>
      <LayerPop
        width={30}
        padding={'0'}
        visible={visible}
      >
        <img
          src={
            'https://img.kaikeba.com/platform/623162110202xedf.jpg'
          }
          alt=""
          style={{
            width: '100%',
          }}
        />
        <div
          className="close"
          style={{
            position: 'absolute',
            top: '0',
            right: '-30px',
            width: '24px',
            height: '24px',
            background: `url('https://img.kaikeba.com/a/83637192700202shgm.png')`,
            cursor: 'pointer',
            zIndex: '100',
          }}
          onClick={() => setVisible(false)}
        ></div>
      </LayerPop>
    </>
  )
}

export default LayerPopBox
