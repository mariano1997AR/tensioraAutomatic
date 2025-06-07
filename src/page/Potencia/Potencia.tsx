import { useState } from 'react';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import './Potencia.css';


export const Potencia: React.FC = () => {
    const [voltaje, setVoltaje] = useState<string>('V');
    const [corriente, setCorriente] = useState<string>("I");
    const [resistencia, setResistencia] = useState<string>("R");
    const [valorPotencia, setValorPotencia] = useState<number | undefined>(undefined);
    const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);
    const [mostrarResultadoPotencia, setMostrarResultadoPotencia] = useState<number | undefined>(undefined);

    const calcularPotenciaElectrica = () => {
        if (!isNaN(parseFloat(corriente)) && !isNaN(parseFloat(voltaje))) {
            let calculaPotencia = parseFloat(voltaje) * parseFloat(corriente);
            setValorPotencia(calculaPotencia);
            setMostrarResultado(true);
        }

    }

    const calcularPotenciaConResistencia = () => {
        if (!isNaN(parseFloat(resistencia)) && (!isNaN(parseFloat(voltaje))) && (!isNaN(parseFloat(corriente)))) {
            let calcularPotenciaResistencia = (parseFloat(corriente) ** 2) * parseFloat(resistencia);
            setMostrarResultadoPotencia(calcularPotenciaResistencia);
            setMostrarResultado(true);
        }
    }

    return (
        <>
            <main className='container-potencia'>
                <section>
                    <BtnAtras />
                </section>
                <section>
                    <h1 className='text-center py-2'>Potencias</h1>
                    <p className='mx-2 text-2xl'>
                        La potencia eléctrica es la cantidad de energía eléctrica que se consume o se produce por unidad de tiempo. Se mide en vatios (W), y es la velocidad a la que se transfiere energía en un circuito eléctrico.
                    </p>
                </section>
                <section>
                    <article className='mx-2'>
                        <h2>Potencia Eléctrica</h2>
                        <p className='text-2xl'>Fórmula:</p>
                        <p className='text-2xl'>P = V X I</p>
                        <ul className='text-2xl'>
                            <li>V: voltaje(voltios,V)</li>
                            <li>I: Corriente (Amperios,A)</li>
                            <li>P: Potencia (Watts,W)</li>
                        </ul>
                        <h3><b>Explicacion:</b></h3>
                        <p className='text-2xl'>
                            Esta fórmula se usa para calcular cuánta energía consume un dispositivo eléctrico. Muy útil dimensionar instalaciones
                            o calcular consumos.
                        </p>
                    </article>
                    <article className='py-2 calculos-potencia'>
                        <h3 className='text-center'>Realiza tu calculo de potencia eléctrica</h3>
                        <input
                            type="text"
                            value={voltaje}
                            onChange={(e) => setVoltaje(e.target.value)}
                            placeholder='ingresa el voltaje'
                            className='inputs'
                        />
                        <input
                            type="text"
                            value={corriente}
                            onChange={(e) => setCorriente(e.target.value)}
                            placeholder='Ingresa la corriente'
                            className='inputs'
                        />
                        <button
                            onClick={calcularPotenciaElectrica}
                            className='btn-calcular-potencia'
                        >

                            Agregar
                        </button>


                    </article>
                    <article>
                        {mostrarResultado && <p className='text-center py-2 text-2xl'>Potencia: {valorPotencia}W</p>}
                    </article>
                </section>
                <section>
                    <article className='py-4 calculos-potencia'>
                        <h2 className='text-center'>Potencia con Resistencia</h2>
                        <p className='text-2xl'><b>Fórmulas alternativas:</b></p>
                        <p className='text-2xl'>P = I^2 . R </p>
                        <p className='text-2xl'><b>Explicacion:</b></p>
                        <p className='text-2xl'>Permiten calcular la potencia disipada en una resistencia, ya sea conociendo la corriente o voltaje.</p>

                    </article>
                    <article className='py-2 calculos-potencia'>
                        <input
                            type="text"
                            value={resistencia}
                            onChange={(e) => setResistencia(e.target.value)}
                            placeholder='Ingresa la resistencia'
                            className='inputs'
                        />
                        <button
                            className='btn-calcular-potencia'
                            onClick={calcularPotenciaConResistencia}
                        >
                            Calcular
                        </button>
                    </article>
                    <article>
                        {mostrarResultado && <p className='text-center py-2 text-2xl'>Potencia con resistencia: {mostrarResultadoPotencia}W</p>}
                    </article>

                </section>

            </main>


        </>
    )
}