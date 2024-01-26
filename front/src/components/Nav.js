import { NavLink } from "react-router-dom";
import '../styles/layout/Nav.css';

const Nav = (props) => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>HOME</NavLink></li>
                <li><NavLink to="/rooms" className={({ isActive }) => isActive ? "activo" : undefined}>ROOMS</NavLink></li>
                <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "activo" : undefined}>GALLERY</NavLink></li>
                <li><NavLink to="/customerfeedback" className={({ isActive }) => isActive ? "activo" : undefined}>CUSTOMER FEEDBACK</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? "activo" : undefined}>CONTACT US</NavLink></li>
            </ul>
        </nav>

    )
}

export default Nav;