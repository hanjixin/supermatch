import React from 'react'

// 组件
import TreeTransfer from '../../../components/TreeTransfer'

const defaultSelectedItem = [
  {
    title: '0-0-0',
    key: '0-0-0',
  },
  {
    title: '0-0-0-0',
    key: '0-0-0-0',
  },
  {
    title: '0-0-0-1',
    key: '0-0-0-1',
  },
  {
    title: '0-0-0-2',
    key: '0-0-0-2',
  },
]
const defaultTreeProps = {
  key: 'id',
  title: 'name',
}
const defaultTreeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0',
          },
          {
            title: '0-0-0-1',
            key: '0-0-0-1',
          },
          {
            title: '0-0-0-2',
            key: '0-0-0-2',
          },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          {
            title: '0-0-1-0',
            key: '0-0-1-0',
          },
          {
            title: '0-0-1-1',
            key: '0-0-1-1',
          },
          {
            title: '0-0-1-2',
            key: '0-0-1-2',
          },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      {
        title: '0-1-0-0',
        key: '0-1-0-0',
      },
      {
        title: '0-1-0-1',
        key: '0-1-0-1',
      },
      {
        title: '0-1-0-2',
        key: '0-1-0-2',
      },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
]

const TreeTransferBox = () => {
  const props = {
    treeData:  defaultTreeData,
    selectedItem: defaultSelectedItem,
    // checkedKeys: array('checkedKeys', ['0-0-0']),
    // expandedKeys: array('expandedKeys', ['0-0-0', '0-0-1']),
    treeProps: defaultTreeProps,
    title: ['source', 'target'],
  }

  return <TreeTransfer {...props} />
}

export default TreeTransferBox
