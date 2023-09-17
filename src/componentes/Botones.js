import React from "react";
import { cambiarImagen,reiniciarMarcador} from "../funciones/funciones";


function Botones(props){

    function clickImagen(evento){
        cambiarImagen(evento,props.estado, props.setEstado);
    }

    function clickReiniciar(){
        reiniciarMarcador(props.setEstado);
    }

    return(
        <div className="Botones">
           <div className="BotonesSuperiores BloqueBotones">
<<<<<<< HEAD
                <button name="piedra" className="Piedra Boton" onClick={clickImagen} disabled={props.estado.usuario == 3 || props.estado.pc == 3 ? true:false}>Piedra</button>
                <button name="papel" className="Papel Boton" onClick={clickImagen} disabled={props.estado.usuario == 3 || props.estado.pc == 3 ? true:false}>Papel</button>
           </div>
           <div className="BotonesInferiores BloqueBotones">
                <button name="tijera" className="Tijera Boton" onClick={clickImagen} disabled={props.estado.usuario == 3 || props.estado.pc == 3 ? true:false}>Tijera</button>
                <button className="Repetir Boton" onClick={clickReiniciar}>Repetir juego</button>
           </div>
           {props.estado.usuario == 3 || props.estado.pc == 3 ? <h2 className="Ganador">Resultado: {props.estado.usuario == 3 ? "🔥 Has ganado el juego 🔥": "😭 La PC gano el juego😭"} </h2> :false}
=======
                <button name="piedra" className="Piedra Boton" onClick={clickImagen} disabled={props.estado.usuario === 3 || props.estado.pc === 3 ? true:false}>Piedra</button>
                <button name="papel" className="Papel Boton" onClick={clickImagen} disabled={props.estado.usuario === 3 || props.estado.pc === 3 ? true:false}>Papel</button>
           </div>
           <div className="BotonesInferiores BloqueBotones">
                <button name="tijera" className="Tijera Boton" onClick={clickImagen} disabled={props.estado.usuario === 3 || props.estado.pc === 3 ? true:false}>Tijera</button>
                <button className="Repetir Boton" onClick={clickReiniciar}>Repetir juego</button>
           </div>
           {props.estado.usuario === 3 || props.estado.pc === 3 ? <h2 className="Ganador">Resultado: {props.estado.usuario === 3 ? "🔥 Has ganado el juego 🔥": "😭 La PC gano el juego😭"} </h2> :false}
>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
        </div>
    )
      
}

export default Botones