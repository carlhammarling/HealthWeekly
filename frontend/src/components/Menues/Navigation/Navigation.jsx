import React, { useEffect, useState } from 'react'
import "./Navigation.scss"
import NavItem from './NavItem/NavItem'

const Navigation = ({ setSelectCategory }) => {

    const [foodCategories, setFoodCategories] = useState([
        "All",
        "Fish",
        "Vegeterian",
        "LCHF",
        "Chicken",
        "Meat"
    ])

    
  return (
    <nav className='navigation'>
        <ul>
            {foodCategories && foodCategories.map((cat, index)=> (
                <NavItem key={index} setSelectCategory={setSelectCategory} cat={cat} />
            ))}
        </ul>
        <div className='navBottom'>
            <div className="sorting">
                <p>Popularity</p>
            </div>
            <div className="deliveryOptions">
                <p>Monday 17.00</p>
            </div>
        </div>
    </nav>
  )
}

export default Navigation