import React from 'react'
import { Row, Col } from 'antd'

import MenuTree from './MenuTree'
import MenuButtonList from './MenuButtonList'
import * as Icons from '@ant-design/icons'

import './style.css'

// 树的入口
function LinkageTree({
  TreeData, // 树的数据 [{title,key,children}]
  TreeLoading, // 树的加载状态 boolean
  ContrlClassName, // 树上侧控制栏的类名 // string
  ContrlStyle, // 树上侧控制栏的样式 // object
  onSelected = () => {}, // 透传选中item信息 item -> 树的节点
  onDropSuccess = () => true, // 透传整棵树的数据 treeData
  onDropLoading = false, // 确定按钮加载中状态 boolean
  onHandle = () => {}, // 点击icon回调 接受 type <IconParams.Type>和当前树节点信息<TreeNodeData>
  IconParams = [], // { Type <String>, Icon <ReactNode />}
  TreeProps, // Tree组件的附加Props Antd的TreeProps
  MenuEditVisible = false, // 是否显示「编辑（拖拽）」按钮 boolean
  TreeTopNode, // 在Tree上面的 可以放置搜索等Node <ReactNode />

  ButtonList, // [] <array> ButtonNode的 props Array
  ButtonNode, // 遍历的按钮列表子节点 <ReactNode />
  ListLoading, // 列表加载状态 boolean
  ButtonListAfter, // ReactNode <function/class> eg：末尾的添加按钮
  ButtonListVisible, // 控制右侧的ButtonList是否显示
}) {
  const MenuTreeProps = {
    TreeData,
    TreeLoading,
    ContrlClassName,
    ContrlStyle,
    onSelected,
    onDropSuccess,
    onDropLoading,
    onHandle,
    IconParams: IconParams.map(item => {
      const Component =
        typeof item.Icon === 'string'
          ? Icons[item.Icon] || (() => <>{item.Icon}</>)
          : () => <>{item.Icon}</>
      return {
        ...item,
        Icon: <Component />,
      }
    }),
    TreeTopNode,
    MenuEditVisible,
    TreeProps,
  }

  const MenuButtonListProps = {
    ButtonList,
    ButtonNode,
    loading: ListLoading, // 列表的加载状态
    ButtonListAfter, // 后置的Component
  }

  return (
    <>
      {MenuEditVisible && <div style={{ paddingTop: '30px' }} />}
      <Row gutter={[0]}>
        <Col span={6} className="TreeBox">
          <MenuTree {...MenuTreeProps} />
        </Col>
        <Col span={18}>
          {ButtonListVisible && <MenuButtonList {...MenuButtonListProps} />}
        </Col>
      </Row>
    </>
  )
}

export default LinkageTree
