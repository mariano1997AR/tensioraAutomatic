import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom";
import { getProtected } from "../../components/apis/apis";
import './Dashboard.css';
import { NavbarDashboard } from "../../components/NavbarDashboard/NavbarDashboard";
import {Title} from 'react-head';

 const Dashboard: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const navigate = useNavigate();



  useEffect(() => {
    const token = localStorage.getItem('token')!;
    getProtected(token)
      .then(res => {
        const { message, user } = res.data;
        setMessage(message)
        setUser(user);
      })
      .catch(() => {
        localStorage.removeItem('token');
        navigate('/ingresar');
      });
  }, [navigate]);



  return (
    <>
      <Title>Dashboard | Tensiora Electric</Title>
     

      <section className="container-dashboard" >
           <NavbarDashboard user={user} message={message}  />
      </section>

     
    </>
  )
}

export default Dashboard;