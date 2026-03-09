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
    <section className="specials">
      <div className="specials-header">
        <h1>Specials</h1>
        <NavLink to="/menu">
          <Button>Online Menu</Button>
        </NavLink>
      </div>
      <div className="specials-dishes">
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
