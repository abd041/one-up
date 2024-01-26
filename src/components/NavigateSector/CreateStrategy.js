import React, { useState } from "react";
import coicon from "../../assests/coIcon.svg";
import CheckIcon from "../../assests/check.svg";
import Gendericon from "../../assests/Gender.svg";
import HumanRights from "../../assests/HumanRights.svg";
import FairPay from "../../assests/faipay.svg";
import SustainExclusion from "../ReplaceStrategy/SustainExclusion";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import CreateStrategyInput from "./CreateStrategyInput";

import Industry from "../../assests/Industry.svg";
import RetailFood from "../../assests/Retail food.svg";
import { Link } from "react-router-dom";
const CreateStrategy = ({ setShowComponents, setProgressResult }) => {
  const [footPrintBtn1, setfootPrintBtn1] = useState(false);
  const [footPrintBtn2, setfootPrintBtn2] = useState(false);
  const [footPrintBtn3, setfootPrintBtn3] = useState(false);
  const [footPrintBtn4, setfootPrintBtn4] = useState(false);
  const [footPrintBtn5, setfootPrintBtn5] = useState(false);
  const [footPrintBtn6, setfootPrintBtn6] = useState(false);
  const [footPrintBtn7, setfootPrintBtn7] = useState(false);
  const [footPrintBtn8, setfootPrintBtn8] = useState(false);
  const [footPrintBtn9, setfootPrintBtn9] = useState(false);

  const handleContinueBtn = () => {
    setProgressResult(50);
    setShowComponents({
      createStratgy: false,
      SustainInvest: true,
    });
  };

  const handleBackBtn = () => {
    setProgressResult(25);
    setShowComponents({
      createStratgy: true,
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
  return (
    <div className="row">
      <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-12 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-strategy-page-card-details-heading">
            <h4>Create Your Own Strategy</h4>
          </div>

          <div className="replace-strategy-page-card-details-desc">
            <p>
              Define the sector exposure of your investment portfolio by
              selecting specific industry or sector.
              <br /> Tailor your mutual fund choices to align with your sector
              preferences and optimize your investment strategy
            </p>
          </div>
        </div>
        <div className="col-12">
          <div className="create-strategy-footprint-heading">
            <h1>1. Select Your Investment Universe</h1>
          </div>
        </div>

        <div className="col-12 md:flex block create-strategy-first-column">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn1}
              handlefootPrintBtn={handlefootPrintBtn1}
              title="Small & Mid Cap Funds"
              Icon={RetailFood}
              success={CheckIcon}
              content="market cap &lt; 5bn"
            />
          </div>
          <div className="md:col-6 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn2}
              handlefootPrintBtn={handlefootPrintBtn2}
              title="Large Cap"
              Icon={Industry}
              success={CheckIcon}
              content="market cap &gt; 5bn"
            />
          </div>
        </div>

        <div className="col-12">
          <div className="create-strategy-footprint-heading">
            <h1>2. Select Your Investment Style</h1>
          </div>
        </div>

        <div className="col-12 md:flex block create-strategy-first-column">
          <div className="md:col-4 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn3}
              handlefootPrintBtn={handlefootPrintBtn3}
              title="Value"
              success={CheckIcon}
              content="Seek undervalued stocks for high return potential."
            />
          </div>
          <div className="md:col-4 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn4}
              handlefootPrintBtn={handlefootPrintBtn4}
              title="Growth"
              success={CheckIcon}
              content="Seek growth"
            />
          </div>
          <div className="md:col-4 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn6}
              handlefootPrintBtn={handlefootPrintBtn6}
              title="Blend"
              success={CheckIcon}
              content="Blend"
            />
          </div>
        </div>

        <div className="col-12">
          <div className="create-strategy-footprint-heading">
            <h1>3. Select Your Risk Profile</h1>
          </div>
        </div>

        <div className="col-12 md:flex block">
          <div className="md:col-4 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn7}
              handlefootPrintBtn={handlefootPrintBtn7}
              title="Concentrated"
              success={CheckIcon}
              content="10 to 15 stocks"
            />
          </div>
          <div className="md:col-4 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn8}
              handlefootPrintBtn={handlefootPrintBtn8}
              title="Balanced"
              success={CheckIcon}
              content="20 to 30 stocks"
            />
          </div>
          <div className="md:col-4 sm:col-5 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <CreateStrategyInput
              footPrintBtn={footPrintBtn9}
              handlefootPrintBtn={handlefootPrintBtn9}
              title="Diversified"
              success={CheckIcon}
              content="35 to 60 stocks"
            />
          </div>
        </div>
      </div>
      <div className="md:col-8 col-12 md:flex hidden justify-center mx-auto">
        <Link  to="/dashboard"className="replace-strategy-go-back" onClick={handleBackBtn}>
          <img src={Leftarrow}></img>Go Back
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
        <Link to="/dashboard" className="replace-strategy-go-back" onClick={handleBackBtn}>
          <img src={Leftarrow}></img>Go Back
        </Link>
      </div>
    </div>
  );
};

export default CreateStrategy;
