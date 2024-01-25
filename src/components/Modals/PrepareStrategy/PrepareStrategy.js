import React, { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./PrepareStrategy.css";
import useOnClickOutside from "../../reuseable/Outside";
import { useSpring, animated } from "@react-spring/web";
import AuthSuccessfull from "../Brokrage/AuthSuccessfull";
import authSuccess from "../../../assests/authsucees.png";
const PrepareStrategy = ({
  openModal,
  descsecond,
  setOpenModal,
  logo,
  main,
  title,
  desc,
  sustainInvest,
  connectAccount,
  secureAccountTrue,
  brockConnect
}) => {
  const modalRef = useRef(null);
let navigate =useNavigate()
const [newauthopenModal, setnewauthOpenModal] = useState(false);
useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (sustainInvest) {
      setOpenModal(false);
      navigate('/strategy-insight');
    }
  }, 5000);

  return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount

}, [sustainInvest]);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (brockConnect) {
      setOpenModal(false);
      navigate('/brokrage-account-connect');
    }
  }, 5000);

  return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount

}, [brockConnect]);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    if (secureAccountTrue) {
      setOpenModal(false);
      navigate('/secure-brokrage-account');
      setnewauthOpenModal(true)
    }
  }, 5000);

  return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount

}, [secureAccountTrue]);


useEffect(() => {
  const newtimeoutId = setTimeout(() => {
    if (connectAccount) {
      setOpenModal(false);
      navigate('/connect-brokrage-account');
    }
  }, 5000);

  return () => clearTimeout(newtimeoutId); // Cleanup the timeout on component unmount

}, [connectAccount]);

  useOnClickOutside(modalRef, () => setOpenModal(false));

  const overlayAnimation = useSpring({
    opacity: openModal ? 1 : 0,
    config: { duration: 500 },
  });



  return (
    <>
      <div>
        <Modal show={openModal} size={"xl"} ref={modalRef}>
          <animated.div style={overlayAnimation}>
            <Modal.Body className="p-4">
              <div className="welcome-modal-main-wrapper">
                <div className="mb-4">
                  <div className="welcome-modal-logo-main-wrapper preapare-strategy-modal-image">
                    <img src={logo} alt="..." className="mx-auto" />
                  </div>
                </div>
                <div className="welcome-modal-heading-main-wrapper mb-4">
                  <h1>
                    {main}
                    {title && <span>{title}</span>}
                  </h1>
                </div>
                <div className="welcome-modal-para-main-wrapper mb-4">
                  <p>{desc}</p>
                </div>
                <div className="mb-3 welcome-modal-second-para-main-wrapper">
                  <p>{descsecond}</p>
                </div>
              </div>
            </Modal.Body>
          </animated.div>
        </Modal>
        
      </div>
      <AuthSuccessfull
        openModal={newauthopenModal}
        setOpenModal={setnewauthOpenModal}
        logo={authSuccess}
        main="Authentication successful!"
        desc="Your Funds have been successfully transferred."
        descsecond="You will be redirected to dashboard in  00:10"
      />
    </>
  );
};

export default PrepareStrategy;
