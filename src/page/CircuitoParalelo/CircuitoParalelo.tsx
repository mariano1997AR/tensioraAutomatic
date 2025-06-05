import { useState } from 'react';
import './CircuitoParalelo.css';
import { BtnAtras } from '../../components/BtnAtras/BtnAtras';




export const CircuitoParalelo: React.FC = () => {
    const [resistencia, setResistencia] = useState<string>('R');
    const [itemsResistencias, setItemsResistencias] = useState<number[]>([]);
    const [mostrarResistencia, setMostrarResistencia] = useState<boolean>(false);
    const [voltaje, setVoltaje] = useState<string>("I");
    const [mostrarValorCorriente, setMostrarValorCorriente] = useState<number>();

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
                <BtnAtras />
                <article className='py-2'>
                    <h3 className='text-center'>Circuitos</h3>
                    <p className='text-2xl'>En circuitos eléctricos, los componentes pueden ser conectados en serie o en paralelo.
                        En serie, la corriente sigue un único camino a través de todos los componentes, mientras
                        que el voltaje se divide entre ellos. En paralelo, la corriente se divide entre los componentes, pero todos
                        tienen el mismo voltaje.

                    </p>
                </article>
                <article className='py-2'>
                    <h3>Circuitos en Paralelo:</h3>
                    <ul>
                        <li> - <b>Corriente: </b> La corriente total se divide entre los componentes, y la corriente</li>
                        <li> - <b>Voltaje:</b> Todos los componentes tienen el mismo voltaje </li>
                        <li> - <b>Resistencia: </b> La resistencia total es menor que la resistencia de cualquier componente individual.</li>
                    </ul>
                    <h4>Características del circuito en Paralelo: </h4>
                    <ul>
                        <li> - <b>Ventajas: </b> Si un componente se interrumpe, el resto del circuito sigue
                            funcionando.
                        </li>
                        <li> - <b>Desventajas: </b> Más complejo de diseñar y calcular la resistencia total.</li>
                    </ul>
                </article>

                <article className='py-3'>
                    <div className='container-formula-circuito-en-serie'>
                        <h4>Fórmula de Circuito en Paralelo</h4>
                        <ul>
                            <li> * Resistencia total: 1/Rtotal = 1/R1 + 1/R2 + 1/R3 + ...</li>
                            <li> * Corriente: I = Vtotal / Rtotal</li>
                            <li> * Voltaje en cada resistencia: Vn = I * Rn</li>
                        </ul>
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
                    </div>

                </article>
                <article>
                    <ul className='lista-resistencias'>
                        {itemsResistencias.map((item, index) => (
                            <li
                                className='dato-resistencias'
                                key={index}


                            >
                                <span className='resistencia text-2xl'>{item}</span>
                                <button
                                    onClick={() => borrarResistencias(index)}
                                    className='btn-borrar'
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

                <article className='container-formula-circuito-en-serie'>
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


            </section>

        </>
    )
}