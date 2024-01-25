import React, { useState } from "react";
import "./ReplaceStrategy.css";
import { Progress } from "flowbite-react";


import Fundsdetails from "../../components/ReplaceStrategy/Fundsdetails";
import SustainInvest from "../../components/ReplaceStrategy/SustainInvest";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
const ReplaceStrategy = () => {
    const [progressResult, setProgressResult] = useState(25);
    const [showComponents , setShowComponents]=useState({
        Fundsdetails :true,
        SustainInvest:false
    })
    return (
        <>
        <NavigationBar/>
          <div className="container-large replace-strategy-page-wrapper">
            <div className="row progress-bar-main-wrapper-strager-page">
                <div className="col-12">
                    <div className="flex justify-end replace-strategy-page-progress-bar">
                        {progressResult}%
                    </div>
                    <Progress progress={progressResult} size="sm" color="blue" />
                </div>
            </div>
         {showComponents.Fundsdetails && <Fundsdetails setProgressResult={setProgressResult} setShowComponents={setShowComponents}/>}
         {showComponents.SustainInvest && <SustainInvest setProgressResult={setProgressResult} setShowComponents={setShowComponents}/>}
       
        </div>
        <Footer/>
        </>
      
    );
};

export default ReplaceStrategy;
