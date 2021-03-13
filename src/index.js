// import Card from './card';
// import CardList from './CardList';
// Es mejor crear un padre para todas las cards que crear cada una, por eso se crea App para que las contenga a todas.

// Hay que importar los packages aca para que funcionen en el sitio, sino no surte efecto!!

// Aca hay que hacer destructuring de robots poniendolo entre corchetes porque robots tiene varios elementos en el archivo, como arrays, entonces no es el unico.
// import { robots } from './robots';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// Todo esto que sigue es mejor que este en el padre CardList. 
// Asi se replican los componentes, se ponen uno abajo del otro (en realidad es mejor hacer map)
// Aca para cada componente replicado, se crea una prop que coincide con la info de robot.js 
// <div>
// <Card id={robots[0].id} name={robots[0].name} email={robots [0].email} />
// <Card id={robots[1].id} name={robots[1].name} email={robots [1].email} />
// <Card id={robots[2].id} name={robots[2].name} email={robots [2].email}/> 
// </div> 


// Aca le decimos que renderice App que contiene las cards y que acepta el array robots de robots.js como prop 

ReactDOM.render(
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
