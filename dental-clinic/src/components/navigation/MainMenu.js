import React from 'react'
import './mainMenu.css'

const MainMenu = () => {
    return (
        <div className="logobar-wrapper">
        <div className="logobar-logo">
        <i className="fas fa-3x fa-tooth"></i>
        <div>
            <h3>Dential<span className="clinic-span">Clinic</span></h3>
            <p>Stomatology Health</p>
        </div>
        </div>
        <div className="logobar-links">
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>Contact</p>
        </div>
    </div>
    )
}

export default MainMenu
