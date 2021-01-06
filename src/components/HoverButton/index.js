import React from 'react'

function HoverButton({
  title = '按钮',
  size = 60,
  padding = 10,
  fontSize = 12,
  color = 'white',
  bgColor = '#ccc',
  borderColor = 'white',
  isCircle = true,
  shadow = true,
  offset = ['80', '20'],
  direction = 'bottom-right',
}) {
  const directionStyle = direction.split('-')

  const StyleProps = {
    width: `${size}px`,
    height: `${size}px`,
    padding: `${padding}px`,
    fontSize,
    color,
    backgroundColor: bgColor,
    border: `1px solid ${borderColor}`,
    borderRadius: isCircle ? '50%' : '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    position: 'fixed',
    [directionStyle[0]]: offset[0] * 1,
    [directionStyle[1]]: offset[1] * 1,
  }
  shadow && (StyleProps.boxShadow = `0 0 ${size * 0.1}px ${borderColor}`)
  return <div style={StyleProps}>{title}</div>
}

export default HoverButton
