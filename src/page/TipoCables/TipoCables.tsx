import './TipoCables.css';
import { Title, Meta } from 'react-head';

const TipoCables: React.FC = () => {
     return (
          <>
               <Title>Tipo de cables | Tensiora Automatic</Title>
               <Meta name='description' content='sitio web de contacto' />
               <Meta name='keywords' content='contacto de tensiora electric, contactanos por dudas, contacto de electricidad' />
               <Meta property='og:title' content='Contacto | Tensiora Electric' />

               <section className="container-tipo-cables">
                    <article className='mx-2'>
                         <h1 className='text-center'>Cables Eléctricos</h1>
                         <p>
                              Los cables eléctricos sirven para conducir la corriente eléctrica de un punto a otro,
                              permitiendo el funcionamiento de dispositivos y sistemas eléctricos.
                              Transportan la electricidad de manera segura, utilizando conductores metálicos recubiertos de
                              material aislante para evitar cortocircuitos y proteger como descargas.
                         </p>
                    </article>
                    <article className='mx-2'>
                         <h2><b>Clasificación de cables eléctricos</b></h2>
                    </article>
                    <article className='mx-2'>
                         <h3><b>Por estructura:</b></h3>
                         <ul>
                              <li>Unipolar: Un solo hilo conductor.</li>
                              <li>Multipolar: Dos o más hilos conductores.</li>
                              <li>Flexible: Con hilos finos que permiten deformación.</li>
                              <li>Rigido: Dificil de deformar.</li>
                              <li>Coaxial: Con núcleos de cobre, aislante dieléctrico y escudo trenzado.</li>
                              <li>Trenzado: Pares de cables aislados trenzados.</li>
                              <li>Dúplex: Para baja tensión.</li>
                         </ul>
                    </article>
                    <article className='mx-2'>
                         <h3><b>Por aislamiento:</b></h3>
                         <ul>
                              <li>Termoplástico: Aislamiento común, como el PVC</li>
                              <li>Termoestable: Aislamiento que puede soportar temperaturas más altas, como XLPE o EPR</li>
                         </ul>
                    </article>
                    <article className='mx-2'>
                         <h3><b>Por aplicación:</b></h3>
                         <ul>
                              <li>Baja tensión: Para instalaciones domésticas.</li>
                              <li>Media y alta tensión: Para transmisión y distribución.</li>
                              <li>Control: Para sistemas de señalización y control.</li>
                              <li>Instrumentación: Para transmisión de señales de entornos industriales.</li>
                              <li>Solares: Para conexiones entre paneles fotovoltaicos.</li>
                         </ul>
                    </article>
                    <article className='mx-2'>
                         <h3>Por tipo conductor:</h3>
                         <ul>
                              <li>Cobre: Más común en instalaciones eléctricas.</li>
                              <li>Aluminio: En aplicaciones donde se busca reducir el peso.</li>
                         </ul>
                    </article>
                    <article className='mx-2'>
                         <h3>Color de los cables indican su función:</h3>
                         <ul>
                              <li> Verde-amarillo: Tierra</li>
                              <li> Azul:Neutro</li>
                              <li> Marrón,negro, o gris: Fase.</li>
                         </ul>
                    </article>

               </section>

          </>
     )
}

export default TipoCables;