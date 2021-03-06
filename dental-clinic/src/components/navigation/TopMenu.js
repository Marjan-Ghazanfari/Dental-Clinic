import React from 'react'
import './topmenu.css'

const TopMenu = () => {
    return (

        <div className="top-wrapper">
            <div className="topbar-openhours d-flex justify-content-center align-items-center">
                <i className="far fa-clock"></i>
                <p className="m-0">Working hours: Monday – Friday: 9:00 – 18:00</p>
            </div>
            <div className="topbar-socialmedia">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-google-plus-g"></i>
                <i className="fab fa-instagram"></i>
            </div>
        </div>

    )
}

export default TopMenu
