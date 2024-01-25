import React, { useState } from "react";
import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import "./Notify.css";
import angleDown from "../../assests/angle-down-outline.png";
import { Card, Label, TextInput } from "flowbite-react";
import LoginBtn from "../../components/Login/LoginBtn";
import LockButton from "../../assests/lock.svg";
import {
    BellIcon,
    Cheveron,
    CheveronBottom,
    ChevroRight,
    ChevronLeft,
    DeviceSvg,
    DotSVG,
    LegalSvg,
    LockSvg,
    LogoutSvg,
    MessageSvg,
    NotificationIcon,
    PhoneIcon,
    PhoneMaker,
    hidepassword,
    showpassword,
} from "../../assests/svgs/password";
import Line from "../../assests/Line 86.png";
import DeviceRow from "../../components/DeviceSettings/DeviceRow";
import AccountDetails from "../AccountDetails/AccountDetails";
import AccountDevices from "../../components/DeviceSettings/AccountDevices";
import Logout from "../../components/Modals/Logout/Logout";
import Mainavatar from "../../assests/mainavatar.png"
const Notification = () => {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [openModalNew, setOpenModalNew] = useState(false);
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
                            Notifications
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row setting-page-main-heading-desc">
                <div className="md:col-6 col-12 mx-auto">
                    <div className="col-12">
                        <div className="setting-page-main-heading">
                            <h1>Notifications</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="setting-page-main-desc">
                            <p>All notification from oneup will be updated here.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="md:col-5 col-12 mx-auto">
                    <div className="max-w h-[413px] px-4 bg-white flex-col justify-center items-start inline-flex">
                        <div className="self-stretch h-[413px] py-4 flex-col justify-start items-start gap-3 flex">
                            <div className="self-stretch pb-3 border-b border-gray-100 justify-start items-center gap-3 inline-flex">
                                <img className="w-11 h-11 relative rounded-[100px]" src={Mainavatar} />
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch text-gray-500 text-sm font-normal font-['Inter'] leading-[17.50px]">Portfolio results hiked by 25.9% in financial year 2023-24. Download the results.</div>
                                    <div className="self-stretch text-blue-700 text-xs font-normal font-['Inter'] leading-[15px]">a few moments ago</div>
                                </div>
                            </div>
                            <div className="self-stretch pb-3 bg-blue-50 border-b border-gray-100 justify-start items-center gap-3 inline-flex">
                                <img className="w-11 h-11 relative rounded-[100px]" src={Mainavatar} />
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch"><span className="text-gray-900 text-sm font-medium font-['Inter'] leading-[17.50px]">Password Changed!</span><span className="text-gray-500 text-sm font-normal font-['Inter'] leading-[17.50px]"> Your password has been resented successfuly</span></div>
                                    <div className="self-stretch text-blue-700 text-xs font-normal font-['Inter'] leading-[15px]">10 minutes ago</div>
                                </div>
                            </div>
                            <div className="self-stretch pb-3 bg-blue-50 border-b border-gray-100 justify-start items-center gap-3 inline-flex">
                                <img className="w-11 h-11 relative rounded-[100px]" src={Mainavatar} />
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch"><span className="text-gray-900 text-sm font-medium font-['Inter'] leading-[17.50px]">Strategy created! </span><span className="text-gray-500 text-sm font-normal font-['Inter'] leading-[17.50px]">Congrats your new strategy is created successful. See strategy insights</span></div>
                                    <div className="self-stretch text-blue-700 text-xs font-normal font-['Inter'] leading-[15px]">44 minutes ago</div>
                                </div>
                            </div>
                            <div className="self-stretch pb-3 bg-blue-50 border-b border-gray-100 justify-start items-center gap-3 inline-flex">
                                <img className="w-11 h-11 relative rounded-[100px]" src={Mainavatar} />
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch"><span className="text-gray-900 text-sm font-medium font-['Inter'] leading-[17.50px]">Broker account connected!</span><span className="text-gray-500 text-sm font-normal font-['Inter'] leading-[17.50px]"> Your broker account to webull is connected. </span></div>
                                    <div className="self-stretch text-blue-700 text-xs font-normal font-['Inter'] leading-[15px]">44 minutes ago</div>
                                </div>
                            </div>
                            <div className="self-stretch bg-blue-50 border-b border-gray-100 justify-start items-center gap-3 inline-flex">
                                <img className="w-11 h-11 relative rounded-[100px]" src={Mainavatar} />
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                                    <div className="self-stretch"><span className="text-gray-900 text-sm font-medium font-['Inter'] leading-[17.50px]">Welcome Mr Ciprian</span><span className="text-gray-900 text-sm font-normal font-['Inter'] leading-[17.50px]"> </span><span className="text-gray-500 text-sm font-normal font-['Inter'] leading-[17.50px]">Your registeration to oneup is completed. You can start your smart investment.</span></div>
                                    <div className="w-[304px] text-blue-700 text-xs font-normal font-['Inter'] leading-[15px]">3 hours ago</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1.5 h-[88px] bg-gray-300 rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
