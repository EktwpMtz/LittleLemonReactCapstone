import { NavLink } from 'react-router';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <img src="/assets/logo.png" alt="Little Lemon Logo" className="logo" />
             <nav>
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="/booking">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li> */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="#about">About</NavLink>
                    <NavLink to="#menu">Menu</NavLink>
                    <NavLink to="/booking">Reservations</NavLink>
                    <NavLink to="#order">Order Online</NavLink>
                    <NavLink to="#login">Login</NavLink>
            </nav>
        </header>
    );
}