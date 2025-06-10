import { useEffect, useRef, useState } from 'react';
import './Bienvenida.css';




export const Bienvenida: React.FC = () => {
    const frases = [
        "Bienvenido a Tensiora Electric",
        "Realiza tus trabajos electricos en tiempo y forma",
        "Mejora tu productividad mediante la actualizacion",

    ]

    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [fraseActual, setFraseActual] = useState<string>(frases[0]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(()=>{
         const interval = setInterval(()=>{
             setFraseActual(frases[Math.floor(Math.random() * frases.length)]);
         },3000);

         return ()=> clearInterval(interval);
    },[]);

    return (
        <>
            <section ref={ref} className={`zoom-animado text-center ${visible ? 'visible' : ''}`}>
                <h1 className='py-4'>Bienvenido a Tensionar Electric </h1>
                <p className='py-4 text-2xl'>{fraseActual}</p>
            </section>

        </>
    )
}