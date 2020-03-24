import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

//Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    //State del Provider
    const [ idreceta, guardarIdReceta ] = useState(null);

    //Una vez que tengamos una receta, llamar la API
    useEffect( () => {
        const obtenerReceta = async () => {
            if(!idreceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${idreceta}`;

            const resultado = await axios.get(url);

            console.log(resultado.data.drinks[0]);

        }
        obtenerReceta();

    }, [idreceta]);

    return ( 
        <ModalContext.Provider
            value ={{
                guardarIdReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;