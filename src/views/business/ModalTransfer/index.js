import React, { useState } from 'react'
import { Button } from 'antd'

// 组件
import ModalTransfer from '../../../components/ModalTransfer'

const defaultOption = [
  { id: 80, name: '下拉菜单1' },
  { id: 81, name: '下拉菜单2' },
  { id: 82, name: '下拉菜单3' },
  { id: 83, name: '下拉菜单4' },
  { id: 84, name: '下拉菜单5' },
  { id: 85, name: '下拉菜单6' },
  { id: 86, name: '下拉菜单7' },
  { id: 87, name: '下拉菜单8' },
]
const defaultSelected = [{ id: 80, name: '下拉菜单1' }]
const defaultProps = { value: 'id', label: 'name' }

const ModalTransferBox = () => {
  const [visible, setVisible] = useState(false)
  const props = {
    title:  '标题',
    label: '请输入',
    options:  defaultOption,
    selectedItem: defaultSelected,
    formProps: defaultProps,
  }
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true)
        }}
      >
        打开弹框
      </Button>
      <ModalTransfer
        {...props}
        visible={visible}
        onCancel={() => {
          setVisible(false)
        }}
        onOk={() => {
          setVisible(false)
        }}
      />
    </>
  )
}

export default ModalTransferBox
