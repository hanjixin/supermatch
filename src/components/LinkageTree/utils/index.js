/**
 * 处理多个CSSModule
 * @param {*} style CSSModule
 */
export const classnames = style => {
  return (...props) => props.map(item => `${style[item]}`).join(' ')
}

export default {
  classnames,
}
