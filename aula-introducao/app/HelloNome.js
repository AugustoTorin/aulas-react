// Cria função com um componente dinâmico props chamada HelloNome que retorna um texto 'Olá, {nome escolhido}"
function HelloNome(props){
    return <h1>Olá, {props.nome}!</h1>;
}

export default HelloNome;