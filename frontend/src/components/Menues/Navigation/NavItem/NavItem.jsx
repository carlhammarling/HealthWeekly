import React from 'react'

const NavItem = ({ cat, setSelectCategory }) => {

    const textHandler = (e) => {
        setSelectCategory(e.target.textContent)
    }

  return (
    <li onClick={(e) => textHandler(e)}>{cat}</li>
  )
}

export default NavItem