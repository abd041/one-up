import React, { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Label } from "flowbite-react";
import {
  CopySvg,
  EditSvg,
  SendMessage,
  UserIcon,
  hidepassword,
  showpassword,
} from "../../assests/svgs/password";
import {
  ChevroRight,
  ChevronLeft,
  DotSVG,
  MessageSvg,
} from "../../assests/svgs/password";
import { Tabs } from "flowbite-react";
import "./Customer.css";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Accordion } from "flowbite-react";
import WelcomeModal from "../../components/Modals/Welcome/WelcomeModal";
import PasswordDone from "../../assests/Done.png";
const CustomerSupport = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [openModal, setOpenModal] = useState(false);
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
              My Account
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Customer Support 24x7</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="row setting-page-account-details-wrapper">
        <div className="md:col-5 col-12 mx-auto">
          <div className="col-10 flex mx-auto cursor-pointer customer-faqs-main-wrapper">
            <div
              className={
                activeTab == 1
                  ? "customer-support-faqs-tab pb-4"
                  : "customer-support-customer-tab pb-4"
              }
              onClick={() => setActiveTab(1)}
            >
              <h1>FAQ’s</h1>
            </div>
            <div
              className={
                activeTab == 2
                  ? "customer-support-faqs-tab pb-4"
                  : "customer-support-customer-tab pb-4"
              }
              onClick={() => setActiveTab(2)}
            >
              <h1>Contact Us</h1>
            </div>
          </div>
          {activeTab == 1 && (
            <div className="col-12">
              <Accordion>
                <Accordion.Panel>
                  <Accordion.Title>
                    Can I use Oneup in open-source projects?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Generally, it is accepted to use UX.Harsh UI Kit in
                      open-source projects, as long as it is not a UI library, a
                      theme, a template, a page-builder that would be considered
                      as an alternative to UX.Harsh UI Kit itself.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      With that being said, feel free to use this design kit for
                      your open-source projects.
                    </p>
                    <p>
                      Find out more information by
                      <a href="#" className="text-blue-700 hover:underline">
                        {" "}
                        reading the license.
                      </a>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>
                    How do you achieve the "blurry" effect?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Generally, it is accepted to use UX.Harsh UI Kit in
                      open-source projects, as long as it is not a UI library, a
                      theme, a template, a page-builder that would be considered
                      as an alternative to UX.Harsh UI Kit itself.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      With that being said, feel free to use this design kit for
                      your open-source projects.
                    </p>
                    <p>
                      Find out more information by
                      <a href="#" className="text-blue-700 hover:underline">
                        {" "}
                        reading the license.
                      </a>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>What about browser support?</Accordion.Title>
                  <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Generally, it is accepted to use UX.Harsh UI Kit in
                      open-source projects, as long as it is not a UI library, a
                      theme, a template, a page-builder that would be considered
                      as an alternative to UX.Harsh UI Kit itself.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      With that being said, feel free to use this design kit for
                      your open-source projects.
                    </p>
                    <p>
                      Find out more information by
                      <a href="#" className="text-blue-700 hover:underline">
                        {" "}
                        reading the license.
                      </a>
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          )}
          {activeTab == 2 && (
            <div className="col-12 customer-query-main-wrapper">
              <div className="col-12 pb-14">
                <div className="login-email-label">
                  <Label htmlFor="email1" value="Contact us Via Mail" />
                </div>
                <div class="relative">
                  <input
                    type={"text"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="search"
                    class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Supportoneup@gmail.com"
                    required
                  />
                  <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                    <span>{CopySvg()}</span>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="login-email-label flex justify-between">
                  <Label htmlFor="email1" value="Contact us Via Mail" />
                  <div className="customer-query-respond-time">
                    <h6>Expect respond within 2 hrs</h6>
                  </div>
                </div>

                <form>
                  <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                      <label for="comment" class="sr-only">
                        Your comment
                      </label>
                      <textarea
                        id="comment"
                        rows="4"
                        class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Write a comment..."
                        required
                      ></textarea>
                    </div>
                    <div class="flex items-center justify-between px-3 py-2 border-t ">
                      <button
                        type="submit"
                        class=""
                        onClick={() => setOpenModal(true)}
                        className="customer-query-respond-time-btn"
                      >
                        <span className="mr-2">{SendMessage()}</span> Send
                        message
                      </button>
                      <div class="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                        <button
                          type="button"
                          class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 12 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                            />
                          </svg>
                          <span class="sr-only">Attach file</span>
                        </button>
                        <button
                          type="button"
                          class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 20"
                          >
                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                          </svg>
                          <span class="sr-only">Set location</span>
                        </button>
                        <button
                          type="button"
                          class="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                        >
                          <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                          <span class="sr-only">Upload image</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <WelcomeModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        logo={PasswordDone}
        main="Query Sent!"
        desc="Your query has been successfully recorded. Our executive will try to solve it as soon as possible"
        btntitle1="Back to My Account"
        to="/"
      />
    </div>
  );
};

export default CustomerSupport;
