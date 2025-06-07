import { useEffect, useState } from 'react'
import './App.css'
import { Loader } from './components/Loader/Loader';
import { Routes,Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './page/Home/Home';
import { Voltajes } from './page/Voltajes/Voltajes';
import { CircuitoParalelo } from './page/CircuitoParalelo/CircuitoParalelo';
import { CircuitoSerie } from './page/CircuitoSerie/CircuitoSerie';
import { Potencia } from './page/Potencia/Potencia';
import { CorrienteMonofasico } from './page/CorrienteMonofasico/CorrienteMonofasico';
import { CorrienteTrafasico } from './page/CorrienteTrifasico/CorrienteTrifasico';
import { Formulas } from './page/Formulas/Formulas';

export const App:React.FC =()=> {
  const [loading,setLoading] = useState<boolean>(true);

  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    },3500)
  },[]);

  return (
    <>
       {loading ? (
          <Loader />
       ):(
          <Routes>
               <Route element={<Layout />} >
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/home' element={<Home />} />
                 {/* <Route path='*' element={<Home />}/> */}
                  <Route path='/calcularVoltajes' element={<Voltajes />} />
                  <Route path='/circuito-en-paralelo' element={<CircuitoParalelo />} />
                  <Route path='/circuito-en-serie' element={<CircuitoSerie />} />
                  <Route path='/potencia-tension' element={<Potencia />} />
                  <Route path='/corriente-monofasico' element={<CorrienteMonofasico />} />
                  <Route path='/corriente-trifasico' element={<CorrienteTrafasico />} />
                  <Route path='/formulas-para-electricistas' element={<Formulas />} />

               </Route>
          </Routes>

       )}
      
    </>
  )
}
