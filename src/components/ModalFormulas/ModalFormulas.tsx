import type { ReactNode } from 'react';
import './ModalFormulas.css';

interface ModalProps{
    mostrar:boolean;
    cerrar:()=> void;
    children:ReactNode;
}



export const ModalFormulas:React.FC<ModalProps> =({mostrar,cerrar,children})=>{
    if(!mostrar) return null;
    return(
        <>
           <section className='modal-overlay' onClick={cerrar}>
               <section className='modal-content' onClick={(e) => e.stopPropagation()}>
                  <button className='modal-close' onClick={cerrar}>X</button>
                   {children}
               </section>
           </section>
        
        </>
    )
}