import { useTheme } from '../ThemeContext/ThemeContext';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import './NavbarResponsive.css';
import { Link } from 'react-router-dom';


export const NavbarResponsive: React.FC = () => {
    const { theme } = useTheme();
    return (
        <>


            <nav className="menu-container">

                <section className='logo-responsive items-center gap-2' style={{ color: theme === "dark" ? 'white' : 'black' }}>

                    <Link className="a-logo " style={{ color: theme === "dark" ? ' #F5F5F5' : '#4A4947' }} to="/home">
                        Tensiora <span className="azul" style={{ color: theme === "dark" ? '#FCEF91' : '#60B5FF' }}>Electric</span>
                    </Link>

                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill={theme === "dark" ? 'white' : 'black'} stroke="none">
                            <path d="M295 4941 c-22 -10 -54 -34 -72 -52 -67 -71 -63 6 -63 -1211 0 -1053
1 -1105 19 -1143 10 -22 34 -54 52 -72 66 -63 68 -63 499 -63 l390 0 0 -813
c0 -777 1 -817 20 -891 63 -248 268 -453 516 -516 75 -19 118 -20 1603 -20
1465 0 1528 1 1566 19 22 10 54 34 72 52 51 54 63 95 63 211 0 117 -15 162
-71 215 -70 66 -24 63 -931 64 -610 0 -832 3 -858 12 -39 14 -57 48 -46 91 13
52 43 56 381 56 337 0 349 2 414 63 70 67 71 71 71 469 l0 356 29 7 c41 9 116
65 151 112 48 65 60 113 60 238 l0 113 53 7 c67 9 198 50 262 83 220 111 380
302 457 548 21 65 22 92 26 499 2 301 0 441 -8 468 -14 49 -74 115 -125 138
-27 13 -64 19 -112 19 l-73 0 0 355 c0 335 -1 357 -21 410 -97 260 -501 260
-598 0 -20 -53 -21 -75 -21 -410 l0 -355 -160 0 -160 0 0 355 c0 335 -1 357
-21 410 -97 260 -501 260 -598 0 -20 -53 -21 -75 -21 -410 l0 -355 -72 0 c-85
0 -137 -20 -185 -71 -63 -67 -63 -66 -63 -521 0 -378 2 -420 20 -496 60 -251
233 -467 465 -584 64 -33 195 -74 263 -83 l52 -7 0 -113 c0 -125 12 -173 60
-238 35 -47 110 -103 151 -112 l29 -7 0 -317 c0 -212 -4 -329 -11 -351 -20
-57 -41 -60 -386 -60 -348 0 -357 -2 -424 -77 -48 -53 -62 -99 -57 -183 4 -81
35 -135 107 -185 l43 -30 851 -5 c648 -4 857 -8 873 -17 41 -24 56 -106 30
-168 -11 -26 -23 -36 -53 -45 -27 -8 -443 -10 -1508 -8 -1588 4 -1494 1 -1615
55 -108 49 -225 166 -273 273 -52 116 -50 89 -54 947 l-4 803 391 0 c431 0
433 0 499 63 18 18 42 50 52 72 18 38 19 90 19 1143 0 1217 4 1140 -63 1211
-18 18 -50 42 -72 52 -38 18 -83 19 -905 19 -822 0 -867 -1 -905 -19z m1729
-155 c23 -9 37 -24 45 -46 16 -47 16 -2073 0 -2120 -22 -62 3 -60 -869 -60
-872 0 -847 -2 -869 60 -16 47 -16 2073 0 2120 22 61 -5 59 867 60 655 0 798
-2 826 -14z m1416 -19 c19 -12 43 -38 54 -57 20 -34 21 -52 24 -492 l3 -458
-161 0 -161 0 3 458 c3 440 4 458 24 492 30 51 78 80 134 80 32 0 58 -7 80
-23z m960 0 c19 -12 43 -38 54 -57 20 -34 21 -52 24 -492 l3 -458 -161 0 -161
0 3 458 c3 440 4 458 24 492 30 51 78 80 134 80 32 0 58 -7 80 -23z m-1360
-1027 c0 -150 -22 -140 320 -140 342 0 320 -10 320 140 l0 100 160 0 160 0 0
-100 c0 -150 -22 -140 320 -140 342 0 320 -10 320 140 l0 100 35 0 c20 0 51
-6 70 -14 55 -23 58 -46 53 -447 -5 -319 -7 -362 -26 -432 -69 -253 -270 -454
-518 -517 -43 -11 -80 -20 -84 -20 -4 0 -10 22 -13 49 -12 98 -81 192 -175
238 -49 24 -69 28 -142 28 -72 -1 -94 -5 -142 -28 -94 -46 -163 -140 -175
-238 -3 -27 -9 -49 -13 -49 -4 0 -41 9 -83 19 -249 64 -443 255 -518 511 -20
69 -22 103 -26 434 -6 403 -3 428 50 451 18 8 49 14 70 15 l37 0 0 -100z m880
-1213 c69 -46 75 -69 75 -287 0 -179 -2 -198 -21 -230 -63 -107 -205 -107
-268 0 -19 32 -21 51 -21 230 0 179 2 198 21 230 46 78 144 105 214 57z"/>
                            <path d="M1152 4553 c-7 -3 -125 -230 -262 -504 -263 -526 -272 -547 -230
-589 19 -19 33 -20 240 -20 l220 0 0 -300 c0 -287 1 -301 20 -320 20 -20 71
-27 105 -14 9 4 126 227 266 505 262 526 271 547 229 589 -19 19 -33 20 -240
20 l-220 0 0 300 c0 287 -1 301 -20 320 -19 19 -76 26 -108 13z m-8 -779 c16
-11 61 -14 208 -14 103 0 188 -3 187 -7 0 -5 -58 -123 -129 -263 l-129 -255 0
163 c-1 217 16 202 -231 202 -104 0 -190 2 -190 5 0 3 57 120 128 260 l127
256 5 -167 c5 -149 7 -167 24 -180z"/>
                            <path d="M3760 2240 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z" />
                        </g>
                    </svg>



                </section>


                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-button" style={{ color: theme === "dark" ? 'white' : 'black' }}>    <section className='switch-responsive'>
                    <ThemeSwitcher />
                </section>☰</label>

                <ul className="menu" >
                    <li><Link to='/home' className='a-link-navbar-responsive' style={{ color: theme === "dark" ? 'white' : 'black' }}>Inicio</Link></li>
                    <li><Link to='/formulas-para-electricistas' className='a-link-navbar-responsive' style={{ color: theme === "dark" ? 'white' : 'black' }}>Formulas</Link></li>
                    <li><a href="#" className='a-link-navbar-responsive' style={{ color: theme === "dark" ? 'white' : 'black' }}>Ingresar</a></li>
                    <li><a href="#" className='a-link-navbar-responsive' style={{ color: theme === "dark" ? 'white' : 'black' }}>Contacto</a></li>
                </ul>

            </nav>
        </>
    )
}