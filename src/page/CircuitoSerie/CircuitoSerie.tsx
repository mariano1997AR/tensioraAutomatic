import './CircuitoSerie.css';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { useState } from 'react';
import { ModalFormulas } from '../../components/ModalFormulas/ModalFormulas';




export const CircuitoSerie: React.FC = () => {
    const [resistencia, setResistencia] = useState<string>('R');
    const [itemsResistencias, setItemsResistencias] = useState<number[]>([]);
    const [voltajeTotal, setVoltajeTotal] = useState<string>("V");
    const [valorCorrienteTotal, setValorCorrienteTotal] = useState<number | undefined>(undefined);
    const [mostrarResistencia, setMostrarResistencia] = useState<boolean>(false);
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

    const resistenciaTotal = (): number => {
        if (itemsResistencias.length === 0) return 0;
        const sumaResistencia = itemsResistencias.reduce((acc, val) => acc + val, 0);
        return sumaResistencia;
    };

    const calcularCorrienteTotal = (datonumber: number) => {
        const I = parseFloat(voltajeTotal) / datonumber;
        setValorCorrienteTotal(I);
    }




    return (
        <>
            <section className='container-circuito-serie'>
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
                    <h3 className='mx-2'>Circuitos en Serie:</h3>
                    <ul className='text-2xl'>
                        <li> - <b>Corriente:</b> La corriente es la misma en todos los componentes</li>
                        <li> - <b>Voltaje:</b> El voltaje total se divide entre los componentes, y el voltaje total es la
                            suma de las caídas de voltaje individuales.
                        </li>
                        <li> - <b>Resistencia:</b> La resistencia total es la suma de las resistencias individuales. </li>
                    </ul>
                    <h4 className='mx-2'>Características del circuito en serie: </h4>
                    <ul className='text-2xl'>
                        <li> - <b>Ventajas:</b> Simplicidad en la construcción y fácil cálculo de la resistencia total. </li>
                        <li> - <b>Desventajas:</b> Si un componente se interrumpe, todo el circuito deja de funcionar.</li>
                    </ul>
                </article>
                <article className='py-2'>
                    <h4 className='mx-2'>Resistencia Total (Rₜ):</h4>
                    <p className='text-2xl mx-2'>La resistencia total es la suma de todas las resistencias</p>
                    <p className='text-2xl mx-2'>Rₜ = R1 + R2 + R3 + ... + Rn</p>

                    <h4 className='mx-2'>Corriente Total (I):</h4>
                    <p className='text-2xl mx-2'>La corriente es la misma en todos los elementos del circuito:</p>
                    <p className='text-2xl mx-2'>I = Vt / Rt</p>
                    <p className='text-2xl mx-2'>Donde: </p>
                    <ul className='text-2xl'>
                        <li> - I = corriente Total</li>
                        <li> - Vt = voltaje total</li>
                        <li> - Rt = resistencia total</li>
                    </ul>

                    <h4 className='mx-2'>Voltaje en cada resistencia (Ley de Ohm):</h4>
                    <p className='text-2xl mx-2'>La caída de voltaje en cada resistencia es:</p>
                    <p className='text-2xl mx-2'>Vn = I x Rn</p>
                </article>
                <article className='py-2'>
                    <button className='btn-calcular-circuito-serie text-2xl' onClick={() => setMostrarModal(true)}>Abrir calculadora</button>
                    <ModalFormulas mostrar={mostrarmodal} cerrar={() => setMostrarModal(false)}>
                        <article>
                            <h4 className='text-center'>Agregar Resistencias</h4>
                            <input
                                type="text"
                                value={resistencia}
                                onChange={(e) => setResistencia(e.target.value)}
                                placeholder='ingresa la resistencia'
                                className='inputs'
                            />
                            <button
                                onClick={AgregarResistencias}
                                className=' btn-general'
                            >

                                Agregar
                            </button>
                        </article>

                        <article>
                            <ul className=''>
                                {itemsResistencias.map((item, index) => (
                                    <li

                                        key={index}
                                        className='item-resistencias'


                                    >
                                        <p className='text-2xl'>Resistencia {index} : <span className=' text-2xl'> {item} Ω</span> </p>
                                        <button
                                            onClick={() => borrarResistencias(index)}
                                            className='btn-borrar-resistencias '
                                        >
                                            Borrar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </article>
                        <article>
                            <p className='text-center text-2xl'>Resistencia total: {resistenciaTotal().toFixed(2)}Ω </p>
                        </article>

                        <article>
                            <h4 className='text-center'>Ingresar voltaje</h4>
                            <input
                                type="text"
                                value={voltajeTotal}
                                onChange={(e) => setVoltajeTotal(e.target.value)}
                                placeholder='ingresa el voltaje'
                                className='inputs'
                            />
                            <button
                                onClick={() => calcularCorrienteTotal(resistenciaTotal())}
                                className='btn-borrar-resistencias btn-general'
                            >
                                Calcular Corriente
                            </button>
                            {mostrarResistencia && <p className='text-center text-2xl '>I: {valorCorrienteTotal?.toFixed(2)} A</p>}
                        </article>

                    </ModalFormulas>

                </article>


            </section>

        </>
    )
}