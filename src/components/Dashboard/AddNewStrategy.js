import React from "react";
import { Button, Modal, Select } from "flowbite-react";
import { useState, useRef } from "react";
import useOnClickOutside from "../reuseable/Outside";
import "./AddNewStrategy.css";
import { useSpring, animated } from "@react-spring/web";
import CloseIcon from "../../assests/close.svg";
import ArrowsRepeat from "../../assests/arrows-repeat.svg";
import CheveronRight from "../../assests/chevron-right.svg";
import globel from "../../assests/globe.svg";
import FileLines from "../../assests/file-lines.svg";
import arrowRight from "../../assests/arrow-right.png";
import { Link } from "react-router-dom";
const AddNewStrategy = ({ openModal, setOpenModal }) => {
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
                    <h1>Select New Strategy</h1>
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
                <Link to="/replace-existing-strategy">
                  <div className="add-new-strategy-replace-btn">
                    <button className="w-full flex">
                      <span className="flex items-center">
                        <img src={ArrowsRepeat} alt="..." /> Replace an Existing
                        Fund
                      </span>

                      <img src={CheveronRight} alt="..." />
                    </button>
                  </div>
                </Link>
                <Link to="/navigate-by-sector">
                  <div className="add-new-strategy-replace-btn">
                    <button className="w-full flex">
                      <span className="flex items-center">
                        <img src={globel} alt="..." /> Navigate by Sector
                      </span>

                      <img src={CheveronRight} alt="..." />
                    </button>
                  </div>
                </Link>
                <Link to="/navigate-by-investment">
                  <div className="add-new-strategy-replace-btn">
                    <button className="w-full flex">
                      <span className="flex items-center">
                        <img src={FileLines} alt="..." /> Navigate by Investment
                        Style
                      </span>

                      <img src={CheveronRight} alt="..." />
                    </button>
                  </div>
                </Link>

                <div className="add-new-strategy-replace-btn-create">
                  <button className="w-full flex">
                  Create New Strategy 
                    <img src={arrowRight} alt="..." />
                  </button>
                </div>
              </div>
              {/* <div className="flex justify-between add-new-strategy-amout-available-wrapper">
                <div className="add-new-strategy-amout-available">
                  <h4>Amount available to Invest</h4>
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

export default AddNewStrategy;
