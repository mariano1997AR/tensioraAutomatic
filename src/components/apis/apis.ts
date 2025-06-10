import axios from 'axios';


const API  = axios.create({
    baseURL:'http://localhost/tensioraapi',
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
})


export const login = (user:string,pass:string) => API.post("/auth.php",{user,pass});

export const getProtected = (token:string)=>API.get("/protected.php",{
   headers:{Authorization:`Bearer ${token}`}
});