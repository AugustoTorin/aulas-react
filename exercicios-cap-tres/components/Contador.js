'use client'

import { useState } from "react";

export default function Contador(){
    const [cont, setCont] = useState(0);
    
    return(
        <div>

            <p>Valor: {cont}</p>
            <button onClick={() => setCont(prev => prev + 1)} style={{cursor: 'pointer'}}>Adicionar +1</button>
            <button onClick={() => setCont(prev => prev - 1)} style={{cursor: 'pointer'}}>Tirar -1</button>

        </div>
        
    );
}