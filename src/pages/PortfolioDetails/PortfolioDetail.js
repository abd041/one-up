import React from "react";
import lineUp from "../../assests/lineUp.svg";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
import { Label, Select } from "flowbite-react";
import GsAlpha from "../../assests/Gsalpha.png"
import { BlueConnectSVG, Cheveron } from "../../assests/svgs/password";
import "./PortfolioDetail.css"
const PortfolioDetail = ({}) => {

  return (
    <div className="row mx-0">
      <div className="md:col-8 col-12 replace-strategy-page-card-main-wrapper mx-auto">
        <div className="md:col-10 replace-strategy-page-card-secondry-wrapper">
          <div className="replace-strategy-page-card-details-heading">
            <h4>Select a Portfolio</h4>
          </div>
          <div className="replace-strategy-page-card-details-desc">
            <p>
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
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
            <h5>Select your Portfolio</h5>
          </div>

          <div className="replace-strategy-page-card-main-investment col-12 mb-6">
          <div className="mb-2 portfolio-detail-gs-alpha"><img src={GsAlpha} /></div>
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
                <h5>$3,354</h5>
                <h4 className="flex">
                  (+11.54%) <img src={lineUp} />
                </h4>
              </div>
            </div>
            <div className="col-12 flex items-center pt-3">
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

          </div>

          <div className="replace-strategy-page-card-main-investment col-12 mb-6">
          <div className="mb-2 portfolio-detail-gs-alpha"><img src={GsAlpha} /></div>
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
                <h5>$3,354</h5>
                <h4 className="flex">
                  (+11.54%) <img src={lineUp} />
                </h4>
              </div>
            </div>
            <div className="col-12 flex items-center pt-3">
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

          </div>
          <div className="replace-strategy-page-card-main-investment col-12 mb-6">
          <div className="mb-2 portfolio-detail-gs-alpha"><img src={GsAlpha} /></div>
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
                <h5>$3,354</h5>
                <h4 className="flex">
                  (+11.54%) <img src={lineUp} />
                </h4>
              </div>
            </div>
            <div className="col-12 flex items-center pt-3">
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

          </div>
          <div className="col-12  portfoili-detail-invest-btn mb-4">
         <button className='mx-auto'>Invest</button>
          </div>
          <div className="col-12  portfoili-detail-connect-other-btn mb-4">
         <button className='mx-auto flex items-center'>Connect Other Accounts {BlueConnectSVG()}</button>
          </div>
        </div>
      </div>
    
     
      <div className="col-12 flex justify-center">
                        {" "}
                        <button className="connect-portfolio-go-back">
                            <img src={Leftarrow}></img>Go Back
                        </button>
                    </div>
    </div>
  );
};

export default PortfolioDetail;
