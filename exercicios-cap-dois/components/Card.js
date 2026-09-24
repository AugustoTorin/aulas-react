const estilo = {padding: '8px', border: '3px solid #0a19ec', borderRadius: '9px'}

function Card({children}){
    return(
        <div style={estilo}>{children}</div>
    );
}

export default Card;