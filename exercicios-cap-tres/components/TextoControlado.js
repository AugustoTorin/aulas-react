'use client'
import { useState } from "react";

export default function TextoControlado(){
    const [texto, setTexto] = useState('');

    return(
        <div>
            <input value={texto} onChange={i => setTexto(i.target.value)} placeholder="Digite algo"></input>
            <p>Você digitou: {texto || ''}</p>
            <p>Quantidade de caracteres: {texto.length}</p>
        </div>
    );
}