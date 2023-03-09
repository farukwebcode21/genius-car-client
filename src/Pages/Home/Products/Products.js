import React, { useEffect, useState } from "react";
import ProductsCart from "./ProductsCart";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="text-center my-4">
        <p className="text-orange-700 font-semibold">Popular Products</p>
        <h3 className="text-2xl font-bold my-2">Browse Our Products</h3>
        <p className="font-normal">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        {products.map((product) => (
          <ProductsCart key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-wide text-orange-600 btn-outline">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
