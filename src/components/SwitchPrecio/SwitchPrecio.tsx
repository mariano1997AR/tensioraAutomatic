import './SwitchPrecio.css';
import type { switchPriceComponent } from '../types/types';
import { useTheme } from '../ThemeContext/ThemeContext';


export const SwitchPrecio = ({ checked, onChange }: switchPriceComponent) => {
    const { theme } = useTheme();

    return (
        <>
            <section className='container-switch-precio' >
                <label className='switch-precio' >
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => onChange(e.target.checked)}
                       
                    />
                    <span className='slider-precio' style={{background:theme === "dark" ? '#FFA55D':'#63C8FF'}}></span>
                </label>
            </section>

        </>
    )
} 