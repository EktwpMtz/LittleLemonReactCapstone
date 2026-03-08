import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"
import './RootLayout.css'

export const RootLayout = () => {
    return (
        <div className="content">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}