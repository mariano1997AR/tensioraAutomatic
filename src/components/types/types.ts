export type Msg = { 
    from: "user" | "Rocket"; 
    text: string;
    options?:string[];
};