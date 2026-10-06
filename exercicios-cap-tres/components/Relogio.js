'use client'
import { useEffect, useState } from "react";

export default function Relogio(){
    const [horario, setHorario] = useState(new Date());
    
    useEffect(() => {
        const intervalo = setInterval(() => setHorario(new Date()), 1000)
        return() => clearInterval(intervalo);
    }, [])

    return(<p>{horario.toLocaleTimeString()}</p>)
}