import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import BreadcrumbCustom from '../../../components/BreadcrumbCustom'

const BredcrumberCustomBox = () => {
  const props = {
    paths:  [
      { path: '/', name: '首页' },
      { path: '/', name: '面包屑' },
      { path: '/', name: '面包屑' },
    ]
  }
  return (
    <BrowserRouter>
      <BreadcrumbCustom {...props} />
    </BrowserRouter>
  )
}
export default BredcrumberCustomBox
