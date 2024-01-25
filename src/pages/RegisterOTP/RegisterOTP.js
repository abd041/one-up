import React from 'react'
import LoginLeftDeatil from '../../components/Login/LoginLeftDeatil'
import OneUpLogo from "../../assests/one-up-logo.png";
import OTP from '../../components/OTP/otp';
import Footer from '../../components/Footer/Footer';
const RegisterOTP = () => {
    return (
        <div>
            <div className="container">
                <div className="row login-page-main-wrapper justify-center">
                    <LoginLeftDeatil OneUpLogo={OneUpLogo}
                        mainTitle="OTP Verfication"
                        title=""
                        desc="View and manage all of your investment accounts from one dashboard"
                    />
                    <OTP title="Enter confirmation code" desc="A 4-digit code was sent to" entity="lucasscott3@email.com" otpDigit={4} className="lg:col-6 md:col-6 col-12 px-auto" to="/dashboard" />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default RegisterOTP