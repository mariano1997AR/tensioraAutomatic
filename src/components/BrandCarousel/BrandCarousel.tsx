import './BrandCarousel.css';
import totalmarca from '../../assets/marcas/total-marca.webp';
import bremen from '../../assets/marcas/bremen-marca.webp';
import bulit from '../../assets/marcas/bulit.webp';
import unit from '../../assets/marcas/unit-t.webp';
import { useEffect, useRef } from 'react';

const brands = [
    totalmarca,
    bremen,
    bulit,
    unit
]



export const BrandCarousel: React.FC = () => {
    const carouselRef = useRef<any>(null);

    useEffect(() => {
        const scrollCarousel = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollleft += 1;
                if (carouselRef.current.scrollleft >= carouselRef.current.scrollWidth / 2) {
                    carouselRef.current.scrollleft = 0;
                }
            }
        };

        const interval = setInterval(scrollCarousel);
        return () => clearInterval(interval);

    }, [])
    return (
        <>
            <section className='carousel-container-brand'>
                <section className='carousel-track' ref={carouselRef}>
                    {[...brands, ...brands].map((brand, index) => (
                        <img key={index} src={brand} alt='Brand Logo' className='brand-logo' />
                    ))}
                </section>
            </section>
        </>
    )
}