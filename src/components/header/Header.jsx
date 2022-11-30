import React from 'react'
import './header.css'
import CTA from './CTA'
import Typical from 'react-typical'
import ME from '../../Assets/shabbeir.jpg'
import HeaderSocials from './HeaderSocials'
import Images_carasoul from './Images_carasoul'
import Header_main from './Header_main'
export default function Header() {
  return (
    <header>
  < div className = "container header__container" >
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
</header>
    
  )
}