import React from 'react'
import { Form, Select } from 'antd'

const { Option } = Select
const FormItem = Form.Item

const SelectItem = props => {
  const formProps = {
    value: props.formprops?.value || 'id',
    label: props.formprops?.label || 'name',
  }
  const {
    label,
    name,
    options,
    required,
    placeholder,
    isValueToString,
    ...rest
  } = props

  return (
    <>
      <FormItem
        label={label || '请选择'}
        name={name}
        rules={[
          {
            required,
            message: `${label}不能为空`,
          },
        ]}
      >
        <Select
          placeholder={placeholder}
          allowClear
          getPopupContainer={trigger => trigger.parentNode}
          {...rest}
        >
          {Array.isArray(options) &&
            options.map((option, index) => {
              return (
                <Option
                  key={`${option[formProps.value]} - ${index}`}
                  value={
                    isValueToString
                      ? option[formProps.value].toString()
                      : option[formProps.value]
                  }
                >
                  {option[formProps.label]}
                </Option>
              )
            })}
        </Select>
      </FormItem>
    </>
  )
}

export default SelectItem
