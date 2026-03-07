import './Header.css';

export const Header = () => {
    return (
        <header>
            <img src="/assets/logo.png" alt="Little Lemon Logo" className="logo" />
             <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Reservations</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </nav>
        </header>
    );
}