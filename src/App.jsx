import './App.css';
import Barralado from './componentes/barra';
import Fundo from './componentes/Container';
import TopB from './componentes/topbarra';

function App() {
  return (
    <div className="flex">
      <TopB />
      <Barralado />
      <Fundo />
    </div>

  );
}

export default App;
