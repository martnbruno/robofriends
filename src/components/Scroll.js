import React from 'react'


// Ademas de props y state, en React es importante la nocion de children, que permite incluir en un wrap a otros componentes que hayamos creado.
// Tambien aca se muestra como se incluye estilo en jsx, con 1 {} se puede escribir JS, pero con 2 {{}}, se puede escribir css.

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;