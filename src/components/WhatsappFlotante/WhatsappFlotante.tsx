import { useTheme } from "../ThemeContext/ThemeContext"
import './WhatsappFlotante.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";



export const WhatsappFlotante:React.FC = ()=>{
    const {theme} = useTheme();
    return(
        <>
           <section>
                <a 
                   href="https://wa.me/5491133550437?text=Hola,%20quiero%20hablar%20contigo"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="whatsapp-button"
                >
                <span className="tooltip">¿Necesitas Ayuda?</span>
                <section className="icon"><FontAwesomeIcon icon={faWhatsapp} className="whatsapp" style={{color:theme === "dark" ? 'white' : 'black'}} /></section>   
                </a>
           </section>
        
        </>
    )
}