import React, { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import "./CustomerReport.css";
import { Accordion } from "flowbite-react";
import {
  ChevroRight,
  ChevronLeft,
  DotSVG,
  DownloadSvg,
  MessageSvg,
} from "../../assests/svgs/password";
import { Datepicker } from "flowbite-react";

const CustomerReport = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
            <Breadcrumb.Item href="#">Account Details</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div className="row setting-page-account-details-wrapper">
        <div className="md:col-7 col-12 p-4 mx-auto customer-report-main-wrapper">
          <div className="customer-report-main--tax">
            <h2>Tax filing</h2>
          </div>
          <div className="col-12">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>
                  Can I use Oneup in open-source projects?
                </Accordion.Title>
                <Accordion.Content className="p-5">
                  <div className="flex gap-2">
                    {" "}
                    <div className="col-6">
                      {" "}
                      <div className="cust-report-finance-year">
                        <h4>Choose Financial Year</h4>
                      </div>
                      <div>
                        <Datepicker />
                      </div>
                    </div>
                    <div className="col-6">
                      {" "}
                      <div className="cust-report-finance-year">
                        <h4>Choose Financial Year</h4>
                      </div>
                      <div>
                        <Datepicker />
                      </div>
                    </div>
                   
                  </div>
                  <div className="py-2 cust-report-finance-pan-year">
                      <p>
                        {" "}
                        *file password is your PAN Number in capital letters
                      </p>
                    </div>
                    <div><button className="cust-report-finance-download-btn">{DownloadSvg()} Download</button></div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                Capital Gains
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
            </Accordion>
          </div>
        </div>
      </div>
      <div className="row setting-page-account-details-wrapper">
        <div className="md:col-7 col-12 p-4 mx-auto customer-report-main-wrapper">
          <div className="customer-report-main--tax">
            <h2>Funds</h2>
          </div>
          <div className="col-12">
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>
                Order History
                </Accordion.Title>
                <Accordion.Content className="p-5">
                  <div className="flex gap-2">
                    {" "}
                    <div className="col-6">
                      {" "}
                      <div className="cust-report-finance-year">
                        <h4>Choose Financial Year</h4>
                      </div>
                      <div>
                        <Datepicker />
                      </div>
                    </div>
                    <div className="col-6">
                      {" "}
                      <div className="cust-report-finance-year">
                        <h4>Choose Financial Year</h4>
                      </div>
                      <div>
                        <Datepicker />
                      </div>
                    </div>
                   
                  </div>
                  <div className="py-2 cust-report-finance-pan-year">
                      <p>
                        {" "}
                        *file password is your PAN Number in capital letters
                      </p>
                    </div>
                    <div><button className="cust-report-finance-download-btn">{DownloadSvg()} Download</button></div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>
                P&L Report
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
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReport;
