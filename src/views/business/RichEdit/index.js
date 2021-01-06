import React from 'react'
// 组件
import RichEdit from '../../../components/RichEdit'

const RichEditBox = () => {
  const props = {
    height: 500,
    isMarkdown: true,
    showToolBar:  true,
    imgProps:  {
      token: null,
    },
    toolbar: '',
  }
  return (
    <RichEdit
      height={props.height}
      isMarkdown={props.isMarkdown}
      showToolBar={props.showToolBar}
      imgProps={props.imgProps}
      toolbar={props.toolbar}
      onChange={e => {}}
    />
  )
}

export default RichEditBox
