import React, { useEffect, useState } from "react";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import LogoOne from "../../assests/logone.png";
import LogoTwo from "../../assests/logotwo.png";
import ChartBar from "../../assests/chart-bar.svg";
import BrockrageAccountRow from "../../components/BrokrageAccount/BrockrageAccountRow";
import BlackLeftArrow from "../../assests/arrow-left black.svg";
import { DataSvg, LockIcon, UserIcon } from "../../assests/svgs/password";
import LockButton from "../../assests/lock.svg";
import { Card, Label, TextInput } from "flowbite-react";
import { hidepassword, showpassword } from "../../assests/svgs/password";
import spiner_light from "../../assests/spiner_light.svg";
import Credlogo from "../../assests/credlogo.svg";
import "./Brokrageaccountcred.css";
import CompleteAuth from "../../components/Modals/Brokrage/CompleteAuth";
import PrepareStrategy from "../../components/Modals/PrepareStrategy/PrepareStrategy";
import AuthSuccessfull from "../../components/Modals/Brokrage/AuthSuccessfull";
import authSuccess from "../../assests/authsucees.png";
import { Link } from "react-router-dom";

const BrokrageAccountCred = () => {
  const [openModal, setOpenModal] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newauthopenModal, setnewauthOpenModal] = useState(false);

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setOpenModal(false);
  //     setnewauthOpenModal(true);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [openModal]);

  return (
    <div className="row brockage-account-page-first-wrapper">
      <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-12  col-12 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-brokrage-page-card-details-heading">
            <h4>Enter your credentials</h4>
          </div>
        </div>
        <div className="md:col-6 col-12 brokrage-page-card-row mx-auto relative">
          <div className="absolute top-4 left-6">
            <img src={BlackLeftArrow} alt="..." />
          </div>
          <div className="col-12 py-3">
            <div className="flex justify-center">
              <img
                style={{
                  width: "44.95px",
                  height: "42.98px",
                  borderRadius: 9999,
                  border: "0.99px #4B5563 solid",
                }}
                src={LogoTwo}
              />
              <img
                style={{
                  width: "44.95px",
                  height: "42.98px",
                  borderRadius: 9999,
                  border: "0.99px #6B7280 solid",
                }}
                src={Credlogo}
              />
            </div>
          </div>
          <div className="pb-3 col-12">
            <div className="secure-page-card-connect-row">
              <h2>Enter your credentials </h2>
              <p className="col-10">
                To connect your <span>Webull US account,</span> you’ll need to
                enter your credentials below.
              </p>
            </div>
          </div>

          <div className="col-11 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Email" />
            </div>
            <div class="relative">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  {UserIcon()}
                </div>
                <input
                  type={"text"}
                  value={""}
                  id="search"
                  class="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-11 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Password" />
            </div>
            <div class="relative">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img
                    src={LockButton}
                    alt="..."
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type here"
                  required
                />
                <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                  {!showPassword ? (
                    <span onClick={() => setShowPassword(true)}>
                      {hidepassword()}
                    </span>
                  ) : (
                    <span onClick={() => setShowPassword(false)}>
                      {showpassword()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 mb-4">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Password" />
            </div>
            <div class="relative">
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img
                    src={LockButton}
                    alt="..."
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type here"
                  required
                />
                <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                  {!showPassword ? (
                    <span onClick={() => setShowPassword(true)}>
                      {hidepassword()}
                    </span>
                  ) : (
                    <span onClick={() => setShowPassword(false)}>
                      {showpassword()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 flex justify-center mb-4">
            <button
              className="connect-portfolio-btn-wrapper-secure"
              onClick={()=> setOpenModal(true)}
            >
              <img src={ChartBar} /> Submit <img src={Rightarrow}></img>
            </button>
          </div>
        </div>
        <div className="md:col-6 col-11 connect-portfolio-btn-main-wrapper">
          <div className="col-12 flex justify-center">
            {" "}
            <Link  to="/secure-brokrage-account" className="connect-portfolio-go-back">
              <img src={Leftarrow}></img>Go Back
            </Link>
          </div>
        </div>
      </div>
      {openModal&&<PrepareStrategy
        openModal={openModal}
        setOpenModal={setOpenModal}
        logo={spiner_light}
        main="Wait...We are authenticating with Webull"
        desc="Configuring....Do not press back or refresh this page"
        descsecond="You will be directed to your strategy"
        sustainInvest={false}
        brockConnect={true}
        secureAccountTrue={false}
        connectAccount={false}
      />}
      {/* <AuthSuccessfull
        openModal={newauthopenModal}
        setOpenModal={setnewauthOpenModal}
        logo={authSuccess}
        main="Authentication successful!"
        desc="Your Funds have been successfully transferred."
        descsecond="You will be redirected to dashboard in  00:10"
        authModal={true}
      /> */}
    </div>
  );
};

export default BrokrageAccountCred;
