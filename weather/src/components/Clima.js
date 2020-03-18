import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    // Extraer los valores 

    const { name, main } = resultado;

    if(!name) return null;

    return ( 
        <div className = "card-panel white col s12">
            <div className = "black-text">
                <h2>El Clima de {name} es:</h2>
                <p className = "temperatura">
                    {parseFloat(main.temp - 273.15, 10).toFixed(2)} <span> &#x2103; </span>
                </p>

                <p>Temperatura Máxima: 
                    {parseFloat(main.temp_max - 273.15, 10).toFixed(2)} <span> &#x2103; </span>
                </p>

                <p>Temperatura Minima:
                    {parseFloat(main.temp_min - 273.15, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Clima.protoTypes = {
    resultado: PropTypes.object.isRequired
}
 
export default Clima;