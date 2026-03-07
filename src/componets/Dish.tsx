export const Dish = () => {
    return (
        <article>
            <img src="/assets/dish.jpg" alt="Delicious dish at Little Lemon" className="dish-image" />
            <div className="dish-content">
                <h3>Grilled Salmon with Lemon Butter</h3>
                <p>Fresh salmon fillet grilled to perfection, topped with a zesty lemon butter sauce. Served with seasonal vegetables and your choice of side.</p>
                <p className="price">$18.99</p>
            </div>
        </article>
    );
}