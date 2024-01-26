import React, { useState } from "react";
import "./Settings.css";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

import { ChevroRight, ChevronLeft, DotSVG, MessageSvg } from "../../assests/svgs/password";
import { Link } from "react-router-dom";

const Settings = () => {
    return (
        <div className="container-large settings-page-main-container">
            <div className="flex bread-crem-mobile-view">
                <div>
                    <button className="settings-page-back-btn">{ChevronLeft()}</button>
                </div>
                <div >
                    <Breadcrumb
                        aria-label="Default breadcrumb example"
                        className="setting-page-bread-wrap"
                    >
                        <Breadcrumb.Item
                            href="/settings"
                            icon={HiHome}
                            className="setting-page-bread-item"
                        >
                            My Account
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row setting-page-main-heading-desc mt-14">
                <div className="md:col-7 col-12 mx-auto">
                    <div className="col-12">
                        <div className="setting-page-main-heading">
                            <h1>My Account</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="setting-page-main-desc">
                            <p>View, edit and manage account details from my account page.</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-7 col-12 mx-auto">
                    <div className="col-12"></div>
                </div>
            </div>

            <div className="row">
                <div className="md:col-7 col-12 p-4 mx-auto setting-page-main-card-wrapper">
                    <Link to="/account-details" className="col-12 flex justify-between items-center pb-6 setting-page-main-card-border-bottom">
                        <div
                            className="flex items-center"
                        >
                            <div className="setting-page-main-card-name-logo mr-3">
                                <h1>PH</h1>
                            </div>
                            <div>
                                <div className="setting-page-main-card-heading">
                                    <h1>Ciprian Lopata</h1>
                                </div>
                                <div className="setting-page-main-card-desc">
                                    <p>Account details</p>
                                </div>
                            </div>

                        </div>
                        <div className="items-center">{ChevroRight()}</div>
                    </Link>


                    <div className="col-12 flex justify-between items-center py-6 setting-page-main-card-refer">
                        <div
                            className="flex items-center "
                        >
                            <div className="setting-page-main-logo mr-3">
                                <h1></h1>
                            </div>
                            <div>
                                <div className="setting-page-refer-heading">
                                    <h1>Refer</h1>
                                </div>
                                <div className="setting-page-refer--desc">
                                    <p>Invite friends on Oneup</p>
                                </div>
                            </div>

                        </div>
                        <div className="items-center"><button className="setting-page-refer--btn">{MessageSvg()} INVITE</button></div>
                    </div>
                    <div className="col-12 flex justify-between items-center py-6 setting-page-main-card-refer">
                        <div
                            className="flex items-center "
                        >
                            <div className="setting-page-main-logo mr-3">
                                <h1></h1>
                            </div>
                            <Link to="/pricing">
                                <div className="setting-page-refer-heading">
                                    <h1>Pricing & Billing</h1>
                                </div>
                                <div className="setting-page-refer--desc">
                                    <p>Billing, subscriptions and payment details</p>
                                </div>
                            </Link>

                        </div>
                        <div className="items-center"><button className="setting-page-invite--btn">{DotSVG()} INVITE</button></div>
                    </div>
                    <div className="col-12 flex justify-between items-center py-6 setting-page-main-card-refer">
                        <div
                            className="flex items-center "
                        >
                            <div className="setting-page-main-logo mr-3">
                                <h1></h1>
                            </div>
                            <Link to="/customer-service">
                                <div className="setting-page-refer-heading">
                                    <h1>Customer Support 24x7</h1>
                                </div>
                                <div className="setting-page-refer--desc">
                                    <p>FAQ’s, Contact Oneup</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                    {/* <div className="col-12 flex justify-between items-center pt-6">
                        <div
                            className="flex items-center "
                        >
                            <div className="setting-page-main-logo mr-3">
                                <h1></h1>
                            </div>
                            <Link to="/customer-reports">
                                <div className="setting-page-refer-heading">
                                    <h1>Reports</h1>
                                </div>
                                <div className="setting-page-refer--desc">
                                    <p>Download strategies and funds reports</p>
                                </div>
                            </Link>

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Settings;
