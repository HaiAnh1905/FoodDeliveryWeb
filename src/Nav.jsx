import { useState } from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";
import cart from './Image/cart_icon.png'
import mainLogo from './Image/main_logo_icon.png'
import ship from './Image/ship_icon.png'

const Nav = () => {
    return (
        <>
        <div className="nav">
            <img src={mainLogo} alt="" className="logo" />
            <ul className="navItems">
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus">ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to="/items">ITEMS</NavLink>
                </li>
                <li>
                    <NavLink to="/">PAGES</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">CONTACT</NavLink>
                </li>
            </ul>
            <NavLink to="/cart" className="cartIcon">
                <img src={cart} className="cart" alt="" />
                <div className="elipse"></div>
                <div className="amount">0</div>
            </NavLink>
            <div className="order">
                <div className="delivery">Delivery Order</div>
                <div className="phonenumber">+880 1630 225 015</div>
            </div>
            <img src={ship} alt="" className="shipIcon" />
            <div className="Login">
                <NavLink to="/login-signup">Login</NavLink>
            </div>
        </div>
        </>
    )
}

export default Nav