import { NavLink } from 'react-router';
import { Dish, type DishProps } from '../componets/Dish';
import './Specials.css';
import { Button } from '../componets/Button';

const specials: DishProps[] = [
  {
    name: 'Grilled Salmon with Lemon Butter',
    description:
      'Fresh salmon fillet grilled to perfection, topped with a zesty lemon butter sauce. Served with seasonal vegetables and your choice of side.',
    price: '$18.99',
    imageUrl: '/greek salad.jpg',
  },
  {
    name: 'Lemon Herb Chicken',
    description:
      'Juicy chicken breast marinated in a blend of lemon juice, garlic, and herbs, then grilled to perfection. Served with a side of roasted potatoes and steamed broccoli.',
    price: '$15.99',
    imageUrl: '/lemon dessert.jpg',
  },
  {
    name: 'Vegetarian Pasta Primavera',
    description:
      'A colorful medley of fresh vegetables sautéed in olive oil and garlic, tossed with al dente pasta and finished with a sprinkle of Parmesan cheese.',
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
