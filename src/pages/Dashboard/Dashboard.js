import React, { useState } from "react";
import "./Dashboard.css";
import plusIcon from "../../assests/plus.svg";
import exclamationIcon from "../../assests/exclamation.svg";
import DashboardTable from "../../components/Dashboard/DashboardTable";
import DashboardSearch from "../../components/Dashboard/DashboardSearch";
import DashboardWelcomName from "../../components/Dashboard/DashboardWelcomName";
import { BottomArrow } from "../../assests/svgs/password";
import AddNewStrategy from "../../components/Dashboard/AddNewStrategy";
import WelcomeModal from "../../components/Modals/Welcome/WelcomeModal";
import WelcomLogo from "../../assests/welcome-logo.svg";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
function Dashboard() {
  const [loadMore, setLoadMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [newModal, setNewModal] = useState(true);
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  return (
    <>
      <NavigationBar />
      <div className="container-large Dashboard-page-main-wrapper">
        <div className="row dashoboard-search-for-mobile">
          <div className="col-12">
            <DashboardSearch />
          </div>
        </div>
        <div className="md:hidden block">
          <DashboardWelcomName />
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
          <DashboardWelcomName />
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
              <h2>$ 45,000.90</h2>
            </div>

            <div className="Dashboard-page-date-details-heading">
              <h2>Since 2 Jan, 2024</h2>
            </div>
          </div>
          <div className="col-6 Dashboard-page-investments-details-second-col">
            <div className="Dashboard-page-investments-details-heading">
              <h2>Current Value</h2>
            </div>
            <div className="Dashboard-page-curreny-details-heading">
              <h2>$ 55,310.12</h2>
            </div>
            <div className="Dashboard-page-date-details-heading">
              <h2>
                +$11,300 <span>+1.66%</span>
              </h2>
            </div>
          </div>
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
      <div> <Footer /></div>
    </>

  );
}

export default Dashboard;
