// Forma concisa (retorno implícito)
// Crie um componente chamado Botao que recebe uma prop chamada texto
const Botao = ({texto}) => <button>{texto}</button>;

// Com bloco (retorno explícito)
const BotaoGrande = ({texto}) => {
    return <button className="btn btn-lg">{texto}</button>;
}

export default function App(){
    return(
        <div>

        <Botao texto="Salvar" />
        <Botao texto="Cancelar" />
        <BotaoGrande texto="Continuar" />

        </div>
    );
}