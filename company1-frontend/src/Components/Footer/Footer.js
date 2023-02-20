import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './Footer.css'

function Footer() {
  return (
    <div className='socials'>
      <SocialIcon className='icon' url="https://github.com/Callasaurus" target="_blank" rel="noreferrer" />
      <SocialIcon className='icon' url="https://www.linkedin.com/in/calla-sullivan-drage-88a7a5139/" target="_blank" rel="noreferrer" />
      <SocialIcon className='icon' url="mailto: c.sullivandrage@outlook.com" target="_blank" rel="noreferrer" />
    </div>
  )
}

export default Footer;
