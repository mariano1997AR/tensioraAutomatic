import './Chatbot.css';
import { useEffect, useRef, useState } from "react";
import type { Msg } from "../types/types";
import { useTheme } from '../ThemeContext/ThemeContext';


export const Chatbot = ({setMostrarChatbot}:{setMostrarChatbot:(c:boolean) => void}) => {
    const [messages, setMessages] = useState<Msg[]>([]);
    const [input, setInput] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false); //visible 

    const { theme } = useTheme();


    //Manejar seleccion de opcion clickeada
    const handleOptionClick = (option: string) => {
        setMessages((prev) => [...prev, { from: "user", text: option }]);
        sendMessages(option);
    }


    //scroll 
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);


    //Mensaje de bienvenida cuando se monta el componente 

    useEffect(() => {
        if (visible && messages.length === 0) {
            setMessages([
                {
                    from: "Rocket",
                    text: "👋 ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
                },
            ]);
        }
    }, [visible])

    const sendMessages = async (text: string) => {
        if (!input.trim()) return;

        // 1. Muestra mensaje del usuario
        setInput("");
        setIsTyping(true); //activa el mensaje de "escribiendo..."

        try {
            // 2. Envía al backend
            const res = await fetch("https://rocketbot-bbpz.onrender.com/asistente", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text }),
            });
            const data = await res.json();

            // 3. Muestra respuesta del bot
            const botMessage: Msg = {
                from: "Rocket",
                text: data.reply,
                options: data.options,
            };

            setMessages((prev) => [...prev, botMessage])
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                {
                    from: "Rocket",
                    text: "No pude conectar al servidor. Intentelo de nuevo"
                },
            ]);
        } finally {
            setIsTyping(false); //oculta el mensaje de "escribiendo..."
        }

    };

    if (!visible) {
        return (
            <section className=" rocket group ">
                <button
                    onClick={() => {
                        setVisible(true)
                        setMostrarChatbot(true)
                    }}
                    className=" btn-bot  sm:bottom-10 md:bottom-6 sm:right-6 w-[18vw] sm:w-20 py-3 pb-3 px-3    max-h-[80vh] sm:max-h-[600px] flex flex-col  "
                >
                    <section className={`borde-exterior-icon ${theme === 'dark' ? 'shadow-blanco':'shadow-oscuro'}`} style={{borderColor:theme == 'dark' ? 'white':'black'}}>
                        <section className="icon-robot" style={{ borderColor: theme == 'dark' ? 'white' : 'black' }}>
                            <svg className='rocket-icon-svg' xmlns="http://www.w3.org/2000/svg" version="1.0" width="100.000000pt" height="100.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                    Created by potrace 1.16, written by Peter Selinger 2001-2019
                                    <meta name="Producer" content="Online-Convert" /></metadata>
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={theme == "dark" ? 'white' : 'black'} stroke="none">
                                    <path d="M2437 5043 c-244 -236 -427 -528 -532 -846 -77 -233 -101 -434 -92 -762 11 -387 81 -818 207 -1278 21 -78 38 -142 37 -142 -1 -1 -75 -66 -165 -144 -92 -81 -167 -140 -172 -135 -16 17 -41 179 -47 300 -9 194 25 397 97 578 37 93 37 119 5 152 -20 20 -33 25 -67 22 -55 -4 -73 -31 -122 -177 -69 -208 -80 -281 -81 -516 0 -229 9 -294 67 -470 35 -108 57 -135 109 -135 34 0 55 15 235 174 172 150 200 171 208 155 12 -25 60 -46 174 -76 86 -24 116 -27 262 -27 146 0 176 3 262 27 114 30 162 51 174 76 8 16 36 -5 208 -155 180 -159 201 -174 235 -174 52 0 74 27 109 135 58 176 67 241 67 470 -1 190 -3 222 -28 335 -35 163 -83 316 -107 340 -43 43 -112 31 -139 -24 -12 -27 -10 -39 23 -145 62 -197 79 -303 80 -496 1 -168 -22 -356 -45 -371 -5 -3 -82 59 -171 137 -90 79 -164 143 -165 144 -2 1 6 33 17 71 69 236 135 531 174 775 45 279 51 354 51 654 0 345 -11 433 -86 660 -108 328 -299 637 -537 868 -74 71 -83 77 -122 77 -39 0 -48 -6 -123 -77z m321 -355 c76 -103 182 -274 182 -294 0 -17 -47 -50 -122 -83 -164 -73 -308 -77 -491 -13 -72 25 -79 26 -105 12 -70 -40 -63 -123 13 -159 95 -45 193 -64 320 -64 163 0 300 35 416 109 21 13 43 24 48 24 11 0 66 -169 86 -265 30 -145 38 -266 32 -509 -6 -251 -23 -414 -72 -681 -47 -254 -188 -797 -216 -831 -5 -7 -21 -14 -34 -17 -29 -5 -28 -19 -14 170 24 321 -28 705 -112 838 -96 151 -242 98 -307 -112 -53 -169 -81 -487 -63 -726 14 -192 16 -177 -16 -168 -36 9 -43 24 -96 212 -207 720 -278 1421 -187 1842 66 306 226 606 464 871 l70 78 68 -71 c37 -39 99 -112 136 -163z m-175 -1965 c32 -125 47 -224 53 -351 6 -113 -6 -351 -23 -454 -6 -38 -6 -38 -53 -38 -47 0 -47 0 -54 38 -29 178 -30 504 -1 659 20 105 47 213 55 213 3 0 14 -30 23 -67z" />
                                    <path d="M2425 4023 c-121 -43 -205 -119 -257 -228 -124 -265 37 -569 325 -615 237 -37 468 133 496 365 23 196 -67 368 -237 453 -70 34 -83 37 -176 40 -77 2 -113 -2 -151 -15z m242 -172 c55 -25 118 -91 139 -146 26 -69 17 -169 -22 -231 -36 -59 -106 -108 -174 -123 -146 -31 -297 81 -308 229 -2 33 -1 75 2 93 14 73 98 164 172 187 52 15 146 11 191 -9z" />
                                    <path d="M2340 1647 c-40 -20 -89 -130 -108 -242 -19 -120 -9 -207 43 -373 34 -108 143 -336 202 -424 50 -75 114 -76 165 -3 15 22 59 103 97 180 155 312 192 512 131 706 -49 155 -123 209 -190 137 -26 -29 -25 -63 4 -129 56 -127 57 -222 5 -386 -32 -100 -117 -293 -129 -293 -4 0 -30 48 -58 108 -109 232 -133 394 -78 537 47 121 47 154 -4 180 -35 18 -47 18 -80 2z" />
                                    <path d="M1993 1355 c-28 -19 -58 -100 -72 -195 -7 -41 -13 -76 -15 -77 -2 -2 -23 1 -47 6 -215 50 -472 -68 -575 -263 l-32 -59 -60 -3 c-65 -4 -157 -34 -193 -63 -22 -18 -24 -18 -85 24 -239 164 -556 130 -754 -81 -114 -122 -160 -241 -160 -413 0 -120 19 -204 50 -221 26 -14 83 -13 103 3 25 17 35 66 24 112 -5 22 -7 80 -5 130 3 75 9 101 35 157 55 117 158 202 283 234 136 35 265 -4 385 -116 62 -58 70 -62 103 -56 23 3 48 18 71 41 66 69 123 86 231 71 47 -7 59 -5 81 12 14 12 31 40 38 64 29 100 108 189 209 236 48 23 71 27 142 27 81 0 91 -3 173 -43 98 -48 124 -48 161 1 18 25 19 31 7 110 -13 89 -6 162 25 249 8 24 12 53 9 65 -13 55 -85 81 -132 48z" />
                                    <path d="M3019 1341 c-33 -33 -36 -56 -14 -108 28 -66 37 -158 24 -244 -12 -74 -11 -81 7 -106 37 -49 63 -49 161 -1 82 40 92 43 173 43 71 0 94 -4 142 -27 101 -47 180 -136 209 -236 7 -24 24 -52 38 -64 22 -17 34 -19 81 -12 109 15 154 2 226 -67 26 -25 53 -42 76 -45 33 -6 41 -1 106 58 80 74 141 106 229 121 171 30 357 -73 435 -240 27 -57 33 -82 36 -158 2 -50 -1 -110 -6 -133 -12 -51 0 -97 28 -112 24 -13 76 -13 100 0 31 17 50 101 50 221 0 172 -46 291 -160 413 -198 211 -515 245 -754 81 -61 -42 -63 -42 -85 -24 -36 29 -128 59 -193 63 l-60 3 -32 59 c-103 195 -360 313 -575 263 -24 -5 -45 -8 -47 -6 -2 1 -8 36 -15 77 -14 95 -44 176 -72 195 -34 24 -75 19 -108 -14z" />
                                </g>
                               
                            </svg>
                        </section>
                    </section>

                </button>



            </section>
        )
    }




    return (
        <>

            <div className=" flex flex-col  shadow rounded completo">
                {/* Barra superior */}
                <section className="barrera-superior  flex justify-between items-center  text-white px-4 py-2 " style={{background:theme === 'dark' ? '#393E46':'#f5f5f5'}}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                <meta name="Producer" content="Online-Convert" /></metadata>
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={theme === "dark" ? 'white':'black'} stroke="none">
                                <path d="M2467 5070 c-98 -25 -190 -102 -235 -198 -24 -50 -27 -70 -27 -157 0 -89 3 -106 27 -155 38 -77 107 -143 184 -177 l64 -27 0 -168 0 -168 -858 0 c-577 0 -878 -4 -917 -11 -119 -22 -215 -93 -264 -198 -23 -49 -26 -71 -29 -173 l-4 -118 -101 0 c-86 0 -110 -4 -152 -24 -59 -27 -108 -74 -135 -131 -20 -40 -20 -63 -20 -961 l0 -920 26 -52 c27 -55 79 -103 138 -127 24 -10 70 -15 140 -15 l104 0 4 -123 c3 -108 7 -128 30 -173 36 -69 69 -106 126 -142 81 -53 139 -62 394 -62 l228 0 0 -354 0 -355 26 -20 c15 -12 39 -21 53 -21 17 0 266 138 677 375 l649 375 895 0 c986 0 965 -1 1062 62 57 36 90 73 126 142 23 45 27 65 30 174 l4 122 104 0 c70 0 116 5 140 15 59 24 111 72 138 127 l26 52 0 920 c0 898 0 921 -20 961 -27 57 -76 104 -135 131 -42 20 -66 24 -152 24 l-101 0 -4 118 c-3 102 -6 124 -29 173 -49 105 -145 176 -264 198 -39 7 -340 11 -917 11 l-858 0 0 168 0 168 64 27 c77 34 146 100 184 177 24 49 27 66 27 155 0 87 -3 107 -27 157 -34 72 -104 143 -174 175 -62 28 -182 39 -247 23z m173 -182 c67 -35 103 -86 108 -156 7 -98 -47 -173 -145 -203 -78 -23 -173 23 -214 103 -31 61 -23 144 17 195 36 46 105 83 154 83 20 0 56 -10 80 -22z m1794 -1063 c22 -11 54 -37 70 -58 l31 -39 3 -1296 c1 -714 0 -1312 -3 -1330 -8 -42 -59 -100 -110 -123 -38 -18 -92 -19 -960 -19 l-920 0 -590 -340 c-324 -187 -590 -340 -591 -340 -2 0 -4 141 -6 314 l-3 314 -24 26 -24 26 -286 0 c-257 0 -290 2 -326 19 -47 22 -89 64 -104 104 -8 20 -11 433 -11 1324 0 1421 -4 1327 59 1387 60 58 -40 55 1936 53 1798 -2 1820 -2 1859 -22z m-4024 -1420 l0 -945 -89 0 c-103 0 -133 16 -151 78 -14 51 -14 1683 0 1734 18 62 48 78 151 78 l89 0 0 -945z m4503 925 c15 -12 31 -38 37 -58 14 -51 14 -1683 0 -1734 -18 -62 -48 -78 -151 -78 l-89 0 0 945 0 945 89 0 c74 0 93 -3 114 -20z" />
                                <path d="M1507 3150 c-62 -16 -138 -59 -192 -111 -182 -172 -180 -460 4 -633 199 -185 528 -138 668 95 133 223 44 510 -193 621 -56 26 -80 31 -158 34 -50 2 -108 -1 -129 -6z m198 -177 c56 -19 121 -79 150 -138 28 -57 27 -166 -2 -221 -60 -114 -187 -175 -300 -145 -199 54 -267 298 -124 441 75 75 175 98 276 63z" />
                                <path d="M3397 3150 c-197 -50 -339 -246 -324 -450 12 -175 115 -317 277 -382 79 -31 230 -31 313 1 109 43 206 140 247 248 83 215 -16 457 -226 555 -56 26 -80 31 -158 34 -50 2 -108 -1 -129 -6z m195 -176 c151 -51 221 -234 142 -374 -87 -155 -289 -184 -413 -59 -105 105 -106 264 0 370 72 73 173 97 271 63z" />
                                <path d="M1962 1797 c-25 -27 -29 -82 -8 -113 20 -27 193 -108 299 -138 264 -76 543 -51 800 72 109 51 127 69 127 122 0 80 -74 102 -165 50 -134 -76 -281 -113 -455 -113 -174 0 -321 37 -455 113 -65 37 -113 39 -143 7z" />
                            </g>
                        </svg>

                    </span>
                    <button onClick={() => {
                        setVisible(false);
                        setMostrarChatbot(false);
                    }} className="text-white hover:text-red-300">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                                <meta name="Producer" content="Online-Convert" /></metadata>
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill={theme === 'dark' ? 'white':'black'} stroke="none">
                                <path d="M479 5097 c-19 -12 -42 -38 -51 -57 -17 -33 -18 -172 -18 -2480 0 -2308 1 -2447 18 -2480 9 -19 32 -45 51 -57 l34 -23 1516 0 c1504 0 1516 0 1549 20 20 13 41 38 53 65 19 42 19 66 17 524 -3 467 -4 480 -24 507 -54 72 -129 92 -203 52 -82 -44 -81 -39 -81 -475 l0 -383 -1310 0 -1310 0 0 2250 0 2250 1310 0 1310 0 0 -383 c0 -436 -1 -431 81 -475 74 -40 149 -20 203 52 20 27 21 40 24 507 2 458 2 482 -17 524 -12 27 -33 52 -53 65 -33 20 -45 20 -1549 20 l-1516 0 -34 -23z" />
                                <path d="M3680 3491 c-39 -21 -80 -89 -80 -133 0 -16 6 -43 13 -61 8 -18 134 -155 281 -304 l268 -273 -1084 -2 c-1030 -3 -1084 -4 -1113 -21 -54 -33 -70 -65 -70 -137 0 -72 16 -104 70 -137 29 -17 83 -18 1120 -21 l1089 -2 -281 -283 c-246 -246 -282 -287 -289 -320 -13 -71 31 -154 94 -178 34 -13 88 -11 125 5 18 8 215 198 454 437 456 459 445 445 428 537 -6 32 -59 90 -428 461 -239 239 -436 429 -454 437 -45 19 -102 17 -143 -5z" />
                            </g>
                        </svg>
                    </button>
                </section>

                {/* Mensajes */}
                <div className="flex-1 overflow-auto p-4 space-y-2 bg-gray-50 max-h-[900px]" >
                    {messages.map((m, i) => (
                        <div
                            key={i}
                            className={`p-2 rounded w-fit ${m.from === "user"
                                ? "bg-blue-200 self-end"
                                : "bg-gray-500 self-start"
                                }`}
                         
                                
                        >
                            <div className="parrafo-mensaje" style={{color:theme === "dark" ? 'white':'white'}}>{m.from}: {m.text}</div>

                            {/* Mostrar opciones si las tiene */}
                            {m.options && m.options.length > 0 && (
                                <div className="options">
                                    {m.options.map((opt, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(opt)}
                                            className="option-button"
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {isTyping && (
                        <div className="p-2 rounded bg-gray-200 w-fit animate-pulse self-start">
                            ✍️ Escribiendo...
                        </div>
                    )}



                    <div ref={messagesEndRef} />
                </div>

                {/* dato de entrada */}
                <div className="p-2 flex bg-white border-t">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key == "Enter" && input.trim()) {
                                e.preventDefault();
                                setMessages((prev) => [...prev, { from: "user", text: input.trim() }]);
                                sendMessages(input.trim());
                            }
                        }}
                        placeholder="Escribe tu mensaje..."
                        style={{color:theme == 'dark' ? 'black':''}}
                        className="flex-1 border rounded px-3 py-2"
                        autoFocus={false}
                    />
                    <button
                        onClick={() => sendMessages(input.trim())}
                        className="ml-2 mx-2 px-4 py-2 bg-zinc-700 text-white rounded  btn-conversar-bot"

                    >
                        conversar
                    </button>
                </div>
            </div>

        </>
    )
}