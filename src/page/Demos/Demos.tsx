import './Demos.css';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { useState,useEffect } from 'react';
import chatbotNLP from '../../assets/demo/chatbot-with-nlp-mejorado.webp';
import chatbotPersonalizado from '../../assets/demo/chatbot-personalizado-web-mejorado.webp'
import chatbotIA from '../../assets/demo/chatbot-with-IA-mejorado.webp';
import tecnologiaClaude from '../../assets/demo/chatbot-with-claude-mejorado.webp';
import chatbotRocket from '../../assets/demo/chatbot-with-Rocket-mejorado.webp';

import { Title, Meta } from 'react-head';
import { Card3D } from '../../components/Card3D/Card3D';
import { useTheme } from '../../components/ThemeContext/ThemeContext';

const imagesDemo:string[] = [
    chatbotNLP,
    chatbotPersonalizado,
    chatbotIA,
    chatbotRocket,
    tecnologiaClaude
]

const frases:string[] = [
    "Bienvenido a Tensiora Aplicación",
    "Chatbot con NLP",
    "Chatbot con IA",
    "Chatbot Personalizado",
    "Confia en Tensiora con Rocket chatbot V3",
    "Usando procesamiento de texto con Claude IA "
]


const cards = [
    { title: 'Voltaje', linkText: 'Ir a voltaje', to: '/calcularVoltajes' },
    { title: 'Circuito en Paralelo', linkText: 'Ir a circuito en paralelo', to: '/circuito-en-paralelo' },
    { title: 'Circuito en Serie', linkText: 'Ir a Circuito en serie', to: '/circuito-en-serie' },
    { title: 'Circuito Mixto', linkText: 'Ir a Circuito mixto', to: '/circuito-mixto' },
    { title: 'Potencia', linkText: 'Ir a potencia', to: '/potencia-tension' },
    { title: 'Corriente Monofasico', linkText: 'Ir a corriente monofasica', to: '/corriente-monofasico' },
];



export const Formulas: React.FC = () => {
   const [currentImageIndex,setCurrentImageIndex] = useState<number>(0);
   const [fraseActual,setFraseActual] = useState(frases[0]);
   const {theme} = useTheme();

     useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesDemo.length);
        }, 3000)

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const intervalo = setInterval(() => {
            setFraseActual(frases[Math.floor(Math.random() * frases.length)]);
        }, 3000)
        return () => clearInterval(intervalo);
    }, [])



    return (
        <>
            <Title>Demos | Tensiora Electric</Title>
            <Meta name='description' content='formulas para electricistas, formulas electricas,formulas matematicas,matematicas,herramientas para electricistas' />
            <Meta name='keywords' content='formulas,matematica,electricistas,electrico,leyohm,circuitos,circuitos matematicos' />
            <main className='container-formulas'>
                <section className='py-3  btn-atras-formulas'>
                    <BtnAtras />
                </section>
                <section className={` container-dashboard desaparecer-dispositivo`} >

                    <section>
                        <div className="carousel-container-demo" >
                            <section
                                className="carousel-background"
                                style={{ backgroundImage: `url(${imagesDemo[currentImageIndex]})`}}
                            
                            >

                            </section>
                            <section className="carousel-content" style={{background:theme === "dark" ? '#FFA55D':'#60B5FF'}}>
                          
                                <p className="text-center centrar text-2xl" style={{color:theme === "dark" ? 'white':'white'}}>{fraseActual}</p>
                            </section>


                        </div>
                    </section>




                </section>


                <section className='container-dashboard-responsive desaparecer-pc'>

                    <section>
                        <h4 className='text-center py-2 text-2xl'>Demo</h4>
                    </section>

                    <section className='card-row '>
                        {cards.map((card, index) => (
                            <div key={index} className="card-column">
                                <Card3D {...card} />
                            </div>
                        ))}
                    </section>

                </section>

            </main>

        </>
    )
}