export const modal_data = [
  {
    props_name: 'title',
    props_info: 'Modal框title',
    props_type: 'string',
    props_default: 'title',
  },
  {
    props_name: 'width',
    props_info: 'Modal框width',
    props_type: 'string',
    props_default: '60%',
  },
  {
    props_name: 'visible',
    props_info: 'Modal框是否可见',
    props_type: 'boolean',
    props_default: '--',
  },
  {
    props_name: 'okText',
    props_info: 'Modal框确认按钮文字',
    props_type: 'string',
    props_default: 'ok',
  },
  {
    props_name: 'okType',
    props_info: 'Modal框确认按钮类型',
    props_type: 'string',
    props_default: 'primary',
  },
  {
    props_name: 'cancelText',
    props_info: 'Modal取消按钮文字',
    props_type: 'string',
    props_default: 'Cancel',
  },
  {
    props_name: 'tips',
    props_info: 'Modal内容文案',
    props_type: 'Array[]',
    props_default: '[“已选择”，“个”]',
  },
  {
    props_name: 'selectedItem',
    props_info: '已选内容',
    props_type: 'Array[]',
    props_default: '[]',
  },
]

export const select_data = [
  {
    props_name: 'label',
    props_info: '搜索框标题',
    props_type: 'string',
    props_default: '请选择',
  },
  {
    props_name: 'formProps',
    props_info: '搜索框props映射',
    props_type: 'object[]',
    props_default: '{"value": "id", "label": "name"}',
  },
  {
    props_name: 'options',
    props_info: '搜索框options',
    props_type: 'object[]',
    props_default: '--',
  },
  {
    props_name: 'placeholder',
    props_info: '搜索框placeholder',
    props_type: 'string',
    props_default: '请选择',
  },
  {
    props_name: 'formRequired',
    props_info: '搜索框是否必选',
    props_type: 'boolean',
    props_default: '--',
  },
  {
    props_name: 'formDisabled',
    props_info: '搜索框是否可选',
    props_type: 'boolean',
    props_default: '--',
  },
]
