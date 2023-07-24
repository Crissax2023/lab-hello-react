import React from 'react'
import logoimagen from '../images/ironhack-logo-xs.png'
import menuimagen from '../images/menu-top-xs.png'

const Navbar = () => {
    
    return(
        <div className="nav">
            <a href="/" className="nav-brand">
                <img src={logoimagen} alt=""/>
            </a>
            <div className="nav-menu">
                <ul>
                   

                <a href="/" className="nav-brand">
                <img src={menuimagen} alt=""/>
                </a>
                  
                </ul>
            </div>
        </div>

    )
}

export default Navbar