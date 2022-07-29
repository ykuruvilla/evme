import React from "react";

const Form = () => {
  return (
    <div className="hero">
      <div className="form__container">
        <div className="form__left">
          <img src="" alt="Licence plate" />
          <p className="form__text">Car registration number</p>
          <input type="text" placeholder="Type it here..." />
        </div>

        <div className="form__right">
          <p className="form__text">Car details</p>
          <form action="submit" className="form__right">
            <select name="make" id="make">
              <option value="" selected disabled hidden>
                Make
              </option>
              <option value="ford">Ford</option>
              <option value="toyota">Toyota</option>
              <option value="vauxhall">Vauxhall</option>
            </select>
            <select name="model" id="model">
              <option value="" selected disabled hidden>
                Model
              </option>
              <option value="fiesta">Fiesta</option>
              <option value="focus">Focus</option>
              <option value="puma">Puma</option>
              <option value="galaxy">Galaxy</option>
            </select>
            <select name="year" id="year">
              <option value="" selected disabled hidden>
                Year
              </option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
            <input
              type="number"
              name="mileage"
              id="mileage"
              placeholder="Mileage"
            />
          </form>
        </div>
        <div className="button__container"></div>
      </div>
    </div>
  );
};

export default Form;
