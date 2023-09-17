import { useState } from "react";
import "../App.css";

function SolicitarUsuario({ setUser }) {
    const [usuario, setUsuario] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(usuario === ""){
            setError(true)
            return
        }

        setError(false)

        setUser([usuario])
    }

    return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Ingresa tu nombre:</h2>
        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)}></input>
        <button>Comenzar el juego</button>
        {error && <p>Este campo no puede estar vacio!</p>}
      </form>
    </>);
}
export default SolicitarUsuario