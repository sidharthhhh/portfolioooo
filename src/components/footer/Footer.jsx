import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>SID</a>
    <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/swayam.shukla.77736"><BsFacebook/></a>
      <a href="https://www.instagram.com/siddddharthhhhhh/"><FiInstagram/></a>
      <a href="https://twitter.com/Sidhart64113485"><BsTwitter/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; SIDHARTH. All rights are reserved</small>
    </div>
   </footer>
  )
}

export default Footer