import React from "react";
import "./OneDishPreview.scss";

const OneDishPreview = ({ dish }) => {
  return (
    <div className="oneDishPreview">
      <img src="" alt="" />
      <div className="dishInfo">
        <div className="dishTop">
          <h2>{dish.name}</h2>
          <span className="rating">5</span>
        </div>
        <p className="description">{dish.description}</p>
        <p className="allergies"></p>
        <p className="price">{dish.price}€</p>
      </div>
    </div>
  );
};

export default OneDishPreview;
