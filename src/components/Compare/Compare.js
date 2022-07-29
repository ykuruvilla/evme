import React from "react";
import Card from "../Card/Card";
import car1 from "../../assets/images/car1.png";
import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";
import "./Compare.scss";
import breadcrumbs from "../../assets/images/Breadcrumb _ 02.png";

const Compare = () => {
  return (
    <div className="compare__cards-wrapper">
      <img className="breadcrumbs" src={breadcrumbs} alt="" />
      <div className="compare__cards">
        <Card
          price="£30.45k"
          img={car1}
          make="Vauxhall"
          model="Mokka E"
          years="2"
          fuelImg=""
        />
        <Card
          price="£40k"
          isMiddle={true}
          img={car2}
          make="Volkswagen"
          model="ID.3Pro"
          years="2.1"
          fuelImg=""
        />
        <Card
          price="£60k"
          img={car3}
          make="Tesla"
          model="Model 3"
          years="3"
          fuelImg=""
        />
      </div>
    </div>
  );
};
export default Compare;
