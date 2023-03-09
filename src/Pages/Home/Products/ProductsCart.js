import React from "react";

const ProductsCart = ({ product }) => {
  const { image, title, price } = product;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 bg-slate-200 h-56 rounded-md">
        <img src={image} alt="Shoes" className="h-36" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-600">${price}</p>
      </div>
    </div>
  );
};

export default ProductsCart;
