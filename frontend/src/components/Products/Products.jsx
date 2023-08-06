import { useState } from "react";
import Navigation from "../Menues/Navigation/Navigation";
import BigGreenButton from "../Buttons/BigGreenButton/BigGreenButton";
import "./Products.scss";
import Dishes from "../Dishes/Dishes";

const Products = () => {
  const [selectCategory, setSelectCategory] = useState(null);

  return (
    <div className="products">
      <Navigation setSelectCategory={setSelectCategory} />
      <Dishes selectCategory={selectCategory} />
      <div className="bigGreenButton">
        <BigGreenButton text={"Go to cart"} />
      </div>
    </div>
  );
};

export default Products;
