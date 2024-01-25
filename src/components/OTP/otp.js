import React, { useState } from "react";

import "./otp.css";

import OTPInput, { ResendOTP } from "otp-input-react";
import LoginBtn from "../Login/LoginBtn";
import MobileLogo from "../reuseable/MobileLogo";
import { Link } from "react-router-dom";
const OTP = ({
  title,
  desc,
  entity,
  otpDigit,
  className,
  handleVerfiyOtp,
  to,
}) => {
  const [OTP, setOTP] = useState("");
  return (
    <div className={className}>
      <MobileLogo />
      <div className="opt-page-main-heading">
        <h2>{title}</h2>
      </div>
      <div className="opt-page-main-message">
        <p>
          {desc} <br />
          <span>{entity}</span>. Please verify
        </p>
      </div>
      <div className="opt-page-main-boxes">
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={otpDigit}
          otpType="number"
          disabled={false}
          secure
          inputStyles={{
            width: "48px",
            height: "48px",
            borderRadius: "10px",
            marginRight: "6px",
          }}
          inputClassName="opt-page-responsive-boxes"
        />
      </div>
      <div className="opt-page-main-resend-message">
        <p>
          Resend code in <span>00:30</span>
        </p>
      </div>
      <div className="opt-page-main-resend-code-message">
        <p>Resend code</p>
      </div>
      <Link to={to} className="otp-continue-btn-main-wrapper">
        <button
          type="submit"
          className=" hover:bg-blue-500 mb-5"
          //   onClick={handleVerfiyOtp ? handleVerfiyOtp : ""}
        >
          Continue
        </button>
      </Link>
    </div>
  );
};

export default OTP;
