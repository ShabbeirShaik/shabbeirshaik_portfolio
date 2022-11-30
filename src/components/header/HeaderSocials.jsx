import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="" target="_blank" className=""><BsLinkedin/></a>
        <a href="" target="_blank" className=""><BsGithub/></a>
        <a href="" target="_blank" className=""><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials