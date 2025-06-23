import { useState } from 'react';
import './card3D.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext/ThemeContext';

interface Card3DProps{
    title:string;
    linkText:string;
    to:string;
}


export const Card3D: React.FC<Card3DProps> = ({title,linkText,to}) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const {theme} = useTheme();


    const handleCarcClick = (e:React.MouseEvent)=>{
       const target = e.target as HTMLElement;
       //Si el click fue sobre un Link, no hacer flip
       if(target.closest('a')) return;
       setIsFlipped(!isFlipped);
    }

    return (
        <>
            <div className="card-container" onClick={handleCarcClick} >
                <div className={`card ${isFlipped ? 'flipped' : ''}`}>
                    <div className="card-face card-front"  style={{background:theme === "dark" ? '#393E46':'#60B5FF'}}>
                        <h2 style={{color:theme === "dark" ? '#F5F5F5':''}}>{title}</h2>
                    </div>
                    <div className="card-face card-back">
                        <Link className='link' style={{ color: theme === "dark" ? '#4A4947' : '#F5F5F5', background: theme === "dark" ? '#FCEF91' : '#60B5FF' }} to={to} >{linkText}</Link>
                    </div>
                </div>
            </div>

        </>
    )
}