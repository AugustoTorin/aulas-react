const url = 'https://react.dev';
const contagem = 3;

function Atributos(){
    return(
        <>
            <a href={url} target="blank" rel="noreferrer">Site</a>

            <p>Você tem {contagem} novas mensagens.</p>

            <img src="/logo.png" alt="Logo" />

            <input type="text" className={'caixa'}/>
        </>
    );
}

export default Atributos;