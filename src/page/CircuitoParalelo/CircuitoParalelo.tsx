import './CircuitoParalelo.css';




export const CircuitoParalelo: React.FC = () => {
    return (
        <>

            <section className='container-circuito-paralelo'>
                <article className='py-2'>
                    <h3 className='text-center'>Circuitos</h3>
                    <p className='text-2xl'>En circuitos eléctricos, los componentes pueden ser conectados en serie o en paralelo.
                        En serie, la corriente sigue un único camino a través de todos los componentes, mientras
                        que el voltaje se divide entre ellos. En paralelo, la corriente se divide entre los componentes, pero todos
                        tienen el mismo voltaje.

                    </p>
                </article>
                <article className='py-2'>
                    <h3>Circuitos en Serie:</h3>
                    <ul>
                        <li> - <b>Corriente:</b> La corriente es la misma en todos los componentes</li>
                        <li> - <b>Voltaje:</b> El voltaje total se divide entre los componentes, y el voltaje total es la
                            suma de las caídas de voltaje individuales.
                        </li>
                        <li> - <b>Resistencia:</b> La resistencia total es la suma de las resistencias individuales. </li>
                    </ul>
                    <h4>Características del circuito en serie: </h4>
                    <ul>
                        <li> - <b>Ventajas:</b> Simplicidad en la construcción y fácil cálculo de la resistencia total. </li>
                        <li> - <b>Desventajas:</b> Si un componente se interrumpe, todo el circuito deja de funcionar.</li>
                    </ul>
                </article>


            </section>

        </>
    )
}