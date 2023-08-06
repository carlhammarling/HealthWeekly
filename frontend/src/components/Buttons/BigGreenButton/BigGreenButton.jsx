import React from 'react'
import { Link } from 'react-router-dom'
import "./BigGreenButton.scss"

const BigGreenButton = ({ text }) => {
  return (
    <div className='buttonWrapper'>
        <Link to="/">{text}</Link>
    </div>
  )
}

export default BigGreenButton