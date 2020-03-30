import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Forma', estado: false},
        {nombre: 'Elegir Musica', estado: true}
    ];

    return ( 
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className = "listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className = "tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea 
                            tarea = {tarea}
                        />
                    ))
                }
            </ul>

            <button
                type = "button"
                className = "btn btn-eliminar"
            >Eliminar Proyecto &times;</button>

        </Fragment>
     );
}
 
export default ListadoTareas;