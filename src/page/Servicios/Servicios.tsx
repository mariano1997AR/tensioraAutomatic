import { useTheme } from '../../components/ThemeContext/ThemeContext';
import './Servicios.css';
import { Title,Meta } from 'react-head';


export const Servicios: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>
            <Title>Servicios | Tensiora Automatic</Title>
            <Meta name='keywords' content='desarrollo web, sistemas a medida, automatización,programador de software, desarrollo backend, IA con Machine Learning, desarrollo de aplicaciones, programador freelance,React,Node.js, php,git '/>
            <Meta name='description' content='Ofrecemos servicios de desarrollo web, automatización,base de datos, AI y Machine Learning y asesoramiento en aplicaciónes' />
            <main>
                <h1 className='text-center py-4'>Programación</h1>
                <section className='container-servicios'>

                    <article className='item-servicios' style={{ borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} >
                        <h2 className='text-center py-3 subtitulo ' style={{ borderBottomColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Desarrollo web</h2>
                    
                        <ul>
                            <li><b> - Landing pages</b> optimizadas para SEO</li>
                            <li><b> - Sitios web institucionales</b> para negocios </li>            
                            <li><b> - Integraciones con APIs</b> (Google Maps, Stripe, redes sociales, etc)</li>
                            <li><b> - Sistenas de gestión(ERP,CRM)</b> personalizados</li>
                        </ul>


                    </article>
                    <article className='item-servicios' style={{ borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                         <h2 className='text-center py-3 subtitulo' style={{ borderBottomColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>Automatización </h2>
                
                         <ul>
                            <li> - Automatización de tareas repetitivas (descargas,reportes, backups)</li>
                            <li> - Bots para redes sociales,Telegram, Whatsapp</li>
                            <li> - Raspado de datos (Web Scrapping)</li>
                            <li> - Conectores entre plataformas (ej: Google Sheets, Gmail)</li>
                         </ul>
                    </article>
                    <article className='item-servicios' style={{ borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                         <h2 className='text-center py-3 subtitulo' style={{ borderBottomColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} >Base de datos</h2>
                      
                         <ul>
                             <li> - Diseño de base de datos</li>
                             <li> - Migración y optimización</li>
                             <li> - Creación de paneles con dashboards</li>
                             <li> - Backups y restauración de datos</li>
                         </ul>
                    </article>
                    <article className='item-servicios' style={{ borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                         <h2 className='text-center py-3 subtitulo' style={{ borderBottomColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} >AI y Machine Learning</h2>
                        
                         <ul>
                              <li> - Chatbots personalizados</li>
                              <li> - Análisis predictivos</li>
                              <li> - Visión artificial (reconocimiento de imágenes)</li>
                              <li> - Clasificación de datos (clientes, productos,etc)</li>

                         </ul>
                    </article>


                </section>
            </main>

        </>
    )
}