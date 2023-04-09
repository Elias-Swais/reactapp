import React, { useState } from 'react'
import './Header.css'
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header