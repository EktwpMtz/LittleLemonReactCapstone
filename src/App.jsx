import './App.css';
import { Hero } from './home/Hero';
import { Specials } from './home/Specials';
import { Testimonials } from './home/Testimonials';

const App = () => {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
    </main>
  );
};

export default App;
