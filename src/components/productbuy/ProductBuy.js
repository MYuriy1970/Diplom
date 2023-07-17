import React from "react";
import Button from "../button/Button";
import "./style.css";

const ProductBuy = ({ item }) => {

  return (
    <div className="product-bay">
      <span className="product-bay__price">{item.price} руб.</span>
      <Button type="primary" onClick={() => null}>
        В Корзину
      </Button>
    </div>
  );
};

export default ProductBuy;
