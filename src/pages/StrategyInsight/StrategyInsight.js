import React, { useState } from "react";
import { Progress } from "flowbite-react";
import "./StrategyInsight.css";
import { InfoIcon, Cheveron } from "../../assests/svgs/password";
import StrategyInsightRow from "../../components/StrategyInsight/StrategyInsightRow";
import Rightarrow from "../../assests/arrow-right.png";
import Leftarrow from "../../assests/arrow-left.svg";
import spiner_light from "../../assests/spiner_light.svg"
import PrepareStrategy from "../../components/Modals/PrepareStrategy/PrepareStrategy";
import { Link } from "react-router-dom";
const StrategyInsight = () => {
  const [progressResult, setProgressResult] = useState(75);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container-large replace-strategy-page-wrapper">
      <div className="row progress-bar-main-wrapper-strager-page">
        <div className="col-12">
          <div className="flex justify-end replace-strategy-page-progress-bar">
            {progressResult}%
          </div>
          <Progress progress={progressResult} size="sm" color="blue" />
        </div>
      </div>

      <div className="row">
        <div className="md:col-8 col-12 sustain-strategy-page-card-main-wrapper mx-auto">
          <div className="md:col-12 replace-strategy-page-card-secondry-wrapper strategy-insight-main-wrapper">
            <div className="strategy-insight-page-card-details-heading mb-3">
              <h4>
                Strategy Insights <span>(Summary)</span>
              </h4>
            </div>

            <div className="strategy-insight-page-card-details-desc">
              <p>
                Define the sector exposure of your investment portfolio by
                selecting specific industry or sector.
                <br />
                Tailor your mutual fund choices to align with your sector
                preferences and optimize your investment strategy
              </p>
            </div>
          </div>

          <div className="col-12 flex  justify-between strategy-insight-page-strategy-details-btn-wrap">
            <div className=" strategy-insight-page-strategy-details">
              <h4 className="flex items-center">
                Strategy Details <span>{InfoIcon()}</span>
              </h4>
            </div>
            <div className=" flex justify-end">
              <button className="insight-card-wrapper-key-btn">
                Show Less <span>{Cheveron()}</span>
              </button>
            </div>
          </div>
          <div className="col-12 flex  insight-card-wrapper">
            <div className="col-12 strategy-insight-blue-card-btn">
              <div>
                <div className="strategy-insight-blue-card-first">
                  <h1>Ticker: US1257849651</h1>
                </div>
                <div className="strategy-insight-blue-card-second">
                  <h2>WFXAIX</h2>
                </div>
                <div className="strategy-insight-blue-card-third">
                  <h3>25 Stocks</h3>
                </div>
              </div>
              <div>
                <div className="strategy-insight-blue-card-first text-right">
                  <h1>Performance 1Y</h1>
                </div>
                <div className="strategy-insight-blue-card-second text-right">
                  <h2>$ 55,310.12 </h2>
                </div>
                <div className="strategy-insight-blue-card-third text-right">
                  <h3 className="flex">
                    +$11,300 <span>+1.66%</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-12 md:flex block insight-card-wrapper-dvider"></div>
            <div className="col-12 flex items-center">
              <div className="col-6 insight-card-wrapper-key-title">
                <h4 className="flex items-center">
                  Key Details
                </h4>
              </div>
              <div className="col-6 flex justify-end">
                <button className="insight-card-wrapper-key-btn">
                  Show Less <span>{Cheveron()}</span>
                </button>
              </div>
            </div>
            <StrategyInsightRow title="Manager" desc="Fidelity" />
            <StrategyInsightRow title="Ticker" desc="US1257849651" />
            <StrategyInsightRow title="1-year performance" desc="12.32%" />
            <StrategyInsightRow title="Risk" desc="Concentrated" />
            <StrategyInsightRow title="Style" desc="Value" />
            <button className="strategy-insight-main-wrapper-btn" onClick={() => setOpenModal(true)}>
              Replicate Strategy <img src={Rightarrow}></img>
            </button>
          </div>

        </div>
      </div>
      <div className="md:col-8 col-12 md:flex hidden justify-center mx-auto">
        <button className="replace-strategy-go-back">
          <img src={Leftarrow}></img>Go Back
        </button>
        <Link to="/portfolio-detail" className="replace-strategy-contine-btn">
          View details <img src={Rightarrow}></img>
        </Link>
      </div>
      <div className="md:col-8 col-12 md:hidden block justify-center mx-auto">
        <Link to="/portfolio-detail" className="replace-strategy-contine-btn">
          View details <img src={Rightarrow}></img>
        </Link>
        <button className="replace-strategy-go-back">
          <img src={Leftarrow}></img>Go Back
        </button>
      </div>
      {openModal && <PrepareStrategy
        openModal={openModal}
        setOpenModal={setOpenModal}
        logo={spiner_light}
        main="Wait...Connecting to your brokerage account"
        desc="Configuring....Do not press back or refresh this page"
        descsecond="You will be directed to your strategy"
        sustainInvest={false}
        brockConnect={false}
        secureAccountTrue={false}
        connectAccount={true}
      />}
    </div>
  );
};

export default StrategyInsight;
