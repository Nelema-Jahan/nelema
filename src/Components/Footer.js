import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { MdArrowUpward } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className='footerContainer'>
      <div className='footerContent'>
        <div className='footerSection'>
          <div className='footerLinks'>
            <a href="https://github.com/Nelema-Jahan" target='_blank' rel="noreferrer" title='GitHub' aria-label='GitHub Profile'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nelema-jahan-b43463362" target='_blank' rel="noreferrer" title='LinkedIn' aria-label='LinkedIn Profile'><FaLinkedin /></a>
            <a href='https://twitter.com/nelema_jahan' target='_blank' rel="noreferrer" title='Twitter/X' aria-label='Twitter Profile'><FaXTwitter /></a>
            <a href='mailto:nelema781@gmail.com' title='Email' aria-label='Email Me'><GrMail /></a>
          </div>
        </div>

        <div className='footerDivider'></div>

        <div className='footerSection'>
          <p className='footerCopyright'>
            © {currentYear} Nelema Jahan. All rights reserved. <br />
            Crafted with <span className='heart'>♥</span> for amazing projects.
          </p>
        </div>

        <button className='backToTopBtn' onClick={scrollToTop} title='Back to Top' aria-label='Back to Top'>
          <MdArrowUpward />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
