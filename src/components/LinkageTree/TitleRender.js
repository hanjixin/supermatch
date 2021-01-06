import React, { useState } from 'react'
import { Space } from 'antd'

const Handle = ({
  data: { title, key, ...props },
  IconParams,
  onHandle,
  MenuEditStatus,
}) => {
  const [visible, setVisible] = useState(false)

  const getClickIcon = type => e => {
    e.stopPropagation()
    onHandle(type, props)
  }

  return (
    <div
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <Space
        style={{
          position: 'relative',
        }}
      >
        <span>{title}</span>
        {visible && !MenuEditStatus && (
          <Space
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {IconParams.map(({ Type, Icon }, index) => (
              <div
                key={`icon-${index}`}
                onClick={getClickIcon(Type)}
                style={{
                  fontSize: '18px',
                }}
              >
                {Icon}
              </div>
            ))}
          </Space>
        )}
      </Space>
    </div>
  )
}

/**
 *
 * @param {*} MenuEditStatus // 是否是可显示状态
 * @param {*} IconParams
 * @param {*} IconParam.Type // 回传类型
 * @param {*} IconParam.Icon // ReactNode
 * @param {*} onHandle // 点击icon回调
 */
const TitleRender = (IconParams, onHandle, MenuEditStatus) => data => (
  <Handle
    data={data}
    MenuEditStatus={MenuEditStatus}
    IconParams={IconParams}
    onHandle={onHandle}
  />
)

export default TitleRender
