export type Msg = { 
    from: "user" | "Rocket"; 
    text: string;
    options?:string[];
};

export type switchPriceComponent = {
    checked:boolean;
    onChange:(checked:boolean) => void;
}

export type mostrarPrecioProps = {
    precioOriginal:number;
    descuento:boolean;
   
}