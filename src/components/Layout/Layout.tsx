import { Outlet } from "react-router-dom"
import { NavbarPage } from "../NavbarPage/NavbarPage"
import { FooterPage } from "../FooterPage/FooterPage"
import { useEffect, useState } from "react"
import { Loader } from "../Loader/Loader"



export const Layout: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3500)

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? <Loader /> : <main>     <NavbarPage />
                <section>
                    <Outlet />
                </section>
                <FooterPage />
            </main>}


        </>
    )
}