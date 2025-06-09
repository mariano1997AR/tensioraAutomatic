import type { ReactNode } from 'react';
import './ModalFormulas.css';
import { useTheme } from '../ThemeContext/ThemeContext';

interface ModalProps{
    mostrar:boolean;
    cerrar:()=> void;
    children:ReactNode;
}



export const ModalFormulas:React.FC<ModalProps> =({mostrar,cerrar,children})=>{
    const {theme} = useTheme();
    if(!mostrar) return null;
    return(
        <>
           <section className='modal-overlay' onClick={cerrar}>
               <section className='modal-content' onClick={(e) => e.stopPropagation()} style={{background:theme === "dark" ? 'white':'#60B5FF',color:theme === "dark" ? 'black':'white'}}>
                  <button className='modal-close' onClick={cerrar}>X</button>
                   {children}
               </section>
           </section>
        
        </>
    )
}