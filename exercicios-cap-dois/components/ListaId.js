const nomesId = [
    {id: 1, nome: 'Antônio'}, 
    {id: 2, nome: 'Verônica'}, 
    {id: 3, nome: 'Julia'}
]

const ListaId = () => <ol>{nomesId.map(obj => <li key={obj.id}>{obj.nome}</li>)}</ol>

export default ListaId;