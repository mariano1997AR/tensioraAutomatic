export type Producto = {
    id:number;
    nombre:string;
    completada:boolean;
}


type Props = {
    listas:Producto[];
    onCompletar:( id:number) => void;
    onEliminar:(id:number) => void;
}







export const ListaProductos = ({listas,onCompletar,onEliminar} : Props) =>{
    
    if(listas.length === 0) {
        return <p className="text-center">No hay productos en la lista</p>
    }
    
    return(
         <>
            <ul>
                {listas.map((l) => (
                    <li key={l.id} style={{marginBottom:"10px"}}>
                         <span style={{textDecoration:l.completada ? 'line-throught':'none'}}>
                              {l.nombre}
                        </span> 
                        <button onClick={()=> onCompletar(l.id)} >
                             {l.completada ? '↩️': '✔️'}
                        </button>
                        <button onClick={()=>onEliminar(l.id)}>
                              🗑️
                        </button>
                    </li>
                ))}

            </ul>
         
         
         </>

    )
}