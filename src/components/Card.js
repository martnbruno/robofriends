import React from 'react';

// Aca se le dice que acepte el parametro props.
// Esto no es html, es jsx que crea un DOM virtual y tiene esta syntax similar a HTML.
// Siempre todo tiene que estar en un wrap, en este caso se usa un div.
// Aca tambien es importante que no se pone class como html porque no lo es. Y como class es una palabra reservada por javascript, en jsx se usa className.
// Tener en cuenta como utiliza los {} cuando tiene que usar template strings por ejemplo, para convertirla en una expresion de js que react pueda leer.  
// Aca se incluyen los parametros props creados en index.js 

const Card = (props) => {
    return (        
        <div className = 'tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>         
            <img alt='robots' src={`https://robohash.org/${props.id}?200x200`}/>         
            <div>            
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;

// Es importante que tambien se podría haber hecho destructuring arriba:

// const Card = ({id, name, email}) => {....
// Y despues    <h2>{name}</h2>
            //  <p>{email}</p> 
// Asi hubiera sido mas clean. Tener en cuenta que todo lo que no sea js lo pone entre corchetes para traducirlo.