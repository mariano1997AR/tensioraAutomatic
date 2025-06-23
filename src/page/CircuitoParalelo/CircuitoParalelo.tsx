import { useState } from 'react';
import './CircuitoParalelo.css';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { ModalFormulas } from '../../components/ModalFormulas/ModalFormulas';




export const CircuitoParalelo: React.FC = () => {
    const [resistencia, setResistencia] = useState<string>('R');
    const [itemsResistencias, setItemsResistencias] = useState<number[]>([]);
    const [mostrarResistencia, setMostrarResistencia] = useState<boolean>(false);
    const [voltaje, setVoltaje] = useState<string>("I");
    const [mostrarValorCorriente, setMostrarValorCorriente] = useState<number>();
    const [mostrarmodal, setMostrarModal] = useState<boolean>(false);

    //Agregar valor de la resistencia
    const AgregarResistencias = () => {
        const valor = parseFloat(resistencia);
        if (!isNaN(valor) && valor > 0) {
            setItemsResistencias([...itemsResistencias, valor]);
            setResistencia('');
            setMostrarResistencia(true);
        }

    }

    // Elimina un elemento por indice
    const borrarResistencias = (index: number) => {
        setItemsResistencias(itemsResistencias.filter((_, i) => i !== index));
    }

    //IGUAL a acc = (acc + val)
    //acc = 0;
    //10+20+30
    //total = 60/1;
    const resistenciaTotal = (): number => {
        if (itemsResistencias.length === 0) return 0;
        const sumaInversos = itemsResistencias.reduce((acc, r) => acc + 1 / r, 0);
        return 1 / sumaInversos;
    };

    const calcularCorrienteTotal = () => {
        if (itemsResistencias.length === 0) return 0;
        let sumaInversos = itemsResistencias.reduce((acc, r) => acc + 1 / r, 0);
        let resistenciaTotal = 1 / sumaInversos;
        
        let Itotal = parseFloat(voltaje) / resistenciaTotal;
        
        setMostrarValorCorriente(Itotal);

    };

    return (

        <>
            <section className='container-circuito-paralelo'>
                <article className='btn-atras-desaparecer-pc btn-atras-aparecer-dispositivo'>
                    <BtnAtras />
                </article>

                <article className='py-2'>
                    <h3 className='text-center'>Circuitos</h3>
                    <p className='text-2xl mx-2'>En circuitos eléctricos, los componentes pueden ser conectados en serie o en paralelo.
                        En serie, la corriente sigue un único camino a través de todos los componentes, mientras
                        que el voltaje se divide entre ellos. En paralelo, la corriente se divide entre los componentes, pero todos
                        tienen el mismo voltaje.

                    </p>
                </article>
                <article className='py-2'>
                    <h3 className='mx-2'>Circuitos en Paralelo:</h3>
                    <ul className='text-2xl'>
                        <li> - <b>Corriente: </b> La corriente total se divide entre los componentes, y la corriente</li>
                        <li> - <b>Voltaje:</b> Todos los componentes tienen el mismo voltaje </li>
                        <li> - <b>Resistencia: </b> La resistencia total es menor que la resistencia de cualquier componente individual.</li>
                    </ul>
                    <h4 className='mx-2'>Características del circuito en Paralelo: </h4>
                    <ul className='text-2xl'>
                        <li> - <b>Ventajas: </b> Si un componente se interrumpe, el resto del circuito sigue
                            funcionando.
                        </li>
                        <li> - <b>Desventajas: </b> Más complejo de diseñar y calcular la resistencia total.</li>
                    </ul>
                </article>

                <article className='py-3'>
                    <article className='container-formula-circuito-en-serie'>

                        <h4>Fórmula de Circuito en Paralelo</h4>
                        <ul className='text-2xl'>
                            <li> * Resistencia total: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ... + 1/Rn.</li>
                            <li> * Corriente: I = Vtotal / Rtotal.</li>
                            <li> * Voltaje en cada resistencia: Vn = I x Rn.</li>
                        </ul>
                        <button className='btn-calcular-circuito-serie text-2xl' onClick={() => setMostrarModal(true)}>Abrir calculadora</button>
                        <ModalFormulas mostrar={mostrarmodal} cerrar={() => setMostrarModal(false)}>
                            <article>
                                <h4 className='text-center py-2'>Agregar Resistencias</h4>
                                <input
                                    type="text"
                                    value={resistencia}
                                    onChange={(e) => setResistencia(e.target.value)}
                                    placeholder='ingresa la resistencia'
                                    className='inputs'
                                />
                                <button
                                    onClick={AgregarResistencias}
                                    className='btn-agregar'
                                >

                                    Agregar
                                </button>
                            </article>
                            <article>
                                <ul className='py-3'>
                                    {itemsResistencias.map((item, index) => (
                                        <li
                                            className='item-resistencias'
                                            key={index}


                                        >
                                            <p className=' text-2xl'>{item}</p>
                                            <button
                                                onClick={() => borrarResistencias(index)}
                                                className='btn-borrar-resistencias'
                                            >
                                                Borrar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                            <article>
                                <h4 className='text-center'>Resistencia Total:</h4>
                                <p className='text-center text-2xl'>{mostrarResistencia && resistenciaTotal().toFixed(1)}</p>
                            </article>
                            <article>
                                <h4 className='text-center'>Ingresa la Corriente:</h4>
                                <input
                                    type="text"
                                    value={voltaje}
                                    onChange={(e) => setVoltaje(e.target.value)}
                                    placeholder='ingresa el voltaje'
                                    className='inputs'
                                />

                                <button
                                    onClick={calcularCorrienteTotal}
                                    className='btn-borrar'
                                >
                                    Calcular Corriente
                                </button>
                                <p className='text-center py-2 text-2xl mx-2'>{mostrarValorCorriente?.toFixed(2)}≈</p>
                            </article>


                        </ModalFormulas>

                    </article>

                </article>


            </section>

        </>
    )
}