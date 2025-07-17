import { useState, useEffect } from 'react';
import './Steps.css';



interface Props {
    onNext: () => void;
}

const pasos = [
    "Tensiora Aplication va a pedirte los datos",
    "Me llamo Rocket y estoy para ayudarte",
    "En solo 3 pasos vas a poder automatizar tu organizacion",
    "Con Mistral IA y gpt vas a poder elegir diferentes diseños de IA",
    "Si elegiste solo Rocket v1 vas a poder personalizar los chatbot",


]


const codigoPorPais = [
    { code: '+54', name: 'Argentina' },
    { code: '+55', name: 'Brasil' },
    { code: '+598', name: 'Uruguay' },
]





export const StepOne = ({ onNext }: Props) => {

    const [token, setToken] = useState<string | null>(null);
    const [nombre, setNombre] = useState<string>("");
    const [cuit, setCuit] = useState<string>("");
    const [domicilioFiscal, setDomicilioFiscal] = useState<string>("");
    const [tipoSociedad, setTipoSociedad] = useState<string>("");
    const [domicilioComercial, setDomicilioComercial] = useState<string>("");
    const [emailOficial, setEmailOficial] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [activarBtn, setActivarBtn] = useState<boolean>(false);
    const [prefix, setPrefix] = useState<string>("");

    const [errors, setErrors] = useState({
        nombre: '',
        cuit: '',
        domicilio: '',
        email: '',
        telefono: '',
        tiposociedad: ''
    });

    const validate = () => {
        let valid = true;

        const newErrors = {
            nombre: '',
            cuit: '',
            domicilio: '',
            email: '',
            telefono: '',
            tiposociedad: ''
        }

        //Valida nombre: solo letras y espacios
        if (!nombre.trim()) {
            newErrors.nombre = "El nombre es requerido";
            valid = false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            newErrors.nombre = 'solo letras y espacios en blanco';
            valid = false;
        }

        //valida cuit 
        if (!cuit.trim()) {
            newErrors.cuit = "El cuit es requerido";
            valid = false;
        } else if (!/^[0-9-]+$/.test(cuit)) {
            newErrors.cuit = 'Solo numeros y guiones'
            valid = false;
        }

        if (!tipoSociedad.trim()) {
            newErrors.tiposociedad = 'El tipo de sociedad es requerido';
            valid = false;
        } else if (!/^[A-Za-z]{2,5}$/.test(tipoSociedad)) {
            newErrors.tiposociedad = 'Solo tenga 5 letras'
            valid = false;
        }


        //Valida domicilio: solo letras y espacios
        if (!domicilioComercial.trim()) {
            newErrors.domicilio = "El nombre es requerido";
            valid = false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(domicilioComercial)) {
            newErrors.domicilio = 'solo letras y espacios en blanco';
            valid = false;
        }


        //Valida domicilio fiscal: solo letras y espacios
        if (!domicilioFiscal.trim()) {
            newErrors.domicilio = "El nombre es requerido";
            valid = false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(domicilioFiscal)) {
            newErrors.domicilio = 'solo letras y espacios en blanco';
            valid = false;
        }


        //valida email con expresion regular

        if (!emailOficial.trim()) {
            newErrors.email = 'El correo es requerido';
            valid = false;

        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailOficial)) {
            newErrors.email = 'Formato de correo no válido';
            valid = false;
        }

        //valida el telefono
        if (telefono && !/^\d{6,}$/.test(telefono)) {
            newErrors.telefono = 'El telefono es requerido';
            valid = false;
        } else if (!/^\d+$/.test(telefono)) {
            newErrors.telefono = 'Formato no valido';
            valid = false;
        }

        setErrors(newErrors);
        return valid;


    }

    /* pasos */

    const [tiposPasos, setTipoPasos] = useState<string>(pasos[0]);


    const login = async () => {
        const res = await fetch("https://rocketbot-bbpz.onrender.com/token", {
            method: "POST",
        });

        const data = await res.json();
        localStorage.setItem("token", data.access_token);
        setToken(data.access_token);
        console.log("JWT: ", data.access_token);
    }

    const enviarDatos = async () => {
        const jwt = token || localStorage.getItem("token");
        if (!jwt) {
            alert("registrate")
            return
        }

        setActivarBtn(true);
        const telefonoCompleto: string = `${prefix}${telefono}`;
        if (!validate()) return;

        const res = await fetch("https://rocketbot-bbpz.onrender.com/enviar-datos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                nombre,
                cuit,
                tipoSociedad,
                domicilioFiscal,
                domicilioComercial,
                emailOficial,
                telefonoCompleto
            }),
        });

        const data = await res.json();
        console.log(data);
        alert(`Respuesta del servidor: ${data.mensaje}`)


    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTipoPasos(pasos[Math.floor(Math.random() * pasos.length)]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);




    return (
        <>
            <section className="p-4 border rounded shadow ">
                <h2 className="text-xl font-bold mb-2 text-center">Bienvenida a Tensiora Aplication</h2>
                <section className='flex-container-form-datos-empresa'>
                    {/* Ingresa los datos de la empresa u organizacion junto a una bienvenida */}
                    <article className='item-flex-left-form-datos-empresa'>
                        <article style={{ padding: "20px" }} className='container-form-datos-empresa'>
                            <h2>PASO 1 - Datos de la Organización</h2>
                            <button onClick={login}>Validar token</button>
                            <hr />
                            <h3 className='text-center'>¿Puede darme los datos de su organización?</h3>
                            <input
                                type="text"
                                placeholder="Nombre legal de la organización"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                className='input-dato-empresa'

                            />
                            {errors.nombre && <p style={{ color: 'red',textAlign:'center' }}>{errors.nombre}</p>}
                            <input
                                type="texto"
                                placeholder="CUIT de la organización"
                                value={cuit}
                                onChange={(e) => setCuit(e.target.value)}
                                className='input-dato-empresa'
                                required
                            />

                            {errors.cuit && <p style={{ color: 'red',textAlign:'center' }}>{errors.cuit}</p>}

                            <input
                                type="text"
                                placeholder='Tipo de sociedad'
                                value={tipoSociedad}
                                onChange={(e) => setTipoSociedad(e.target.value)}
                                className='input-dato-empresa'
                                required
                            />

                            {errors.tiposociedad && <p style={{ color: 'red',textAlign:'center' }}>{errors.tiposociedad}</p>}



                            <input
                                type="text"
                                placeholder='Domicilio Fiscal'
                                value={domicilioFiscal}
                                onChange={(e) => setDomicilioFiscal(e.target.value)}
                                className='input-dato-empresa'
                                required
                            />

                            {errors.domicilio && <p style={{ color: 'red',textAlign:'center' }}>{errors.domicilio}</p>}

                            <input
                                type="text"
                                placeholder='Domicilio Comercial'
                                value={domicilioComercial}
                                onChange={(e) => setDomicilioComercial(e.target.value)}
                                className='input-dato-empresa'
                                required

                            />

                            {errors.domicilio && <p style={{ color: 'red',textAlign:'center' }}>{errors.domicilio}</p>}

                            <input
                                type="email"
                                placeholder='Email oficial'
                                value={emailOficial}
                                onChange={(e) => setEmailOficial(e.target.value)}
                                className='input-dato-empresa'
                                required
                            />

                            {errors.email && <p style={{ color: 'red',textAlign:'center' }}>{errors.email}</p>}

                            <section className='telefono-form'>
                                <select value={prefix} onChange={e => setPrefix(e.target.value)}  >
                                    {codigoPorPais.map((c) => (
                                        <option key={c.code} value={c.code} className="opcion-pais">
                                            ({c.code})
                                        </option>
                                    ))}


                                </select>
                                <input
                                    type="text"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    placeholder="123456789"
                                    name="telefono"
                                    required
                                    className={`
                                        input-dato-empresa
                                        
                                  
                                      
                                      `}
                                />
                                {errors.telefono && <p  style={{ color: 'red' ,textAlign:'center'}}>{errors.telefono}</p>}
                            </section>



                            <button className='btn-enviar-datos-organizacion' onClick={enviarDatos}>Enviar Datos</button>
                        </article>
                    </article>
                    <article className='item-flex-right-form-datos-empresa'>
                        <p className='py-4 text-2xl mx-5'>{tiposPasos}</p>
                    </article>
                </section>
                <button onClick={onNext} disabled={activarBtn == false} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Siguiente
                </button>
            </section>

        </>
    )
}