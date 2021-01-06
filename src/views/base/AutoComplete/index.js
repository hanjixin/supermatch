import React from 'react'
import AutoComplete from '../../../components/AutoComplete'

const AutoCompleteBox = () => {
  const props = {
    autoComplete: 'true',
    placeholder: '请输入邮箱地址',
    options: [
      '@qq.com',
      '@163.com',
      '@126.com',
      '@sina.com',
      '@kkb.com',
    ],
  }
  return <AutoComplete {...props} />
}
export default AutoCompleteBox
