import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

import "./Navbar.css";

export const Navbar = () => {
    return (
        <header className="header-top">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to={"/"} className="link">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="link">About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="link">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="buttons">
                <Button variant="contained">Login</Button>
                <Button variant="contained">Register</Button>
            </div>
        </header>
    )
}