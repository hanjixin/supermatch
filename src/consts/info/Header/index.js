export const header_data = [
  {
    props_name: 'height',
    props_info: 'Header高度',
    props_type: 'string',
    props_default: '80px',
  },
  {
    props_name: 'scrollHide',
    props_info: '滚动时隐藏',
    props_type: 'boolean',
    props_default: 'false',
  },
  {
    props_name: 'backTop',
    props_info: 'scrollHide为true时 配合 backTop 每次点击时改变backTop状态即可',
    props_type: 'boolean',
    props_default: '--',
  },
  {
    props_name: 'continuedHeight',
    props_info: 'header持续显示高度',
    props_type: 'Number',
    props_default: '600',
  },
  {
    props_name: 'background',
    props_info: 'Header背景色',
    props_type: 'string',
    props_default: '#000',
  },
  {
    props_name: 'content',
    props_info: '内容',
    props_type: 'ReactNode',
    props_default: '--',
  },
]
