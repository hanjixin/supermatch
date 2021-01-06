import React from 'react'
import { Breadcrumb } from 'antd'

const BreadcrumbCustom = props => {
  return (
    <Breadcrumb>
      {props.paths.map((item, index) => {
        return (
          <Breadcrumb.Item key={item + index}>
            {item.path ? <a href={item.path}>{item.name}</a> : item.name}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default BreadcrumbCustom
