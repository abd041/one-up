import React from "react";
import { Button, Modal, Select } from "flowbite-react";
import { useState, useRef } from "react";
import useOnClickOutside from "../reuseable/Outside";
import { useSpring, animated } from "@react-spring/web";
import CloseIcon from "../../assests/close.svg";
import ArrowsRepeat from "../../assests/arrows-repeat.svg";
import CheveronRight from "../../assests/chevron-right.svg";
import globel from "../../assests/globe.svg";
import FileLines from "../../assests/file-lines.svg";
import arrowRight from "../../assests/arrow-right.png";
import { Link } from "react-router-dom";
import DashboardTable from "../Dashboard/DashboardTable";
const ExistingStrategyModal = ({ openModal, setOpenModal }) => {
  const modalRef = useRef(null);
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
                <div className="flex justify-between add-new-strategy-main-heading-wrapper">
                  <div className="add-new-strategy-main-modal">
                    <h1>Select New Strategy to Existing</h1>
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
                <div className="row Dashboard-page-date-portfolio-wrapper">
          <div className="Dashboard-page-date-portfolio-heading">
            <h4>Strategy in Portfolio </h4>
          </div>
          <div className="Dashboard-page-date-mutual-heading">
            <h5>3 Mutual Funds</h5>
          </div>
        </div>
        <DashboardTable/>
              </div>
              {/* <div className="flex justify-between add-new-strategy-amout-available-wrapper">
                <div className="add-new-strategy-amout-available">
                  <h4>Balance available to Invest</h4>
                </div>
                <div className="add-new-strategy-amout-available-exact">
                  <h4>$ 14,700.00</h4>
                </div>
              </div> */}
            </Modal.Body>
          </animated.div>
        </Modal>
      </div>
    </>
  );
};

export default ExistingStrategyModal;
