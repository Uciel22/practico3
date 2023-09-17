<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
>>>>>>> 0a5a38e (Initialize project using Create React App)
      </header>
    </div>
  );
}

export default App;
