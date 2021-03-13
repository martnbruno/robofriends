import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// STATE es un object que describe la App. En este caso es robots.js y lo que se introduzca
// dentro de la SearchBox. Mientras que las props nunca cambian, state si lo hace y permite cambiar
// lo que SearchBox dice y lo que robots significa cuando se introduce un valor en la SearchBox que coincida 
// con alguno de esos robots.
// STATE>>>>props. El componente padre le dice cual es el state al componente hijo, y apenas eso sucede,
// state le da una prop, y a partir de ahi ese componente hijo siempre tendrá esa prop.
// En este caso se usa state para poder lograr que cuando escriba en la SearchBox, me devuelva el robot que elijo.

// Esta syntax sale de adavanced objects (constructor, super) y sirve para extender codigo.
// Aca se crea el state, es decir el searchfield y robots, para que estos cambien y afecten a la App.
// De este manera, ahora que App contiene state, puede cambiarlo.

// EXPLICACION DEL CODIGO: está el componente App que tiene 2 estados: robots y searchfield. Y como App contiene state,
// cualquier componente que tenga el state, usará la syntax class para usar la funcion constructor y crear this.state
// Y this.state es lo que cambia en App, lo que la describe. 
// El Dom virtual es un objeto que toma todo el state, y a su vez React que es quien crea el DOM virtual, toma el state 
// para renderizar el state y pasarlo como props a los demás componentes (CardList, SearchBox, etc.), de manera que esos
// componentes, que no son mas que funciones, pueden a su vez renderizarse. Y como lo que cambia es el state, esos componentes
// siempre serán iguales y se pueden replicar en otros proyectos. Y esto porque solo App puede cambiar state, lo demás quedará 
// inalterado, pero puede pasar props como pasar onSearchChange como prop de SearchBox. Y asi la SearchBox, cada vez que hay un
// cambio en el input, le dice a App que hubo un cambio y que corra onSearchChange.
// Despues onSearchChange corre la función con el event y actualiza el state de searchfield con lo que sea que se haya introducido. 
// Así, con la información que se obtiene de la SearchBox, ésta se comunica con CardList y le dice que filtre el state robots para
// que tome únicamente lo incluido (includes) en el searchfield, ya sea que se introduzca en mayúsculas o minúsculas.
// Y por este motivo a CardList se la pasa por la const filteredRobots.

class App extends Component {    
    constructor (){
        super()       
        this.state = {
            robots: [],
            searchfield:''
        }   
    }


// componentDidMount es un metodo de Component LifeCycle de React, que a su vez se divide en mounting, updating y unmounting. Cada vez que se corre App a través de React se ejecutan en orden estos metodos. En el caso de mounting es constructor(), static getDerivedStateFromProps(), render() y componentDidMount().
// Aca lo que se hace es, arriba robots paso a ser [], y no se importa mas robotos desde un archivo sino que se trae desde una api, que es el sitio que se ve abajo (asi funciona en la realidad, la informacion no esta en un archivo sino en otro lugar de la web). Para traer esta informacion se utiliza fetch que es una herramienta de window que se usa para agarrar información de servers.

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}));
}

    // Aca se crea una funcion onSearchChange, que devuelve un evento cuando se busca algo en la SearchBox.
    // A su vez este evento crea una funcion que fija el estado del state a partir de la filtracion de robots que se realiza en render
    // mediante filter,  indicandole que ya sea que se escriba lowercase o uppercase, tiene que tomar el value introducido.
    // Aca se usa una arrow function porque como onSearchChange no es una funcion de React, hace falta que la syntax sea asi. Cuando por ejemplo se usa render (), en ese caso no hace falta arrow function porque es una función propia de react.

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value}) 
    }

    // Aca se crea un componente SearchBox que le dice a this que es el object App que haga algo cuando se ejecuta la función onSearchChange.
    // Ahora esto permite ir a SearchBox.js e indicarle a const SearchBox que admita la funcion searchChange 
    // A partir de definir el state se puede acceder a CardList desde alli. 
    // Aca tambien se agrega un ternary operator (antes era un if/else) diciendole que si la cantidad de users que se traen desde la api es igual a 0, porque por ejemplo esta tardando mucho en traerlos porque son muchos usarios, y por eso tarda en renderizar, entonces que muestre Loading.., y si no es asi entonces que renderice la app.
    // Ojo que aca se hizo destructuring, antes era this.state.robots para decirle que la referencia es al robots del state de App.js. Para evitar ser repetitivo, se define la const {robots, searchfield} para no tener que escribir this.state.robots o this.state.searchfield cada vez.

    
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loading..</h1>: 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboSearch</h1>                
                    <SearchBox searchChange={this.onSearchChange} />      
                    <Scroll> 
                        <ErrorBoundry>       
                            <CardList robots = {filteredRobots} />  
                        </ErrorBoundry>  
                    </Scroll>              
                </div>
            )
        
        
    }
   
}

// Siempre hay que exportar el componente para que funcione.
export default App;

