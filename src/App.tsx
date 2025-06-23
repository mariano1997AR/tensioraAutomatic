//import { useEffect, useState } from 'react'
import { lazy,Suspense } from 'react';
import './App.css'
import { Loader } from './components/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { CircuitoMixto } from './page/CircuitoMixto/CircuitoMixto';
import { TerminosCondiciones } from './page/TerminosCondiciones/TerminosCondiciones';
import { Ingresar } from './page/Ingresar/Ingresar';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Dashboard } from './page/Dashboard/Dashboard';
import { PublicRoute } from './components/PublicRoute/PublicRoute';


export const App: React.FC = () => {
  // const [loading, setLoading] = useState<boolean>(true);

   const Home = lazy(() => import('./page/Home/Home'));
   const Voltajes = lazy(()=>import('./page/Voltajes/Voltajes'));
   const CircuitoParalelo = lazy(()=>import('./page/CircuitoParalelo/CircuitoParalelo'));
   const CircuitoSerie = lazy(()=>import('./page/CircuitoSerie/CircuitoSerie'))
   const Potencia = lazy(()=>import('./page/Potencia/Potencia'));
   const CorrienteMonofasico = lazy(()=>import('./page/CorrienteMonofasico/CorrienteMonofasico'));
   const CorrienteTrifasico = lazy(()=>import('./page/CorrienteTrifasico/CorrienteTrifasico'));
   const Servicios = lazy(()=>import('./page/Servicios/Servicios'));
   const TipoCables = lazy(()=>import('./page/TipoCables/TipoCables'));
   const Formulas = lazy(()=>import('./page/Formulas/Formulas'));
   const Contacto = lazy(()=>import('./page/Contacto/Contacto'));

   return (
      <>

         <Routes>
            <Route 
                element={
                  <Suspense fallback={<Loader />}>
                       <Layout />
                  </Suspense>
                } 
                
                
                >
               <Route 
                   path='/' 
                   element={
               
                         <Home />
                 
                   } 

                        
               />

               <Route 
                   path='/home' 
                   element={
                 
                        <Home />
               
                   } 
                       
               />
               <Route path='/calcularVoltajes' element={<Voltajes />} />
               <Route path='/circuito-en-paralelo' element={<CircuitoParalelo />} />
               <Route path='/circuito-en-serie' element={<CircuitoSerie />} />
               <Route path='/potencia-tension' element={<Potencia />} />
               <Route path='/corriente-monofasico' element={<CorrienteMonofasico />} />
               <Route path='/corriente-trifasico' element={<CorrienteTrifasico />} />
               <Route path='/herramientas/formulas-para-electricistas' element={<Formulas />} />
               <Route path='/contacto' element={<Contacto />} />
               <Route path='/circuito-mixto' element={<CircuitoMixto />} />
               <Route path='/terminos-condiciones' element={<TerminosCondiciones />} />
               <Route path='/servicios' element={<Servicios />} />
               <Route path='/ingresar' element={
                  <PublicRoute>
                     <Ingresar />
                  </PublicRoute>
               } />
               <Route path='/herramientas/tipo-de-cables' element={<TipoCables />} />
            </Route>
            <Route
               path='/dashboard'

               element={
                  <PrivateRoute >
                     <Dashboard />
                  </PrivateRoute>
               }

            />

         </Routes>



      </>
   )
}
