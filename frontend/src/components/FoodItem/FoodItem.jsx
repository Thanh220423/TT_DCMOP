import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />

        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.ic_add}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              className="ic-remove"
              onClick={() => removeFromCart(id)}
              src={assets.ic_remove}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              className="ic-add"
              onClick={() => addToCart(id)}
              src={assets.ic_add}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.ic_rating} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
