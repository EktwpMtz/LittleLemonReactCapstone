import './Dish.css';

export type DishProps = {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
}

export const Dish = ({ name, description, price, imageUrl }: DishProps) => {
    return (
        <article className='dish'>
            <img src={imageUrl} alt={`${name} picture`} className="dish-image" />
            <div className="dish-content">
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price">{price}</p>

                <button className="order-btn">Order a delivery</button>
            </div>
        </article>
    );
}