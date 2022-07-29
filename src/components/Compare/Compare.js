import React from "react";
import Card from "../Card/Card";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import "./Compare.scss";

const Compare = () => {
  return (
    <div className="compare__cards-wrapper">
      <div className="compare__cards">
        <Card img={car1} make="Vauxhall" model="Mokka E" years="2" fuelImg="" />
        <Card
          isMiddle={true}
          img={car2}
          make="Volkswagen"
          model="ID.3Pro"
          years="2.1"
          fuelImg=""
        />
        <Card img={car3} make="Tesla" model="Model 3" years="3" fuelImg="" />
      </div>
    </div>
  );
};
export default Compare;
