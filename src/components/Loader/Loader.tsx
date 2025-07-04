import { useEffect, useState } from 'react';
import './Loader.css';
import { useTheme } from '../ThemeContext/ThemeContext';


export const Loader: React.FC = () => {
    const [progress, setProgress] = useState<number>(0);
    const { theme } = useTheme();



    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 1);

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <section className="container-load" style={{ background: theme === "dark" ? '#222' : '#F2F4F7' }}>
                <section className="loader-container">
                    <div className="loader-bar" style={{ background: theme === "dark" ? '#FFA55D' : '#60B5FF', width: `${progress}%` }} />
                    <span className="loader-text">{progress}%</span>
                </section>
            </section>
        </>
    )
}