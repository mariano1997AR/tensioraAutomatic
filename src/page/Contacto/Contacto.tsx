import { BtnAtras } from '../../components/BtnAtras/BtnAtras';
import { CarrouselContacto } from '../../components/CarrouselContacto/CarrouselContacto';
import { FormularioContacto } from '../../components/FormularioContacto/FormularioContacto';
import { Title,Meta } from 'react-head';
import './Contacto.css';




export const Contacto:React.FC = ()=>{
   
    return(
        <>
         <Title>Contacto | Tensiora Electric</Title>
         <Meta name='description' content='sitio web de contacto' />
         <Meta name='keywords' content='contacto de tensiora electric, contactanos por dudas, contacto de electricidad'/>
         <Meta property='og:title' content='Contacto | Tensiora Electric'/>

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