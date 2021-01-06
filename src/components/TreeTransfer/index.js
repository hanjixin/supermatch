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
import { Tree, Card, Divider } from 'antd'

const TreeTransferBox = props => {
  const [expandedKeys, setExpandedKeys] = useState(props.expandedKeys || [])
  const [checkedKeys, setCheckedKeys] = useState(props.checkedKeys || [])
  const [selectedKeys, setSelectedKeys] = useState(props.selectedKeys || [])
  const [autoExpandParent, setAutoExpandParent] = useState(true)
  const [selectedItem, setSelectedItem] = useState(props.selectedItem || [])

  const onExpand = expandedKeys => {
    setExpandedKeys(expandedKeys)
    setAutoExpandParent(false)
  }

  const onCheck = (checkedKeys, info) => {
    setCheckedKeys(checkedKeys)
    setSelectedItem(info.checkedNodes)
  }

  const onSelect = (selectedKeys, info) => {
    setSelectedKeys(selectedKeys)
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          height: '80vh',
        }}
      >
        <Card
          style={{
            width: '40%',
            height: '100%',
            overflow: 'scroll',
          }}
          title={props.title?.[0] || 'source'}
        >
          <Tree
            checkable
            onExpand={props.onExpand || onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onCheck={props.onCheck || onCheck}
            checkedKeys={checkedKeys}
            onSelect={props.onSelect || onSelect}
            selectedKeys={selectedKeys}
            treeData={props.treeData || []}
          />
        </Card>
        <Card
          style={{
            width: '60%',
            height: '100%',
            overflow: 'scroll',
          }}
          title={props.title?.[1] || 'target'}
        >
          {selectedItem.map(item => {
            return (
              <div key={item.key}>
                <h3>{item.title}</h3>
                <Divider />
              </div>
            )
          })}
        </Card>
      </div>
    </>
  )
}
export default TreeTransferBox
