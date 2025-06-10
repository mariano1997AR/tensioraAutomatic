import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getProtected } from "../../components/apis/apis";
import './Dashboard.css';



export const Dashboard:React.FC = ()=>{
    const [message,setMessage] = useState<string>("");
    const navigate = useNavigate();

    useEffect(()=>{
           const token = localStorage.getItem('token')!;
           getProtected(token)
              .then(res => {
                  const {message,user} = res.data;
                  console.log(res);
                  setMessage(`${message} - Usuario: ${user}`)
              })
              .catch(()=>{
                localStorage.removeItem('token');
                navigate('/ingresar');
              });
    },[navigate])

    return(
        <>
          <section className="container-dashboard">
            <p>{message}</p>
             <button
               onClick={()=>{
                localStorage.removeItem('token');
                navigate('/ingresar')
               }}
             >
                Cerrar Sesión
             </button>

          </section>
        
        </>
    )
}