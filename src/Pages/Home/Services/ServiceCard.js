import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="cars" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-lg text-orange-600 font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/checkout/${_id}`}>Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
