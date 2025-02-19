// 1. criando um elemento através da função do React createElement
import React from 'react';

function Hello() {
    return (
        <div>
            <h1>Olá Isa!</h1>
        </div>
    )
}

// ReactDOM.render(
//     React.createElement(Hello),
//     document.querySelector('#app')
// )

// 2. criando componentes como classe
class Hello1 extends React.Component {
    render() {
        return (
            React.createElement('h1', null, 'Olá mundo')
        )
    }
}

// 3. criando HTML com React
ReactDOM.render(
    React.createElement('span', null, 'Olá'),
    document.querySelector('#app')
)

// 5. recebendo atributos/passando props
function Hello2(props) {
    return (
        React.createElement('h1', { id: props.id, className: 'titulo-1' }, 
            props.label)
    )    
}

ReactDOM.render(
    React.createElement(Hello2, { id: 'titulo', label: 'Olá dev!'}),
    document.querySelector('#app')
)

// atributos e componentes de classes
class Hello3 extends React.Component {
    render() {
        return (
            React.createElement('h1', { id: this.props.id, className: 'titulo-1'},
                this.props.label)
        )
    }
}

ReactDOM.render(
    React.createElement(Hello3, { id: 'titulo', label: 'Olá dev!'}),
    document.querySelector('#app')
)

export default Hello;