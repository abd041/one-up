import React,{useState} from 'react'
import ExposureSelection from '../../components/NavigateInvestment/ExposureSelection'
import InvestorsList from '../../components/NavigateSector/InvestorsList';
import NavigateSustain from '../../components/NavigateSector/NavigateSustain';
import { Progress } from "flowbite-react";

function NavigateInvestment() {
    const [progressResult, setProgressResult] = useState(25);

    const [showComponents, setShowComponents] = useState({
      createStratgy: true,
      SustainInvest: false,
      SustainComponent: false
    });
   
  return (
    <div className="container-large replace-strategy-page-wrapper">
    <div className="row progress-bar-main-wrapper-strager-page">
      <div className="col-12">
        <div className="flex justify-end replace-strategy-page-progress-bar">
          {progressResult}%
        </div>
        <Progress progress={progressResult} size="sm" color="blue" />
      </div>
    </div>
    {showComponents.createStratgy && (
      <ExposureSelection
        setProgressResult={setProgressResult}
        setShowComponents={setShowComponents}
      />
    )}
    {showComponents.SustainInvest && (
      <InvestorsList
        setProgressResult={setProgressResult}
        setShowComponents={setShowComponents}
      />
    )}
    {showComponents.SustainComponent && (
      <NavigateSustain
        setProgressResult={setProgressResult}
        setShowComponents={setShowComponents}
      />
    )}
    
  </div>
  )
}

export default NavigateInvestment