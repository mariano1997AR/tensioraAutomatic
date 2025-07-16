import './BrandCarousel.css';
import jsLogo from '../../assets/brands/js-logo.webp';
import nodejslogo from '../../assets/brands/nodejs.webp';
import reactlogo from '../../assets/brands/react-logo.webp';
import phplogo from '../../assets/brands/php-logo.webp';
import typescriptlogo from '../../assets/brands/typescript-logo.webp';
import donwebcloud from '../../assets/brands/donwebcloud-logo.webp';
import javalogo from '../../assets/brands/java-logo.webp';
import { useEffect, useRef } from 'react';

const brands = [
    jsLogo,
    nodejslogo,
    reactlogo,
    phplogo,
    typescriptlogo,
    donwebcloud,
    javalogo,
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