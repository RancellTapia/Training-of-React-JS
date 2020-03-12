import React, { Fragment} from 'react';
import Header from './components/Header';



function App() {
  return (

    <Fragment>
       <Header
        titulo = 'Weather React App'
       />

       <div className = "contenedor-form">
         <div className = "container">
           <div className = "col m6 s12">
              1
           </div>
            <div className = "col m6 s12">
              2
            </div>

         </div>
       </div>
    </Fragment>
  );
}

export default App;
