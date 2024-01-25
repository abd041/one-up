import React from "react";
import "./Login.css";

import OneUpLogo from "../../assests/one-up-logo.png";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Google_icon from "../../assests/google.svg";
import Apple_icon from "../../assests/apple.svg";
import LinkdIn_icon from "../../assests/linkdin.svg";
import LoginBtn from "../../components/Login/LoginBtn";
import MobileLogo from "../../components/reuseable/MobileLogo";
import LoginLeftDeatil from "../../components/Login/LoginLeftDeatil";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div>
      <div className="container Login-page-main-wrapper">
        <div className="row login-page-main-wrapper justify-center">
          <LoginLeftDeatil
            OneUpLogo={OneUpLogo}
            mainTitle="Invest Smarter,"
            title="Now Made Easy"
            desc="Here at Oneup we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
          />
          <div className="lg:col-6 md:col-8 col-12 flex justify-center flex-col">
            <MobileLogo />
        
                        <Card className="lg:col-10 md:col-10  sm:col-8 col-11 flex flex-col p-2 mx-auto card-main-wrapper">
                  
              <form className="flex flex-col">
                <div className="mb-6">
                  <div className="login-form-main-heading">
                    <h1>Sign in to our platform</h1>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="login-email-label">
                    <Label htmlFor="email1" value="Your email" />
                  </div>
                  <TextInput
                    type="text"
                    id="email1"
                    placeholder="name@example.com"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border w-full"
                  />
                </div>
                <div className="mb-5">
                  <div className="login-email-label">
                    <Label htmlFor="password1" value="Password" />
                  </div>
                  <TextInput
                    id="password1"
                    type="password"
                    required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:border w-full"
                    placeholder="••••••••••"
                  />{" "}
                </div>

                <div className="flex justify-between mb-5">
                  <div className="flex items-center">
                    <Checkbox id="remember" className="mr-2 checked:bg-blue-500" />
                    <Label
                      htmlFor="remember"
                      className="remember-me-login-page"
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

                <Link to="/verify-otp"><LoginBtn title="Login" /></Link>
                <div className="flex justify-between mb-5">
                  <div className="flex items-center login-page-not-registered-btn">
                    <h5>
                      Not registered? {""}
                      <Link to="/create-account">Create account</Link>{" "}
                    </h5>
                  </div>
                </div>
              </form>
            </Card>
            <div className="login-page-social-login-continue-main-wrapper lg:col-10  col-12 mx-auto">
              <div className="login-page-social-login-continue">
                <h6>Or continue with</h6>
              </div>
            </div>
            <div className="lg:col-10 col-12 flex justify-center login-page-social-login-icons-main-wrraper mx-auto">
              <div className="login-page-social-login-icons">
                <img src={Google_icon} alt="..." />
              </div>
              <div className="login-page-social-login-icons">
                <img src={Apple_icon} alt="..." />
              </div>
              <div className="login-page-social-login-icons">
                <img src={LinkdIn_icon} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;
