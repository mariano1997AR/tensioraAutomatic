import './Home.css';
import { WhatsappFlotante } from '../../components/WhatsappFlotante/WhatsappFlotante';
import { InformacionApp } from '../../components/InformacionApp/InformacionApp';
import { Banner } from '../../components/Banner/Banner';
import { Funcionamiento } from '../../components/Funcionamiento/Funcionamiento';



export const Home: React.FC = () => {

    return (
        <>
            <main className='container-home'>
                {/* vista en pc */}

                <section className={` container-dashboard desaparecer-dispositivo`} >
                    <section>
                        <InformacionApp />
                    </section>

                    <section>
                       {/* <Funcionamiento />*/}

                    </section>

                    <section>
                        <Banner />
                    </section>


                </section>

                {/* vista en celulares o tabletas */}
                <section className='container-dashboard-responsive desaparecer-pc'>


                    {/* cada enlace va a llegar a funcionalidades */}
                    {/* informacion sobre la aplicacion de tensiora App */}

                    <section>
                        <InformacionApp />
                    </section>

                    <section>
                        <Funcionamiento />
                    </section>

                    <section>
                        <Banner />
                    </section>



                </section>

                <WhatsappFlotante />



            </main>

        </>
    )
}