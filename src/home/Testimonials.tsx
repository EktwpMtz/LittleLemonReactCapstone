import './Testimonials.css';

export const Testimonials = () => {
    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonial-cards">
                <Testimonial
                    quote="The food at Little Lemon is absolutely amazing! The flavors are so authentic and the service is top-notch. Highly recommend!"
                    author="Sarah M."
                    rating={5}
                    picture="sarah.jpg"
                />
                <Testimonial
                    quote="I had the best dining experience at Little Lemon. The ambiance is cozy and vibrant, and the staff made me feel right at home."
                    author="John D."
                    rating={5}
                    picture="john.jpg"
                />
                <Testimonial
                    quote="Little Lemon is my go-to spot for Mediterranean cuisine. The menu has such a great variety, and everything I've tried has been delicious!"
                    author="Emily R."
                    rating={5}
                    picture="emily.jpg"
                />
            </div>
        </section>
    );
}

type TestimonialProps = {
    rating: number;
    picture: string;
    author: string;
    quote: string;
}
const Testimonial = ({ rating, author, quote, picture }: TestimonialProps) => {
    return (
        <article className="testimonial-card">
            <div className="rating">
                {Array.from({ length: rating }, (_, i) => (
                    <span key={i} className="star">★</span>
                ))}
            </div>
            <img src={picture} alt={author} />
            <p>"{quote}"</p>
            <h3>- {author}</h3>
        </article>
    );
}