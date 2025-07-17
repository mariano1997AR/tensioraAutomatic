import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getProtected } from "../../components/apis/apis";
import './Dashboard.css';
import { NavbarDashboard } from "../../components/NavbarDashboard/NavbarDashboard";
import { Title } from 'react-head';
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import { StepOne } from "../Pasos/StepOne";
import { StepTwo } from "../Pasos/StepTwo";
import { StepThree } from "../Pasos/StepThree";

/**
 * 
 * @returns 
 * 
 *  Pasos --> Ingresar un formulario con bienvenida
 * 
 * 
 * 
 */




export const Dashboard: React.FC = () => {

  /* ventanas  */
  const [step, setStep] = useState<number>(1);
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(true);
  const navigate = useNavigate();
  const { theme } = useTheme();

  /* pasos */


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [])




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
        navigate('/clientes');
      });
  }, [navigate]);



  return (
    <>
      <Title>Dashboard | Tensiora Electric</Title>

      <section className="container-dashboard" >
        <NavbarDashboard user={user} message={message} />
        {loader ? <header><svg className="svg-container-carga" width="60" height="60" viewBox="0 0 50 50"><g fill={theme === "dark" ? 'white' : 'black'} strokeWidth="2"><rect x="10" y="10" width="10" height="30"><animate attributeName="height" values="30;20;30" dur="1s" repeatCount="indefinite"></animate></rect><rect x="25" y="10" width="10" height="30"><animate attributeName="height" values="30;10;30" dur="1s" repeatCount="indefinite"></animate></rect><rect x="40" y="10" width="10" height="30"><animate attributeName="height" values="30;25;30" dur="1s" repeatCount="indefinite"></animate></rect></g></svg></header> :
          <section className="container-capas">

            <section>
              <article className="container-pasos mx-3 mt-10">
                {step === 1 && <StepOne onNext={() => setStep(3)} />}
                
                {step === 2 && <StepTwo onNext={() => setStep(2)} />}
                
                {step === 3 && <StepThree onBack={()=>setStep(3)} />}
              </article>

            </section>

          </section>}


      </section >

    </>
  )
}