import React from "react";
import { Button, Modal, Select } from "flowbite-react";
import { useState, useRef } from "react";
import useOnClickOutside from "../../reuseable/Outside";
import { useSpring, animated } from "@react-spring/web";
import CloseIcon from "../../../assests/close.svg";
import DashboardTable from "../../Dashboard/DashboardTable";
import ArrowUp from "../../../assests/arrowgoingup.png";
import ShowStat from "../../Dashboard/ShowStatModal";
const StrategySpecModal = ({ openModal, setOpenModal }) => {
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
            <Modal.Body className="p-4 strategy-modal-body-main">
              <div className="welcome-modal-main-wrapper p-3">
                <div className="flex justify-between appl-heading">
                  <div className="flex p-4">
                    <div className="stragy-spec-modal-image"></div>
                    <div>
                      <div className="stragy-spec-modal-heading">
                        <h1>Appl</h1>
                      </div>
                      <div className="stragy-spec-modal-desc">
                        <p>Apple.inc</p>
                      </div>
                    </div>
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
                <div className="stragtgy-spec-balance-heading-warpper flex justify-between items-center">
                  <div className="Dashboard-page-date-portfolio-heading">
                    <h4>$16.57</h4>
                  </div>
                  <div className="stragtgy-spec-balance-desc-warpper">
                    <button>
                      26.3%{" "}
                      <span>
                        <img src={ArrowUp} />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="stragy-spec-desc-wrapper">
                  <div className="stragy-spec-desc-head">
                    <h4>Description</h4>
                  </div>
                  <div className="stragy-spec-desc-para">
                    <p>
                      Personalize your mutual fund strategy for sustainability
                      by adding green initiatives or excluding sectors that
                      align with your values utual fund strategy r sus
                      <span>....Show more</span>
                    </p>
                  </div>
                </div>
                <ShowStat />
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

export default StrategySpecModal;
