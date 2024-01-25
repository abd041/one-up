import React, { useEffect } from "react";
import { Button, Modal, Select } from "flowbite-react";
import { useState, useRef } from "react";
import useOnClickOutside from "../../reuseable/Outside";
import { useSpring, animated } from "@react-spring/web";
import CloseIcon from "../../../assests/close.svg";
import ArrowsRepeat from "../../../assests/arrows-repeat.svg";
import CheveronRight from "../../../assests/chevron-right.svg";
import globel from "../../../assests/globe.svg";
import FileLines from "../../../assests/file-lines.svg";
import arrowRight from "../../../assests/arrow-right.png";
import { Link } from "react-router-dom";
import ConnectLogo from "../../../assests/connectLogo.svg";
import LeftArrow from "../../../assests/arrow-left.svg";
import spiner_light from "../../../assests/spiner_light.svg";
import PrepareStrategy from "../PrepareStrategy/PrepareStrategy";
import AuthSuccessfull from "./AuthSuccessfull";
import authSuccess from "../../../assests/authsucees.png";
const CompleteAuth = ({ openModal, setOpenModal, sucessmodal }) => {
  const [mynewopenModal, setmynewOpenModal] = useState(false);

  const modalRef = useRef(null);

  const handleProcessModal = () => {
    setmynewOpenModal(true);

  };
 


  useOnClickOutside(modalRef, () => setOpenModal(false));

  const overlayAnimation = useSpring({
    opacity: openModal ? 1 : 0,
    config: { duration: 500 },
  });

  return (
    <>
      <div>
        <Modal show={openModal} size={"2xl"} ref={modalRef}>
          <animated.div style={overlayAnimation}>
            <Modal.Body className="p-4">
              <div className="welcome-modal-main-wrapper add-strategy-modal-main-wrapper p-3">
                <div className="flex justify-between ">
                  <div className="complete-auth-main-logo mx-auto">
                    <img src={ConnectLogo} alt="..." />
                  </div>
                  <div>
                    <button
                      className="add-new-strategy-main-modal-btn"
                      onClick={() => setOpenModal(false)}
                    >
                      <img src={CloseIcon} alt="..." />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="complete-auth-main-title">
                    <h1>Complete the Authentication process with Webull</h1>
                  </div>
                </div>

                <div className="ps-5">
                  <ul className="complete-auth-main-list list-disc">
                    <li>
                      Redirecting you to another site for identity confirmation
                    </li>
                    <li>You’ll be directed back to OneUp</li>
                  </ul>
                </div>
                <div className="add-new-brokarge-replace-btn-create">
                  <button className="w-full flex" onClick={handleProcessModal}>
                    Continue
                    <img src={arrowRight} alt="..." />
                  </button>
                </div>
                <div className="add-new-brokarge-replace-btn-go-back">
                  <button className="w-full flex" onClick={() => setOpenModal(false)}>
                    <img src={LeftArrow} alt="..." />
                    Go Back
                  </button>
                </div>
              </div>
            </Modal.Body>
          </animated.div>
        </Modal>
      </div>

     {mynewopenModal&& <PrepareStrategy
        openModal={mynewopenModal}
        setOpenModal={setmynewOpenModal}
        logo={spiner_light}
        main="Wait...We are authenticating with Webull"
        desc="Configuring....Do not press back or refresh this page"
        descsecond="You will be directed to your strategy"
        sustainInvest={true}
        brockConnect={false}
        secureAccountTrue={true}
        connectAccount={false}
      />}

      {/*  */}

    </>
  );
};

export default CompleteAuth;
