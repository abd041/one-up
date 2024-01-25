import React from "react";
import { DeviceSvg } from "../../assests/svgs/password";

const AccountDevices = ({dev}) => {
  return (
    <div className="col-12 px-6">
      <div>
        <h4 className="account-devices-main-heading py-3">{dev}</h4>
      </div>
      <div className="col-12 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="device-setting-img">{DeviceSvg()}</div>
          <div className="device-setting-heading-desc-wrap">
            <div className="device-setting-heading">
              <h3>XYZ’s S23 Ultra</h3>
            </div>
            <div className="device-setting-desc">
              <p>Active now</p>
            </div>
          </div>
        </div>
        <div>
          <button className="logount-device-btn">LOG OUT</button>
        </div>
      </div>
    </div>
  );
};

export default AccountDevices;
