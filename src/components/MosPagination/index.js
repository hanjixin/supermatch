import React from 'react'
import { Pagination } from 'antd'

const MosPagination = props => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Pagination
        showTotal={total => {
          return `共${total}条数据`
        }}
        showQuickJumper
        showSizeChanger
        hideOnSinglePage
        {...props}
      />
    </div>
  )
}

export default MosPagination
