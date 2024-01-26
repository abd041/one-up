import React from 'react'

const FootPrintInput = ({ footPrintBtn, handlefootPrintBtn, title, Icon, success }) => {
    return (
        <div className={footPrintBtn ? "w-[98%] h-[52px] p-6 bg-white rounded-md border border-indigo-500 justify-start items-center gap-3 inline-flex mb-2 mx-2" : "w-[98%] h-[52px] p-6 bg-white rounded-md border border-gray-200 justify-start items-center gap-3 inline-flex mb-2 mx-2"} onClick={handlefootPrintBtn}>
            <div className="w-8 h-8 relative ">
                <img src={Icon} alt="...." className="py-auto" />
            </div>
            <div className="grow shrink basis-0 text-black text-sm font-medium font-['Inter']">{title}</div>
            <div className="w-3 h-3 relative" >{footPrintBtn && <img src={success} alt="..." />}</div>
        </div>
    )
}

export default FootPrintInput