import type { mostrarPrecioProps } from "../types/types"




export const MostrarPrecio = ({ precioOriginal, descuento }: mostrarPrecioProps) => {
    const precioFinal = descuento ? precioOriginal * 0.9 : precioOriginal;

    return (
        <>


            {descuento ? (
                <span>

                    ${precioFinal.toFixed(2)}
                </span>
            ) : (
                <span>

                    ${precioOriginal.toFixed(2)}
                </span>
            )}

        </>
    )
}