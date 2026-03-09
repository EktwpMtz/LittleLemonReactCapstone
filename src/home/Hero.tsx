import { NavLink } from 'react-router';
import './Hero.css';
import { Button } from '../componets/Button';

export const Hero = () => {
  return (
    <div className="hero-container">
      <section id="hero" className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <div>
            <h1 id="hero-title" className='primary-text'>Little Lemon</h1>
            <p className='primary-text' role="doc-subtitle" aria-label="Location">
              <strong>Chicago</strong>
            </p>
          </div>
          <p>
            Experience the best of Mediterranean cuisine in a cozy and vibrant
            atmosphere.
          </p>
          <NavLink to="/menu" aria-label="Navigate to our menu page">
            <Button>Explore Our Menu</Button>
          </NavLink>
        </div>
        <img
          src="/restaurant.jpg"
          alt="Interior of Little Lemon restaurant showing elegant dining tables with Mediterranean-style décor"
          className="hero-image"
        />
      </section>
    </div>
  );
};
