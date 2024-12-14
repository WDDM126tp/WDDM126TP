// src/ProductItem.js
import React from 'react';

const ProductItem = (props) => {
  return (
    <div className="product-item">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default ProductItem;
