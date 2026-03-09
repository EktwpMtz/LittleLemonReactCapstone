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
          Little Lemon was founded by brothers Mario and Adrian, who grew up in their grandmother's kitchen on the Amalfi Coast. After years of training in renowned kitchens across Italy and Greece, they brought their passion and expertise to Chicago, creating a warm, welcoming space where traditional Mediterranean cooking meets contemporary culinary artistry. Every dish tells a story of their heritage, crafted with love and the finest ingredients.
        </p>
      </div>
      <img 
        src="/Mario and Adrian A.jpg" 
        alt="Mario and Adrian, the founders and head chefs of Little Lemon restaurant" 
      />
    </section>
  );
};
