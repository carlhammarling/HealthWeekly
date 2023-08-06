import React, { useState } from "react";
import OneDishPreview from "../Cards/OneDishPreview/OneDishPreview";
import "./Dishes.scss"

const Dishes = ({ selectCategory }) => {

    const [dishes, setDishes] = useState([
        {
            name: "Chicken Curry",
            description: "sadsd askdfskd asdksakd skdkasd askdksad.",
            category: "Chicken",
            price: "15"
        },
        {
            name: "Chicken Tandoori",
            description: "sadsd askdfskd asdksakd skdkasd askdksad.",
            category: "Chicken",
            price: "12"

        },
        {
            name: "Thai Chicken",
            description: "sadsd askdfskd asdksakd skdkasd askdksad.",
            category: "Chicken",
            price: "14"

        },
        {
            name: "Hummus",
            description: "sadsd askdfskd asdksakd skdkasd askdksad.",
            category: "Vegeterian",
            price: "13"

        }
    ])

    const filteredDishes = dishes.filter(dish => dish.category === selectCategory);

  return (
    <div className="dishesList">
      {filteredDishes && filteredDishes.map((dish, index) => (
        <OneDishPreview key={index} dish={dish}/>
      ))}

    </div>
  );
};

export default Dishes;
