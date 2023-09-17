import React from "react";
import Cuerpo from './Cuerpo';
import Footer from './Footer';

function IniciarJuego({user, setUser}){
    const handleLogout = () => {
        setUser([])
    }
    return(
        <>
          <header className="Encabezado">
            <h1 className="TextoEncabezado">PIEDRA, PAPEL O TIJERA</h1>
            <p>Bienvenido {user}, debes elegir una opción.</p>
          </header>
        <Cuerpo/>
        <button onClick={handleLogout}>Haz clic si deseas salir del Juego</button>
        <Footer/>
        </>
    )
}

export default IniciarJuego