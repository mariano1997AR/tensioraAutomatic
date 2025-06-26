import { Outlet, useLocation, useNavigation } from "react-router-dom"
import { NavbarPage } from "../NavbarPage/NavbarPage"
import { FooterPage } from "../FooterPage/FooterPage"
import { useEffect, useState } from "react"
import { Loader } from "../Loader/Loader"






export const Layout: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [noMostrarRuta,setNoMostrarRuta] = useState<boolean>(true);
    const location = useLocation();
    const navigation = useNavigation();

      // ✅ Detectar si es un archivo estático
  const isStaticFile = /\.(xml|png|jpg|jpeg|svg|pdf|json|ico)$/i.test(location.pathname);
   

    useEffect(()=>{
         let timeout = setTimeout(()=>{
             setNoMostrarRuta(false);
         },3500);

         return ()=> clearTimeout(timeout);
    },[])


    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (navigation.state === 'loading' && !isStaticFile) {
            setLoading(true);
            timeout = setTimeout(() => {
                //despues de 3 segundos permitimos ocultar
                if (navigation.state !== 'loading') {
                    setLoading(false)
                }
            }, 3500)
        } else {
            //Si ya paso el tiempo minimo, ocultar inmediatamente
            timeout = setTimeout(() => setLoading(false),3500)
        }

        return () => clearTimeout(timeout);
    }, [navigation.state,isStaticFile]);

    return (
        <>

        
                {noMostrarRuta ? '': <NavbarPage />}
              
                {loading ? <Loader /> :  <main><Outlet /></main>}
                 <FooterPage />
          



        </>
    )
}