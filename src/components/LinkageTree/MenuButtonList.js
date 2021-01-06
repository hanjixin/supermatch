import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'

import './style.css'

/**
 * MenuButtonList
 * @description 右侧按钮列表
 * @param {Array} ButtonList
 * @param {ReactNode} ButtonNode // 子组件
 * @param {Boolean} loading // 列表的加载状态
 * @param {ReactNode} ButtonListAfter // 后置的Component
 */
function MenuButtonList({
  ButtonList = [],
  ButtonNode = () => <></>,
  loading = false,
  ButtonListAfter,
}) {
  // 预留方法，可用可不用
  const [selectId, setSelectId] = useState()

  useEffect(() => {
    setSelectId()
  }, [ButtonList])

  return (
    <Spin spinning={loading}>
      <div className="ButtonList">
        {ButtonList.map((item, index) => (
          <div className="ButtonItem" key={`item-${index}`}>
            <ButtonNode
              {...{
                ...item,
                selectId,
                setSelectId,
              }}
            />
          </div>
        ))}

        <div style={{ marginRight: '10px' }}></div>
        <div className="ButtonItem">
          {ButtonListAfter && <ButtonListAfter />}
        </div>
      </div>
    </Spin>
  )
}

export default MenuButtonList
