import React from "react";
import "./Register.css";

import OneUpLogo from "../../assests/one-up-logo.png";
import { Button, Card, Checkbox, Footer, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Google_icon from "../../assests/google.svg";
import Apple_icon from "../../assests/apple.svg";
import LinkdIn_icon from "../../assests/linkdin.svg";
import LoginBtn from "../../components/Login/LoginBtn";
import MobileLogo from "../../components/reuseable/MobileLogo";
import LoginLeftDeatil from "../../components/Login/LoginLeftDeatil";
import { PhoneNumbericon } from "../../components/Login/PhoneNumbericon";
import { GoBack } from "../../components/reuseable/GoBack";

const Register = () => {
  return (
    <div style={{background: 'white'}}>
      <GoBack title="Register" to="/" />
      <div className="container-reg py-8">
        <div className="row register-page-main-wrapper justify-center">
          <LoginLeftDeatil
            OneUpLogo={OneUpLogo}
            mainTitle="Make Oneup"
            title="Your Smart Investor"
            desc="View and manage all of your investment accounts from one dashboard"
          />
          <div className="lg:col-5 md:col-8 col-12 flex justify-center flex-col">
            <MobileLogo />
            <Card className="lg:col-10 md:col-10  sm:col-8 col-11 flex flex-col mx-auto card-main-wrapper">
              <form className="flex flex-col p-0">
                <div className="mb-6">
                  <div className="register-form-main-heading">
                    <h1>Register</h1>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="register-email-label">
                    <Label htmlFor="fname" value="First Name" />
                  </div>
                  <TextInput
                    type="text"
                    id="fname"
                    placeholder="Enter here"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border w-full"
                  />
                </div>
                <div className="mb-5">
                  <div className="register-email-label">
                    <Label htmlFor="lname" value="Last Name" />
                  </div>
                  <TextInput
                    type="text"
                    id="lname"
                    placeholder="Enter Here"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border w-full"
                  />
                </div>
                <div className="mb-5">
                  <div className="register-email-label">
                    <Label htmlFor="phone-input" value="Mobile Number" />
                  </div>

                  <form class="max-w mx-auto">
                    <div class="flex items-center">
                      <PhoneNumbericon />

                      <div class="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="mb-5">
                  <div className="register-email-label">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    type="email"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border w-full"
                    placeholder="name@example.com"
                  />{" "}
                </div>

                <div className="mb-6">
                  <div className="register-email-label">
                    <Label htmlFor="password" value="Password" />
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border w-full"
                    placeholder="••••••••••"
                  />{" "}
                </div>

                <div className="flex justify-between mb-6">
                  <div className="flex items-center">
                    <Checkbox id="remember" className="mr-2" />
                    <Label
                      htmlFor="remember"
                      className="remember-me-register-page"
                    >
                      Remember me
                    </Label>
                  </div>
                  <div>
                    <Link
                      to="/forget-password"
                      className="forget-password-link"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

              <Link to="/verify-register-otp" className="mb-1">
              <LoginBtn title="Register" />
              </Link>
         
                <div className="flex justify-between">
                  <div className="flex items-center register-page-not-registered-btn">
                    <h5>
                    Already have an account?   {""}
                      <Link to="/">Sign In</Link>{" "}
                    </h5>
                  </div>
                </div>
                <div className="register-page-social-register-continue-main-wrapper mx-auto">
                  <div className="register-page-social-register-continue">
                    <h6>Or continue with</h6>
                  </div>
                </div>
                <div className=" flex justify-center register-page-social-register-icons-main-wrraper mx-auto">
                  <div className="register-page-social-register-icons">
                    <img src={Google_icon} alt="..." />
                  </div>
                  <div className="register-page-social-register-icons">
                    <img src={Apple_icon} alt="..." />
                  </div>
                  <div className="register-page-social-register-icons">
                    <img src={LinkdIn_icon} alt="..." />
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
