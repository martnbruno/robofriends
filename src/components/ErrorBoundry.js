import React, { Component } from 'react';


// Error Boundry es una herramienta que se agregó a React, sirve para que cuando haya un error en la renderización por estar mal el codigo, el usuario igual pueda ver una pantalla con un error un poco mas amigable visualmente, porque se va a renderizar la pagina, salvo el componente que haya dado error. Error Boundry tomará el error y no lo mostrará, pero intentará mostrar los demás componentes que estén bien.


class ErrorBoundry extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
    }

    // componentDidCatch es un nuevo life cycle method. Aca se usa para que si encuentre un error, entonces devuelva has hasError:true, que a su vez va a devolver "OOOOPPSS SOMETHING WENT WRONG".

    componentDidCatch(error,info) {
        this.setState({ hasError:true })
    }
    

    // Aca se le dice que chequee si this.state.hasError es igual a true. Si eso sucede, que devuelva "OOOOPPSS SOMETHING WENT WRONG", de lo contrario, que devuelva this.props.children, que en este caso es CardList, que es el tag que esta entre los tag ErrorBoundry en App.js.

    render () {
        if(this.state.hasError){
            return <h1>OOOOPPSS SOMETHING WENT WRONG</h1>
        }
        return this.props.children
    }
}


export default ErrorBoundry;