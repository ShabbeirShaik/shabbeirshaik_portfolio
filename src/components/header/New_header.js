import React from 'react'
import shabbeir_shaik from '../../Assets/shabbeir_shaik.png'
import CTA from './CTA'
import Typical from 'react-typical'

import './new_header.css'
function New_header() {
  return (
    <section>
        <div className="New">

            
            < div className = "container header__container content" >
   < h3 > Hello I'm </h3>
    < h4 > <strong>Shabbeir</strong> Shaik</ h4>
   
   <div className="profile-details-role"> 
            <span className="primary-text">
                {" "}
                <h1>
                    {" "}
                    <Typical
                        loop={Infinity}
                        steps={[
                            "Full stack developer ",
                            1000,
                            "Machine Learning enthusiastic",
                            1000,
                            "Enthusiastic Developer",
                            1000,
                            "MERN stack Developer",
                            1000,
                        ]}
                    />
                </h1>
            </span>    

            </div>
   <CTA />
   
  </ div >
        </div>
        <img className="image1" src={shabbeir_shaik}/>
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L40,186.7C80,181,160,171,240,176C320,181,400,203,480,218.7C560,235,640,245,720,250.7C800,256,880,256,960,229.3C1040,203,1120,149,1200,128C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </section>
  )
}

export default New_header