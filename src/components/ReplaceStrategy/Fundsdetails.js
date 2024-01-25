import React from "react";
import lineUp from "../../assests/lineUp.svg";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import { Label, Select } from "flowbite-react";
import { Link } from "react-router-dom";
const Fundsdetails = ({ setProgressResult, setShowComponents }) => {
  const handleContinueBtn = () => {
    setProgressResult(50);
    setShowComponents({
      Fundsdetails: false,
      SustainInvest: true,
    });
  };

  const handleBackBtn = () => {
    setProgressResult(25);
    setShowComponents({
      Fundsdetails: true,
      SustainInvest: false,
    });
  };
  return (
    <div className="row">
      <div className="md:col-8 col-12 replace-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-10 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-strategy-page-card-details-heading">
            <h4>Enter Your Mutual Fund Details</h4>
          </div>
          <div className="replace-strategy-page-card-details-desc">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div className="md:col-7 sm:col-10 col-12 replace-strategy-page-ticker-heading-wrapper">
          <div className="replace-strategy-page-ticker-heading mb-2">
            <h4>Select mutual fund ticker</h4>
          </div>
          <div className="max-w">
            <Select
              id="countries"
              required
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border w-full"
            >
              <option>US3256875</option>
              <option>US3256875</option>
              <option>US3256875</option>
              <option>US3256875</option>
            </Select>
          </div>
          <div></div>
        </div>
        <div className="md:col-7 sm:col-10 col-12">
          <div className="replace-strategy-page-scale-investment">
            <h5>Select your investment</h5>
          </div>

          <div className="replace-strategy-page-card-main-investment col-12">
            <div className="flex justify-between items-center col-12 main-investment-title-wrap">
              <div>
                <div className="replace-strategy-page-card-main-investment-title">
                  <h4>GS ALPAH VALUE</h4>
                </div>
                <div className="replace-strategy-page-card-main-investment-desc">
                  <p>Equity Sectorial/ Thematic</p>
                </div>
              </div>
              <div className="replace-strategy-page-card-main-investment-values">
                <h4 className="flex">
                  (+11.54%) <img src={lineUp} />
                </h4>
              </div>
            </div>
            <div className="col-12">
              <div className="replace-strategy--investment-details-title">
                <h4>Details</h4>
              </div>
            </div>
            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title">
                <h4>Ticker ID</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc">
                <h4>US3256875</h4>
              </div>
            </div>

            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title">
                <h4>YTD</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc">
                <h4>12.3%</h4>
              </div>
            </div>
            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title">
                <h4>Stocks</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc-green flex">
                <h4 className="flex">
                  12.3% <img src={lineUp} alt="..." />
                </h4>
              </div>
            </div>
            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title-no">
                <h4>Type</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc-no">
                <h4>Value, Concentrated</h4>
              </div>
            </div>
          </div>

          <div className="replace-strategy-page-card-main-investment replace-strategy-page-card-main-investment-second  col-12">
            <div className="flex justify-between items-center col-12 main-investment-title-wrap">
              <div>
                <div className="replace-strategy-page-card-main-investment-title">
                  <h4>GS ALPAH VALUE</h4>
                </div>
                <div className="replace-strategy-page-card-main-investment-desc">
                  <p>Equity Sectorial/ Thematic</p>
                </div>
              </div>
              <div className="replace-strategy-page-card-main-investment-values">
                <h4 className="flex">
                  (+11.54%) <img src={lineUp} />
                </h4>
              </div>
            </div>
            <div className="col-12">
              <div className="replace-strategy--investment-details-title">
                <h4>Details</h4>
              </div>
            </div>
            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title">
                <h4>Ticker ID</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc">
                <h4>US3256875</h4>
              </div>
            </div>

            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title">
                <h4>YTD</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc">
                <h4>12.3%</h4>
              </div>
            </div>
            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title">
                <h4>Stocks</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc-green flex">
                <h4 className="flex">
                  12.3% <img src={lineUp} alt="..." />
                </h4>
              </div>
            </div>
            <div className="col-12 flex">
              <div className="col-6 p-4 replace-strategy--investment-tiker-title-no">
                <h4>Type</h4>
              </div>
              <div className="col-6 p-4 replace-strategy--investment-tiker-desc-no">
                <h4>Value, Concentrated</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-8 col-12 md:flex hidden justify-center mx-auto">
      <Link to="/dashboard">
      <button className="replace-strategy-go-back">
          <img src={Leftarrow}></img>Go Back
        </button>
      </Link>
     
        <button
          className="replace-strategy-contine-btn"
          onClick={handleContinueBtn}
        >
          Continue <img src={Rightarrow}></img>
        </button>
      </div>
      <div className="md:col-8 col-12 md:hidden block justify-center mx-auto">
        <button
          className="replace-strategy-contine-btn"
          onClick={handleContinueBtn}
        >
          Continue <img src={Rightarrow}></img>
        </button>
        <Link to="/dashboard">
        <button className="replace-strategy-go-back">
          <img src={Leftarrow}></img>Go Back
        </button>
        </Link>
     
      </div>
    </div>
  );
};

export default Fundsdetails;
