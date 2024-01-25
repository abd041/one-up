import React,{useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Modal } from "flowbite-react";
import { useRef } from "react";
import useOnClickOutside from "../../reuseable/Outside";
import { useSpring, animated } from "@react-spring/web";
import ArrowRight from "../../../assests/arrow-right.png"
const AuthSuccessfull = ({
  openModal,
  descsecond,
  setOpenModal,
  logo,
  main,
  title,
  desc,
  btntitle1,
  authModal
}) => {
  const modalRef = useRef(null);
const navigate =useNavigate()
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (authModal) {
        setOpenModal(false);
        navigate('/secure-brokrage-account');
      }
    }, 5000);
  
    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  
  }, [authModal]);

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
                <div className="mb-3 welcome-modal-second-para-main-wrapper">
                  <p>{descsecond}</p>
                </div>
                {btntitle1 && <div className='welcome-modal-Strategy-btn mb-4' ><button className='mx-auto' >{btntitle1} <span><img src={ArrowRight} alt='...' /></span></button></div>}
                  </div>
            </Modal.Body>
          </animated.div>
        </Modal>
      </div>
    </>
  );
};

export default AuthSuccessfull;
