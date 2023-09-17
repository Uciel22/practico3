import React from "react";

function Marcador(props){
    return(
        <div className="Marcador">
            <p className="ParrafoInstruccion">El primero en llegar a tres (3) puntos gana.</p>
<<<<<<< HEAD

=======
           
>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
            <div className="ContenidoMarcador">
                <div className="PuntosUsuario BloquesMarcador">
                    <h2>Puntos usuario</h2>
                    <h2>{props.objMarcador.usuario}</h2>
<<<<<<< HEAD

                </div>
=======
                </div>

>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
                <div className="Ronda BloquesMarcador">
                    <h2>Ronda</h2>
                    <h2>{props.objMarcador.ronda}</h2>
                </div>
<<<<<<< HEAD
=======

>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
                <div className="PuntosPC BloquesMarcador">
                    <h2>Puntos PC</h2>
                    <h2>{props.objMarcador.pc}</h2>
                </div>
<<<<<<< HEAD

            </div>

=======
            </div>
>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
        </div>
    )
}

export default Marcador