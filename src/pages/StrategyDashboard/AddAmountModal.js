import { Button, Label, Modal, Select } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import CloseIcon from "../../assests/close.svg";
import ArrowsRepeat from "../../assests/arrows-repeat.svg";
import CheveronRight from "../../assests/chevron-right.svg";
import globel from "../../assests/globe.svg";
import FileLines from "../../assests/file-lines.svg";
import arrowRight from "../../assests/arrow-right.png";
import { Link } from "react-router-dom";
import useOnClickOutside from "../../components/reuseable/Outside";
import PrepareStrategy from "../../components/Modals/PrepareStrategy/PrepareStrategy";
import spiner_light from "../../assests/spiner_light.svg";
import welcomelogo from "../../assests/welcome-logo.svg";
import AuthSuccessfull from "../../components/Modals/Brokrage/AuthSuccessfull";
import Failue from "../../assests/failue.png";
const AddAmountModal = ({ openModal, setOpenModal }) => {
  const modalRef = useRef(null);
  const [newopenModal, setnewOpenModal] = useState(false);
  const [newauthopenModal, setnewauthOpenModal] = useState(false);
  useOnClickOutside(modalRef, () => setOpenModal(false));
  useEffect(() => {
    if(newopenModal){
      const timeOut = setTimeout(() => {
        setnewOpenModal(false);
        setnewauthOpenModal(true);
      }, 10000);
  
      return () => {
        clearTimeout(timeOut);
      };
    }
   
  }, [newopenModal]);
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
              <div className="welcome-modal-main-wrapper add-strategy-modal-main-wrapper p-3">
                <div className="flex justify-between mb-4">
                  <div className="add-new-strategy-main-modal">
                    <h1>How much do you want to add on this Strategy?</h1>
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
                  <form class="max-w mx-auto">
                    <div className="login-email-label">
                      <Label htmlFor="email1" value="Label" />
                    </div>
                    <div class="flex mb-4">
                      <button
                        id="dropdown-currency-button"
                        data-dropdown-toggle="dropdown-currency"
                        class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                      >
                        <svg
                          fill="none"
                          aria-hidden="true"
                          class="h-4 w-4 me-2"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#D02F44"
                              fill-rule="evenodd"
                              d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                              clip-rule="evenodd"
                            />
                            <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                            <g filter="url(#filter0_d_343_121520)">
                              <path
                                fill="url(#paint0_linear_343_121520)"
                                fill-rule="evenodd"
                                d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_343_121520"
                              x1=".933"
                              x2=".933"
                              y1="1.433"
                              y2="6.1"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#fff" />
                              <stop offset="1" stop-color="#F0F0F0" />
                            </linearGradient>
                            <filter
                              id="filter0_d_343_121520"
                              width="6.533"
                              height="5.667"
                              x=".933"
                              y="1.433"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset dy="1" />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_343_121520"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_343_121520"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        USD{" "}
                        <svg
                          class="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="dropdown-currency"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700"
                      >
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-currency-button"
                        >
                          <li>
                            <button
                              type="button"
                              class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              <div class="inline-flex items-center">
                                <svg
                                  fill="none"
                                  aria-hidden="true"
                                  class="h-4 w-4 me-2"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path
                                      fill="#D02F44"
                                      fill-rule="evenodd"
                                      d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                                      clip-rule="evenodd"
                                    />
                                    <path
                                      fill="#46467F"
                                      d="M0 .5h8.4v6.533H0z"
                                    />
                                    <g filter="url(#filter0_d_343_121520)">
                                      <path
                                        fill="url(#paint0_linear_343_121520)"
                                        fill-rule="evenodd"
                                        d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                        clip-rule="evenodd"
                                      />
                                    </g>
                                  </g>
                                  <defs>
                                    <linearGradient
                                      id="paint0_linear_343_121520"
                                      x1=".933"
                                      x2=".933"
                                      y1="1.433"
                                      y2="6.1"
                                      gradientUnits="userSpaceOnUse"
                                    >
                                      <stop stop-color="#fff" />
                                      <stop offset="1" stop-color="#F0F0F0" />
                                    </linearGradient>
                                    <filter
                                      id="filter0_d_343_121520"
                                      width="6.533"
                                      height="5.667"
                                      x=".933"
                                      y="1.433"
                                      color-interpolation-filters="sRGB"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                      />
                                      <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                      />
                                      <feOffset dy="1" />
                                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                      <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_343_121520"
                                      />
                                      <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_343_121520"
                                        result="shape"
                                      />
                                    </filter>
                                  </defs>
                                </svg>
                                USD
                              </div>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              <div class="inline-flex items-center">
                                <svg
                                  fill="none"
                                  aria-hidden="true"
                                  class="h-4 w-4 me-2"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path fill="#043CAE" d="M0 .5h19.6v14H0z" />
                                    <path
                                      fill="#FFD429"
                                      fill-rule="evenodd"
                                      d="M9.14 3.493L9.8 3.3l.66.193-.193-.66.193-.66-.66.194-.66-.194.193.66-.193.66zm0 9.334l.66-.194.66.194-.193-.66.193-.66-.66.193-.66-.193.193.66-.193.66zm5.327-4.86l-.66.193L14 7.5l-.193-.66.66.193.66-.193-.194.66.194.66-.66-.193zm-9.994.193l.66-.193.66.193L5.6 7.5l.193-.66-.66.193-.66-.193.194.66-.194.66zm9.369-2.527l-.66.194.193-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm-8.743 4.86l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.194.193.66-.193.66zm7.034-6.568l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326 8.276l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66zM13.84 10.3l-.66.193.194-.66-.194-.66.66.194.66-.194-.193.66.193.66-.66-.193zM5.1 5.827l.66-.194.66.194-.194-.66.194-.66-.66.193-.66-.193.193.66-.193.66zm7.034 6.181l-.66.193.194-.66-.194-.66.66.194.66-.193-.193.66.193.66-.66-.194zm-5.326-7.89l.66-.193.66.193-.194-.66.194-.66-.66.194-.66-.193.193.66-.193.66z"
                                      clip-rule="evenodd"
                                    />
                                  </g>
                                </svg>
                                EUR
                              </div>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              <div class="inline-flex items-center">
                                <svg
                                  fill="none"
                                  aria-hidden="true"
                                  class="h-4 w-4 me-2"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.1"
                                    height="13.5"
                                    x=".25"
                                    y=".75"
                                    fill="#fff"
                                    stroke="#F5F5F5"
                                    stroke-width=".5"
                                    rx="1.75"
                                  />
                                  <mask
                                    id="a"
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.1"
                                      height="13.5"
                                      x=".25"
                                      y=".75"
                                      fill="#fff"
                                      stroke="#fff"
                                      stroke-width=".5"
                                      rx="1.75"
                                    />
                                  </mask>
                                  <g fill="#FF3131" mask="url(#a)">
                                    <path d="M14 .5h5.6v14H14z" />
                                    <path
                                      fill-rule="evenodd"
                                      d="M0 14.5h5.6V.5H0v14zM11.45 6.784a.307.307 0 01-.518-.277l.268-1.34-.933.466-.467-1.4-.467 1.4-.933-.466.268 1.34a.307.307 0 01-.518.277.307.307 0 00-.434 0l-.25.25-.933-.467L7 7.5l-.231.231a.333.333 0 000 .471l1.164 1.165h1.4l.234 1.4h.466l.234-1.4h1.4l1.164-1.165a.333.333 0 000-.471l-.231-.23.467-.934-.934.466-.25-.25a.307.307 0 00-.433 0z"
                                      clip-rule="evenodd"
                                    />
                                  </g>
                                </svg>
                                CAD
                              </div>
                            </button>
                          </li>
                          <li>
                            <button
                              type="button"
                              class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              <div class="inline-flex items-center">
                                <svg
                                  fill="none"
                                  aria-hidden="true"
                                  class="h-4 w-4 me-2"
                                  viewBox="0 0 20 15"
                                >
                                  <rect
                                    width="19.6"
                                    height="14"
                                    y=".5"
                                    fill="#fff"
                                    rx="2"
                                  />
                                  <mask
                                    id="a"
                                    width="20"
                                    height="15"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                  >
                                    <rect
                                      width="19.6"
                                      height="14"
                                      y=".5"
                                      fill="#fff"
                                      rx="2"
                                    />
                                  </mask>
                                  <g mask="url(#a)">
                                    <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                                    <path
                                      fill="#fff"
                                      fill-rule="evenodd"
                                      d="M-.898-.842L7.467 4.8V-.433h4.666V4.8l8.365-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.044-1.548 6.614-4.46H0V5.166h4.672L-1.942.706-.898-.842z"
                                      clip-rule="evenodd"
                                    />
                                    <path
                                      stroke="#DB1F35"
                                      stroke-linecap="round"
                                      stroke-width=".667"
                                      d="M13.068 4.933L21.933-.9M14.009 10.088l7.948 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.19 6.093"
                                    />
                                    <path
                                      fill="#E6273E"
                                      fill-rule="evenodd"
                                      d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z"
                                      clip-rule="evenodd"
                                    />
                                  </g>
                                </svg>
                                GBP
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <label
                        for="currency-input"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Your Email
                      </label>
                      <div class="relative w-full">
                        <input
                          type="number"
                          id="currency-input"
                          class="block p-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                          placeholder="Enter amount"
                          value="1000"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="add-new-strategy-replace-btn-create">
                  <button
                    className="w-full flex"
                    onClick={() => {
                      setnewOpenModal(true);
                      setOpenModal(false);
                    }}
                  >
                    Invest
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
      { newopenModal&& <PrepareStrategy
          openModal={newopenModal}
          setOpenModal={setnewOpenModal}
          logo={spiner_light}
          main="Wait for confirmation"
          desc="Redirecting....Do not press back or refresh this page"
          descsecond="You will be redirected to dashboard in 00:10"
        />}
        {/* // this will be shown in sucess scenario */}
        {/* <AuthSuccessfull
                    openModal={newauthopenModal}
                    setOpenModal={setnewauthOpenModal}
                    logo={welcomelogo}
                    main="Congratulations!"
                    desc="Your Funds have been successfully transferred."
                    descsecond="You will be redirected to dashboard in  00:10"
                    authModal={true}
                    btntitle1="Go to Dashboard"
                /> */}
        <AuthSuccessfull
          openModal={newauthopenModal}
          setOpenModal={setnewauthOpenModal}
          logo={Failue}
          main="Transaction Failed!"
          desc="Your transaction was unsuccessful due to network issue."
          descsecond="Facing any issue help"
          authModal={false}
          btntitle1="Try Again"

        />
      </div>
    </>
  );
};

export default AddAmountModal;
