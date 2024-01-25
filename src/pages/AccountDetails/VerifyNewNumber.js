import React, { useState } from "react";
import OTP from "../../components/OTP/otp";
import { GoBack } from "../../components/reuseable/GoBack";
import WelcomeModal from "../../components/Modals/Welcome/WelcomeModal";
import passwordDone from "../../assests/svgs/password-Done.svg";
const VerifyNewNumber = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleVerfiyOtp = () => {
    setOpenModal(true);
  };
  return (
    <div className="otp-page-main-wrapper">
      <GoBack />
      <div className="container" style={{ minHeight: "inherit" }}>
        <div
          className="row flex justify-center items-center"
          style={{ minHeight: "inherit" }}
        >
          <OTP
            title="Verify new number"
            desc="A 6 digit one time password has been shared to"
            entity="+1 5652225620."
            otpDigit={6}
            className="lg:col-4 md:col-5 col-12 px-auto"
            handleVerfiyOtp={handleVerfiyOtp}
          />
        </div>
      </div>

      <WelcomeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        logo={passwordDone}
        main="Successfully Changed!"
        desc="Your number has been changed successful"
        btntitle1="Back to Account"
      />
    </div>
  );
};

export default VerifyNewNumber;
