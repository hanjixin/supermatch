import React, { useState, useEffect } from 'react'
import { Spin, Tree, Button, Space } from 'antd'
import { cloneDeep } from 'lodash'

import TitleRender from './TitleRender'

import './style.css'

function MenuTree({
  TreeData,
  TreeLoading = false,
  ContrlClassName = '',
  ContrlStyle = {},
  onSelected = () => {},
  onDropSuccess = () => true,
  onDropLoading = false,
  onHandle = () => {},
  IconParams = [],
  MenuEditVisible,
  TreeTopNode,
  ...TreeProps
}) {
  // TEST: 打印参数
  // console.log(TreeData, TreeLoading, TreeProps);

  const [ExpandedKeys, setExpandedKeys] = useState([])
  const [SelectedKeys, setSelectedKeys] = useState([])
  const [treeData, setTreeData] = useState([])
  const [cache, setCache] = useState({})

  // 允许拖拽的修改状态
  const [MenuEditStatus, setMenuEditStatus] = useState(false)

  // 初始化设置数据
  useEffect(() => {
    setTreeData(TreeData)
  }, [TreeData])

  const onExpand = expandedKeys => setExpandedKeys(expandedKeys)

  const onSelect = (selectList, { selectedNodes }) => {
    const [selectKey = ''] = selectList
    const [item = {}] = selectedNodes
    const { children = [] } = item
    if (children.length || MenuEditStatus) {
      // 展开/关闭 并不做选中操作
      setExpandedKeys(
        ExpandedKeys.includes(selectKey)
          ? ExpandedKeys.filter(ExpandedKey => ExpandedKey !== selectKey)
          : [...ExpandedKeys, ...selectList]
      )
    } else {
      // 选中
      setSelectedKeys(selectList)
      // 触发选中，向上透传item信息
      onSelected(item)
    }
  }

  const onDragEnter = info => {
    // expandedKeys 需要受控时设置
    setExpandedKeys(info.expandedKeys)
  }

  /**
   * onDrop
    {
      dragNode, // 拖动的node
      dragNodesKeys, // 拖动的key数组
      node, // 结束点的相对node
      dropPosition,
      dropToGap,
    }
   */
  const onDrop = info => {
    const dropKey = info.node.props.eventKey
    const dragKey = info.dragNode.props.eventKey
    const dropPos = info.node.props.pos.split('-')
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data)
        }
        if (data[i].children) {
          loop(data[i].children, key, callback)
        }
      }
    }
    const data = [...treeData]

    // Find dragObject
    let dragObj
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1)
      dragObj = item
    })

    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, item => {
        item.children = item.children || []
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj)
      })
    } else if (
      (info.node.props.children || []).length > 0 && // Has children
      info.node.props.expanded && // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, item => {
        item.children = item.children || []
        // where to insert 示例添加到头部，可以是随意位置
        item.children.unshift(dragObj)
      })
    } else {
      let ar
      let i
      loop(data, dropKey, (item, index, arr) => {
        ar = arr
        i = index
      })
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj)
      } else {
        ar.splice(i + 1, 0, dragObj)
      }
    }

    // console.log('拖拽完毕', data);
    setTreeData(data)
  }

  return (
    <>
      <div
        className={ContrlClassName}
        style={{ ...ContrlStyle, position: 'relative' }}
      >
        {MenuEditVisible && (
          <div className="EditMenuGroup">
            {/* 这个按钮暂时不能放在外层组件，会非常的麻烦 */}
            {!MenuEditStatus ? (
              // 缓存数据并允许拖拽
              <Button
                type="primary"
                onClick={() => {
                  setCache({
                    ExpandedKeys: [...ExpandedKeys],
                    SelectedKeys: [...SelectedKeys],
                    treeData: cloneDeep(treeData),
                  })
                  setExpandedKeys([])
                  setSelectedKeys([])
                  setMenuEditStatus(true)
                }}
              >
                编辑
              </Button>
            ) : (
              <Space>
                {/* 恢复缓存的数据 */}
                <Button
                  onClick={() => {
                    setTreeData(cache.treeData)
                    setExpandedKeys(cache.ExpandedKeys)
                    setSelectedKeys(cache.SelectedKeys)
                    setMenuEditStatus(false)
                  }}
                >
                  取消
                </Button>
                {/* 保留当前的数据，并请求接口设置 */}
                <Button
                  type="primary"
                  // confim loading
                  loading={onDropLoading}
                  onClick={async () => {
                    // 向上透传 treeData
                    const res = await onDropSuccess(treeData)
                    res && setMenuEditStatus(false)
                  }}
                >
                  确定
                </Button>
              </Space>
            )}
          </div>
        )}
        {/* TODO: Tree TOP */}
        {TreeTopNode}
      </div>
      <Spin spinning={TreeLoading}>
        <Tree
          className="draggable-tree"
          expandedKeys={ExpandedKeys}
          selectedKeys={SelectedKeys}
          draggable={MenuEditStatus}
          blockNode
          onDragEnter={onDragEnter}
          onDrop={onDrop}
          onSelect={onSelect}
          onExpand={onExpand}
          treeData={treeData}
          titleRender={TitleRender(IconParams, onHandle, MenuEditStatus)}
          {...TreeProps}
        />
      </Spin>
    </>
  )
}

export default MenuTree
