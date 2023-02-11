import { useState,useEffect } from 'react'
import Cita from './components/Cita';
import Formulario from './components/Formulario'

function App() {

  // citas en el localStorage

let citasIniciales = JSON.parse(localStorage.getItem('citas'));
if(!citasIniciales){
  citasIniciales =[];
}
const [citas, guardarCitas] = useState(citasIniciales);

const crearCita = cita =>{
  guardarCitas([
    ...citas,
    cita
  ]);
}
// funcion para eliminar una cita

const eliminarCita = id =>{
  const nuevaCita = citas.filter(cita=>cita.id !==id);
  guardarCitas(nuevaCita)
}

// mensaje condicional si tengo o no sitas disponibles

const titulo = citas.length === 0 ? 'no hay citas disponibles'  : 'Administra sus citas'

// useEffect

useEffect(()=>{
  if(citasIniciales){
    localStorage.setItem('citas',JSON.stringify(citas))
  }
  else{
    localStorage.setItem('citas',JSON.stringify([]))
  }
},[citas,citasIniciales])
  return (
    <>
      <h1> Administrador de pacientes </h1>

      <div className='container'>
          <div className='row'>
              <div className="one-half column">
                  <Formulario
                    crearCita={crearCita}
                  />
              </div>
              <div className="one-half column">
                <h2>{titulo}</h2>
                {citas.map(cita =>(
                  <Cita
                      key={cita.id}
                      cita={cita}
                      eliminarCita={eliminarCita}
                  />
                ))}
              </div>
          </div>

      </div>
    </>
  )
}

export default App
