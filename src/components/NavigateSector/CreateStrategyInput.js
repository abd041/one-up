import React from "react";
import { Tooltip } from "flowbite-react";
import Info from "../../assests/info.svg";
const CreateStrategyInput = ({
  footPrintBtn,
  handlefootPrintBtn,
  title,
  Icon,
  success,
  content
}) => {
  return (
    <div
      className={
        footPrintBtn
          ? "w-[98%] h-[52px] p-6 bg-white rounded-md border border-indigo-500 justify-start items-center gap-3 inline-flex"
          : "w-[98%] h-[52px] p-6 bg-white rounded-md border border-gray-200 justify-start items-center gap-3 inline-flex"
      }
      onClick={handlefootPrintBtn}
    >
      {Icon && <div className="w-8 h-8 relative ">
        <img src={Icon} alt="...." className="py-auto" />
      </div>}
      <div className="grow shrink basis-0 text-black text-sm font-medium font-['Inter']">
        {title}
      </div>
      <div className="relative">
        <Tooltip content={content} className="text-center text-gray-900 text-sm font-medium font-['Inter'] max-w-[270px] w-max rounded shadow flex-col justify-start items-center inline-flex" style="light">
          {footPrintBtn ? <img src={success} alt="..." /> : <img src={Info} />}
        </Tooltip>
      </div>
    </div>
  );
};

export default CreateStrategyInput;
