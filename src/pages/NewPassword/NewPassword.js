import React, { useState } from "react";
import OneUpLogo from "../../assests/one-up-logo.png";
import { Card, Footer, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import LoginBtn from "../../components/Login/LoginBtn";
import LockButton from "../../assests/lock.svg";
import hiddenpassword from "../../assests/hidden-password.svg";
import { hidepassword, showpassword } from "../../assests/svgs/password";
import WelcomeModal from "../../components/Modals/Welcome/WelcomeModal";
import passwordDone from "../../assests/svgs/password-Done.svg";

const NewPassword = () => {
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
                      <h1>Reset your Password</h1>
                    </div>
                  </div>
                  <div className="">
                    <div className="forget-password-main-password">
                      <p>Please reset your new password and reconfirm it.</p>
                    </div>
                  </div>
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
                        placeholder="Must be min 8 characters"
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
                        placeholder="Must be min 8 characters"
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
                  <LoginBtn title="Continue" />
                </span>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <WelcomeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        logo={passwordDone}
        main="Password Changed!"
        desc="Your password has been changed succesfully"
        btntitle1="Back to login"
        to="/"
      />
      <Footer/>
    </div>
  );
};

export default NewPassword;
