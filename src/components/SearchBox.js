import React from 'react';

// Aca se le dice que onChange (que React tomó de html para manejar los inputs), ejecute searchChange.
// Tener en cuenta que si bien se usan los {} para escribir JS, cuando se trate de una función, los {} tienen que estar entre ().

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search'  
                placeholder='Search Robots..'
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;