import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


function Navbar({setShowLogin}) {

    // const [menu, setMenu] = useState("home")
    const {getTotalCartAmount} = useContext(StoreContext)

    return (
        <>
            <div className="navbar">
                
                <img src={assets.logo} alt="" className="logo" />
               
                <ul className="navbar-menu">
                    <Link
                        to="/" 
                        spy={true} 
                        smooth={true} 
                        offset={-10} 
                        duration={500} 
                    >
                        Home
                    </Link>
                    <Link
                        to="explore-menu" 
                        spy={true} 
                        smooth={true} 
                        offset={-10} 
                        duration={500} 
                    >
                        Menu
                    </Link>
                    <Link
                        to="app-download" 
                        spy={true} 
                        smooth={true} 
                        offset={-10} 
                        duration={500} 
                    >
                        Download App
                    </Link>
                    <Link
                        to="footer" 
                        spy={true} 
                        smooth={true} 
                        offset={-10} 
                        duration={500} 
                    >
                        Contact
                    </Link>
                    
                </ul>
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="" />
                    <div className="navbar-search-icon">
                        <NavLink to='/cart'><img src={assets.basket_icon} alt="" /></NavLink>
                        <div className={getTotalCartAmount()===0 ? " " : "dot" }></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)} >Sign in</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
