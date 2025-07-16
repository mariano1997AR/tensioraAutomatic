import './Inicio.css';
import { InformacionApp } from '../../components/InformacionApp/InformacionApp';
import { Banner } from '../../components/Banner/Banner';
import { Bienvenida } from '../../components/Bienvenida/Bienvenida';
import { BrandCarousel } from '../../components/BrandCarousel/BrandCarousel';
import { Title, Meta } from 'react-head';
import { Presentacion } from '../../components/Presentacion/Presentacion';



export const Inicio: React.FC = () => {
    return (
        <>
            <Title>Inicio | Tensiora Automatic</Title>
            <Meta name="keywords" content="desarrollador de software, desarrollo web, aplicaciones web, aplicaciones de escritorio,React,Node.js, Programador freelance, soluciones digitales, sistemas a medida, desarrollador full stack, desarrollo de sistemas, programación, software personalizado, aplicaciones para empresas,landing pages, sistemas de gestión, automatización, bots" />
            <Meta name='description' content='desarrolladora de software especializado en crear soluciones web y de escritorio eficientes y modernas.' />
            <Meta property='og:title' content='Inicio | Tensiora Automatic' />
            <Meta property='og:description' content='Es el inicio de tensiora automatic' />
            <Meta property='og:type' content='website' />
            <Meta property='og:url' content='https://mariano1997ar.github.io/tensioraElectric/home' />
            <main className='container-home'>
                {/* vista en pc */}

                <section className={` container-dashboard desaparecer-dispositivo`} id='home' >
                    <section>
                        <Presentacion />
                    </section>

                    <section>
                        <InformacionApp />
                    </section>

                    <section>
                        <Banner />
                    </section>

                    <section>
                        <BrandCarousel />
                    </section>


                </section>

                {/* vista en celulares o tabletas */}
                <section className='container-dashboard-responsive desaparecer-pc'>


                    {/* cada enlace va a llegar a funcionalidades */}
                    {/* informacion sobre la aplicacion de tensiora App */}
                    <section>
                        <Bienvenida />
                    </section>
                    <section>
                        <InformacionApp />
                    </section>
                    <section>
                        <Banner />
                    </section>

                    <section>
                        <BrandCarousel />
                    </section>



                </section>





            </main>

        </>
    )
}