import { Outlet } from "react-router-dom"
import { NavbarPage } from "../NavbarPage/NavbarPage"
import { FooterPage } from "../FooterPage/FooterPage"



const Layout: React.FC = () => {

    return (
        <>
            <NavbarPage />
            <main>
                <Outlet />
            </main>
            <FooterPage />


        </>
    )
}

export default Layout;