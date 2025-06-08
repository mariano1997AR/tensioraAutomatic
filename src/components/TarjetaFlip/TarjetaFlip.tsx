import './TarjetaFlip.css';
import {  useState } from 'react';
import type { ReactNode } from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';

interface TarjetaFlipProps {
    titulo: string;
    descripcion: string;
    icono: ReactNode;
}



export const TarjetaFlip: React.FC<TarjetaFlipProps> = ({ titulo, descripcion, icono }) => {
    const [voltear, setVoltear] = useState<boolean>(false);
    const {theme} = useTheme();
    return (
        <>
            <section className='flip-card' onClick={() => setVoltear(!voltear)}>
                <section className={`flip-inner ${voltear ? 'flipped' : ''}`}>
                    {/* Frente */}
                    <section className='flip-front' style={{background:theme === "dark" ? '#213448' : '#AFDDFF'}}>
                        <section className='svg-container'>{icono}</section>
                        <h2>{titulo}</h2>
                    </section>

                    {/* Reverso */}

                    <section className='flip-back' style={{background:theme === "dark" ? '#F7F7F7':'#222831',color:theme === "dark" ? 'black':'white'}}>
                        <p className='text-2xl'>{descripcion}</p>
                    </section>

                </section>

            </section>
        </>
    )
}