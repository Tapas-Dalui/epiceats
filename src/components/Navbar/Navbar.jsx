import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-scroll";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Navbar({ setShowLogin }) {
    // const [menu, setMenu] = useState("home")
    const { getTotalCartAmount } = useContext(StoreContext);

    const navigate = useNavigate()
    return (
        <>
            <div className="navbar">
                <img src={assets.logo} alt="" className="logo" onClick={()=> navigate('/')} />

                <ul className="navbar-menu">
                    <li>
                        <Link
                            to="header"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="explore-menu"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={500}
                        >
                            Menu
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="app-download"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}
                        >
                            Download App
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="footer"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="navbar-right">
                    <IoSearch className="icons-sm"/>
                    <div className="navbar-search-icon-sm">
                        <NavLink to="/cart">
                            <FaShoppingCart className="icons-sm"/>
                        </NavLink>
                        <div className="dot"></div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>Sign in</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
