import { NavLink } from 'react-router';
import './Hero.css';
import { Button } from '../componets/Button';

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Experience the best of Mediterranean cuisine in a cozy and vibrant
          atmosphere.
        </p>
        <NavLink to="/menu">
          <Button>Explore Our Menu</Button>
        </NavLink>
      </div>
      <img
        src="/restaurant.jpg"
        alt="Delicious food at Little Lemon"
        className="hero-image"
      />
    </section>
  );
};
