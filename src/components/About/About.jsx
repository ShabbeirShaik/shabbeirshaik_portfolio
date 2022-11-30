import React from 'react'

import './about.css'
import shabbeir from '../../Assets/shabbeir.jpg'
function About() {
  return (
    <React.Fragment>
      
        <div className="rounded w-screen grid grid-rows-2 text-white md:grid-cols-2">
          <div className="w-full centered">
            <img src={shabbeir} class="image"></img>
          </div>
          <div className="w-full centered">
            <p className="profile_image">iam shaik shabbeir ahammad and i recently graduated from computer science stream</p>
          </div>
        </div>
      
    </React.Fragment>
  )
}

export default About