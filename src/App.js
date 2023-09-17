<<<<<<< HEAD
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
=======
>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
import './App.css';
import SolicitarUsuario from './componentes/SolicitarUsuario';
import { useState } from 'react'
import IniciarJuego from './componentes/IniciarJuego';

function App() {

  const [user, setUser] = useState([])

  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
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
=======
      {
        !user.length > 0
        ? <SolicitarUsuario setUser={setUser} />
        : <IniciarJuego user={user} setUser={setUser}/> 
      }
>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
      </header>
    </div>
  );
}

export default App;
