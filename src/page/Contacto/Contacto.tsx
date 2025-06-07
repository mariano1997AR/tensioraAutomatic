import { CarrouselContacto } from '../../components/CarrouselContacto/CarrouselContacto';
import { FormularioContacto } from '../../components/FormularioContacto/FormularioContacto';
import './Contacto.css';




export const Contacto:React.FC = ()=>{
    return(
        <>
          <section className='container-contacto'>
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