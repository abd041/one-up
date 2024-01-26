import React from 'react'
import OneUpLogo from "../../assests/one-up-logo.png";
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer-main-wrap' style={{width :"100%"}}>
        <div className='container-large footer-container-main'>
        <div className='row mx-0 md:flex block items-center'>
            <div className='col-12'>
                <div className='footer-text-wrapper flex items-center justify-center'><h4>Copyright <span>©</span>  2024 Oneup | All Rights Reserved </h4></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer