import React from "react";
import './Tarjeta.css'


function Tarjeta({nombre,age,info}){
    return(
        <div className="contenedor">
            <h1 className="nombre">{nombre}</h1>
            <p className="info">{age}</p>
            <p className="info">{info}</p>
        </div>
    );
};

export default Tarjeta;