import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 'uuid';


const Formulario = ({crearCita}) => {

    // creando el estado de nuestra app de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    });
    // agregando los errores en la pantalla

    const [error, actualizarError] = useState(false)
    // funcion que se ejecuta cada vez que el usuario escriba en un input

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    // extraer los valores
    const {mascota, propietario,fecha,hora,sintomas} = cita;

    // cuando el usuario precione crear cita

    const SubmitCita = (e) =>{
        e.preventDefault();
        actualizarError(true)
        // validar los datos

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''  ){
           
            return;
        }
        actualizarError(false)


        // Asignar un id 

        cita.id = uuidv4(); 
    
        // crear una cita


        crearCita(cita)

        // reiniciar el formulario

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    
    }


  return (
    <>
        <h1>Crear cita</h1>

        { error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

        <form onSubmit={SubmitCita}>
            <label>Nombre de la Mascota</label>
            <input 
                type="text"
                name='mascota'
                className='u-full-width'
                placeholder='Nombre de la mascota'
                onChange={actualizarState}
                value={mascota}
                
            
            />
            <label>Nombre del dueño</label>
            <input 
                type="text"
                name='propietario'
                className='u-full-width'
                placeholder='Nombre del dueño'
                onChange={actualizarState}
                value={propietario}
            
            />
            <label>Fecha de alta de la mascota</label>
            <input 
                type="date"
                name='fecha'
                className='u-full-width'
                onChange={actualizarState}
                value={fecha}
                
            
            />
            <label>Hora de alta de la mascota</label>
            <input 
                type="time"
                name='hora'
                className='u-full-width'
                onChange={actualizarState}
                value={hora}
                
            
            />

            <label>Sintomas de la mascota</label>
            <textarea name="sintomas" className='u-full-width' onChange={actualizarState} value={sintomas}>

            </textarea>

            <button type='submit' className='u-full-width button-primary'>Agregar cita</button>

        </form>
    </>
  )
}

export default Formulario
