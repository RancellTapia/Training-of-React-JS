import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    const [ nombre, guardarNombre] = useState('');
    const [ cantidad, guardarCantidad] = useState(0);
    const [ error, guardarError] = useState(false);
 
    // Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validad
        if(cantidad < 1 || isNaN (cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);
        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Resetear el form
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 
        <form
            onSubmit = {agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error mensaje = "Ambos campos son obligatorio o Presupuesto incorrecto" /> : null }
            <div className = "campo">
                <label>Nombre de gasto</label>
                <input
                    type = "text"
                    className = "u-full-width"
                    placeholder = "Ej. Transporte"
                    value = {nombre}
                    onChange = {e => guardarNombre( e.target.value)}
                />
            </div>

            <div className = "campo">
                <label>Nombre de gasto</label>
                <input
                    type = "number"
                    className = "u-full-width"
                    placeholder = "Ej. 300"
                    value = {cantidad}
                    onChange = {e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>
{/* 
            <div className = "alert-uno">
                <label>Seleccione el porcentaje</label>
                
                <div className = "alert-dos">
                    <input type = "radio" name = "boton" value = "1"></input>
                </div>

               <div className = "alert-tres">
                    <label>Alerta</label>
                </div>

                <div>
                    <select id = "porcentaje">
                    <option value = "15"> 15% </option>
                    <option value = "25"> 25% </option>
                    <option value = "45"> 45% </option>
                    </select>
                </div> 
            
                
                
            </div> */}


            <input
                type = "submit"
                className = "button-primary u-full-width"
                value = "Agregar Gasto"
                />
            
        </form>
     );
}
 
Formulario.propTypes = {
    guardarGastos: PropTypes.func.isRequired,
    guardarCrearGastos: PropTypes.func.isRequired

}

export default Formulario;