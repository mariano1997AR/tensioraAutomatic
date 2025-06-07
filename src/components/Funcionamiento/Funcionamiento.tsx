import { useState } from 'react';
import './Funcionamiento.css';
import {motion,AnimatePresence} from 'framer-motion';
import { useTheme } from '../ThemeContext/ThemeContext';
import { ModuloPlataformaWeb } from '../ImagenVectorial/ModuloPlataformaWeb';
import { ModuloPersonalElectricista } from '../ImagenVectorial/ModuloPersonalElectricista';
import { ModuloFormulas } from '../ImagenVectorial/ModuloFormulas';



export const Funcionamiento:React.FC = ()=>{
    const [selectedID,setSelectedID] = useState<number | null>(null);
    const {theme} = useTheme();
    const items = [
        {
            id:1,
            title:'Plataforma Web',
            content:'Ingresas a la plataforma web',
            image:<ModuloPlataformaWeb className='image-svg' width={500} height={500} fill={theme === "dark" ? 'white' : 'black'}  />
            
        },
        {
            id:2,
            title:'Personal calificado',
            content:'cada persona va a estar certificada para el manejo de circuitos electricos',
            image:<ModuloPersonalElectricista className='image-svg' width={500} height={500} fill={theme === "dark" ? 'white':'black'} />
        },
        {
            id:3,
            title:'Formulas Matematicas',
            content:'Brindamos formulas matematicas para tecnicos electricistas, en el caso que necesiten realizar los calculos correspondientes',
            image:<ModuloFormulas className='image-svg' width={500} height={500} fill={theme === "dark" ? 'white':'black'} />
        }
       
    ]
    return(
        <>
            <section className='container-funcionamiento'>
                  <h2 className='text-center text-3xl  pb-3'>Funcionamiento de la Aplicación</h2>
                  <section className='gallery'>
                     {items.map((item) =>(
                        <motion.div
                           layout
                           style={{backgroundColor:theme === "dark" ? "#243642":"white"}}
                           layoutId={`card-${item.id}`}
                           key={item.id}
                           className='card text-center text-2xl'
                           onClick={()=> setSelectedID(item.id)}
                           
                        >
                            {item.image}
                            <motion.h3 className='py-2' style={{color:theme === "dark" ? '#f5f5f5':''}} layoutId={`title-${item.id}`}>{item.title}</motion.h3>
                        </motion.div>
                     ))}

                     <AnimatePresence>
                          {selectedID !== null && (
                             <motion.div
                                layoutId={`card-${selectedID}`}
                                className='card expanded'
                                onClick={()=> setSelectedID(null)}
                                initial={{opacity:0}}
                                animate={{opacity:1}}
                                exit={{opacity:0}}
                             >
                              <motion.h3 layoutId={`title-${selectedID}`}>
                                   {items.find(i => i.id === selectedID)?.title}
                              </motion.h3>
                              <motion.p>{items.find(i => i.id === selectedID)?.content}</motion.p>

                             </motion.div>
                          )}
                     </AnimatePresence>

                  </section>

            </section>
        
        
        </>
    )
}