import axios from 'axios';
//https://tensioraapi.onrender.com/

const API  = axios.create({
    baseURL:'http://localhost:3000/' ,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
})


export const login = (user:string,pass:string) => API.post("/auth",{user,pass});

export const getProtected = (token:string)=>API.get("/protected",{
   headers:{Authorization:`Bearer ${token}`}
});