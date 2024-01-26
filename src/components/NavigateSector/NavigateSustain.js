import React, { useState } from "react";
import coicon from "../../assests/coIcon.svg";
import CheckIcon from "../../assests/check.svg";
import FootPrintInput from "../ReplaceStrategy/FootPrintInput";
import Gendericon from "../../assests/Gender.svg"
import HumanRights from "../../assests/HumanRights.svg"
import FairPay from "../../assests/faipay.svg"
import SustainExclusion from "../ReplaceStrategy/SustainExclusion";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import passwordDone from "../../assests/svgs/password-Done.svg";
import spiner_light from "../../assests/spiner_light.svg"
import PrepareStrategy from "../Modals/PrepareStrategy/PrepareStrategy";
const NavigateSustain = ({setShowComponents ,setProgressResult}) => {
  const [footPrintBtn1, setfootPrintBtn1] = useState(false);
  const [footPrintBtn2, setfootPrintBtn2] = useState(false);
  const [footPrintBtn3, setfootPrintBtn3] = useState(false);
  const [footPrintBtn4, setfootPrintBtn4] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleContinueBtn = () => {
    // setProgressResult(50);
    setOpenModal(true)
  };

  const handleBackBtn = () => {
    setProgressResult(50);
    setShowComponents({
        createStratgy: false,
        SustainInvest: true,
        SustainComponent : false
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
  return (
    <div className="row">
      <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-12 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-strategy-page-card-details-heading">
            <h4>Sustainable investing</h4>
          </div>
          
          
          <div className="replace-strategy-page-card-details-desc">
            <p>
              Define the sector exposure of your investment portfolio by
              selecting specific industry or sector. <br />
              Tailor your mutual fund choices to align with your sector
              preferences and optimize your investment strategy
            </p>
          </div>
        </div>
        <div className="col-12 mb-2">
            <div className="Sustian-invest-footprint-heading">
                <h1>1. Footprint</h1>
            </div>
        </div>
        <div className="col-12 Sustian-invest-footprint-para mb-2">
            <div className="Sustian-invest-footprint-heading">
                <p>Select the most relevant fields to support companies that do business sustainably.</p>
            </div>
        </div>
        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn1}
              handlefootPrintBtn={handlefootPrintBtn1}
              title="CO2 Footprint"
              Icon={coicon}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 col-12 mx-auto flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn2}
              handlefootPrintBtn={handlefootPrintBtn2}
              title="Gender Equality"
              Icon={Gendericon}
              success={CheckIcon}
            />
          </div>
        </div>
        <div className="col-12 md:flex block">
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn3}
              handlefootPrintBtn={handlefootPrintBtn3}
              title="Human Rights"
              Icon={HumanRights}
              success={CheckIcon}
            />
          </div>
          <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
            <FootPrintInput
              footPrintBtn={footPrintBtn4}
              handlefootPrintBtn={handlefootPrintBtn4}
              title="Fair Pay"
              Icon={FairPay}
              success={CheckIcon}
            />
          </div>
        </div>
        <div className="col-12 sustain-exclusion-page-wrapper">
            <SustainExclusion/>
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
{openModal&&      <PrepareStrategy
        openModal={openModal}
        setOpenModal={setOpenModal}
        logo={spiner_light}
        main="Preparing your strategy"
        desc="Configuring....Do not press back or refresh this page"
        descsecond="You will be directed to your strategy"
        sustainInvest={true}
        brockConnect={false}
        secureAccountTrue={false}
        connectAccount={false}
      />}
    </div>
  );
};

export default NavigateSustain;
