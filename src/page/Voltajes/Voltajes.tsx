import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { ModalFormulas } from '../../components/ModalFormulas/ModalFormulas';
import './Voltajes.css';
import { useState } from 'react';


const Voltajes: React.FC = () => {

    const [voltaje, setVoltaje] = useState<string>("V");
    const [resistencia, setResistencia] = useState<string>("R");
    const [corriente, setCorriente] = useState<string>("I");
    const [voltios, setVoltios] = useState<number | undefined>();
    const [valorCorriente, setValorCorriente] = useState<number | undefined>();
    const [valorResistencia, setValorResistencia] = useState<number | undefined>();
    const [mostrarmodalVoltaje, setMostrarModalVoltaje] = useState<boolean>(false);
    const [mostramodalcorriente, setMostrarModalCorriente] = useState<boolean>(false);
    const [mostramodalresistencia, setMostrarModalResistencia] = useState<boolean>(false);
    //calculadoras
    const calcularVoltaje = () => {
        let c = parseFloat(corriente);
        let r = parseFloat(resistencia);
        if ((!isNaN(c) && c > 0) && (!isNaN(r) && r > 0)) {
            const v = c * r;
            setVoltios(v);

        } else {
            setVoltios(0);
        }


    };

    const calcularCorriente = () => {
        let v = parseFloat(voltaje);
        let r = parseFloat(resistencia);
        if ((!isNaN(v) && v > 0) && (!isNaN(r) && r > 0)) {
            const I = v / r;
            setValorCorriente(I);
        } else {
            setValorCorriente(0);
        }

    };

    const calcularResistencia = () => {
        let v = parseFloat(voltaje);
        let c = parseFloat(corriente);
        if ((!isNaN(v) && v > 0) && (!isNaN(c) && c > 0)) {
            const R = v / c;
            setValorResistencia(R);

        } else {
            setValorResistencia(0);
        }


    };

    return (
        <>
            <main className='container-voltajes'>
                <section>
                    <BtnAtras />
                </section>

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

                <section className='calculadora py-3'>
                    <button className='btn-calcular-circuito-serie text-2xl' onClick={() => setMostrarModalVoltaje(true)}>Abrir calculadora</button>
                    <ModalFormulas mostrar={mostrarmodalVoltaje} cerrar={() => setMostrarModalVoltaje(false)}>
                        <h4 className='text-center'>Ingresa el valor de corriente</h4>
                        <input
                            type="type"
                            value={corriente}
                            onChange={(e) => setCorriente(e.target.value)}
                            placeholder='Ingresa el valor de corriente en Amperios'
                            className='inputs text-center'
                        />
                        <h4 className='text-center'>Ingresa el valor de resistencia</h4>
                        <input
                            type="type"
                            value={resistencia}
                            onChange={(e) => setResistencia(e.target.value)}
                            placeholder='Ingresa la resistencia en Ohmnios '
                            className='inputs text-center py-2'
                        />

                        <button
                            onClick={calcularVoltaje}
                            className='btn-calcular py-2'

                        >
                            Obtener Voltaje
                        </button>
                        <p className='text-center text-2xl py-2'>El valor de V es : {voltios}V</p>
                    </ModalFormulas>


                </section>

                <section>
                    <h3 className='text-center py-2'>Calcular Corriente (I)</h3>
                    <p className=' text-2xl'>Formula:  I = V / R</p>
                    <p className='text-2xl'>Ejemplo: Tenés un foco que funciona con 220V y su resistencia es de 110 Ω.</p>
                </section>

                <section className='calculadora'>
                    <button className='btn-calcular-circuito-serie text-2xl' onClick={() => setMostrarModalCorriente(true)}>Abrir calculadora</button>
                    <ModalFormulas mostrar={mostramodalcorriente} cerrar={() => setMostrarModalCorriente(false)}>
                        <h4 className='text-center'>Ingresa el valor de voltaje</h4>
                        <input
                            type="type"
                            value={voltaje}
                            onChange={(e) => setVoltaje(e.target.value)}
                            placeholder='Ingresa el valor de voltaje en v'
                            className='inputs text-center'
                        />
                        <h4 className='text-center'>Ingresa el valor de resistencia</h4>
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
                    </ModalFormulas>

                </section>

                <section>
                    <h3 className='text-center py-3'>Calcular Resistencia(Ω)</h3>
                    <p className=' text-2xl'>Formula: R = V / I</p>
                    <p className='text-2xl'>Ejemplo: Un equipo consume 5 amperios con una tensión de 120 V</p>
                </section>

                <section className='calculadora py-3'>
                    <button className='btn-calcular-circuito-serie text-2xl' onClick={() => setMostrarModalResistencia(true)}>Abrir calculadora</button>
                    <ModalFormulas mostrar={mostramodalresistencia} cerrar={() => setMostrarModalResistencia(false)}>
                        <h4 className='text-center'>Ingresa el valor de voltaje</h4>
                        <input
                            type="type"
                            value={voltaje}
                            onChange={(e) => setVoltaje(e.target.value)}
                            placeholder='Ingresa el valor de voltaje en v'
                            className='inputs text-center'
                        />
                        <h4 className='text-center'>Ingresa el valor de corriente</h4>
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
                    </ModalFormulas>

                </section>
            </main>

        </>
    )
}

export default Voltajes;