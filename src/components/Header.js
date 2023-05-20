import React from 'react'
import Cheveron from "../assets/icons8-chevron-24.png"
import Home from "../assets/icons8-menu-rounded-30.png"
import Forward from "../assets/icons8-forward-48.png"
import Backward from "../assets/icons8-back-48.png"
const Header = () => {
    return (
        <div className='header-container'>
            <div className='container'>
                {/* dropdown button */}
                <div className="dropdown">
                    <button className="dropbtn">
                        <img src={Home} className='home' alt="dropdown symbol" />
                        Day
                        <img src={Cheveron} className='symbol' alt="dropdown symbol" />
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Day</a>
                        <a href="#">Month</a>
                        <a href="#">Week</a>
                        <a href="#">Agenda</a>

                    </div>

                </div>

                {/* heading */}
                <div className='headeing-container'>
                    <img src={Backward} alt='' />
                    <h4>May 20, 2023</h4>
                    <img src={Forward} alt='' />
                </div>

                <button className='todaybtn'>Today</button>

            </div>
        </div>
    )
}

export default Header