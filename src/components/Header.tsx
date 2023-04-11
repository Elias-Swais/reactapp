import React, { useState } from 'react'
import './Header.css'
import { NavLink,Link } from 'react-router-dom';
const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState('#2f234f');
    
    const handleBackgroundColorChange = () => {
      setBackgroundColor('blue');
    }
  return (
    <nav className = "navBar" style= {{backgroundColor}}>
    <div className = "Wrapper">
        <div className="headers">
        <button className = "headerButton" onClick={handleBackgroundColorChange}>Change color</button>
            <ul>
                <NavLink to ="/"><li>Home</li></NavLink>
                <NavLink to ="/Shop"><li>Shop</li></NavLink>
                <NavLink to ="/About"><li>About</li></NavLink>
                <NavLink to ="/Contactus"><li>Contactus</li></NavLink>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header