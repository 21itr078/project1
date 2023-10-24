import React from "react";
import { Col } from "reactstrap";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl,carName, data } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            {data} <span></span>
          </h6><br></br>

          <button className=" w-50 car__item-btn car__btn-details">
          <a href="/Blog">Details</a>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
