import React from 'react'
import "./Navigation.scss"

const Navigation = () => {
  return (
    <nav className='navigation'>
        <ul>
            <li>All</li>
            <li>Fish</li>
            <li>Vegeterian</li>
            <li>LCHF</li>
            <li>Chicken</li>
            <li>Meat</li>
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