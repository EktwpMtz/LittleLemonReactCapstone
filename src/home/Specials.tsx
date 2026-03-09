import { NavLink } from 'react-router';
import { Dish, type DishProps } from '../componets/Dish';
import './Specials.css';
import { Button } from '../componets/Button';

const specials: DishProps[] = [
  {
    name: 'Greek Salad',
    description:
      'A refreshing blend of crisp lettuce, ripe tomatoes, cucumbers, Kalamata olives, and tangy feta cheese, all tossed in a light vinaigrette dressing.',
    price: '$18.99',
    imageUrl: '/greek salad.jpg',
  },
  {
    name: 'Lemon dessert',
    description:
      'A zesty and sweet treat featuring layers of tangy lemon curd, fluffy meringue, and a buttery graham cracker crust, creating a perfect balance of flavors in every bite.',
    price: '$15.99',
    imageUrl: '/lemon dessert.jpg',
  },
  {
    name: 'Bruschetta',
    description:
      'Grilled slices of crusty bread topped with a vibrant mixture of diced tomatoes, fresh basil, garlic, and a drizzle of olive oil, creating a delicious and refreshing appetizer.',
    price: '$13.99',
    imageUrl: '/bruchetta.svg',
  },
];

export const Specials = () => {
  return (
    <section id="specials" className="specials" aria-labelledby="specials-title">
      <header className="specials-header">
        <h2 id="specials-title">Specials</h2>
        <NavLink to="/menu" aria-label="View full online menu">
          <Button>Online Menu</Button>
        </NavLink>
      </header>
      <div className="specials-dishes" role="list">
        {specials.map((dish, index) => (
          <Dish
            key={index}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            imageUrl={dish.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};
