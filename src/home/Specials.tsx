import { Dish } from "../componets/Dish"
import './Specials.css'

export const Specials = () => {
    return (
        <section className="specials">
            <div className="specials-header">
                <h1>Specials</h1>
                <a href="#menu" className="btn">Online Menu</a>
            </div>
            <div>
                <Dish />
                <Dish />
                <Dish />
            </div>
        </section>
    )
}