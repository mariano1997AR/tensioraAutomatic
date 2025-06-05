import { useNavigate } from 'react-router-dom';
import './BtnAtras.css';
import { useTheme } from '../ThemeContext/ThemeContext';


export const BtnAtras: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    return (
        <>
            <section>
                <button
                    onClick={() => navigate(-1)}
                    className='btn-volver'
                    style={{ borderBottomColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}
                >
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="26.000000pt" height="26.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill={theme === "dark" ? 'white' : 'black'} stroke="none">
                            <path d="M1825 4250 c-58 -29 -1579 -1552 -1600 -1602 -19 -48 -19 -128 0
-176 11 -26 247 -268 783 -806 807 -808 815 -816 902 -816 67 0 113 20 161 70
71 72 84 161 38 250 -10 19 -272 289 -583 600 l-566 565 1897 5 1898 5 45 25
c24 14 58 45 75 68 27 40 30 51 30 122 0 71 -3 82 -30 122 -17 23 -51 54 -75
68 l-45 25 -1898 5 -1897 5 571 570 c385 385 577 583 590 610 49 104 3 231
-103 286 -50 26 -140 25 -193 -1z"/>
                        </g>
                    </svg>
                </button>
            </section>

        </>
    )
}