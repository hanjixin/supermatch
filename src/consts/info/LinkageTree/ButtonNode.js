import React from 'react'
import { Button, Space } from 'antd'
import { EditOutlined, MinusCircleOutlined } from '@ant-design/icons'

const ButtonNode = ({ name, id, selectId, setSelectId }) => {
  const ButtonType = selectId === id ? 'primary' : 'text'

  return (
    <div
      style={{
        position: 'relative',
        paddingRight: '50px',
      }}
    >
      <Button type={ButtonType} onClick={() => setSelectId(id)}>
        {name}
      </Button>
      {selectId === id && (
        <Space
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <div></div>
          <EditOutlined
            style={{ cursor: 'pointer' }}
            onClick={() => console.log('Click ButtonNode Edit', name, id)}
          />
          <MinusCircleOutlined
            style={{ cursor: 'pointer' }}
            onClick={() => console.log('Click ButtonNode Delete', name, id)}
          />
          <div></div>
        </Space>
      )}
    </div>
  )
}

export default ButtonNode
