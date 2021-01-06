import React from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const ButtonListAfter = () => {
  return (
    <Button
      type="dashed"
      icon={<PlusOutlined />}
      onClick={() => console.log('添加按钮')}
    >
      添加按钮
    </Button>
  )
}

export default ButtonListAfter
