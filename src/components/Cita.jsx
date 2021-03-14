import PropTypes from 'prop-types';


const Cita = ({cita, eliminarCita}) => {


const { mascota, propietario, fecha, hora, sintomas} = cita;


return (
<div className="card">
    <div className="card-header">
        <div className="row">
            <div className="col">
                Cita
            </div>
            <div className="col">
                <button 
                    type="button" 
                    className="close" 
                    aria-label="Close"
                    onClick={() => eliminarCita(cita.id)}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
    <div className="card-body">
        <p>Mascota: {mascota}</p>
        <p>Dueño: {propietario}</p>
        <p>Fecha: {fecha}</p>
        <p>Hora: {hora}</p>
        <p>Síntomas: {sintomas}</p>
    </div>
</div>


);
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;