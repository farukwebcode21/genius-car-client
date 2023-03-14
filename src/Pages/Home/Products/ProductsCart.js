import React from "react";

const ProductsCart = ({ product }) => {
  const { image, title, price } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 bg-slate-200 h-56 rounded-md">
        <img src={image} alt="Shoes" className="h-36" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            readOnly
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            readOnly
          />
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-600">${price}</p>
      </div>
    </div>
  );
};

export default ProductsCart;
