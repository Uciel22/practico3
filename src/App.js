import './App.css';
import SolicitarUsuario from './componentes/SolicitarUsuario';
import { useState } from 'react'
import IniciarJuego from './componentes/IniciarJuego';

function App() {

  const [user, setUser] = useState([])

  return (
    <div className="App">
      <header className="App-header">
      {
        !user.length > 0
        ? <SolicitarUsuario setUser={setUser} />
        : <IniciarJuego user={user} setUser={setUser}/> 
      }
      </header>
    </div>
  );
}

export default App;
