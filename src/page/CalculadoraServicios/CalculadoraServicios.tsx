import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CalculadoraServicios.css';
import { useTheme } from '../../components/ThemeContext/ThemeContext';



export const CalculadoraServicios: React.FC = () => {
    const { theme } = useTheme();

    //datos en memoria para cargarlos en el select
    const nivelesTrabajo = ['Junior', 'Mid-level', 'Senior'];
    const marcosTrabajo = ['React', 'Angular', 'Java Springboot'];
    const basesDatos = ['MySQL', 'Postgresql', 'Mongo DB'];

    //modal 
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Estado para mostrar mensaje de error
    const [error, setError] = useState<string>('');

    //Estado para habilitar o deshabilitar select
    const [isSelectedEnabled, setIsSelectedEnabled] = useState<boolean>(false);
    const [isSelectedDB, setIsSelectedDB] = useState<boolean>(false);

    //estado para habilitar el spinning 
    const [isLoading, setIsLoading] = useState<boolean>(false);


    //Estado para manejar la opcion seleccionada
    const [selectedOption, setSelectedOption] = useState<string>('Junior');
    const [selectedTecnologia, setSelectedTecnologia] = useState<string>('React');
    const [selectedDB, setSelectedDB] = useState<string>('MySQL');
    const [valorHora, setValorHora] = useState<string>('');
    const [resultadoSueldoHora, setResultadoSueldoHora] = useState<number>(0);
    const [resultadoSueldoMes, setResultadoSueldoMes] = useState<number>(0);
    const [resultadoValorTrabajo, setResultadoValorTrabajo] = useState<number>(0);


    //Manejadores del cambio del valor/hora
    const handleValorChange = (e: any) => {
        //analizar esta variable
        let valor_hora = e.target.value;
        setValorHora(valor_hora);

        //validacion en tiempo real
        if (valorHora.length < 1) {
            setError('El valor tiene que tener al menos 1 caracteres');
        } else {
            setError('');
        }
    }

    const calcularResultados = (valor: string) => {
        const salarios = [800000, 1500000, 3000000];
        const hora = 8;
        const mes = 30;
        let salario;
        let calcularHora;
        let calcularMes;
        let calcularResultado;
        switch (valor) {
            case 'Junior':
                salario = salarios[0];
                calcularHora = Math.round(((salario / mes) / hora));
                calcularMes = Math.round((salario / mes));
                calcularResultado = calcularHora * parseFloat(valorHora);
                setResultadoSueldoHora(calcularHora);
                setResultadoSueldoMes(calcularMes);
                setResultadoValorTrabajo(calcularResultado);
                break;
            case 'mid-level':
                salario = salarios[1];
                calcularHora = Math.round(((salario / mes) / hora));
                calcularMes = Math.round((salario / mes));
                calcularResultado = calcularHora * parseFloat(valorHora);
                setResultadoSueldoHora(calcularHora);
                setResultadoSueldoMes(calcularMes);
                setResultadoValorTrabajo(calcularResultado);

                break;
            case 'Senior':
                salario = salarios[2];
                calcularHora = Math.round(((salario / mes) / hora));
                calcularMes = Math.round((salario / mes));
                calcularResultado = calcularHora * parseFloat(valorHora);
                setResultadoSueldoHora(calcularHora);
                setResultadoSueldoMes(calcularMes);
                setResultadoValorTrabajo(calcularResultado);
                break;
        }



    };

    // Manejador del checkbox
    const handleCheckboxChange = () => {
        setIsSelectedEnabled(!isSelectedEnabled);
        setSelectedOption(''); // Reiniciamos la opción seleccionada al desactivar el select
    };

    //Manejador del checkbox para uso de base de datos
    const handleCheckDB = () => {
        setIsSelectedDB(!isSelectedDB);
        setSelectedTecnologia('');
    }
    //Manejador de cambios cuando se selecciona una opcion
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valor = event.target.value;
        setSelectedOption(valor);

        //Formula del calculo de servicios
        calcularResultados(valor);

    };

    //Manejador de cambios de las tecnologias
    const handleSelectedTecnologias = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTecnologia(e.target.value);

    };

    //Manejador de cambios en el selector de bases de datos
    const handleSelectedDB = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDB(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);



        //Validacion antes de enviar
        if (valorHora.length < 1) {
            setError('El valor debe tener al menos 1 caracteres antes de enviar');
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);

    };

    useEffect(() => {
        if (valorHora.length < 1) {
            setError('El valor debe tener al menos 1 caracteres antes de enviar');
        }
    }, []);



    return (
        <>
            <section className='container-flex-calculadora-servicios'>
                <article className='calculadora-item-left' style={{ borderColor: theme === "dark" ? ' #F5F5F5' : '#4A4947' }}>
                    <header className='logo-marca' >
                        <p className='text-3xl mx-3'>Calculadora de <span style={{ color: theme === "dark" ? '#FFA55D' : '#60B5FF' }}>servicios</span></p>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <metadata>
                                Created by potrace 1.16, written by Peter Selinger 2001-2019
                            </metadata>
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill={theme === "dark" ? 'white' : 'black'} stroke="none">
                                <path d="M145 5101 c-22 -10 -57 -36 -77 -57 -73 -77 -68 27 -68 -1376 0
-1202 1 -1265 19 -1303 24 -53 75 -103 131 -129 40 -18 68 -21 243 -24 l197
-4 0 -1104 0 -1104 1970 0 1970 0 0 600 0 600 -90 0 -90 0 0 -510 0 -510
-1790 0 -1790 0 0 1015 0 1014 713 3 c797 3 750 -1 831 76 82 78 76 -20 76
1215 l0 1097 465 0 465 0 0 -510 0 -510 515 0 515 0 0 -600 0 -600 90 0 90 0
0 662 0 663 -537 537 -538 538 -532 0 -533 0 0 75 c0 42 -6 90 -14 109 -20 49
-81 112 -130 135 -42 21 -53 21 -1052 21 -962 0 -1011 -1 -1049 -19z m2042
-183 l23 -21 0 -1227 0 -1227 -26 -24 -26 -24 -963 0 -963 0 -26 24 -26 24 0
1226 0 1225 22 23 21 23 971 0 970 0 23 -22z m1673 -803 l355 -355 -358 0
-357 0 0 355 c0 195 1 355 3 355 1 0 162 -160 357 -355z"/>
                                <path d="M250 4565 l0 -305 945 0 945 0 0 305 0 305 -945 0 -945 0 0 -305z
m1710 0 l0 -125 -765 0 -765 0 0 125 0 125 765 0 765 0 0 -125z"/>
                                <path d="M457 4175 c-22 -7 -50 -24 -64 -37 -47 -44 -53 -68 -53 -216 0 -128
2 -142 23 -173 50 -75 124 -97 290 -86 74 5 96 10 129 32 62 41 78 87 78 230
0 164 -25 218 -117 251 -51 18 -236 18 -286 -1z m223 -250 l0 -85 -80 0 -80 0
0 85 0 85 80 0 80 0 0 -85z"/>
                                <path d="M1065 4181 c-44 -11 -82 -38 -107 -78 -17 -29 -22 -56 -26 -140 -11
-239 45 -303 263 -303 207 0 265 60 265 271 0 151 -39 224 -133 248 -50 12
-214 13 -262 2z m215 -256 l0 -85 -85 0 -85 0 0 85 0 85 85 0 85 0 0 -85z"/>
                                <path d="M1647 4176 c-91 -33 -116 -87 -117 -251 0 -106 3 -126 23 -165 39
-78 91 -99 242 -99 133 -1 185 19 233 89 20 30 22 44 22 172 0 153 -6 176 -60
221 -17 15 -47 31 -68 37 -53 14 -230 12 -275 -4z m223 -251 l0 -85 -80 0 -80
0 0 85 0 85 80 0 80 0 0 -85z"/>
                                <path d="M429 3567 c-27 -15 -53 -39 -67 -63 -21 -36 -22 -49 -20 -186 3 -130
5 -150 24 -174 47 -64 63 -69 220 -72 131 -3 147 -2 182 18 20 11 49 37 62 57
23 33 25 48 29 156 3 129 -5 177 -41 222 -39 50 -89 65 -224 65 -107 0 -126
-3 -165 -23z m251 -237 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z"/>
                                <path d="M1035 3571 c-80 -37 -104 -90 -105 -236 0 -116 11 -162 47 -205 45
-54 68 -60 221 -60 128 0 142 2 172 23 70 47 90 98 90 237 0 147 -22 197 -100
238 -39 19 -59 22 -165 22 -95 0 -128 -4 -160 -19z m245 -241 l0 -80 -85 0
-85 0 0 80 0 80 85 0 85 0 0 -80z"/>
                                <path d="M1655 3583 c-36 -9 -87 -55 -106 -97 -15 -33 -19 -65 -19 -160 0
-146 17 -191 86 -232 42 -25 48 -25 187 -22 138 3 145 4 179 30 58 44 68 78
68 229 0 123 -2 135 -25 175 -40 68 -85 84 -231 83 -65 -1 -128 -4 -139 -6z
m215 -253 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z"/>
                                <path d="M435 2974 c-84 -44 -98 -82 -93 -264 3 -124 5 -138 27 -169 40 -56
88 -71 228 -71 128 0 163 7 202 43 46 43 61 93 61 212 0 61 -5 126 -10 145
-11 41 -61 94 -103 109 -46 18 -276 14 -312 -5z m245 -244 l0 -80 -80 0 -80 0
0 80 0 80 80 0 80 0 0 -80z"/>
                                <path d="M1035 2976 c-42 -18 -82 -68 -96 -119 -6 -24 -9 -88 -7 -152 4 -125
16 -157 75 -202 35 -27 41 -28 172 -31 125 -3 139 -1 181 20 83 43 108 114 98
287 -7 115 -39 173 -111 200 -41 16 -275 13 -312 -3z m245 -246 l0 -80 -85 0
-85 0 0 80 0 80 85 0 85 0 0 -80z"/>
                                <path d="M1635 2976 c-37 -17 -80 -62 -94 -99 -14 -36 -14 -240 -1 -287 11
-41 61 -94 103 -109 16 -6 83 -11 151 -11 146 0 196 18 234 85 21 37 22 50 20
185 -3 134 -5 148 -26 178 -43 59 -84 72 -229 72 -85 -1 -138 -5 -158 -14z
m235 -246 l0 -80 -80 0 -80 0 0 80 0 80 80 0 80 0 0 -80z"/>
                                <path d="M2730 3240 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z" />
                                <path d="M3070 3240 l0 -90 515 0 515 0 0 90 0 90 -515 0 -515 0 0 -90z" />
                                <path d="M2730 2900 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z" />
                                <path d="M3070 2900 l0 -90 515 0 515 0 0 90 0 90 -515 0 -515 0 0 -90z" />
                                <path d="M2730 2560 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z" />
                                <path d="M3070 2560 l0 -90 515 0 515 0 0 90 0 90 -515 0 -515 0 0 -90z" />
                                <path d="M4745 2446 c-40 -19 -200 -175 -797 -772 l-747 -749 -106 -230 c-59
-126 -109 -242 -112 -256 -5 -28 10 -66 36 -86 36 -28 83 -14 315 93 l231 106
754 751 c602 601 758 762 777 802 27 56 32 133 12 197 -16 52 -77 121 -133
147 -64 30 -163 29 -230 -3z m173 -179 c34 -32 29 -71 -17 -120 l-40 -42 -55
55 -56 54 33 34 c53 56 89 61 135 19z m-420 -420 l52 -52 -548 -546 -547 -547
-91 -41 c-50 -22 -94 -41 -97 -41 -3 0 14 44 39 98 l45 97 542 543 c298 298
544 542 547 542 3 0 29 -24 58 -53z"/>
                                <path d="M2730 2220 l0 -90 90 0 90 0 0 90 0 90 -90 0 -90 0 0 -90z" />
                                <path d="M3070 2220 l0 -90 515 0 515 0 0 90 0 90 -515 0 -515 0 0 -90z" />
                                <path d="M1801 2040 c-374 -79 -652 -381 -689 -750 -29 -277 63 -528 259 -716
107 -101 193 -152 339 -199 112 -36 305 -46 423 -21 271 56 491 229 606 477
51 110 71 192 78 316 23 402 -232 761 -619 874 -83 24 -319 35 -397 19z m322
-190 c205 -52 366 -186 457 -381 148 -319 5 -718 -314 -877 -137 -68 -313 -90
-456 -56 -186 43 -367 186 -448 354 -56 113 -72 183 -72 305 0 122 17 192 72
305 58 119 177 238 298 298 47 23 112 48 145 56 89 21 227 20 318 -4z"/>
                                <path d="M1870 1665 c0 -28 -5 -47 -12 -49 -102 -29 -183 -88 -218 -157 -26
-51 -27 -137 -1 -188 25 -49 91 -107 149 -132 25 -11 94 -26 152 -33 112 -14
162 -33 181 -68 28 -53 -106 -110 -206 -88 -59 13 -103 38 -111 62 -5 16 -18
18 -95 18 l-89 0 0 -30 c0 -30 25 -88 52 -120 27 -33 92 -74 141 -91 52 -17
52 -18 55 -63 l3 -46 90 0 89 0 0 44 0 44 53 18 c131 43 207 134 207 245 0 48
-41 129 -81 164 -56 47 -130 75 -226 85 -123 14 -140 18 -173 47 -36 30 -37
43 -7 71 33 31 75 44 143 44 67 -1 135 -27 156 -62 11 -17 24 -20 100 -20 85
0 88 1 88 23 0 41 -53 130 -97 163 -35 27 -92 53 -150 70 -8 2 -13 21 -13 49
l0 45 -90 0 -90 0 0 -45z"/>
                            </g>
                        </svg>
                    </header>
                </article>
                <article className='calculadora-item-right'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label>Hora: </Form.Label>
                            <Form.Control type="number" value={valorHora} onChange={handleValorChange} placeholder="Ingresa valor hora" />
                            {/* Mostrar mensaje de error si existe */}
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </Form.Group>

                        <Form.Group className='mb-3 ' controlId="exampleForm.ControlInput1">
                            <Form.Label>Selecciona el expertise</Form.Label>
                            <Form.Select value={selectedOption} onChange={handleSelectChange} aria-label="Default select example">
                                <option value="">--Selecciona un nivel--</option>
                                {nivelesTrabajo.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option.toLocaleUpperCase()}
                                    </option>
                                ))}
                            </Form.Select>

                            <p>Nivel de expertise: {selectedOption}</p>

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Utilizar framework(si no es asi se usa vanilla js)"
                                checked={isSelectedEnabled}
                                onChange={handleCheckboxChange}
                            />
                            <Form.Label>Seleccione el Framework:</Form.Label>
                            <Form.Select value={selectedTecnologia} onChange={handleSelectedTecnologias} disabled={!isSelectedEnabled} aria-label="Default select example">
                                <option value="">--Selecciona frameworks--</option>
                                {marcosTrabajo.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option.toUpperCase()}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-3 ' controlId="exampleForm.ControlInput1">
                            <Form.Check // prettier-ignore
                                type="switch"
                                id="custom-switch"
                                label="Utilizar base de datos"
                                checked={isSelectedDB}
                                onChange={handleCheckDB}
                            />
                            <Form.Select value={selectedDB} onChange={handleSelectedDB} disabled={!isSelectedDB}>
                                <option value="">--Seleccione una base de datos--</option>
                                {basesDatos.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </Form.Select>

                        </Form.Group>
                        {/* Es un boton para calcular los campos */}
                        <div className="d-grid gap-2">
                            {!isLoading ? (
                                <Button type='submit' id='btn-calcular' variant='primary' disabled={!!error} onClick={handleShow}>
                                    Calcular
                                </Button>
                            ) : (
                                <div>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <p>Procesando... por favor espera.</p>
                                </div>
                            )}
                        </div>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Calculo para Proyecto</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {selectedOption === 'Junior' || isSelectedEnabled || isSelectedDB ? (
                                    <section>
                                        <h2>{selectedOption.toUpperCase()}</h2>
                                        <p>Hora: ${resultadoSueldoHora}</p>
                                        <p>Mes: ${resultadoSueldoMes}</p>
                                        <p>Marco de trabajo: {selectedTecnologia}</p>
                                        <p>Base de datos: {selectedDB}</p>
                                        <p>Gastos: {resultadoValorTrabajo}</p>
                                    </section>

                                ) : selectedOption === 'mid-level' || isSelectedEnabled || isSelectedDB ? (
                                    <section>
                                        <h2>{selectedOption.toUpperCase()}</h2>
                                        <p>Hora: ${resultadoSueldoHora}</p>
                                        <p>Mes: ${resultadoSueldoMes}</p>
                                        <p>Marco de trabajo: {selectedTecnologia}</p>
                                        <p>Base de datos: {selectedDB}</p>
                                        <p>Gastos: {resultadoValorTrabajo}</p>

                                    </section>

                                ) : selectedOption === 'Senior' || isSelectedEnabled || isSelectedDB ? (
                                    <section>
                                        <h2>{selectedOption.toUpperCase()}</h2>
                                        <p>Hora: ${resultadoSueldoHora}</p>
                                        <p>Mes: ${resultadoSueldoMes}</p>
                                        <p>Marco de trabajo: {selectedTecnologia}</p>
                                        <p>Base de datos: {selectedDB}</p>
                                        <p>Gastos: ${resultadoValorTrabajo}</p>
                                    </section>
                                ) : (
                                    <p></p>
                                )}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                            </Modal.Footer>
                        </Modal>



                    </Form>


                </article>


            </section>
        </>
    )
}