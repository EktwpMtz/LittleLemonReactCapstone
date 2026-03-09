import './Hero.css';

export const Hero = () => {
    return (
        <section id='hero' className="hero">
            <div className="hero-content">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Experience the best of Mediterranean cuisine in a cozy and vibrant atmosphere.</p>
                <a href="#menu" className="btn">Explore Our Menu</a>
            </div>
            <img src="/assets/hero-image.jpg" alt="Delicious food at Little Lemon" className="hero-image" />
        </section>
    );
}