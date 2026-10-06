'use client'
import { useState } from "react";

export default function ListaItens(){
    const [item, setItem] = useState('');
    const [lista, setLista] = useState([]);

    return(
        <div>
            <input value={item} onChange={i => setItem(i.target.value)} placeholder="Adicone um item"></input>
            <button onClick={() => setLista(prev => [...prev, item])} style={{cursor:'pointer'}}>Adicionar</button>
            <ul>{lista.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
    );
}