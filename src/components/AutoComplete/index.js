/*
 * @Author: your name
 * @Date: 2020-06-11 15:44:34
 * @LastEditTime: 2020-07-06 14:20:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /knpm/src/components/ModalTransfer.js
 */

/* 吸顶
 * @props scrollHide {boolean} 滑动时隐藏菜单
 * @props height {string} header高度
 * @props backTop {boolean} scrollHide为true时 配合 backTop 每次点击时改变backTop状态即可
 * @props continuedHeight {number} header持续显示高度
 * @props background {string} Header背景色
 * @props content {*} header内容
 */

import React, { useState } from 'react'
import { Input } from 'antd'
import './index.css'

const AutoComplete = props => {
  const [v, setV] = useState('')
  const [visiable, setVisiable] = useState(false)
  const options = props.options || [
    '@qq.com',
    '@163.com',
    '@126.com',
    '@sina.com',
    '@kkb.com',
  ]
  let width = props?.width || '100%'
  width = width.indexOf('%') === -1 ? `${width}%` : width

  return (
    <>
      <div
        onFocus={() => {
          setVisiable(true)
        }}
        onBlur={() => {
          setTimeout(() => {
            setVisiable(false)
          }, 100)
        }}
        className="AutoComplete"
        style={{
          width: { width },
        }}
      >
        <Input
          allowClear
          placeholder={props.placeholder || '请输入邮箱'}
          onChange={e => {
            setV(e.target.value)
            setVisiable(true)
          }}
          value={v}
          {...props}
        />
        <div
          onMouseOver={() => {
            setVisiable(true)
          }}
          className="completeBox"
          style={{
            display:
              props.autoComplete && v.indexOf('@') === -1 && v && visiable
                ? 'block'
                : 'none',
          }}
        >
          {options.map((option, index) => {
            return (
              <div
                key={option + index}
                className="completeItem"
                onClick={() => {
                  setV(() => {
                    return v + option
                  })
                  setVisiable(false)
                }}
              >
                {v}
                {option}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AutoComplete
