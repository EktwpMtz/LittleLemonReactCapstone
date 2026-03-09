import { NavLink } from 'react-router';
import './Hero.css';
import { Button } from '../componets/Button';

export const Hero = () => {
  return (
    <div className="hero-container">
      <section id="hero" className="hero">
        <div className="hero-content">
          <div>
            <h1 className='primary-text'>Little Lemon</h1>
            <h2 className='primary-text'>Chicago</h2>
          </div>
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
    </div>
  );
};
