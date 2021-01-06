import React from 'react'

// 组件
import Pagination from '../../../components/MosPagination'

const PaginationBox = () => {
  return (
    <Pagination
      total={500}
      onChange={(page, pageSize) => {
        console.log(page, pageSize)
      }}
      onShowSizeChange={(current, pageSize) => {
        console.log(current, pageSize)
      }}
    />
  )
}
export default PaginationBox
