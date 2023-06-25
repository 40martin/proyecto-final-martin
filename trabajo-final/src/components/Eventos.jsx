import { useState } from "react";

const Eventos = () => {
    const [texto, setTexto] = useState("");
    
    
    const hacerClick = (event) => {
        console.log(event.nativeEvent);
        console.log("Hiciste click");
    }

    const capturarTexto = (event) => {
        setTexto(event.target.value);
    }

    

    return (
        <div>
            <h2>Escriba su comentario y Hacer Click</h2>
            <p><button className="btn btn-primary py-3" onClick={(e) => {hacerClick(e)}}>Hacer Click</button></p>
            <p><input type="text" onInput={(e) => {capturarTexto(e)}} /></p>
            <p>{texto}</p>
        </div>
    )
}

export default Eventos;