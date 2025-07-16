import { useEffect, useState } from 'react';
import './Bienvenida.css';
import { useTheme } from '../ThemeContext/ThemeContext';




export const Bienvenida: React.FC = () => {
    const frases = [
        "Bienvenido a Tensiora Automatic",
        "Automatizá conversaciones, mejorá la experiencia",
        "Tu asistente virtual 24/7, sin interrupciones",
        "Conversaciones automáticas que tus clientes van a agradecer",
        "Tu asistente virtual, listo para resolver dudas en tu organización",
        "Soporte inteligente para equipos y clientes",
        "Automatizá soporte. Escalá tu empresa",
        "Prueba nuestro Asistente Virtual Rocket "

    ]

 
    const [fraseActual, setFraseActual] = useState<string>(frases[0]);
    const {theme} = useTheme();



    useEffect(()=>{
         const interval = setInterval(()=>{
             setFraseActual(frases[Math.floor(Math.random() * frases.length)]);
         },3000);

         return ()=> clearInterval(interval);
    },[]);

    return (
        <>
            <section className='text-center'>
                <h1 className='py-4' >Bienvenido a  <span style={{color:theme === "dark" ? '#FFA55D' : '#60B5FF'}}>Tensiora</span></h1>
                <p className='py-4 text-2xl'>{fraseActual}</p>
            </section>

        </>
    )
}