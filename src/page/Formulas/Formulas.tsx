import './Formulas.css';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';

import { Title, Meta } from 'react-head';
import { Card3D } from '../../components/Card3D/Card3D';

const cards = [
    { title: 'Voltaje', linkText: 'Ir a voltaje', to: '/calcularVoltajes' },
    { title: 'Circuito en Paralelo', linkText: 'Ir a circuito en paralelo', to: '/circuito-en-paralelo' },
    { title: 'Circuito en Serie', linkText: 'Ir a Circuito en serie', to: '/circuito-en-serie' },
    { title: 'Circuito Mixto', linkText: 'Ir a Circuito mixto', to: '/circuito-mixto' },
    { title: 'Potencia', linkText: 'Ir a potencia', to: '/potencia-tension' },
    { title: 'Corriente Monofasico', linkText: 'Ir a corriente monofasica', to: '/corriente-monofasico' },
];


const Formulas: React.FC = () => {




    return (
        <>
            <Title>Formulas | Tensiora Electric</Title>
            <Meta name='description' content='formulas para electricistas, formulas electricas,formulas matematicas,matematicas,herramientas para electricistas' />
            <Meta name='keywords' content='formulas,matematica,electricistas,electrico,leyohm,circuitos,circuitos matematicos' />
            <main className='container-formulas'>
                <section className='py-3  btn-atras-formulas'>
                    <BtnAtras />
                </section>
                <section className={` container-dashboard desaparecer-dispositivo`} >

                    <section>
                        <h4 className='text-center py-2 text-2xl'>Formulas</h4>
                    </section>

                    <section className='card-row '>
                        {cards.map((card, index) => (
                            <div key={index} className="card-column ">
                                <Card3D {...card} />
                            </div>
                        ))}
                    </section>




                </section>


                <section className='container-dashboard-responsive desaparecer-pc'>
    
                    <section>
                        <h4 className='text-center py-2 text-2xl'>Formulas</h4>
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

export default Formulas;