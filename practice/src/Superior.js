import React from "react";
import "./Superior.css";


function Superior({titulo,texto}){
    return(
        <div className="container">
            <h1 className="titulo">{titulo}</h1>
            <p className="texto">{texto}</p>
        </div>
    );
};

export default Superior;