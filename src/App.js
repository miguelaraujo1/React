  
import "./App.css"
// import Contador from "./components/Contador";
// import inputControlado from "./components/inputControlado";
// import Estado from './components/Estado';
import Exercicio01 from "./components/exercicio01";

const App = () => {
  // let nome = "Miguel"
  let num1 = 5;
  let num2 = 5;
  return (
      <div className="App">
        <Exercicio01 num1={num1} num2={num2}/>
        {/* <Contador meuNome={nome}/> */}
        {/* <inputControlado/> */}
      </div>
    );
}
export default App;
   