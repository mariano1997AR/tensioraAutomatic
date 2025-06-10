import { BtnAtras } from "../../components/BtnAtras/BtnAtras";


export const TerminosCondiciones: React.FC = () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    return (
        <>
            <section className="container-politica-privacidad" >
                <section className="py-3">
                    <BtnAtras />
                </section>
                <section className='container-politicas mx-2'>
                    <article className='terminos-condiciones'>
                        <p className='terminos-privacidad text-center'><u>TÉRMINOS Y CONDICIONES DE USO</u></p>
                        <p className='pb-3'><b>Última actualizacion:</b> {day}/{month}/{year}</p>
                        <p>Estos Términos regular el uso de la aplicación <strong>Tensiora Electric</strong>. Al acceder o usar la app, aceptás estos términos.</p>
                    </article>
                    <article className='pb-3 py-3'>
                        <p><b>1. Uso permitido</b></p>
                        <p> * Te otorgamos una licencia no exclusiva y revocable para usar la app solo para fines personales o comerciales autorizados.</p>
                    </article>
                    <article className='pb-3'>
                        <p><b>2. Cuenta de usuario</b></p>
                        <p>* Sos responsable de la confidencialidad de tus credenciales. No compartas tu cuenta ni la uses para actividad no permitidas</p>
                    </article>
                    <article className='pb-3'>
                        <p><b>Propiedad intelectual</b></p>
                        <p>
                            * Todo el contenido y código de la app es propiedad de <mark>Tensiora Electric</mark>. Esta prohibida su reproducción sin autorización.
                        </p>
                    </article>
                    <article className='pb-3'>
                        <p><b>4. Prohibiciones</b></p>
                        <p>
                            No podes:
                        </p>
                        <ul>
                            <li>* Usar la app con fines ilegales</li>
                            <li>* Intentar acceder sin autorización a nuestros sistemas</li>
                            <li>* Modificar o hacer ingenieria inversa sobre la app</li>
                        </ul>
                    </article>
                    <article className='pb-3'>
                        <p><b>5. Limitación de responsabilidad</b></p>
                        <p>* No garantizamos que la app esté libre de errores. No somos responsables por daños derivados del uso
                            o imposibilidad de uso de la app.
                        </p>
                    </article>
                    <article>
                        <p><b>6. Terminación</b></p>
                        <p>* Podemos suspender o cancelar tu acceso a la app en cualquier momento si incumplís estos términos.</p>
                    </article>
                </section>


            </section>
        </>
    )




}