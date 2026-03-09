import { NavLink } from 'react-router';
import './Header.css';

export const Header = () => {
  return (
    <header id="header">
      <img src="/logo.svg" alt="Little Lemon Logo" className="logo" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="#about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/booking">Reservations</NavLink>
        <NavLink to="#order">Order Online</NavLink>
        <NavLink to="#login">Login</NavLink>
      </nav>
    </header>
  );
};
