import {Fragment, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota : '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas:''
    });

    const [ error, actualizarError ] = useState(false);
 

    const actualizarState = e =>{
        
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    
    const { mascota, propietario, fecha, hora, sintomas} = cita;

    //envia el formulario al presionar boton
    const submitCita = e =>{
        e.preventDefault();

        //validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        } 

        //eliminar mensaje de error
        actualizarError(false);

        //asignar id
        cita.id = uuidv4();

        //crear la cita
        crearCita(cita);

        //actualizar la cita
        actualizarCita({
            mascota : '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas:''
        })
        



        
    }
    
return ( 
<Fragment>
    <h2>Crear cita</h2>

    {error ? <p className="alert alert-danger">Todos los campos son obligatorios</p> : null}


    <form 
        onSubmit={submitCita}
    >
        <div className="form-group">
            <label htmlFor="">
                Nombre Mascota
            </label>
            <input 
                type="text" 
                name="mascota" 
                className="form-control" 
                placeholder="Nombre mascota"
                onChange={actualizarState}
                value={mascota}
            />

        </div>

        <div className="form-group">
            <label htmlFor="">
                Nombre Dueño </label>
            <input 
                type="text" 
                name="propietario" 
                className="form-control" 
                placeholder="Nombre dueño" 
                onChange={actualizarState}
                value={propietario}
                />

        </div>

        <div className="form-group">
            <label htmlFor="">
                Fecha
            </label>

            <input 
                type="date" 
                name="fecha" 
                className="form-control" 
                onChange={actualizarState}
                value={fecha}
            />
        </div>

        <div className="form-group">
            <label htmlFor="">
                Hora
            </label>
            <input 
                type="time" 
                name="hora" 
                className="form-control" 
                onChange={actualizarState}
                value={hora}
            />
        </div>

        <div className="form-group">

            <label htmlFor="">
                Síntomas
            </label>
            <textarea 
                name="sintomas" 
                className="form-control"
                onChange={actualizarState}
                value={sintomas}
            >
        </textarea>
        </div>

        <button tipe="submit" className="btn btn-primary">
            Agregar cita
        </button>

    </form>



</Fragment>


);
}


Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;