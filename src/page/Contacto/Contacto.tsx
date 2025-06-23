import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { CarrouselContacto } from '../../components/CarrouselContacto/CarrouselContacto';
import { FormularioContacto } from '../../components/FormularioContacto/FormularioContacto';
import { Title,Meta } from 'react-head';
import './Contacto.css';




export const Contacto:React.FC = ()=>{
   
    return(
        <>
         <Title>Contacto | Tensiora Automatic</Title>
         <Meta name='keywords' content='contacto de tensiora automatic, contacto desarrollador, programador freelance, contratar programador, desarrollador de software, soluciones digitales'/>
         <Meta name='description' content='Ponete en contacto con nosotros para desarrollar tu sitio web, sistemas personalizados o aplicación a medida' />
          <section className='container-contacto'>
               <article className='py-3'>
                  <BtnAtras />
               </article>
               <article className='py-2'>
                    <CarrouselContacto />
               </article>
               <article className='py-2'>
                    <FormularioContacto />
               </article>
          </section>
         
        
        </>
    )
}