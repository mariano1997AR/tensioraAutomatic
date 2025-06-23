import { useEffect, useState } from 'react';
import cicloVidaPrograma from '../../assets/carousel/ciclo-vida-desarrollo.webp';
import tensioraautomatic from '../../assets/carousel/bienvenida.webp';
import website from '../../assets/carousel/website.webp';
import './CarrouselMain.css';

const images = [
    tensioraautomatic,
    cicloVidaPrograma,
    website
]


export const CarrouselMain: React.FC = () => {
    //const { theme } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 4500)
        return () => clearInterval(interval);
    }, [])

    const goToSlide = (index: number) => setCurrentIndex(index);
    const goPrev = () => setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
    const goNext = () => setCurrentIndex(prev => (prev + 1) % images.length);
    return (
        <>
            <section className='carousel-container'>
                <section className='carousel-wrapper ' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, i) => (
                        <img key={i} src={img} className='carousel-image' alt={`Slide ${i}`}  loading='lazy'/>
                    ))}
                </section>

                {/* Flechas */}

                <button className='arrow left' onClick={goPrev}>&#10094;</button>
                <button className='arrow right' onClick={goNext}>&#10095;</button>

                {/* Indicadores */}

                <section className='indicators'>
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(i)}
                        ></span>
                    ))}

                </section>
            </section>


        </>
    )
}