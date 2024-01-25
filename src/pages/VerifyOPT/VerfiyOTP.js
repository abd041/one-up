import React from 'react'
import OTP from '../../components/OTP/otp'
import { GoBack } from '../../components/reuseable/GoBack'
import Footer from '../../components/Footer/Footer'
const VerfiyOTP = () => {
  return (
    <>
      <div className='otp-page-main-wrapper'>
      <GoBack title="OTP Verification" to="/"/>
      <div className='container' style={{ minHeight: "inherit" }}>
        <div className='row flex justify-center items-center' style={{ minHeight: "inherit" }}>
          <OTP title="Enter confirmation code" desc="A 4-digit code was sent to" entity="lucasscott3@email.com" otpDigit={4} className="lg:col-4 md:col-5 col-12 px-auto" to="/dashboard"/>

        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default VerfiyOTP