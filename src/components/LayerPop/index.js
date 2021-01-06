import React from 'react'
import './style.css'

function LayerPop({ width = 80, padding = '0', visible = false, children }) {
  width = width < 0 ? 0 : width

  return (
    <div
      className="LayerPop"
      style={{
        display: visible ? 'block' : 'none',
      }}
    >
      <div
        className="LayerPop-overflow"
        style={{
          padding: `${padding} 0`,
        }}
      >
        <div className="LayerPop-box">
          <div
            className="LayerPop-center"
            style={{
              width: width > 100 ? `${width}px` : `${width}%`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayerPop
