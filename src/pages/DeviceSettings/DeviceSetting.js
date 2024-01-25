import React, { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import "./DeviceSetting.css";
import angleDown from "../../assests/angle-down-outline.png";
import { Card, Label, TextInput } from "flowbite-react";
import LoginBtn from "../../components/Login/LoginBtn";
import LockButton from "../../assests/lock.svg";
import {
  BellIcon,
  Cheveron,
  CheveronBottom,
  ChevroRight,
  ChevronLeft,
  DeviceSvg,
  DotSVG,
  LegalSvg,
  LockSvg,
  LogoutSvg,
  MessageSvg,
  NotificationIcon,
  PhoneIcon,
  PhoneMaker,
  hidepassword,
  showpassword,
} from "../../assests/svgs/password";
import Line from "../../assests/Line 86.png";
import DeviceRow from "../../components/DeviceSettings/DeviceRow";
import AccountDetails from "../AccountDetails/AccountDetails";
import AccountDevices from "../../components/DeviceSettings/AccountDevices";
import Logout from "../../components/Modals/Logout/Logout";
import { Link } from "react-router-dom";
import { Accordion } from "flowbite-react";
const DeviceSetting = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [openModalNew, setOpenModalNew] = useState(false);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showActiveDevices, setShowActiveDevices] = useState(false);

  return (
    <div className="container-large settings-page-main-container">
      <div className="flex bread-crem-mobile-view">
        <div>
          <button className="settings-page-back-btn">{ChevronLeft()}</button>
        </div>
        <div>
          <Breadcrumb
            aria-label="Default breadcrumb example"
            className="setting-page-bread-wrap"
          >
            <Breadcrumb.Item
              href="/settings"
              icon={HiHome}
              className="setting-page-bread-item"
            >
              Notifications
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="row setting-page-main-heading-desc">
        <div className="md:col-7 col-12 mx-auto">
          <div className="col-12">
            <div className="setting-page-main-heading">
              <h1>Settings</h1>
            </div>
          </div>
          <div className="col-12">
            <div className="setting-page-main-desc">
              <p>
                Choose your account settings and notification from this page
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-7 col-12 mx-auto">
          <div className="col-12"></div>
        </div>
      </div>

      <div className="row">
        <div className="md:col-7 col-12 p-2 mx-auto setting-page-main-card-wrapper">
          <span onClick={() => setShowNotifications(!showNotifications)}>
            <DeviceRow
              icon={NotificationIcon()}
              heading="Manage Notifications"
              desc="Manage notifications on your account"
              imageMain={angleDown}
            />
          </span>

          {showNotifications && (
            <div className="col-12 p-7">
              <div className="flex justify-between items-center mb-3">
                <div className="flex">
                  {BellIcon()}{" "}
                  <h4 className="ml-2 devic-noti-heading">
                    Email/Phone number
                  </h4>
                </div>
                <div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>{" "}
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="flex">
                  {PhoneIcon()}{" "}
                  <h4 className="ml-2 devic-noti-heading">Push</h4>
                </div>
                <div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>{" "}
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="flex">
                  {PhoneMaker()}{" "}
                  <h4 className="ml-2 devic-noti-heading">
                    Email/Phone number
                  </h4>
                </div>
                <div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>{" "}
              </div>
            </div>
          )}

          <span onClick={() => !setShowChangePassword}>
            <DeviceRow
              icon={LockSvg()}
              heading="Change Password"
              desc="Change, reset and manage your old password"
              imageMain={angleDown}
            />
          </span>

          {showChangePassword && (
            <div className="col-12 p-7">
              <div className="">
                <h3 className="device-setting-rest-passwor mb-2">
                  Reset your Password
                </h3>
              </div>
              <div className="device-setting-reset-password-desc mb-6">
                <p>Please reset your new password and reconfirm it.</p>
              </div>
              <div className="mb-6">
                <div className="login-email-label">
                  <Label htmlFor="email1" value="New Password" />
                </div>
                <div class="relative">
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <img
                        src={LockButton}
                        alt="..."
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="search"
                      class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                      {!showPassword ? (
                        <span onClick={() => setShowPassword(true)}>
                          {hidepassword()}
                        </span>
                      ) : (
                        <span onClick={() => setShowPassword(false)}>
                          {showpassword()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <div className="login-email-label">
                  <Label htmlFor="email1" value="Reconfirm New Password" />
                </div>
                <div class="relative mb-6">
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <img
                        src={LockButton}
                        alt="..."
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="search"
                      class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required
                    />
                    <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                      {!showPassword ? (
                        <span onClick={() => setShowPassword(true)}>
                          {hidepassword()}
                        </span>
                      ) : (
                        <span onClick={() => setShowPassword(false)}>
                          {showpassword()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <span onClick={() => setOpenModal(true)}>
                <LoginBtn title="Change Password" />
              </span>
            </div>
          )}
          <span onClick={() => !setShowActiveDevices}>
            <DeviceRow
              icon={DeviceSvg()}
              heading="Active devices"
              desc="Check status of devices your account is active"
              imageMain={angleDown}
            />
          </span>

          {showActiveDevices && (
            <div className="col-12">
              <AccountDevices dev="Current device" />
              <AccountDevices dev="All devices" />
            </div>
          )}
          <Link to="/legal">
            <DeviceRow
              icon={LegalSvg()}
              heading="Legal"
              desc="Terms & conditions/privacy policy"
            />
          </Link>

          <div onClick={() => setOpenModalNew(true)}>
            <DeviceRow icon={LogoutSvg()} heading="Logout" color="red-logout" />
          </div>
        </div>
      </div>
      <Logout openModal={openModalNew} setOpenModal={setOpenModalNew} />
    </div>
  );
};

export default DeviceSetting;
