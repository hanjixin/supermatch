import React, { useState } from 'react'
// 组件
import LinkageTree from '../../../components/LinkageTree'
import { TreeData, TreeList } from '../../../consts/info/LinkageTree'
import { ArrayToAntdTree } from '../../../consts/info/LinkageTree/utils/menu'
import ButtonNode from '../../../consts/info/LinkageTree/ButtonNode'
import ButtonListAfter from '../../../consts/info/LinkageTree/ButtonListAfter'

const LinkageTreeBox = () => {
  const treeList = TreeList
  const IconParams = [
    {
      Type: 'edit',
      Icon: 'EditOutlined',
    },
    {
      Type: 'add',
      Icon: 'PlusCircleOutlined',
    },
    {
      Type: 'delete',
      Icon: 'MinusCircleOutlined',
    },
  ]
  const treeData = 
    ArrayToAntdTree({
      list: TreeData,
      titleName: 'name',
      childrenName: 'children',
    })
  const ListLoadingTime = 3000

  const [ButtonList, setButtonList] = useState([])
  const [ListLoading, setListLoading] = useState(false)
  const [selectId, setSelectId] = useState()

  const props = {
    TreeData: treeData,
    TreeLoading:false,
    MenuEditVisible: true,
    onDropLoading: false,
    TreeTopNode: `这里可以是任意文字或者组件`,
    IconParams,
    ButtonNode,
    ButtonListAfter,
    ButtonList,
    ListLoading,
    ButtonListVisible: !!selectId,
    onSelected: item => {
      console.log(`onSelected:`, item)
      setSelectId(item.id)
      if (item.id) {
        setListLoading(true)
        setTimeout(() => {
          setButtonList([...treeList])
          setListLoading(false)
        }, ListLoadingTime)
      } else {
        setButtonList([])
      }
    },
  }
  console.log(props)
  return <LinkageTree {...props} />
}
export default LinkageTreeBox
