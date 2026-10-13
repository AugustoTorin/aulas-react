'use client'
import { useEffect, useState } from "react";

export default function Timer(){
    const [segundos, setSegundos] = useState(0);
    const [rodando, setRodando] = useState(false);

    useEffect(() => {
        let cronometro;
        if(rodando){
            cronometro = setInterval(() => setSegundos(prev => prev + 1), 1000)
        }
        return () => clearInterval(cronometro);
    }, [rodando])

    return(
        <div>
            <button onClick={() => setRodando(true)} style={{cursor: 'pointer'}}>Iniciar</button>
            <button onClick={() => setRodando(false)} style={{cursor: 'pointer'}}>Pausar</button>
            <button onClick={() => {setSegundos(0), setRodando(false)}} style={{cursor: 'pointer'}}>Reiniciar</button>

            <p>Tempo atual do timer: {segundos}</p>
        </div>
    );
}