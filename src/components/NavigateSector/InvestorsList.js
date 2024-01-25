import React from "react";
import Empty from "../../assests/Empty.svg";
import NavigatorTable from "./NavigatorTable";
import Leftarrow from "../../assests/arrow-left.svg";
import Rightarrow from "../../assests/arrow-right.png";
const InvestorsList = ({setShowComponents, setProgressResult}) => {

    const handleContinueBtn = () => {
        setProgressResult(75);
        setShowComponents({
          createStratgy: false,
          SustainInvest: false,
          SustainComponent : true
        });
      };
    
      const handleBackBtn = () => {
        setProgressResult(25);
        setShowComponents({
          createStratgy: true,
          SustainInvest: false,
          SustainComponent : false
        });
      };
  return (
    <> 
     <div className="col-12 investors-list-main-wrapper">
      <div className="lg:col-10 mx-auto">
        <div className="col-12 investors-list-main-heading">
          <img src={Empty} alt="..." />
          <h1>Top 10 Funds Picked for You</h1>
          <img
            src={Empty}
            alt="..."
            className="investors-list-main-heading-second-image"
          />
        </div>
        <div className="col-10 mx-auto investors-list-main-para">
          <p>
            Navigate through available mutual fund options and make an informed
            selection that aligns with your investment goals. <br></br>Compare
            key details to streamline your decision-making process.
          </p>
        </div>
      </div>
      <div className="lg:col-10 col-12 mx-auto">
        <NavigatorTable />
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
  </div></>
   
  );
};

export default InvestorsList;
