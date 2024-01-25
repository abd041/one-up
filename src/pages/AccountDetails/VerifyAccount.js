import React from 'react'
import OTP from '../../components/OTP/otp'
import { GoBack } from '../../components/reuseable/GoBack'
const VerifyAccount = () => {
  return (
    <div className='otp-page-main-wrapper'>
      <GoBack />
      <div className='container' style={{ minHeight: "inherit" }}>
        <div className='row flex justify-center items-center' style={{ minHeight: "inherit" }}>
          <OTP title="Verify your account" desc="To edit any account details, you need to first verify your registered account by entering OTP send to " entity="lucasscott3@email.com" otpDigit={6} className="lg:col-4 md:col-5 col-12 px-auto"/>

        </div>
      </div>
    </div>
  )
}

export default VerifyAccount