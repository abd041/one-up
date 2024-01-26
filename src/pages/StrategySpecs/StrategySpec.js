import React, { useState } from "react";
import { Breadcrumb, Progress } from "flowbite-react";
import { InfoIcon, Cheveron, BlueGraph, BlueAdd, ChevronLeft } from "../../assests/svgs/password";
import StrategyInsightRow from "../../components/StrategyInsight/StrategyInsightRow";
import Rightarrow from "../../assests/arrow-right.png";
import Leftarrow from "../../assests/arrow-left.svg";
import spiner_light from "../../assests/spiner_light.svg";
import PrepareStrategy from "../../components/Modals/PrepareStrategy/PrepareStrategy";
import StrategyChart from "../../components/StrategyDashboard/StrategyChart";
import LineChartComponent from "../../components/StrategyDashboard/StrategyChart";

import StrategyTable from "../../components/StrategyDashboard/StrategyTable";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import AddAmountModal from "../StrategyDashboard/AddAmountModal";
const StrategySpec = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="container-large replace-strategy-page-wrapper">
     <div className="row stragtgy-dashboard-funds-wrap">
      <div className="col-6">
      <div className="flex bread-crem-mobile-view">
                <div >
                    <Breadcrumb
                        aria-label="Default breadcrumb example"
                        className="setting-page-bread-wrap"
                    >
                        <Breadcrumb.Item
                            href="/settings"
                            icon={HiHome}
                            className="setting-page-bread-item"
                        >
                            Dashboard
                        </Breadcrumb.Item>
                        <Breadcrumb.Item
                            href="/settings"
                            icon={HiHome}
                            className="setting-page-bread-item"
                        >
                            Strategy Specification
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
      </div>
{/*     
    <div className='col-6 md:flex justify-end hidden'>
    <div className='col-7 new-wel-name-bal-wrap flex justify-between items-center'>
        <div>
            <div className='new-wel-name-bal-heading'><h3>Balance available for stocks</h3></div>
            <div className='new-wel-name-bal-desc'><h4>$ 14,700.00</h4></div>
        </div>
        <div>
            <button className='new-wel-name-add-btn-fund'>{BlueAdd()} ADD FUNDS</button>
        </div>
    </div>
    </div> */}
    </div>
      <div className="row">
        <div className="col-12 startegy-dashboard-main-wrapper">
          <div className="startegy-dashboard-main-heading">
            <h1>
              Insights <span>(Strategy 1)</span>
            </h1>
          </div>
          <div className="startegy-dashboard-main-desc">
            <p>
              Personalize your mutual fund strategy for sustainability by adding
              green initiatives or excluding sectors that align with your
              values.
            </p>
          </div>
          <div className="row stragtrgy-dashborad-forst-row">
            <div className="md:col-6 col-12">
              <div className="col-11 flex items-center mb-4">
                <div className="md:col-6 col-12 strategy-insight-page-strategy-details">
                  <h4 className="flex items-center">
                    Performance Analysis <span>{InfoIcon()}</span>
                  </h4>
                </div>
                <div className="col-6 md:flex hidden justify-end">
                  <button className="strategy-insight-page-strategy-details-btn-white">
                    Show Less <span>{Cheveron()}</span>
                  </button>
                </div>
              </div>
              <div className="md:col-11 col-12 strategy-dahsboard-first-column">
                <div className="col-12 flex items-center mb-5">
                  <div className="md:col-6 col-0 strategy-dashboard-page-strategy-details">
                    <h4 className="md:flex hidden items-center text-center">
                      GS ALPAH VALUE
                    </h4>
                  </div>
                  {/* <div className="md:col-6 col-12 flex md:justify-end justify-center">
                    <div className="strategy-chart-upper-button">
                      <button className="strategy-chart-upper-button-not-active">
                        1d
                      </button>
                      <button className="strategy-chart-upper-button-not-active">
                        5d
                      </button>
                      <button className="strategy-chart-upper-button-not-active">
                        1M
                      </button>
                      <button className="strategy-chart-upper-button-active">
                        1d
                      </button>
                      <button className="strategy-chart-upper-button-not-active">
                        1d
                      </button>
                      <button className="strategy-chart-upper-button-not-active">
                        5d
                      </button>
                      <button className="strategy-chart-upper-button-not-active">
                        1M
                      </button>
                    </div>
                  </div> */}
                </div>
                <div className="col-12 flex items-center mb-2">
                  <div className="strategy-dashbioard-show-main-value mr-2">
                    <h1>53,300.48</h1>
                  </div>
                  <div className="strategy-dashbioard-show-percentage-value">
                    <h2>+1.66%</h2>
                  </div>
                </div>
                <div className="col-12 flex items-center mb-2">
                  <div className="strategy-dashbioard-show-main-para">
                    <p>Oct 25, 5:26:38PM UTC-4</p>
                  </div>
                </div>
                <div className="col-12 mb-2">
                  <StrategyChart />
                </div>
              </div>
            </div>

            <div className="md:col-6 col-12">
         
              <div className="col-11 flex items-center mb-4">
                <div className="md:col-6 col-12 strategy-insight-page-strategy-details">
                  <h4 className="flex items-center">
                    Strategy Details <span>{InfoIcon()}</span>
                  </h4>
                </div>
                <div className="col-6 md:flex hidden justify-end">
                  <button className="strategy-insight-page-strategy-details-btn-white">
                    Show Less <span>{Cheveron()}</span>
                  </button>
                </div>
              </div>
              <div className="md:col-11 col-12 stratgy-dahsboard-main-card-wrap">
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
                <StrategyInsightRow title="Manager" desc="Fidelity" />
                <StrategyInsightRow title="Ticker" desc="US1257849651" />
                <StrategyInsightRow title="1-year performance" desc="12.32%" />
                <StrategyInsightRow title="Risk" desc="Concentrated" />
                <StrategyInsightRow title="Style" desc="Value" />
             
               <div className="col-12 flex">
               <div className="col-6">
              <button
                  className="strategy-insight-main-wrapper-btn-white flex justify-center w-[95%]"
                  onClick={() => setOpenModal(true)}
                >
                  Remove Money
                </button>
              </div>
              <div className="col-6">
              <button
                  className="strategy-insight-main-wrapper-btn flex justify-center w-[95%]"
                  onClick={() => setOpenModal(true)}
                >
                  Invest  <img src={Rightarrow}></img>
                </button>
              </div>
               </div>
            
              </div>
            </div>
          </div>
         <StrategyTable />
         
        </div>
      </div>

      <AddAmountModal openModal={openModal} setOpenModal={setOpenModal}/>
    </div>
  );
};

export default StrategySpec;
