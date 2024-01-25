import React, { useState } from "react";
import "./Nav.css";
import OneLogo from "../../assests/one-up-logo.png";
import {
  BellIcons,
  ThreeBars,
  closeBar,
  settingsSvgs,
} from "../../assests/svgs/password";
import IconLy from "../../assests/Iconly.png";
import Icon from "../../assests/Icon.png";
import Action from "../../assests/iiii.png";
import { Link } from "react-router-dom";
import Logout from "../Modals/Logout/Logout";
const NavigationBar = () => {
  const [ShowNavbar, setShowNavbar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="navbar-main-wrapper">
      <div className="container-reg">
        <div className="row relative">
          <div className="col-6">
            <Link to="/dashboard">
              <img src={OneLogo} />
            </Link>
          </div>
          <div className="col-6 md:flex hidden justify-end">
            <div className="flex items-center">
              <div className="mr-5">
                <Link to="/device-settings">
                  {" "}
                  <button className="nav-bar-main-btn">
                    {settingsSvgs()} Settings
                  </button>
                </Link>
              </div>
              <div className="mr-5">
                <Link to="/notification">{BellIcons()}</Link>
              </div>
              <div className="mr-4">
                <Link to="/settings">
                  <button className="nav-bar-profile-btn">PH</button>
                </Link>
              </div>
              <div className="ml-4">
                <button
                  className="nav-bar-logout-btn"
                  onClick={() => setOpenModal(true)}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 md:hidden  flex justify-end ">
            {ShowNavbar ? (
              <span onClick={() => setShowNavbar(false)}>{closeBar()}</span>
            ) : (
              <span onClick={() => setShowNavbar(true)}>{ThreeBars()}</span>
            )}
          </div>

          {ShowNavbar && (
            <div className="mobile-nav-elements">
              <Link to="/dashboard" className="flex mb-8">
                <div className="mr-2">
                  <img src={IconLy} />
                </div>
                <div className="mb-nav-heading">Dashboard</div>
              </Link>
              <Link to="/notification" className="flex mb-8">
                <div className="mr-2">
                  <img src={Icon} />
                </div>
                <div className="mb-nav-heading">Notifications</div>
              </Link>
              <Link to="/device-settings" className="flex mb-8">
                <div className="mr-2">
                  <img src={Action} />
                </div>
                <div className="mb-nav-heading">Settings</div>
              </Link>
              <div className="flex mb-2">
                <div className="mr-2">
                  <img src={IconLy} />
                </div>
                <div
                  className="mb-nav-heading"
                  onClick={() => setOpenModal(true)}
                >
                  Logout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Logout openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default NavigationBar;
