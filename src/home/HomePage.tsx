import './HomePage.css';
import { About } from './About';
import { Hero } from './Hero';
import { Specials } from './Specials';
import { Testimonials } from './Testimonials';

export const HomePage = () => {
  return (
    <main id="home-page" aria-label="Little Lemon homepage">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};
