import React, { useState } from "react";
import CheckIcon from "../../assests/check.svg";
import FootPrintInput from "../ReplaceStrategy/FootPrintInput";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import Group from "../../assests/Group.svg";
import ConsumerStaples from "../../assests/ConsumerStaples.svg";
import HealthCare from "../../assests/healthcare.svg";
import Energy from "../../assests/Energy.svg";
import financial from "../../assests/financial.svg";
import Industry from "../../assests/industries.svg";
import Communication from "../../assests/communication.svg";
import Utilities from "../../assests/utilities.svg";
import realestate from "../../assests/realestate.svg";
import materails from "../../assests/materials.svg";
import basic from "../../assests/basic.svg";
import secondLast from "../../assests/secondlast.svg";

const ExposureSelection = ({ setShowComponents, setProgressResult }) => {
  const [footPrintBtn1, setfootPrintBtn1] = useState(false);
  const [footPrintBtn2, setfootPrintBtn2] = useState(false);
  const [footPrintBtn3, setfootPrintBtn3] = useState(false);
  const [footPrintBtn4, setfootPrintBtn4] = useState(false);
  const [footPrintBtn5, setfootPrintBtn5] = useState(false);
  const [footPrintBtn6, setfootPrintBtn6] = useState(false);
  const [footPrintBtn7, setfootPrintBtn7] = useState(false);
  const [footPrintBtn8, setfootPrintBtn8] = useState(false);
  const [footPrintBtn9, setfootPrintBtn9] = useState(false);
  const [footPrintBtn10, setfootPrintBtn10] = useState(false);
  const [footPrintBtn11, setfootPrintBtn11] = useState(false);
  const [footPrintBtn12, setfootPrintBtn12] = useState(false);

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

  const handlefootPrintBtn1 = () => {
    setfootPrintBtn1(!footPrintBtn1);
  };

  const handlefootPrintBtn2 = () => {
    setfootPrintBtn2(!footPrintBtn2);
  };

  const handlefootPrintBtn3 = () => {
    setfootPrintBtn3(!footPrintBtn3);
  };
  const handlefootPrintBtn4 = () => {
    setfootPrintBtn4(!footPrintBtn4);
  };

  const handlefootPrintBtn5 = () => {
    setfootPrintBtn5(!footPrintBtn5);
  };
  const handlefootPrintBtn6 = () => {
    setfootPrintBtn6(!footPrintBtn6);
  };
  const handlefootPrintBtn7 = () => {
    setfootPrintBtn7(!footPrintBtn7);
  };
  const handlefootPrintBtn8 = () => {
    setfootPrintBtn8(!footPrintBtn8);
  };

  const handlefootPrintBtn9 = () => {
    setfootPrintBtn9(!footPrintBtn9);
  };
  const handlefootPrintBtn10 = () => {
    setfootPrintBtn10(!footPrintBtn10);
  };
  const handlefootPrintBtn11 = () => {
    setfootPrintBtn11(!footPrintBtn11);
  };
  const handlefootPrintBtn12 = () => {
    setfootPrintBtn12(!footPrintBtn12);
  };
  return (
    <div className="row">
      <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-12 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-strategy-page-card-details-heading">
            <h4>Select Exposure Selection</h4>
          </div>

          <div className="replace-strategy-page-card-details-desc">
            <p>
              Define the sector exposure of your investment portfolio by
              selecting specific industry or sector.
              <br />
              Tailor your mutual fund choices to align with your sector
              preferences and optimize your investment strategy
            </p>
          </div>
        </div>

        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn1}
              handlefootPrintBtn={handlefootPrintBtn1}
              title="Technology"
              Icon={Group}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn2}
              handlefootPrintBtn={handlefootPrintBtn2}
              title="Consumer Staples"
              Icon={ConsumerStaples}
              success={CheckIcon}
            />
          </div>
        </div>
        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn3}
              handlefootPrintBtn={handlefootPrintBtn3}
              title="Healthcare"
              Icon={HealthCare}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn4}
              handlefootPrintBtn={handlefootPrintBtn4}
              title="Energy"
              Icon={Energy}
              success={CheckIcon}
            />
          </div>
        </div>

        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn5}
              handlefootPrintBtn={handlefootPrintBtn5}
              title="Financial Services"
              Icon={financial}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn6}
              handlefootPrintBtn={handlefootPrintBtn6}
              title="Industrials"
              Icon={Industry}
              success={CheckIcon}
            />
          </div>
        </div>

        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn7}
              handlefootPrintBtn={handlefootPrintBtn7}
              title="Communication Services"
              Icon={Communication}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn8}
              handlefootPrintBtn={handlefootPrintBtn8}
              title="Utilities"
              Icon={Utilities}
              success={CheckIcon}
            />
          </div>
        </div>

        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn9}
              handlefootPrintBtn={handlefootPrintBtn9}
              title="Real Estate"
              Icon={realestate}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn10}
              handlefootPrintBtn={handlefootPrintBtn10}
              title="Materials"
              Icon={materails}
              success={CheckIcon}
            />
          </div>
        </div>

        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn11}
              handlefootPrintBtn={handlefootPrintBtn11}
              title="Consumer Discretionary"
              Icon={secondLast}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn12}
              handlefootPrintBtn={handlefootPrintBtn12}
              title="Basic Materials"
              Icon={basic}
              success={CheckIcon}
            />
          </div>
        </div>
      </div>
      <div className="md:col-8 col-12 md:flex hidden justify-center mx-auto">
        <button className="replace-strategy-go-back" onClick={handleBackBtn}>
          <img src={Leftarrow}></img>Go Back
        </button>
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
        <button className="replace-strategy-go-back" onClick={handleBackBtn}>
          <img src={Leftarrow}></img>Go Back
        </button>
      </div>
    </div>
  );
};

export default ExposureSelection;
