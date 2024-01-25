import React from "react";
import { Button, Modal, Select } from "flowbite-react";
import { useState, useRef } from "react";
import useOnClickOutside from "../../reuseable/Outside";
import WelcomeLogo from "../../../assests/welcome-logo.svg";
import ArrowRight from "../../../assests/arrow-right.png";
import { useSpring, animated } from "@react-spring/web";
import "./Welcome.css";
import { Link } from "react-router-dom";

const WelcomeModal = ({
  openModal,
  setOldOpenModal,
  setOpenModal,
  handleVerfiyOtp,
  logo,
  main,
  title,
  desc,
  btntitle1,
  btntitle2,
  to,
}) => {
  const modalRef = useRef(null);

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
                  <div className="welcome-modal-logo-main-wrapper">
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
                {to ? (
                  <Link to="/">
                    <div className="welcome-modal-Strategy-btn mb-4">
                      <button className="mx-auto">
                        {btntitle1}{" "}
                        <span>
                          <img src={ArrowRight} alt="..." />
                        </span>
                      </button>
                    </div>
                  </Link>
                ) : (
                  <div className="welcome-modal-Strategy-btn mb-4">
                    <button
                      className="mx-auto"
                      onClick={() => {
                        setOldOpenModal(true);
                        setOpenModal(false);
                      }}
                    >
                      {btntitle1}{" "}
                      <span>
                        <img src={ArrowRight} alt="..." />
                      </span>
                    </button>
                  </div>
                )}
                {btntitle2 && (
                  <div className="welcome-modal-explore-btn mb-4">
                    <button
                      className="mx-auto"
                      onClick={() => {
                        setOldOpenModal(true);
                        setOpenModal(false);
                      }}
                    >
                      Explore Dashboard
                    </button>
                  </div>
                )}
              </div>
            </Modal.Body>
          </animated.div>
        </Modal>
      </div>
    </>
  );
};

export default WelcomeModal;
