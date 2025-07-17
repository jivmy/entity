import { motion } from 'framer-motion'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className="title">Material Entity</h1>
      <div className="projects-grid">
        {Array.from({ length: 32 }, (_, index) => (
          <motion.div
            key={index}
            className="project-square"
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
            {index === 3 && (
              <spline-viewer
                url="https://prod.spline.design/U1qvaLMAxE5-ysa6/scene.splinecode"
                style={{ width: '100%', height: '100%', borderRadius: '48px 48px 36px 36px' }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default App
