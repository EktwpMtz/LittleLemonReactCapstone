import { useMemo, useState } from 'react';
import { Dish, DishProps } from '../componets/Dish';
import './MenuPage.css';

const menuItems: DishProps[] = [
    {
        imageUrl: '',
        name: "Greek Salad",
        description: "A refreshing salad with tomatoes, cucumbers, olives, and feta cheese.",
        price: "$12.99"
    },
    {
        imageUrl: '',
        name: "Bruschetta",
        description: "Grilled bread topped with diced tomatoes, garlic, basil, and olive oil.",
        price: "$8.99"
    },
    {
        imageUrl: '',
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella cheese, and fresh basil.",
        price: "$14.99"
    },
    {
        imageUrl: '',
        name: "Tiramisu",
        description: "A popular Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        price: "$6.99"
    },
    {
        imageUrl: '',
        name: "Lemonade",
        description: "Freshly squeezed lemonade with a hint of mint.",
        price: "$3.99"
    },
    {
        imageUrl: '',
        name: "Iced Tea",
        description: "Refreshing iced tea with a slice of lemon.",
        price: "$2.99"
    },
    {
        imageUrl: '',
        name: "Espresso",
        description: "Strong and bold espresso shot.",
        price: "$2.49"
    }
];

export const MenuPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredMenuItems = useMemo(() => {
        if (!searchTerm) return menuItems;

        return menuItems.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const [orderItems, setOrderItems] = useState<DishProps[]>([]);

    const addToOrder = (item: DishProps) => {
        setOrderItems(prevItems => [...prevItems, item]);
    };

    const total = useMemo(() => {
        return orderItems.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return sum + price;
        }, 0).toFixed(2);
    }, [orderItems]);

    return (
        <main className='menu'>
            <h1>MENU</h1>
            <section className='row'>
                <div className='menu-categories'>
                    <h2>Categories</h2>
                    <ul className='row'>
                        <li>Starters</li>
                        <li>Main Courses</li>
                        <li>Desserts</li>
                        <li>Beverages</li>
                    </ul>
                </div>
                <input
                    type="text"
                    placeholder="Search menu items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </section>
            <hr />
            <section className='row'>
                <article className='menu-items'>
                    {filteredMenuItems.map((item, index) => (
                        <Dish
                            key={index}
                            imageUrl={item.imageUrl}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            addToOrder={() => addToOrder(item)}
                        />
                    ))}
                </article>
                <aside className='summary'>
                    <h2>Summary</h2>
                    {orderItems.length === 0 ? (
                        <p>No items in the order yet.</p>
                    ) : (
                        <ul>
                            {orderItems.map((item, index) => (
                                <li key={index}>{item.name} - {item.price}</li>
                            ))}
                        </ul>
                    )}
                    <hr />
                    <p>Total: ${total}</p>
                    <button className='checkout-btn' disabled={orderItems.length === 0}>Checkout</button>
                </aside>
            </section>
        </main>
    )
}