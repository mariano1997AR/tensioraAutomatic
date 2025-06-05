import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import './Voltajes.css';
import { useState } from 'react';


export const Voltajes: React.FC = () => {

    const [voltaje, setVoltaje] = useState<string>("V");
    const [resistencia, setResistencia] = useState<string>("R");
    const [corriente, setCorriente] = useState<string>("I");
    const [voltios, setVoltios] = useState<number | undefined>();
    const [valorCorriente, setValorCorriente] = useState<number | undefined>();
    const [valorResistencia, setValorResistencia] = useState<number | undefined>();
    //calculadoras
    const calcularVoltaje = () => {
        const v = Number(corriente) * Number(resistencia);
        setVoltios(v);
    };

    const calcularCorriente = () => {
        const I = Number(voltaje) / Number(resistencia);
        setValorCorriente(I);
    };

    const calcularResistencia = () => {
        const R = Number(voltaje) / Number(corriente);
        setValorResistencia(R);
    };

    return (
        <>
            <main className='container-voltajes'>
                <BtnAtras />
                <section>
                    <h2 className='text-center'>Ley de Ohm</h2>
                    <p className='text-2xl'>Fórmula:    V = I.R </p>
                    <ul className='text-2xl'>
                        <li> * V: Voltaje (Voltios,V)</li>
                        <li> * I: Corriente (Amperios,A)</li>
                        <li> * R: Resistencia (Ohmnios,Ω)</li>
                    </ul>
                </section>
                <section>
                    <h3 className='text-center py-2'>Calcular Voltaje (V)</h3>
                    <p className=' text-2xl'>Formula: V = I.R</p>
                    <p className='text-2xl'>Ejemplo: Tenes una resistencia de 20 Ω  y pasa una corriente de 2 amperios o 2A</p>
                </section>
                {/* ACA INGRESAMOS LOS DATOS */}

                <section className='calculadora'>
                    <input
                        type="type"
                        value={corriente}
                        onChange={(e) => setCorriente(e.target.value)}
                        placeholder='Ingresa el valor de corriente en Amperios'
                        className='inputs text-center'
                    />

                    <input
                        type="type"
                        value={resistencia}
                        onChange={(e) => setResistencia(e.target.value)}
                        placeholder='Ingresa la resistencia en Ohmnios '
                        className='inputs text-center'
                    />

                    <button
                        onClick={calcularVoltaje}
                        className='btn-calcular'

                    >
                        Obtener Voltaje
                    </button>
                    <p className='text-center text-2xl py-2'>El valor de V es : {voltios}V</p>
                </section>

                <section>
                    <h3 className='text-center py-2'>Calcular Corriente (I)</h3>
                    <p className=' text-2xl'>Formula:  I = V / R</p>
                    <p className='text-2xl'>Ejemplo: Tenés un foco que funciona con 220V y su resistencia es de 110 Ω.</p>
                </section>

                <section className='calculadora'>
                    <input
                        type="type"
                        value={voltaje}
                        onChange={(e) => setVoltaje(e.target.value)}
                        placeholder='Ingresa el valor de voltaje en v'
                        className='inputs text-center'
                    />

                    <input
                        type="type"
                        value={resistencia}
                        onChange={(e) => setResistencia(e.target.value)}
                        placeholder='Ingresa la resistencia en Ohmnios '
                        className='inputs text-center'
                    />

                    <button
                        onClick={calcularCorriente}
                        className='btn-calcular'

                    >
                        Obtener Corriente
                    </button>
                    <p className='text-center text-2xl py-2'>El valor de I es : {valorCorriente}A</p>
                </section>

                <section>
                    <h3 className='text-center py-2'>Calcular Resistencia(Ω)</h3>
                    <p className=' text-2xl'>Formula: R = V / I</p>
                    <p className='text-2xl'>Ejemplo: Un equipo consume 5 amperios con una tensión de 120 V</p>
                </section>

                <section className='calculadora'>
                    <input
                        type="type"
                        value={voltaje}
                        onChange={(e) => setVoltaje(e.target.value)}
                        placeholder='Ingresa el valor de voltaje en v'
                        className='inputs text-center'
                    />

                    <input
                        type="type"
                        value={corriente}
                        onChange={(e) => setCorriente(e.target.value)}
                        placeholder='Ingresa el valor de corriente en amperios '
                        className='inputs text-center'
                    />

                    <button
                        onClick={calcularResistencia}
                        className='btn-calcular'

                    >
                        Obtener Corriente
                    </button>
                    <p className='text-center text-2xl py-2'>El valor de R es : {valorResistencia}Ω</p>
                </section>
            </main>

        </>
    )
}