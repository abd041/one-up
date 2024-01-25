import React from 'react'
import OneUpLogo from "../../assests/one-up-logo.png"
const MobileLogo = () => {
  return (
    <div className='lg:hidden col-12 flex justify-center mx-auto one-up-log-mobile-screen-wrapper'>
    <div><img src={OneUpLogo} alt='....'/></div>
 </div>
  )
}

export default MobileLogo