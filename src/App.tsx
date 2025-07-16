import { motion } from 'framer-motion'
import { useState } from 'react'
import './App.css'

const tooltipData = {
  0: '<span style="font-weight: 600;">Shape</span><span style="font-weight: 400;"> - Sphere</span>',
  1: '<span style="font-weight: 600;">Shape</span><span style="font-weight: 400;"> - Knot</span>', 
  2: '<span style="font-weight: 600;">Shape</span><span style="font-weight: 400;"> - Hedron</span>'
}

function App() {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 })

  const handleMouseEnter = (index: number, event: React.MouseEvent) => {
    if (tooltipData[index as keyof typeof tooltipData]) {
      setTooltip({
        visible: true,
        text: tooltipData[index as keyof typeof tooltipData],
        x: event.clientX,
        y: event.clientY
      })
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip(prev => ({
        ...prev,
        x: event.clientX,
        y: event.clientY
      }))
    }
  }

  const handleMouseLeave = () => {
    setTooltip({ visible: false, text: '', x: 0, y: 0 })
  }

  return (
    <div className="app">
      <h1 className="title">Entity Grid</h1>
      <div className="projects-grid">
        {Array.from({ length: 32 }, (_, index) => (
          <motion.div
            key={index}
            className="project-square"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {index === 0 && (
              <spline-viewer
                url="https://prod.spline.design/sFvBDJPvAklIYBjl/scene.splinecode"
                style={{ width: '100%', height: '100%', borderRadius: '48px 48px 36px 36px' }}
              />
            )}
            {index === 1 && (
              <spline-viewer
                url="https://prod.spline.design/CgexsA9ciWUOqPtb/scene.splinecode"
                style={{ width: '100%', height: '100%', borderRadius: '48px 48px 36px 36px' }}
              />
            )}
            {index === 2 && (
              <spline-viewer
                url="https://prod.spline.design/2V0B3IFlZJMrSFWf/scene.splinecode"
                style={{ width: '100%', height: '100%', borderRadius: '48px 48px 36px 36px' }}
              />
            )}
          </motion.div>
        ))}
      </div>

            {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y + 20,
            transform: 'translateX(-45%)',
          }}
          dangerouslySetInnerHTML={{ __html: tooltip.text }}
        />
      )}
    </div>
  )
}

export default App
