const pontos = 0;

function ValorZero(){
    return(
        <>
            <p>
                {/* Isto exibirá 0 na tela */}
                {pontos && 'Você tem pontos'}
            </p>

            <p>
                {/* Melhor: evita mostrar 0 */}
                {pontos > 0 ? 'Você tem pontos' : null}
            </p>
        </> 
    );
}

export default ValorZero