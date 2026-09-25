const BadgeDinamico = ({tipo = 'info', children}) =>{
    const classe = `badge badge-${tipo}`;
    return(
        <span className={classe}>{children}</span>
    );
}

export default function MensagemDinamica(){
    return(
        <div>
            <BadgeDinamico tipo="success">Operação Concluída</BadgeDinamico>{' '}
            <BadgeDinamico tipo="warning">Operação Negada</BadgeDinamico>{' '} 
            <BadgeDinamico>Informações da Operação</BadgeDinamico> 
        </div> 
    );
}