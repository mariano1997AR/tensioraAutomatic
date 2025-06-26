import { PresentacionDibujo } from '../../components/Dibujo/PresentacionDibujo';
import './Productos.css';
import { Title } from 'react-head';
import { ListaProductos } from './ListaProductos';
import type { Producto } from './ListaProductos';
import { useState } from 'react';
import { useTheme } from '../../components/ThemeContext/ThemeContext';
import emailjs from "@emailjs/browser";


export const Productos = () => {

    const [productos, setProductos] = useState<Producto[]>([]);
    const [nombre, setNombre] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const { theme } = useTheme();

    const agregarProducto = () => {
        if (nombre.trim() === "") return;

        const nuevoProducto: Producto = {
            id: Date.now(),
            nombre,
            completada: false,
        };

        //Actualiza el estado
        setProductos((prevProductos) => [nuevoProducto, ...prevProductos]);
        setNombre("");
    };


    //Actualizar 
    const completarProductoLista = (id: number) => {
        setProductos((prev) =>
            prev.map((l) => l.id === id ? { ...l, completada: !l.completada } : l)

        )

    };



    //Eliminar 
    const eliminarProductoLista = (id: number) => {
        setProductos((prev) => prev.filter((l) => l.id !== id))
    };

    const enviarEmail = () => {
        if (productos.length === 0) {
            alert('No hay productos para enviar'); //modificar
            return;
        }

        const listaFormateada = productos
            .map((prod, i) => `${i + 1}.${prod.nombre}${prod.completada ? "✅" : ""}`)
            .join("\n");

        const templateParams = {
            user_email: email,
            product_list: listaFormateada
        };

        emailjs
            .send("service_154g6mb", "template_w6guzf5", templateParams, "Piq7AaS3INx_H6EFB")
            .then(() => {
                alert("Lista enviada con exito");
                setEmail("");
                setProductos([]);
            })

            .catch((error) => {
                console.error("Error al enviar", error);
                alert("Ocurrio un error al enviar el correo");
            })

    }


    return (
        <>
            <Title>Productos | Tensiora Automatic</Title>
            <section className='container-productos'>
                <section>
                    <h1 className='text-center titulo-producto py-4 '>Productos</h1>
                    <section className='presentacion-productos-flex'>
                        <article className='flex-item-left-productos'>
                            <h2 className='text-center subtitulo-presentacion py-4 '>Puedes elegir los productos con demo:</h2>
                            <p className='informacion-sobre-productos text-sm'>
                                Con nuestra herramienta puedes elegir el producto que necesitas como demo.
                                Solo haz click en agregar y veras los productos agregados en donde se va a enviar
                                a el correo y despues de evaluar enviar un correo con los links y codigos de los productos de pruebas.



                            </p>
                        </article>
                        <article className='flex-item-right-productos'>
                            <PresentacionDibujo />
                        </article>
                    </section>
                    <section>
                        <h3 className='text-center py-5'>Elige los productos</h3>
                    </section>
                    <section className='presentacion-productos-flex py-12'>
                        <article className='flex-item-right-productos mx-4'>
                            <section className='container-productos-items '>
                                <article className='items-productos-left'>
                                    <p className='py-15'>Chatbot personalizado</p>
                                </article>
                                <article className='items-productos-left'>
                                    <p className='py-15'>Clasificador de imagenes</p>
                                </article>
                                <article className='items-productos-left'>
                                    <p className='py-15'>Visión Artificial</p>
                                </article>

                            </section>

                            <section className='container-productos-items'>
                                <article className='items-productos-left'>
                                    <p className='py-15'>Asesorias en tecnologia</p>
                                </article>
                                <article className='items-productos-left'>
                                    <p className='py-15'>Clasificación de datos</p>
                                </article>

                                <article className='items-productos-left'>
                                    <p className='py-15'>Algoritmos de data</p>
                                </article>

                            </section>
                        </article>
                        <article className='flex-item-left-productos '>
                            <h3 className='text-center subtitulo-ingresa-productos'>Ingresa los productos</h3>
                            <article className='data-productos'>
                                <section className='formulario-producto'>
                                    <input
                                        type="text"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                        placeholder='Nuevo Producto'
                                        className={`
                                    border p-2 rounded
                                    input-agregar-productos
                                    ${theme === "dark" ? "placeholder-oscuro" : "placeholder-claro"}
                                  `}
                                    />

                                    <button className='btn-agregar-producto' onClick={agregarProducto} >
                                        Agregar
                                    </button>
                                    <section className='contenedor-scroll-productos'>
                                        <ListaProductos
                                            listas={productos}
                                            onCompletar={completarProductoLista}
                                            onEliminar={eliminarProductoLista}
                                        />
                                    </section>
                                </section>
                                <section>
                                       <article>
                                         <h4 className='text-center'>Enviar los datos</h4>
                                    </article>
                                </section>
                                <section className='container-enviar-email-productos'>
                                    <article className='item-enviar-email-left-productos'>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Ingresa tu correo'
                                            className={`
                                           border p-2 rounded mx-4 input-email-productos
                                           ${theme === "dark" ? 'placeholder-oscuro' : 'placeholder-claro'}
                                        `}
                                        />
                                    </article>
                                
                                    <article className='item-enviar-email-right-productos'>

                                        <button className='btn-enviar-producto' onClick={enviarEmail}>
                                            ✉️ Enviar por correo
                                        </button>
                                    </article>
                                </section>

                            </article>
                        </article>

                    </section>

                </section>
            </section>

        </>
    )
}

