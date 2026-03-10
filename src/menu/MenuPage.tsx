import { useMemo, useState } from 'react';
import { Dish, type DishProps } from '../componets/Dish';
import './MenuPage.css';
import { Button } from '../componets/Button';

const categories = ['Starters', 'Main Courses', 'Desserts', 'Beverages'];

const menuItems: DishProps[] = [
  {
    imageUrl: '/greek salad.jpg',
    name: 'Greek Salad',
    description:
      'A refreshing salad with tomatoes, cucumbers, olives, and feta cheese.',
    price: '$12.99',
    category: 'Starters',
  },
  {
    imageUrl: '/bruchetta.svg',
    name: 'Bruschetta',
    description:
      'Grilled bread topped with diced tomatoes, garlic, basil, and olive oil.',
    price: '$8.99',
    category: 'Starters',
  },
  {
    imageUrl: '/greek salad.jpg',
    name: 'Margherita Pizza',
    description:
      'Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.',
    price: '$14.99',
    category: 'Main Courses',
  },
  {
    imageUrl: '/greek salad.jpg',
    name: 'Tiramisu',
    description:
      'A popular Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
    price: '$6.99',
    category: 'Desserts',
  },
  {
    imageUrl: '/bruchetta.svg',
    name: 'Lemonade',
    description: 'Freshly squeezed lemonade with a hint of mint.',
    price: '$3.99',
    category: 'Beverages',
  },
  {
    imageUrl: '/greek salad.jpg',
    name: 'Iced Tea',
    description: 'Refreshing iced tea with a slice of lemon.',
    price: '$2.99',
    category: 'Beverages',
  },
  {
    imageUrl: '/greek salad.jpg',
    name: 'Espresso',
    description: 'Strong and bold espresso shot.',
    price: '$2.49',
    category: 'Beverages',
  },
];

export const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredMenuItems = useMemo(() => {
    let filtered = menuItems;

    // Filtrar por categorías
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategories]);

  const [orderItems, setOrderItems] = useState<DishProps[]>([]);

  const addToOrder = (item: DishProps) => {
    setOrderItems((prevItems) => [...prevItems, item]);
  };

  const total = useMemo(() => {
    return orderItems
      .reduce((sum, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return sum + price;
      }, 0)
      .toFixed(2);
  }, [orderItems]);

  return (
    <main id="menu">
      <h1>MENU</h1>
      <section id="menu-categories" className="row">
        <div className="menu-categories">
          <h2>Categories</h2>
          <ul className="row">
            {categories.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  data-active={selectedCategories.includes(category)}
                  className={"category-button"}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="search-container">
          <span className="material-symbols-outlined">search</span>
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>
      <hr />
      <section className="row">
        <article className="menu-items">
          {filteredMenuItems.map((item, index) => (
            <Dish
              key={index}
              imageUrl={item.imageUrl}
              name={item.name}
              description={item.description}
              price={item.price}
              category={item.category}
              addToOrder={() => addToOrder(item)}
            />
          ))}
        </article>
        <aside id="summary">
          <h2>Summary</h2>
          {orderItems.length === 0 ? (
            <p>No items in the order yet.</p>
          ) : (
            <ul>
              {orderItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
            </ul>
          )}
          <hr />
          <p>Total: ${total}</p>
          <Button disabled={orderItems.length === 0}>Checkout</Button>
        </aside>
      </section>
    </main>
  );
};
