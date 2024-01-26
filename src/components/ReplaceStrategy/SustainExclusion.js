import React, { useState } from "react";
import CheckIcon from "../../assests/check.svg";
import FootPrintInput from "./FootPrintInput";
import alcohol from "../../assests/alcohol.svg";
import pesticides from "../../assests/pesticides.svg";
import animalTesting from "../../assests/animaltesting.svg";
import nonuclear from "../../assests/nuclear.svg";
import noweapons from "../../assests/noweapons.svg"
import FossilFuel from "../../assests/fossileFuel.svg"
import tobbaco from "../../assests/tobaco.svg"
import meat from "../../assests/meat.svg"
const SustainExclusion = () => {
  const [footPrintBtn1, setfootPrintBtn1] = useState(false);
  const [footPrintBtn2, setfootPrintBtn2] = useState(false);
  const [footPrintBtn3, setfootPrintBtn3] = useState(false);
  const [footPrintBtn4, setfootPrintBtn4] = useState(false);
  
  const [footPrintBtn5, setfootPrintBtn5] = useState(false);
  const [footPrintBtn6, setfootPrintBtn6] = useState(false);

  const [footPrintBtn7, setfootPrintBtn7] = useState(false);
  const [footPrintBtn8, setfootPrintBtn8] = useState(false);

  const handlefootPrintBtn1 = () => {
    setfootPrintBtn1(!footPrintBtn1);
  };

  const handlefootPrintBtn2 = () => {
    setfootPrintBtn2(!footPrintBtn2);
  };

  const handlefootPrintBtn3 = () => {
    setfootPrintBtn3(!footPrintBtn3);
  };
  const handlefootPrintBtn4 = () => {
    setfootPrintBtn4(!footPrintBtn4);
  };

  const handlefootPrintBtn5 = () => {
    setfootPrintBtn5(!footPrintBtn5);
  };
  const handlefootPrintBtn6 = () => {
    setfootPrintBtn6(!footPrintBtn6);
  };

  const handlefootPrintBtn7 = () => {
    setfootPrintBtn7(!footPrintBtn7);
  };
  const handlefootPrintBtn8 = () => {
    setfootPrintBtn8(!footPrintBtn8);
  };
  return (
    <div>
      {" "}
      <div className="col-12 mb-2">
        <div className="Sustian-invest-footprint-heading">
          <h1>2. Exclusions</h1>
        </div>
      </div>
      <div className="col-12 Sustian-invest-footprint-para mb-2">
        <div className="Sustian-invest-footprint-heading">
          <p>
            Exclude entire areas of business that don’t align with your values.
          </p>
        </div>
      </div>
      <div className="col-12 md:flex block">
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn1}
            handlefootPrintBtn={handlefootPrintBtn1}
            title="No Alcohol"
            Icon={alcohol}
            success={CheckIcon}
          />
        </div>
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn2}
            handlefootPrintBtn={handlefootPrintBtn2}
            title="No Pesticides"
            Icon={pesticides}
            success={CheckIcon}
          />
        </div>
      </div>
      <div className="col-12 md:flex block">
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn3}
            handlefootPrintBtn={handlefootPrintBtn3}
            title="No Animal Testing"
            Icon={animalTesting}
            success={CheckIcon}
          />
        </div>
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn4}
            handlefootPrintBtn={handlefootPrintBtn4}
            title="No Nuclear"
            Icon={nonuclear}
            success={CheckIcon}
          />
        </div>
      </div>

      <div className="col-12 md:flex block">
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn5}
            handlefootPrintBtn={handlefootPrintBtn5}
            title="No Weapons"
            Icon={noweapons}
            success={CheckIcon}
          />
        </div>
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn6}
            handlefootPrintBtn={handlefootPrintBtn6}
            title="No Fossil Fuel"
            Icon={FossilFuel}
            success={CheckIcon}
          />
        </div>
      </div>
      
      <div className="col-12 md:flex block">
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn7}
            handlefootPrintBtn={handlefootPrintBtn7}
            title="No Meat"
            Icon={meat}
            success={CheckIcon}
          />
        </div>
        <div className="md:col-6 sm:col-8 mx-auto col-12 flex justify-center Sustian-invest-footprint-para">
          <FootPrintInput
            footPrintBtn={footPrintBtn8}
            handlefootPrintBtn={handlefootPrintBtn8}
            title="No Tobacco"
            Icon={tobbaco}
            success={CheckIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default SustainExclusion;
