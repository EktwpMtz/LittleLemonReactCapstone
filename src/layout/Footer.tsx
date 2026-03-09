import { NavLink } from 'react-router';
import './Footer.css';

export const Footer = () => {
  return (
    <footer id="footer">
      <img src="/footer-logo.png" alt="Little Lemon Logo" />
      
      <nav aria-label="Footer navigation">
        <h2>Navigation</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/booking">Reservations</NavLink></li>
          <li><NavLink to="#order">Order Online</NavLink></li>
        </ul>
      </nav>

      <section aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <address>
          <p>123 Main Street<br />Chicago, IL 60601</p>
          <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
          <p>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
        </address>
      </section>

      <section aria-labelledby="social-title">
        <h2 id="social-title">Follow Us</h2>
        <ul>
          <li><a href="https://facebook.com/littlelemon" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
          <li><a href="https://instagram.com/littlelemon" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page">Instagram</a></li>
          <li><a href="https://twitter.com/littlelemon" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page">Twitter</a></li>
        </ul>
      </section>
    </footer>
  );
};
