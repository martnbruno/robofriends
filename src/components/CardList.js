import React from 'react';
import Card from './Card'

// Para hacer loop siempre es mejor map.
// Key es importante cuando se hace un loop porque si una de las cartas es excluida, jsx cargara nuevamente todo el DOM. De esta manera se acomoda solo.

const CardList = ({robots}) =>{    
    return (
        <div>
            {            
                robots.map ((user,i) => {                 
                    return( 
                        <Card                     
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots [i].email} 
                        />              
                        
                    )         
                }) 
            }
        </div>
    )
}

export default CardList