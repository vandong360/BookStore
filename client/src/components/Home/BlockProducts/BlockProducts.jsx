import React from "react";
import "./BlockProducts.css";
import ProductCard from "../../Products/Card/Card.jsx";

const BlockProducts = (props) => {
  return (
    <div className="block">
      <span className="block-title">{props.title}</span>
      <hr />
      <div className="block-content">
        {props.products.map((product, index) => {
          return (
            <div className="block-item">
              <ProductCard
                key={index}
                img={product.img}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
              />
            </div>
          );
        })}
      </div>
      <button className="gradient-button">Xem thêm</button>
    </div>
  );
};

export default BlockProducts;
