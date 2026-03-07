import './App.css';
import { Hero } from './home/Hero';
import { Specials } from './home/Specials';
import { Testimonials } from './home/Testimonials';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';

const App = () => {
  return (
    <div className="content">
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
