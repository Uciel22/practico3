import tijera from "../imagenes/tijera.jpg";
import papel from "../imagenes/papel.jpg";
import piedra from "../imagenes/piedra.jpg";


function generarOpcionPC(){
    let numeroAleatorio = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let imagenElegidaPC = ""
<<<<<<< HEAD
=======

>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
    switch(numeroAleatorio){
        case 1:
            imagenElegidaPC = piedra;
            break;
        case 2:
            imagenElegidaPC = papel;
            break;
        case 3:
            imagenElegidaPC = tijera;
            break;
    }
    return imagenElegidaPC;
}

function cambiarImagen(evento,estado,setEstado,){
    let opcionUsuario = "";
    let opcionPC = generarOpcionPC();
<<<<<<< HEAD
=======

>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
    switch(evento.target.name){
        case "piedra":
            opcionUsuario = piedra;
            break;
        case "papel":
            opcionUsuario = papel;
            break;
        case "tijera":
            opcionUsuario = tijera;
            break;
    }
<<<<<<< HEAD
=======

>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
    setEstado((estadoAnterior)=>{
        return{
            ...estadoAnterior,
            imagenUsuario:opcionUsuario,
            imagenPC:opcionPC
        }
    });
<<<<<<< HEAD
    cambiarMarcador(opcionUsuario,opcionPC,estado,setEstado)
}
=======

    cambiarMarcador(opcionUsuario,opcionPC,estado,setEstado)
}

>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
function cambiarMarcador(opcionUsuario,opcionPC,estado, setEstado){
    let puntosUsuario = estado.usuario;
    let puntosPC = estado.pc;
    let rondas = estado.ronda;

    switch(opcionUsuario){
        case piedra:
            if(opcionPC === tijera){
                puntosUsuario +=1;
            }else if(opcionPC === papel){
                puntosPC += 1;
            }
            break;
        case papel:
            if(opcionPC === piedra){
                puntosUsuario +=1;
            }else if(opcionPC === tijera){
                puntosPC +=1;
            }
            break;
        case tijera:
            if(opcionPC === papel){
                puntosUsuario +=1;
            }else if(opcionPC === piedra){
                puntosPC +=1;
            }
            break;
    }
    rondas +=1;
    setEstado((estadoAnterior)=>{
        return {
            ...estadoAnterior,
<<<<<<< HEAD
            usuario:puntosUsuario,
            ronda:rondas,
            pc:puntosPC,
=======
            usuario: puntosUsuario,
            ronda: rondas,
            pc: puntosPC,
>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
        }
    })

}


function reiniciarMarcador(setEstado){
    setEstado({
        usuario:0,
        ronda:0,
        pc:0,
        imagenUsuario:"",
        imagenPC:""
    })

}
export { cambiarImagen, reiniciarMarcador};
<<<<<<< HEAD
=======

>>>>>>> a7ea714 (Agrego proyecto piedra papel tijeras en React)
export default cambiarImagen