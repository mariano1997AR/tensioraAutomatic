import './Agendar.css';
import { CalendlyWidget } from '../../components/CalendlyWidget/CalendlyWidget';


export const Agendar = () => {
    return (
        <>
            <section className="container">
                <section className="flex-left-item-informacion-calendario">
                    <article>
                        <h1 className="text-3xl font-bold mb-6 text-center">Reservá una reunion</h1>
                        <p className="py-3 text-2xl">
                            Si necesitas una explicación más detallada puedes agendar una cita y te responderé personalmente de que se trata la aplicación y cómo puede ayudarte a mejorar en tu productividad.
                        </p>
                        <p className="py-3 text-2xl">
                            Con <strong>CalculAR</strong> puedes sentirte tranquilo que vamos a darte ayuda y cobertura en caso de errores. Un soporte técnico para que no estés fastidiado por la falta de respuesta.
                        </p>
                        <p className="py-3 text-2xl">
                            Espero que sea de tu agrado la aplicación ya que vamos a realizar actualizaciones periódicas sin necesidad de que hagas nada y vamos a avisarte por email.
                        </p>
                        <p className="py-3 text-2xl">
                            FOUNDER of Tensiora Automatic <i>Mariano Andres Martinotti</i>
                        </p>
                    </article>
                </section>
                <section className="flex-right-item-calendario">
                    <article>
                        <CalendlyWidget />
                    </article>
                </section>
            </section>

        </>
    )
}