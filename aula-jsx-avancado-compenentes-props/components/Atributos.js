const url = 'https://react.dev';
const contagem = 3;

function Atributos(){
    return(
        <>
            <a href={url} target="_blank" rel="noreferrer">Site</a>

            <p>Você tem {contagem} novas mensagens.</p>

            <img src="/logo.png" alt="Logo" />

            <input type="text" />
        </>
    );
}

export default Atributos;