import './Dish.css';
import { Button } from './Button';

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
                <div className="row dish-header">
                    <h3>{name}</h3>
                    <p className="price">{price}</p>
                </div>
                <p>{description}</p>

                <Button onClick={addToOrder}>
                    Order a delivery
                </Button>
            </div>
        </article>
    );
}