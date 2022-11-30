import React from 'react'
import CV from '../../Assets/cv.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href= {CV} download className='btn'>GET Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA