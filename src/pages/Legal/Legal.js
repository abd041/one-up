import React, { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

import { ChevronLeft } from "../../assests/svgs/password";

const Legal = () => {
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
                            Legal
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row setting-page-main-heading-desc">
                <div className="md:col-7 col-12 mx-auto">
                    <div className="col-12">
                        <div className="setting-page-main-heading">
                            <h1>Legal</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="setting-page-main-desc">
                            <p>
                            Terms & conditions/privacy policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="md:col-7 col-12 p-2 mx-auto setting-page-main-card-wrapper">
                    <div className="col-12">
                        <div className="w-[848px] h-[575px] p-2 rounded-[9px]  -gray-200 flex-col justify-center items-start gap-3 inline-flex">
                            <div className="self-stretch h-[559px] flex-col justify-center items-start gap-3 flex">
                                <div className="self-stretch h-[278px] px-4 py-2 bg-white rounded-lg  flex-col justify-start items-start flex">
                                    <div className="self-stretch justify-end items-center gap-3 inline-flex">
                                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
                                            <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-[27px]">
                                                Terms & Conditions
                                            </div>
                                            <ul className="self-stretch text-gray-500 text-sm font-normal font-['Inter'] leading-[21px]">
                                                <li className="ml-4 list-disc">
                                                    Definitions: Define key terms like "user," "account," "transaction," "content," and any other relevant terms specific to One Up.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    User obligations: Outline user responsibilities such as providing accurate information, complying with website rules, and not engaging in prohibited activities.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Limitations of liability: Explain your limitations of liability in case of technical issues, errors, or losses suffered by users.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Intellectual property: Clearly state ownership of trademarks, copyrights, and other intellectual property displayed on the website.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Dispute resolution: Specify the process for resolving any disputes arising from the use of the website.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Termination: Explain how you can terminate user accounts or access to the website for violations or other reasons.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Governing law and jurisdiction: Indicate the legal jurisdiction that governs the terms and conditions.
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch h-[0px]  -gray-200"></div>
                                <div className="self-stretch h-[257px] px-4 py-2 bg-white rounded-lg  flex-col justify-start items-start flex">
                                    <div className="self-stretch justify-end items-center gap-3 inline-flex">
                                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
                                            <div className="self-stretch text-gray-900 text-lg font-medium font-['Inter'] leading-[27px]">
                                                Privacy Policy
                                            </div>
                                            <ul className="self-stretch text-gray-500 text-sm font-normal font-['Inter'] leading-[21px]">
                                                <li className="ml-4 list-disc">
                                                    Information collection: Describe the types of personal
                                                    information you collect from users (e.g., name, email,
                                                    financial data).
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Information use: Explain how you use the collected
                                                    information for purposes like account management,
                                                    transaction processing, and marketing.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Data sharing: Disclose whether you share user
                                                    information with third parties and under what
                                                    circumstances.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Cookies and tracking technologies: Explain your use of
                                                    cookies, web beacons, and other tracking technologies
                                                    for analytics or advertising.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Data security: Describe your measures to protect user
                                                    data from unauthorized access, loss, or misuse.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    User choices: Explain how users can access, update, or
                                                    delete their personal information.
                                                </li>
                                                <li className="ml-4 list-disc">
                                                    Children's privacy: If you offer services to children,
                                                    specify your compliance with relevant child privacy
                                                    laws.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Legal;
