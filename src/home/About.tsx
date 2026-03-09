import './About.css';

export const About = () => {
  return (
    <section id="about" aria-labelledby="about-title">
      <div>
        <h2 id="about-title">Little Lemon</h2>
        <p className="location" aria-label="Restaurant location">
          <strong>Chicago</strong>
        </p>
        <p>
          Experience the best of Mediterranean cuisine in a cozy and vibrant
          atmosphere.
        </p>
      </div>
      <img 
        src="/Mario and Adrian A.jpg" 
        alt="Mario and Adrian, the founders and head chefs of Little Lemon restaurant" 
      />
    </section>
  );
};
