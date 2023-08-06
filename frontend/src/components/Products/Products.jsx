import React from 'react'
import Navigation from '../Menues/Navigation/Navigation'
import BigGreenButton from '../Buttons/BigGreenButton/BigGreenButton'
import "./Products.scss"

const Products = () => {
  return (
    <div className='products'>
        <Navigation />
        <div className="dishesList">Dishes</div>
        <div className="bigGreenButton">

        <BigGreenButton text={"Go to cart"}/>
        </div>
    </div>
  )
}

export default Products