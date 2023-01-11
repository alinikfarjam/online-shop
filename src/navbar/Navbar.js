import "./navbar.css";
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <>
            <section className="navbar_container">

                <figure>
                    <img src={logo} className="navbar_logo"></img>
                </figure>

                <nav className="navbar_navbar">
                    <ul>
                        <li><NavLink to="/" className="navbar_Link" activeClassName="active" >Home</NavLink></li>
                        <li><NavLink to="/Contact" className="navbar_Link">Contact</NavLink></li>
                        <li><NavLink to="/About_us" className="navbar_Link">About us</NavLink></li>
                        <li><NavLink to="/Cart" className="navbar_Link navbar_CartContainer"><span className="navbar_Count">1</span><FontAwesomeIcon icon={faCartShopping} className="navbar_Cart" /></NavLink></li>
                    </ul>
                </nav>
            </section>
            <div className="navbar_hr"></div>
        </>

    );
}

export default Navbar;