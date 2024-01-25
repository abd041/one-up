import React, { useState } from "react";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import "./Brokrage.css";
import LogoOne from "../../assests/logone.png";
import LogoTwo from "../../assests/logotwo.png";

import ChartBar from "../../assests/chart-bar.svg";

import BrockrageAccountRow from "../../components/BrokrageAccount/BrockrageAccountRow";
import CompleteAuth from "../../components/Modals/Brokrage/CompleteAuth";
import { Link } from "react-router-dom";
const BrokrageAccount = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="row brockage-account-page-first-wrapper">
      <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-12  col-12 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-brokrage-page-card-details-heading">
            <h4>Connect Your Accounts</h4>
          </div>

          <div className="replace-brokrage-page-card-details-desc">
            <p>
              Define the sector exposure of your investment portfolio by
              selecting specific industry or sector.
              <br />
              Tailor your mutual fund choices to align with your sector
              preferences and optimize your investment strategy
            </p>
          </div>
          <div className="replace-strategy-page-card-details-desc-bold">
            <p>Select Brokerage firm</p>
          </div>
        </div>
        <div className="md:col-6 col-12 brokrage-page-card-row mx-auto">
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
            <div className="brokrage-page-card-connect-row">
              <h2>Connect to your broker</h2>
            </div>
          </div>
          <div className="pb-3 col-11">
            <form>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for broker"
                  required
                />
              </div>
            </form>
          </div>
          <BrockrageAccountRow
            title="Robinhood"
            desc="http//www.robinhood.com/"
          />
          <BrockrageAccountRow title="Webull" desc="http//www.robinhood.com/" />
          <BrockrageAccountRow
            title="Robinhood"
            desc="http//www.robinhood.com/"
          />
          <BrockrageAccountRow title="Webull" desc="http//www.robinhood.com/" />
          <BrockrageAccountRow
            title="Robinhood"
            desc="http//www.robinhood.com/"
          />
          <BrockrageAccountRow
            title="Robinhood"
            desc="http//www.robinhood.com/"
          />
          <BrockrageAccountRow
            title="Robinhood"
            desc="http//www.robinhood.com/"
          />
        </div>
        <div className="md:col-6 col-12 connect-portfolio-btn-main-wrapper">
          <div className="col-12 flex justify-center mb-4">
            <button
              className="connect-portfolio-btn-wrapper"
              onClick={() => setOpenModal(true)}
            >
              <img src={ChartBar} /> Connect your Portfolio{" "}
              <img src={Rightarrow}></img>
            </button>
          </div>

          <div className="col-12 flex justify-center">
            {" "}
            <Link to="/strategy-insight" className="connect-portfolio-go-back">
              <img src={Leftarrow}></img>Go Back
            </Link>
          </div>
        </div>
      </div>
      {openModal && (
        <CompleteAuth openModal={openModal} setOpenModal={setOpenModal} sucessmodal={true}/>
      )}
    </div>
  );
};

export default BrokrageAccount;
