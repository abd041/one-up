import React, { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Label } from "flowbite-react";
import { CopySvg, EditSvg, UserIcon, hidepassword, showpassword } from "../../assests/svgs/password";
import LockButton from "../../assests/lock.svg";
import {
  ChevroRight,
  ChevronLeft,
  DotSVG,
  MessageSvg,
} from "../../assests/svgs/password";

const AccountDetails = () => {
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
        <div className="md:col-7 col-12 p-4 mx-auto setting-page-main-card-wrapper">
          <div className="col-12 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Name" />
            </div>
            <div class="relative">
              <div class="relative">
                <input
                  type={"text"}
                  value={""}
                  id="search"
                  class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ciprian Lopata"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Mobile Number" />
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
                <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                 <span>{EditSvg()}</span>
                  
            
              </div>
            </div>
          </div>

          <div className="col-12 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Email" />
            </div>
            <div class="relative">
              
                <input
                  type={"text" }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="ciprianlopata@gmail.com"
                  required
                />
                <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                 <span>{EditSvg()}</span>
                  
            
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Gender" />
            </div>
            <div class="relative">
              
                <input
                  type={"text" }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Male"
                  required
                />
               
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Unique Client Code" />
            </div>
            <div class="relative">
              
                <input
                  type={"text" }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="74487569356"
                  required
                />
                <div class="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer">
                 <span>{CopySvg()}</span>
                  
            
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="login-email-label">
              <Label htmlFor="email1" value="Payment Security Partner" />
            </div>
            <div class="relative">
              
                <input
                  type={"text" }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="search"
                  class="block w-full px-4 py-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="snaptrade"
                  required
                />
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
