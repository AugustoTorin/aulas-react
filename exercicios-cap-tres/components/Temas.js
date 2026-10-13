'use client'
import { useState, useEffect } from "react";

export default function TemaClaroEscuro(){
    const [tema, setTema] = useState('light');
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if(carregado === true){
            document.body.className = tema;
            localStorage.setItem('tema', tema);
        }
    }, [tema, carregado])

    useEffect(() => {
        document.body.className = tema;
        const temaSalvo = localStorage.getItem('tema');

        if(temaSalvo !== null){
            setTema(temaSalvo)
        }

        setCarregado(true);
    }, [])

    return(
        <div>
            <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')} style={{cursor: 'pointer'}}>Alterar tema</button>
            <p>Estado atual da página: {tema} mode</p>
        </div>
    );
}