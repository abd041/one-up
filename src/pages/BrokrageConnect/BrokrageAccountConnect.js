import React, { useState } from "react";
import { Progress } from "flowbite-react";
import { InfoIcon, Cheveron } from "../../assests/svgs/password";
import StrategyInsightRow from "../../components/StrategyInsight/StrategyInsightRow";
import Rightarrow from "../../assests/arrow-right.png";
import Leftarrow from "../../assests/arrow-left.svg";
import spiner_light from "../../assests/spiner_light.svg"
import PrepareStrategy from "../../components/Modals/PrepareStrategy/PrepareStrategy";
import Credlogo from "../../assests/credlogo.svg";
import LogoTwo from "../../assests/logotwo.png";
import WeBul from "../../assests/webul.png"
import { Link } from "react-router-dom";
const BrokrageAccountConnect = () => {
  const [progressResult, setProgressResult] = useState(75);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container-large replace-strategy-page-wrapper">
  

      <div className="row">
        <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
        <div className="col-12 py-3">
            <div className="flex">
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
          <div className="md:col-12 replace-strategy-page-card-secondry-wrapper strategy-insight-main-wrapper">
            <div className="strategy-insight-page-card-details-heading mb-3">
              <h4>
              Your brokerage account is now connected!
              </h4>
            </div>

            <div className="strategy-insight-page-card-details-desc">
              <p>
              Define the sector exposure of your investment portfolio by selecting specific industry or sector. 
              <br/>
              Tailor your mutual fund choices to align with your sector preferences and optimize your investment strategy
              </p>
            </div>
          </div>

          <div className="col-12 flex  strategy-insight-page-strategy-details-btn-wrap">
            <div className="col-6 strategy-insight-page-strategy-details">
              <h4 className="flex items-center">
              Account Details <span>{InfoIcon()}</span>
              </h4>
            </div>
            <div className="col-6 flex justify-end">
              <button className="strategy-insight-page-strategy-details-btn flex">
                Show Less <span>{Cheveron()}</span>
              </button>
            </div>
          </div>
          <div className="col-12 flex  insight-card-wrapper">
            <div className="col-12 strategy-insight-blue-card-btn">
              <div>
                <div className="strategy-insight-blue-card-first">
                  <h1 className="flex"><img src={WeBul}/> Webull-6931</h1>
                </div>
                <div className="strategy-insight-blue-card-second">
                  <h2>$523.40</h2>
                </div>
                <div className="strategy-insight-blue-card-third">
                  <h3>Account Balance</h3>
                </div>
              </div>
              <div>
                <div className="strategy-insight-blue-card-first text-right">
                  <h1>Purchasing Power</h1>
                </div>
                <div className="strategy-insight-blue-card-second text-right">
                  <h2>$20.34</h2>
                </div>
                <div className="strategy-insight-blue-card-third text-right">
                  <h3 className="flex">
                  Purchasing Power    </h3>
                </div>
              </div>
            </div>
            <Link  to="/strategy-dashboard" className="strategy-insight-main-wrapper-btn strategy-insight-main-connect-btn " onClick={()=>setOpenModal(true)}>
            Invest Now <img src={Rightarrow}></img>
            </Link>
          </div>

        </div>
      </div>
      <div className="md:col-8 col-12 md:flex hidden justify-center mx-auto">
        <Link to={"/brokrage-account-cred"} className="replace-strategy-go-back">
          <img src={Leftarrow}></img>Go Back
        </Link>
        <Link  to="/connect-brokrage-account" className="replace-strategy-contine-btn">
        Connect Other Accounts <img src={Rightarrow}></img>
        </Link>
      </div>
      <div className="md:col-8 col-12 md:hidden block justify-center mx-auto">
        <Link  to="/connect-brokrage-account" className="replace-strategy-contine-btn">
        Connect Other Accounts <img src={Rightarrow}></img>
        </Link>
        <Link to={"/brokrage-account-cred"} className="replace-strategy-go-back">
          <img src={Leftarrow}></img>Go Back
        </Link>
      </div>

    </div>
  );
};

export default BrokrageAccountConnect;
