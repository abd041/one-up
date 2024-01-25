import React, { useState } from "react";
import "./DashboardVariation.css";
import plusIcon from "../../assests/plus.svg";
import exclamationIcon from "../../assests/exclamation.svg";
import DashboardTable from "../../components/DashboardVariation/DashboardTable";
import DashboardSearch from "../../components/Dashboard/DashboardSearch";
import DashboardWelcomName from "../../components/Dashboard/DashboardWelcomName";
import { BottomArrow, Dat, Rocket } from "../../assests/svgs/password";
import AddNewStrategy from "../../components/Dashboard/AddNewStrategy";
import WelcomeModal from "../../components/Modals/Welcome/WelcomeModal";
import WelcomLogo from "../../assests/welcome-logo.svg";
import Footer from "../../components/Footer/Footer";
import DashVarWelName from "../../components/DashboardVariation/DashVarWelName";
import AddNewVariation from "../../components/DashboardVariation/AddNewVariation";
function DashboardVariation() {
  const [loadMore, setLoadMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [newModal, setNewModal] = useState(false);
  const [newVariotonModal, setnewVariotonModal] = useState(true);
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  return (
    <>
        <div className="container-large Dashboard-page-main-wrapper">
      <div className="row dashoboard-search-for-mobile">
        <div className="col-12">
          <DashboardSearch />
        </div>
      </div>
      <div className="md:hidden block">
        <DashVarWelName />
      </div>
      <div className="row">
        <div className="col-12 Dashboard-page-dashboard-main-wrapper">
          <div>
            <div className="Dashboard-page-main-heading">
              <h1>Dashboard</h1>
            </div>
            <div className="Dashboard-page-main-para">
              <p>
                Personalize your mutual fund strategy for sustainability by
                adding green initiatives or excluding sectors that align with
                your values.
              </p>
            </div>
          </div>
          <div>
            <button
              className="Dashboard-page-main-btn"
              onClick={() => setOpenModal(true)}
            >
              Add New Strategy{" "}
              <span>
                <img src={plusIcon} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="md:block hidden">
        <DashVarWelName />
      </div>
      <div className="row" style={{marginBottom :"39px"}}>
        <div className="col-12 dashboard-variation-main-row-wrapper">
            <div className="mb-2 dashboard-variation-start-investment"><h4>Start your investment now in just easy 3 steps</h4></div>
            <div className="mb-3 dashboard-variation-start-desc"><h4>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</h4></div>
            <div><button className="dashboard-variation-start-btn" onClick={()=> setnewVariotonModal(true)}>Create your own strategy {Rocket()} </button></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 Dashboard-page-investments-main-wrapper">
          <div className="Dashboard-page-investments-main-heading flex items-center">
            <h4>
              Investments <span>(3)</span>
            </h4>
            <span>
              <img src={exclamationIcon} alt="..." />
            </span>
          </div>
        </div>
      </div>
      <div className="row Dashboard-page-investments-details-wrapper">
        <div className="col-6">
          <div className="Dashboard-page-investments-details-heading">
            <h2>Invested</h2>
          </div>
          <div className="Dashboard-page-curreny-details-heading">
            <h2>$0.00</h2>
          </div>

          <div className="Dashboard-page-date-details-heading">
            <h2>0 Strategies</h2>
          </div>
        </div>
        <div className="col-6 flex justify-end items-center">
        <div><button className="dashboard-variation-start-btn my-auto">Start Investment{Rocket()} </button></div></div>
        <div className="line"></div>
        <div className="col-6 p-4">
           <div className="XIR-main-text"><h4>XIRR  ----</h4></div>
        </div>
        <div className="col-6 flex justify-end items-center p-4">
        <div className="XIR-main-text-analysi"><h4 className="flex">{Dat()} Portfolio Analysis</h4></div></div>
      
      </div>
      <div className="row dashoboard-search-for-mobile">
        <div className="col-12">
          <DashboardSearch />
        </div>
      </div>
      <div className="row Dashboard-page-date-portfolio-wrapper">
        <div className="Dashboard-page-date-portfolio-heading">
          <h4>Strategy in Portfolio </h4>
        </div>
        <div className="Dashboard-page-date-mutual-heading">
          <h5>3 Mutual Funds</h5>
        </div>
      </div>
      <DashboardTable loadMore={loadMore} />
      {!loadMore && (
        <div className="col-12 flex justify-center">
          <button
            className="dashboard-page-button-main"
            onClick={handleLoadMore}
          >
            Load More {BottomArrow()}
          </button>
        </div>
      )}{" "}
      <AddNewStrategy
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <WelcomeModal
        openModal={newModal}
        setOpenModal={setNewModal}
        logo={WelcomLogo}
        main={"Welcome to ONE"}
        title={"UP"}
        desc={
          "You can get started with your new smart statergy plan right now!!"
        }
        btntitle1="Create Strategy"
        btntitle2="Explore Dashboard"
        setOldOpenModal={setOpenModal}
      />
     
    </div>
    <div> <Footer/></div>

    <AddNewVariation openModal={newVariotonModal} setOpenModal={setnewVariotonModal}/>
    </>

  );
}

export default DashboardVariation;
