import React, { useState } from "react";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import LogoOne from "../../assests/logone.png";
import LogoTwo from "../../assests/logotwo.png";
import ChartBar from "../../assests/chart-bar.svg";
import "./Secure.css";
import BrockrageAccountRow from "../../components/BrokrageAccount/BrockrageAccountRow";
import BlackLeftArrow from "../../assests/arrow-left black.svg";
import { DataSvg, LockIcon } from "../../assests/svgs/password";
import { Link } from "react-router-dom";

const SecureBrokage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="row brockage-account-page-first-wrapper">
      <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-12  col-12 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-brokrage-page-card-details-heading">
            <h4>Securing your connection</h4>
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
                src={LogoOne}
              />
              <img
                style={{
                  width: "44.95px",
                  height: "42.98px",
                  borderRadius: 9999,
                  border: "0.99px #6B7280 solid",
                }}
                src={LogoTwo}
              />
            </div>
          </div>
          <div className="pb-3 col-12">
            <div className="secure-page-card-connect-row">
              <h2>
                Oneup uses <span>SnapTrade</span> to connect to your institution{" "}
              </h2>
            </div>
          </div>

          <div className="col-11 mb-4">
            <div className="flex">
              <div className="secure-strategy-data-image">{DataSvg()}</div>
              <div className="secure-strategy-data-heading-desc-wrap col-12">
                <div className="secure-strategy-data-heading">
                  <h1>You data belongs to you</h1>
                </div>
                <div className="secure-strategy-data-desc col-10">
                  <p>
                    snaptube doeesn’t sell personal info and will only use it
                    with your permission
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 mb-6">
            <div className="flex">
              <div className="secure-strategy-data-image">{LockIcon()}</div>
              <div className="secure-strategy-data-heading-desc-wrap col-12">
                <div className="secure-strategy-data-heading">
                  <h1>Your password is safe </h1>
                </div>
                <div className="secure-strategy-data-desc col-10">
                  <p>
                    Your login details are secure with your institution.
                    connecting your account does not allow OneUP to see your
                    login information
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-11 mb-2">
            <div className="secure-strategy-data-desc-continue"><h4>By selecting “continue” you agree to the </h4></div>
          </div>
          <div className="col-11 mb-6">
            <div className="secure-strategy-data-desc-trems"><h4>Snaptube End Users Terms & Conditions</h4></div>
          </div>
          <div className="col-11 flex justify-center mb-4">
            <Link
              className="connect-portfolio-btn-wrapper-secure"
              to="/brokrage-account-cred"
            >
              <img src={ChartBar} /> Continue{" "}
              <img src={Rightarrow}></img>
            </Link>
          </div>
        </div>
        <div className="md:col-6 col-11 connect-portfolio-btn-main-wrapper">
          <div className="col-12 flex justify-center">
            {" "}
            <Link to="/connect-brokrage-account" className="connect-portfolio-go-back">
              <img src={Leftarrow}></img>Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureBrokage;
