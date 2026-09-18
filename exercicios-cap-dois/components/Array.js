const lista = ['Augusto', 'Adriana', 'Brownie']

function GerarLista(){
    return(
        <ul>
            {lista.map(nome => <li key={nome}>{nome}</li>)}
        </ul>
    );
}

export default GerarLista;