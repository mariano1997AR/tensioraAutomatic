import { useEffect, useRef, useState } from 'react';
import './Bienvenida.css';




export const Bienvenida: React.FC = () => {
    const frases = [
        "Bienvenido a Tensionar Automatic",
        "Transformamos ideas en software funcional",
        "Soluciones a medida para tu negocio",
        "Creamos sistemas que funcionan, escalan y te hacen la vida más facil",
        "Automatizá procesos y ahorrá tiempo con software inteligente",
        "Bots, scripts y soluciones que hacen el trabajo por vos",
        "Menos trabajo manual, más eficiencia."

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
                <h1 className='py-4'>Bienvenido a Tensionar </h1>
                <p className='py-4 text-2xl'>{fraseActual}</p>
            </section>

        </>
    )
}