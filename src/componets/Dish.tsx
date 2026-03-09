import './Dish.css';
import { Button } from './Button';

export type DishProps = {
  name: string;
  description: string;
  price: string;
  imageUrl: string;

  addToOrder?: () => void;
};

export const Dish = ({
  name,
  description,
  price,
  imageUrl,
  addToOrder,
}: DishProps) => {
  return (
    <article className="dish" role="listitem">
      <img src={imageUrl} alt={`${name} dish`} className="dish-image" />
      <div className="dish-content">
        <header className="row dish-header">
          <h3>{name}</h3>
          <strong className="price" aria-label={`Price: ${price}`}>{price}</strong>
        </header>
        <p className="dish-description">{description}</p>

        <Button onClick={addToOrder} aria-label={`Order ${name} for delivery`}>Order a delivery</Button>
      </div>
    </article>
  );
};
