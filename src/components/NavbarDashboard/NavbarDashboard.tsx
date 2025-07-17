import React, { useState, useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext/ThemeContext";
import { useNavigate } from "react-router-dom";

interface DashboardNavbarProps {
    user: string;
    message: string;
}

export const NavbarDashboard: React.FC<DashboardNavbarProps> = ({ user, message }) => {
    const { theme } = useTheme();
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/inicio');
    };


    return (
        <>

            <nav className="navbar-container mb-4" style={{ borderBottomColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                <header className="logo flex items-center gap-2">
                    <p className='logo-dashboard'>Dashboard</p>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                            <meta name="Producer" content="Online-Convert" /></metadata>
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={theme === "dark" ? 'white':'black'} stroke="none">
                            <path d="M1141 4710 c-48 -11 -60 -28 -67 -96 -6 -58 -8 -61 -41 -73 -32 -12 -37 -11 -86 23 -29 20 -62 36 -74 36 -24 0 -98 -56 -159 -121 -97 -104 -104 -134 -50 -205 33 -43 34 -47 21 -77 -14 -35 -34 -45 -85 -46 -54 -1 -78 -24 -86 -80 l-6 -48 -61 -7 c-129 -13 -254 -102 -313 -221 l-29 -60 -3 -1059 c-3 -1178 -6 -1114 65 -1216 50 -71 123 -126 202 -150 60 -19 93 -20 716 -20 l653 0 -14 -65 c-20 -97 -69 -211 -123 -290 l-47 -70 -220 -5 c-243 -6 -267 -11 -304 -73 -17 -27 -20 -51 -20 -157 0 -140 11 -173 72 -210 32 -20 53 -20 1018 -20 965 0 986 0 1018 20 61 37 72 70 72 210 0 106 -3 130 -20 157 -37 62 -61 67 -304 73 l-220 5 -47 70 c-54 79 -103 193 -123 290 l-14 65 328 0 327 0 7 -69 c11 -119 59 -195 151 -237 l50 -24 750 0 c708 0 752 1 791 19 61 28 109 75 135 133 l24 53 0 1595 c0 1328 -2 1603 -14 1643 -17 60 -77 128 -139 159 l-47 23 -750 0 -750 0 -47 -23 c-26 -13 -63 -41 -83 -64 -62 -68 -68 -92 -73 -295 l-4 -183 -538 0 -537 0 -7 50 c-8 57 -31 80 -86 81 -51 1 -71 11 -85 46 -13 30 -12 34 21 77 45 60 45 91 -5 153 -73 90 -170 173 -205 173 -11 0 -44 -16 -73 -36 -49 -34 -54 -35 -86 -23 -33 12 -35 15 -41 73 -7 69 -18 84 -72 96 -47 11 -216 11 -263 0z m214 -175 c4 -30 12 -61 19 -69 10 -15 138 -73 181 -83 12 -2 39 9 70 31 l50 36 47 -47 c27 -26 48 -51 48 -56 0 -4 -14 -26 -31 -47 -25 -31 -30 -45 -26 -72 5 -38 54 -157 71 -175 6 -7 36 -16 66 -20 53 -8 55 -10 64 -46 6 -23 6 -51 0 -74 -9 -37 -11 -38 -63 -45 -29 -3 -59 -12 -66 -20 -18 -18 -66 -136 -72 -176 -4 -27 1 -41 26 -72 17 -21 31 -43 31 -47 0 -5 -21 -30 -48 -56 l-47 -46 -53 36 c-50 35 -54 36 -85 24 -18 -7 -59 -23 -91 -36 -71 -27 -82 -40 -91 -110 l-6 -55 -74 0 -74 0 -6 55 c-9 70 -20 83 -91 110 -32 13 -73 29 -91 36 -31 12 -35 11 -85 -24 l-53 -36 -47 46 c-27 26 -48 51 -48 56 0 4 14 26 31 47 25 31 30 45 26 72 -6 40 -54 158 -72 176 -7 8 -37 17 -66 20 -52 7 -54 8 -63 45 -6 23 -6 51 0 74 9 36 11 38 64 46 30 4 60 13 66 20 17 18 66 137 71 175 4 27 -1 41 -26 72 -17 21 -31 43 -31 47 0 5 21 30 48 56 l47 47 50 -36 c31 -22 58 -33 70 -31 43 10 171 68 181 83 7 8 15 39 19 69 l6 55 74 0 74 0 6 -55z m3471 -101 c15 -11 37 -33 48 -48 21 -27 21 -35 24 -1010 l2 -982 -210 -234 c-116 -129 -216 -245 -221 -258 -5 -13 -9 -198 -9 -418 l0 -394 -564 2 -565 3 -30 29 c-33 31 -51 79 -51 134 l0 32 259 0 c230 0 266 2 322 20 79 24 152 79 202 150 71 102 68 38 65 1216 l-3 1059 -29 60 c-39 79 -110 149 -194 188 l-67 32 -277 3 -278 3 0 147 c0 81 5 163 10 183 12 44 52 86 94 98 18 6 335 9 738 8 697 -2 707 -2 734 -23z m-4313 -596 c4 -28 12 -58 20 -65 7 -7 40 -18 72 -23 63 -10 66 -12 83 -52 10 -24 7 -31 -24 -72 -54 -71 -47 -101 50 -205 61 -65 135 -121 159 -121 12 0 45 16 74 36 49 34 54 35 86 23 33 -12 35 -15 41 -73 3 -33 12 -67 20 -74 42 -42 320 -42 362 0 8 7 17 41 20 74 6 58 8 61 41 73 32 12 37 11 86 -23 29 -20 62 -36 73 -36 35 0 132 83 205 173 50 62 50 93 5 153 -31 41 -34 48 -24 72 17 40 20 42 83 52 32 5 65 16 72 23 8 7 16 37 20 65 l6 52 852 0 c944 0 903 3 983 -66 22 -19 52 -57 66 -86 l26 -52 0 -963 0 -963 -1875 0 -1876 0 3 958 3 957 28 57 c45 91 136 155 223 157 30 1 31 -1 37 -51z m4385 -2243 c-3 -456 -1 -443 -71 -485 -26 -16 -51 -20 -134 -20 l-103 0 0 379 0 379 153 170 152 171 3 -92 c2 -51 2 -277 0 -502z m-943 -2 c-9 -21 -24 -49 -34 -63 -27 -38 -97 -88 -139 -100 -52 -14 -3312 -14 -3364 0 -42 12 -112 62 -139 100 -10 14 -25 42 -34 63 l-15 37 1870 0 1870 0 -15 -37z m-1621 -325 c29 -150 58 -232 144 -400 2 -5 -168 -8 -378 -8 -210 0 -380 3 -378 8 86 168 115 250 144 400 l4 22 230 0 230 0 4 -22z m721 -638 l0 -95 -955 0 -955 0 -3 84 c-2 46 -1 90 2 98 5 11 170 13 958 11 l953 -3 0 -95z" />
                            <path d="M1143 4320 c-137 -49 -227 -156 -254 -304 -31 -169 61 -346 218 -422 76 -36 204 -45 284 -19 167 53 271 195 273 370 2 176 -97 319 -259 375 -75 26 -190 26 -262 0z m232 -129 c141 -64 201 -225 133 -357 -48 -92 -132 -144 -233 -144 -146 0 -259 113 -259 260 0 147 113 260 259 260 37 0 75 -7 100 -19z" />
                            <path d="M4480 4341 c-75 -16 -146 -74 -174 -143 -24 -56 -20 -143 8 -204 82 -176 343 -178 430 -2 46 91 32 196 -36 272 -55 63 -147 94 -228 77z m84 -135 c91 -38 101 -157 16 -201 -37 -19 -63 -19 -100 0 -39 20 -60 53 -60 93 0 64 32 100 108 121 1 1 17 -5 36 -13z" />
                            <path d="M4287 3602 c-22 -25 -21 -75 1 -95 16 -15 48 -17 238 -17 248 0 264 4 264 64 0 63 -10 66 -262 66 -205 0 -226 -2 -241 -18z" />
                            <path d="M4285 3164 c-10 -11 -15 -29 -13 -53 5 -58 21 -62 271 -59 203 3 220 4 233 22 19 26 18 71 -2 90 -24 24 -465 24 -489 0z" />
                            <path d="M4292 2734 c-15 -10 -22 -25 -22 -49 0 -64 6 -65 259 -65 208 0 229 2 244 18 23 25 21 68 -3 92 -19 19 -33 20 -238 20 -181 0 -221 -3 -240 -16z" />
                            <path d="M2575 3788 c-47 -26 -46 -55 3 -139 l39 -66 -86 -55 c-527 -339 -1122 -562 -1771 -663 -128 -20 -158 -28 -173 -46 -22 -27 -22 -51 2 -80 l19 -24 239 1 c662 1 1261 143 1844 435 76 38 140 69 142 69 2 0 21 -25 41 -55 32 -48 40 -55 70 -55 19 0 39 7 48 18 24 26 258 558 258 585 0 52 -21 58 -252 67 -117 5 -256 11 -308 14 -61 3 -102 1 -115 -6z m377 -134 l135 -7 -59 -131 c-33 -72 -66 -146 -74 -164 l-14 -34 -26 31 c-15 19 -35 31 -49 31 -13 0 -77 -29 -142 -64 -211 -115 -500 -235 -737 -305 -128 -38 -392 -101 -421 -100 -11 0 43 24 120 52 375 140 712 311 995 504 97 66 107 89 70 155 l-21 38 44 0 c24 0 105 -3 179 -6z" />
                            <path d="M3360 3212 c-19 -9 -40 -28 -47 -42 -10 -19 -13 -168 -13 -637 l0 -613 29 -32 29 -33 161 0 161 0 27 28 28 27 3 615 c3 684 5 662 -63 691 -53 22 -269 19 -315 -4z m250 -672 l0 -560 -90 0 -90 0 0 560 0 560 90 0 90 0 0 -560z" />
                            <path d="M2835 2986 c-61 -28 -60 -15 -63 -541 -2 -332 0 -492 8 -518 19 -66 51 -77 215 -77 146 0 167 5 202 50 9 11 12 139 13 522 l0 508 -29 32 -29 33 -144 2 c-105 2 -151 -1 -173 -11z m245 -561 l0 -445 -90 0 -90 0 0 445 0 445 90 0 90 0 0 -445z" />
                            <path d="M2314 2760 c-12 -4 -31 -21 -43 -36 -21 -26 -21 -33 -21 -416 l0 -390 34 -34 34 -34 141 0 c107 0 149 4 171 15 59 31 60 38 60 445 0 407 -1 414 -60 445 -22 11 -62 15 -162 14 -73 0 -143 -4 -154 -9z m246 -450 l0 -330 -90 0 -90 0 0 330 0 330 90 0 90 0 0 -330z" />
                            <path d="M1772 2524 c-49 -34 -52 -55 -52 -329 0 -351 -4 -345 231 -345 l141 0 34 34 34 34 0 271 c0 173 -4 279 -11 294 -22 48 -55 57 -211 57 -114 0 -148 -3 -166 -16z m258 -329 l0 -215 -90 0 -90 0 0 215 0 215 90 0 90 0 0 -215z" />
                            <path d="M447 2398 c-9 -7 -19 -25 -22 -40 -5 -21 -1 -33 19 -52 l25 -26 424 0 c398 0 426 1 448 18 28 24 31 79 4 98 -26 19 -873 21 -898 2z" />
                            <path d="M441 2084 c-12 -15 -21 -31 -21 -36 0 -14 21 -52 34 -60 6 -4 205 -8 443 -8 l432 0 20 26 c26 33 26 45 0 78 l-20 26 -434 0 -434 0 -20 -26z" />
                        </g>
                    </svg>
                </header>

                {/* Aparece de forma en PC pero no en dispositivos */}
                {/* dividirlo en componente NavbarPC */}
                <ul className="menu-links desaparece-dispositivo aparece-PC">
                    <li className="linea-bottom py-1">{message}</li>
                    <li className="linea-bottom py-1">Salir <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={handleLogout} className='salir'></FontAwesomeIcon></li>
                    <li className="nav-item dropdown desaperecer-dashboard">
                        {loading ? <svg fill={theme === "dark" ? 'hsl(228, 100%, 96%)' : 'black'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="15.000000pt" height="15.000000pt"><rect x="1" y="4" width="6" height="14" opacity="1"><animate id="spinner_aqiq" begin="0;spinner_xVBj.end-0.25s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="0;spinner_xVBj.end-0.25s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="0;spinner_xVBj.end-0.25s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect><rect x="9" y="4" width="6" height="14" opacity=".4"><animate begin="spinner_aqiq.begin+0.15s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="spinner_aqiq.begin+0.15s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="spinner_aqiq.begin+0.15s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect><rect x="17" y="4" width="6" height="14" opacity=".3"><animate id="spinner_xVBj" begin="spinner_aqiq.begin+0.3s" attributeName="y" dur="0.75s" values="1;5" fill="freeze" /><animate begin="spinner_aqiq.begin+0.3s" attributeName="height" dur="0.75s" values="22;14" fill="freeze" /><animate begin="spinner_aqiq.begin+0.3s" attributeName="opacity" dur="0.75s" values="1;.2" fill="freeze" /></rect></svg> : <a className="nav-link dropdown-toggle mb-2 py-1" role="button" data-bs-toggle="dropdown"> {user} <FontAwesomeIcon icon={faUser} /></a>}
                        <ul className="dropdown-menu mt-4 menu-responsive-dashboard">
                            <li><a href="#" className='dropdown-item item-link-menu'>Cargar foto</a></li>
                            <li><Link className='dropdown-item item-link-menu' to='/obtener-codigo'>Obtener Codigo</Link></li>
                            <li><a href="#" className='dropdown-item item-link-menu'>Medios de pagos</a></li>
                        </ul>
                    </li>
                


                    <li className="switch desaparecer-responsive "><ThemeSwitcher /></li>
                </ul>

                {/* Aparece en dispositivos pero no en pc (solo a partir de 1060px) */}
                {/* dividirlo en componentes en NavbarResponsive */}
                <ul className="nav-links-responsive-aparece desaparece-PC ">
                    <section className="dropdown dropend">
                        <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown">
                            {user} <FontAwesomeIcon icon={faUser} />
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item " href="#">Normal</a></li>

                        </ul>
                    </section>

                    <li className="linea-bottom py-1">Salir <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={handleLogout} className='salir'></FontAwesomeIcon></li>
                    <li className="switch desaparecer-responsive "><ThemeSwitcher /></li>
                </ul>

            </nav>

        </>

    )
}