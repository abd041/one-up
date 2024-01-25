import React from 'react'
import OneUpLogo from "../../assests/one-up-logo.png";
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-main-wrap' style={{width :"100%"}}>
        <div className='container-large footer-container-main'>
        <div className='row mx-0 md:flex block items-center'>
            <div className='md:col-6 col-12 flex justify-center md:block mb-4 md:mb-0'>
                <img src={OneUpLogo} alt="..." />      
            </div>
            <div className='md:col-6 col-12'>
                <div className='footer-text-wrapper'><h4>Copyright © 2024 Oneup | All Rights Reserved </h4></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer