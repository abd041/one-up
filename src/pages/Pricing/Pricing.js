import React, { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Label } from "flowbite-react";
import "./Pricing.css";
import { CustomFlowbiteTheme } from "flowbite-react";
import LockButton from "../../assests/lock.svg";
import {
  ChevroRight,
  ChevronLeft,
  DotSVG,
  MessageSvg,
} from "../../assests/svgs/password";
import { Pagination } from "flowbite-react";
import PricingCard from "../../components/Pricing/PricingCard";
import PricingTable from "../../components/Pricing/PricingTable";

const customTheme = {
  "base": "",
  "layout": {
    "table": {
      "base": "text-sm text-gray-700 dark:text-gray-400",
      "span": "font-semibold text-gray-900 dark:text-white"
    }
  },
  "pages": {
    "selector": {
      "base": "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500",
      "active": "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700",
      "disabled": "opacity-50 cursor-normal"
    }
  }
}
const Pricing = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="container-large settings-page-main-container">
      <div className="flex justify-between bread-crem-mobile-view items-center col-12">
        <div className="col-6 flex">
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
              <Breadcrumb.Item href="#">Pricing & Billing</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className="col-6  flex justify-end">
          <div className="pricing-pay-now mr-4">
            <button>Pay Now</button>
          </div>
          <div className="pricing-pay-cancel">
            <button>Cancel Package</button>
          </div>
        </div>
      </div>

      <div className="row setting-page-main-heading-desc">
                <div className="md:col-7 col-12 mx-auto">
                    <div className="col-12">
                        <div className="setting-page-main-heading">
                            <h1>Pricing Package</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="setting-page-main-desc">
                            <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-7 col-12 mx-auto">
                    <div className="col-12"></div>
                </div>
            </div>

      <div className="row ">
        <div className="md:col-4 col-12 md:mb-0 mb-14 flex md:justify-end justify-center items-center">
          <div className="col-10">
            <PricingCard fee="Platform fees" price="0" stratgy="5 Strategies" />
          </div>
        </div>
        <div className="md:col-4 col-12 flex md:mb-0 mb-14 justify-center items-center">
          <div className="col-10">
            <PricingCard
              Recommended="Recommended"
              fee="Platform fees"
              price="25"
              stratgy="5 Strategies"
              bluebtn={true}
            />
          </div>
        </div>
        <div className="md:col-4 col-12 md:mb-0 mb-14 flex md:justify-start justify-center items-center">
          <div className="col-10">
            <PricingCard
              fee="Exclusive"
              price="49"
              stratgy="Unlimited Strategies"
            />
          </div>
        </div>
      </div>
      <div className="mt-14">  <PricingTable /></div>
    
      <div className="row p-4 items-center">
        <div className="md:col-6 col-12 pricing-table-bottom-table-heading">
          <h4>
            Showing <span>1-10</span> of <span>1000</span>
          </h4>
        </div>
        <div className="md:col-6 col-12">
          <div className="flex justify-end">
            <Pagination
              theme={customTheme}
              currentPage={currentPage}
              totalPages={100}
              onPageChange={onPageChange}
              showIcons
              previousLabel=""
              nextLabel=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
