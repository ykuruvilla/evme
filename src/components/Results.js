import React from "react";
import breadcrumbs from "../assets/images/Breadcrumb_3.png";
import Card from "./Card/Card";
import car2 from "../assets/images/car2.png";
import car1 from "../assets/images/image-33.png";
import fuel2 from "../assets/images/FUEL-COST-VOLKSWAGEN.png";
import fuel1 from "../assets/images/red-fuel-bar.png";

import "./Results.scss";

const Results = () => {
  return (
    <div className="results">
      <img className="breadcrumbs" src={breadcrumbs} alt="" />
      <div className="headers">
        <h3 className="your-car">Your Car</h3>
        <h3 className="your-ev">Your EV</h3>
      </div>
      <div className="results__cards">
        <Card
          fuelImg={fuel1}
          img={car1}
          make="Ford"
          model="Fiesta"
          years="N/A"
          hasButton={false}
        />
        <Card
          img={car2}
          make="Volkswagen"
          model="ID.3Pro"
          isMiddle={true}
          years="2.1"
          fuelImg={fuel2}
          hasButton={false}
        />
        <div className="chart"></div>
      </div>
      <div className="discount-info">
        <p className="discount-text">
          * Receive an exclusive discount of 3% upon purchase
        </p>
        <button className="discount-button">{`Purchase >`}</button>
      </div>
    </div>
  );
};

export default Results;
