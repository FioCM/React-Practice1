import React,{useState} from "react";
import './Inferior.css'


function Inferior({nombre,info}){

    const [edad,setEdad]=useState(18)

    function sumarEdad(){
        setEdad(edad+1)
    }
    function restarEdad(){
        setEdad(edad-1)
    }

    return(
        <div className="cont">
            <h1 className="Nombre">{nombre}</h1>
            <p className="Info">Edad: {edad}</p>
            <p className="Info">{info}</p>
            <button className="button" onClick={sumarEdad}>Incrementar Edad</button>
            <button className="button" onClick={restarEdad}>Disminuir Edad</button>
        </div>
    );
};

export default Inferior;