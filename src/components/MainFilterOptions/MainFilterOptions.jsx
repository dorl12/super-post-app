/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { LinearBuildingInfrastructureHome1 } from "../../icons/LinearBuildingInfrastructureHome1";
import { LinearElectronicDevicesLaptop2 } from "../../icons/LinearElectronicDevicesLaptop2";
import { LinearHomeFurnitureArmchair26 } from "../../icons/LinearHomeFurnitureArmchair26";
import { LinearHomeFurnitureWashingMachineMinimalistic2 } from "../../icons/LinearHomeFurnitureWashingMachineMinimalistic2";
import { LinearTransportPartsServiceBus } from "../../icons/LinearTransportPartsServiceBus";
import "./style.css";

export const MainFilterOptions = ({ className }) => {
  return (
    <div className={`main-filter-options ${className}`}>
      <div className="car">
        <LinearTransportPartsServiceBus className="linear-transport" color="#4C6FFF" />
        <div className="div">Vehicles</div>
      </div>
      <div className="rentals-button">
        <LinearBuildingInfrastructureHome1 className="linear-building" color="#4C6FFF" />
        <div className="text-wrapper-2">Rentals</div>
      </div>
      <div className="furniture-button">
        <LinearHomeFurnitureArmchair26 className="linear-home" />
        <div className="text-wrapper-3">Furniture</div>
      </div>
      <div className="div-2">
        <LinearElectronicDevicesLaptop2 className="linear-electronic" color="#4C6FFF" />
        <div className="text-wrapper-4">Electronics</div>
      </div>
      <div className="div-2">
        <LinearHomeFurnitureWashingMachineMinimalistic2
          className="linear-home-furniture-washing-machine-minimalistic-2"
          color="#4C6FFF"
        />
        <div className="text-wrapper-4">Appliances</div>
      </div>
    </div>
  );
};
