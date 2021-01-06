/*
 * @Author: your name
 * @Date: 2020-06-11 15:44:34
 * @LastEditTime: 2020-07-06 14:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /knpm/src/components/ModalTransfer.js
 */

/* ModalTransfer
 * @props scrollHide {boolean} 滑动时隐藏菜单
 * @props height {string} header高度
 * @props backTop {boolean} scrollHide为true时 配合 backTop 每次点击时改变backTop状态即可
 * @props continuedHeight {number} header持续显示高度
 * @props background {string} Header背景色
 * @props content {*} header内容
 */

import React, { useState, useEffect } from 'react'
import { Modal, Form } from 'antd'
import Iconfont from './utils/iconfont'
import SelectItem from './components/SelectItem'
import './style/index.css'

export default function ModalTransfer(props) {
  let formRef = null
  const [selectedItem, setselectedItem] = useState(props.selectedItem || [])
  const init = () => {
    formRef &&
      formRef.setFields([
        { name: 'selectedItem', value: initValue.selectedItem },
      ])
    setselectedItem(props.selectedItem)
  }
  useEffect(() => {
    init()
  }, [props.selectedItem])
  const handleChange = (val, opts) => {
    const vals = opts.map(item => ({ id: item.value, name: item.children }))
    setselectedItem(vals)
  }
  const handleOk = () => {
    if (formRef) {
      const vals = formRef.getFieldValue('selectedItem')
      const ids = vals.map(item => item.id)
      props.onOk(ids)
    }
  }

  const onCancel = () => {
    init()
    props.onCancel()
  }
  const initValue = {
    selectedItem: props.selectedItem?.map(({ id, name }) => ({
      key: id,
      label: name,
    })),
  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 8,
      },
      sm: {
        span: 24,
      },
    },
  }

  return (
    <Modal
      className="config_role"
      title={props.title || '标题'}
      width={props.width || '60%'}
      visible={props.visible}
      onOk={handleOk}
      onCancel={onCancel}
      maskClosable={false}
      {...props}
    >
      <section className="selected_roles">
        <Iconfont
          type="iconinformation"
          className="selected_roles_icon"
        ></Iconfont>
        <section className="selected_roles_info">
          {props.tips?.[0] || '已选择'}
          <span className="selected_count"> {selectedItem?.length || 0} </span>
          {props.tips?.[1] || '个'}
          <span className="selected_roles_list">
            {selectedItem?.map(role => role.name).join('、')}
          </span>
        </section>
      </section>
      <Form
        className="role_select"
        ref={ref => (formRef = ref)}
        initialValues={initValue}
        layout="horizontal"
        {...formItemLayout}
      >
        <SelectItem
          width="300"
          key={`selectedItem`}
          name={`selectedItem`}
          mode="multiple"
          labelInValue
          label={props.label}
          formprops={props.formProps}
          options={props.options}
          placeholder={props.placeholder || '请选择'}
          required={props.formRequired}
          disabled={props.formDisabled}
          onChange={handleChange}
        />
      </Form>
    </Modal>
  )
}
