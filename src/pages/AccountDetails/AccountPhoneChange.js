import React, { useState } from "react";
import OneUpLogo from "../../assests/one-up-logo.png";
import { Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import LoginBtn from "../../components/Login/LoginBtn";
import LockButton from "../../assests/lock.svg";
import hiddenpassword from "../../assests/hidden-password.svg";
import { hidepassword, showpassword } from "../../assests/svgs/password";
import WelcomeModal from "../../components/Modals/Welcome/WelcomeModal";
import passwordDone from "../../assests/svgs/password-Done.svg";

const AccountPhoneChange = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="row login-page-main-wrapper justify-center ">
          <div className="lg:col-6 md:col-8 col-12 flex justify-center flex-col">
            <Card className="lg:col-10 md:col-10  sm:col-8 col-11 flex flex-col lg:p-2 p-0 mx-auto card-main-wrapper">
              <form className="flex flex-col">
                <div className="mb-6">
                  <div className="forget-password-form-main-logo">
                    <img src={OneUpLogo} alt="..." className="mx-auto" />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="">
                    <div className="forget-password-main-heading">
                      <h1>Enter old and phone number</h1>
                    </div>
                  </div>
                  <div className="">
                    <div className="forget-password-main-password">
                      <p>An OTP will be sent to new number for confirmation</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-6">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Old Number" />
            </div>
            <div class="relative">
              
                <input
                  type={"text" }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+1 7566325689"
                  required
                />
               
            </div>
          </div>
          <div className="col-12 mb-6">
            <div className="login-email-label">
              <Label htmlFor="email1" value="New Number" />
            </div>
            <div class="relative">
              
                <input
                  type={"text" }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+1 7566325689"
                  required
                />
               
            </div>
          </div>
                <span onClick={() => setOpenModal(true)}>
                  <LoginBtn title="Continue" />
                </span>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPhoneChange;
