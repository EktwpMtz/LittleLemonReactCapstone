import './Dish.css';

export type DishProps = {
    name: string;
    description: string;
    price: string;
    imageUrl: string;

    addToOrder?: () => void;
}

export const Dish = ({ name, description, price, imageUrl, addToOrder }: DishProps) => {
    return (
        <article className='dish'>
            <img src={imageUrl} alt={`${name} picture`} className="dish-image" />
            <div className="dish-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price">{price}</p>

                <button className="order-btn" onClick={addToOrder}>Order a delivery</button>
            </div>
        </article>
    );
}