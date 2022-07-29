import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card(props) {
  return (
    <>
      <article
        tabIndex="1"
        className={`car__card ${props.isMiddle && "car__card--middle"}`}
      >
        <div className="car__image-container">
          <img src={props.img} alt="Car image" className="car__image" />
        </div>
        <div className="car__info">
          <p className="car__title">{`${props.make}: ${props.model}`}</p>
          <p className="car__offset">
            {`Ofsetting cost:`} <span>{`${props.years} years`}</span>
          </p>
          <div className="car__fuel-cost-container">
            <p className="car__fuel-cost">{`Fuel costs`}</p>
            <img src={props.fuelImg} alt="" />
          </div>
        </div>
        <div className="car__button-container">
          <Link to="/results">
            <button className="car__button">Select</button>
          </Link>
        </div>
      </article>
    </>
  );
}

export default Card;
