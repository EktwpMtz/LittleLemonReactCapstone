import { NavLink } from 'react-router';
import './Header.css';

export const Header = () => {
  return (
    <header id="header">
      <img src="/logo.svg" alt="Little Lemon Logo" className="logo" />
      <nav aria-label="Main navigation">
        <NavLink to="/" aria-label="Go to homepage">Home</NavLink>
        <NavLink to="#about" aria-label="Learn about Little Lemon">About</NavLink>
        <NavLink to="/menu" aria-label="View our menu">Menu</NavLink>
        <NavLink to="/booking" aria-label="Make a reservation">Reservations</NavLink>
        <NavLink to="#order" aria-label="Order food online">Order Online</NavLink>
        <NavLink to="#login" aria-label="Login to your account">Login</NavLink>
      </nav>
    </header>
  );
};
