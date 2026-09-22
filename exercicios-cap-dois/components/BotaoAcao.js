'use client';

function BotaoAcao({onAcao, children}){
    return(
        <button onClick={onAcao} style={{cursor: 'pointer'}}>{children}</button>
    );
}

export default BotaoAcao;