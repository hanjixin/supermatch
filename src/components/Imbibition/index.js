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

import React, { useEffect, useState } from 'react'
import './index.css'

const Imbibition = props => {
  let height = props.height || '80px'
  height = height.indexOf('px') === -1 ? `${height}px` : height
  const [visiable, setVisiabel] = useState(true)
  let handleScroll = event => {
    let isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
    if (window.scrollY > (props.continuedHeight || 600)) {
      if (isFirefox) {
        setVisiabel(event.detail > 0)
      } else {
        setVisiabel(event.wheelDelta > 0)
      }
    }
  }

  useEffect(() => {
    setVisiabel(true)
  }, [props.backTop])

  useEffect(() => {
    if (props.scrollHide) {
      let body = document.getElementsByTagName('body')
      let isFirefox = navigator.userAgent.indexOf('Firefox') !== -1
      let mousewheel = isFirefox ? 'DOMMouseScroll' : 'mousewheel'
      body[0].addEventListener(mousewheel, handleScroll)
      return () => {
        body[0].removeEventListener(mousewheel, handleScroll)
      }
    }
  }, [props])

  return (
    <>
      <div
        className="kkb_Imbibition"
        style={{
          width: props.width || '400px',
          height: props.scrollHide ? (visiable ? height : '0px') : height,
          background: props.background || '#00aff2',
          position: 'fixed',
          top: 0,
          zIndex: '999999',
        }}
      >
        {props.content}
      </div>
    </>
  )
}

export default Imbibition
