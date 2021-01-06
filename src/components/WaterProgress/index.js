import React from 'react'
import './style.css'

function WaterProgress({ options, progress, size, children }) {
  let _progress = progress
  if (progress > 100) {
    _progress = 100
  }
  if (progress < 0) {
    _progress = 0
  }

  const count = _progress === 100 || _progress === 0 ? 0 : 'infinite'

  return (
    <div
      className="WaterProgress"
      style={{
        width: `${size}px`,
      }}
    >
      <div
        className="WaterProgress_box"
        style={{
          animationIterationCount: count,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        {options.map(({ offset, radius, opacity, color }, index) => {
          return (
            <div
              className="WaterProgress_radius"
              key={index}
              style={{
                top: `${100 - _progress}%`,
                left: `${-100 + offset}%`,
                borderRadius: `${radius}%`,
                opacity,
                backgroundColor: color,
              }}
            ></div>
          )
        })}
      </div>
      <div className="WaterProgress_children">{children}</div>
    </div>
  )
}

export default WaterProgress
