import {useState} from 'react'

const Contador = ({meuNome}) =>{
    const [count, setCount] = useState(0)

    const incrementaContador = () =>{
        setCount(count+1);
    }

    return(
        <div>
            <h1>Olá, {meuNome}!</h1>
            <h1>Contador de Cliques: {count}</h1>
            <button onClick={incrementaContador}>CLIQUE AQUI!!</button>
        </div>
    );
}

export default Contador;