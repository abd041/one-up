import React from "react";
import OneUpLogo from "../../assests/one-up-logo.png";
import { Card, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import LoginBtn from "../../components/Login/LoginBtn";
import "./ForgetPassword.css"
import Footer from "../../components/Footer/Footer";


const ForgetPassword = () => {
   
    return (
        <div>
            <div className="container">
                <div className="row login-page-main-wrapper justify-center ">
                <div className="lg:col-6 md:col-8 col-12 flex justify-center flex-col">
                        <Card className="lg:col-10 md:col-10  sm:col-8 col-11 flex flex-col p-2 mx-auto card-main-wrapper">
                  
                            <form className="flex flex-col">
                                <div className="mb-6">
                                    <div className="forget-password-form-main-logo">
                                        <img src={OneUpLogo} alt="..." className="mx-auto" />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="">
                                        <div className="forget-password-main-heading">
                                            <h1>Forgot Password?</h1>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="forget-password-main-password">
                                            <p>Don’t worry! It happens. Please enter the email associated with your account.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
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

                                <Link to="/forget-password-otp"><LoginBtn title="Send One Time Password" /></Link>
                                <div className="flex justify-between ">
                                    <div className="flex items-center login-page-not-registered-btn mx-auto">
                                        <h5>
                                            Remember Password? {""}
                                            <Link to="/">Sign In</Link>
                                        </h5>
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

export default ForgetPassword;
