import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Crear el Context
export const CategoriaContext =createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //Crear el state del Context
    const [categorias, guardarCategorias] = useState([]);

    //Ejecutar el llamado a la api
    useEffect(() =>{
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);

            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    }, [])

    return (
        <CategoriaContext.Provider
            value = {{

            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )
}

export default CategoriasProvider;