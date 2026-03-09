import './App.css';
import { About } from './home/About';
import { Hero } from './home/Hero';
import { Specials } from './home/Specials';
import { Testimonials } from './home/Testimonials';

const App = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};

export default App;
