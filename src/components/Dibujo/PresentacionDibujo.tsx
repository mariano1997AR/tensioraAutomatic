import { useRef, useEffect, useState } from 'react';
import './PresentacionDibujo.css';
import { useTheme } from '../ThemeContext/ThemeContext';


const palabra = 'Tensiora';


export const PresentacionDibujo = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [indice, setIndice] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const {theme} = useTheme();

    const color = theme === 'dark' ? '#f5f5f5' : '#222';
    const background = theme === "dark" ? '#222':'#f5f5f5';
    
    //Funcion para redibujar
    const draw = ()=>{
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if(!ctx) return;

        //Obtener ancho dinamico del contenedor
        const width = container.clientWidth;
        const height = 200;

        //Ajustar el tamaño del canvas
        canvas.width = width;
        canvas.height = height;

        //Dibujar fondo
        ctx.fillStyle  = background;
        ctx.fillRect(0,0,width,height);

        //Dibujar texto letra por letra
        ctx.font ="2.5em monospace";
        ctx.fillStyle = color;
        ctx.textBaseline = 'top';

        for(let i = 0; i<indice; i++){
          const letra = palabra[i];
          const letterSpacing = width / (palabra.length + 2); //espacio adaptativo
          ctx.fillText(letra,letterSpacing * (i + 1),50);
        }
    };


    useEffect(() => {
       draw(); //Dibujar al cambiar el indice o tema

    }, [indice,color,background]);

    //Redibujar al hacer resize
    useEffect(()=>{
       const handleResize = ()=> draw();
       window.addEventListener('resize',handleResize);
       return ()=> window.removeEventListener('resize',handleResize);
    },[]);

    //Animacion letra por letra

    useEffect(()=>{
         if(indice < palabra.length){
             const timer = setTimeout(()=>setIndice((prev) => prev + 1),300);
             return ()=> clearTimeout(timer);
         }
    },[indice])

    const reiniciar = () => {
        setIndice(0);
    };
    return (
        <>
            <section ref={containerRef} className='container-draw' style={{marginRight:'20px'}}>
                <article className='section-dibujo'>
                    <canvas 
                       ref={canvasRef} 
                       style={{
                          width:'100%',
                          height:'auto',
                          maxWidth:'100%',
                          
                       }}   
                    />
                </article>
                <article className='sector-btn'>
                    <button className='btn-reiniciar-presentacion' onClick={reiniciar} style={{ marginTop: '1rem' }}>
                        Reiniciar
                    </button>
                </article>


            </section>

        </>
    )

}