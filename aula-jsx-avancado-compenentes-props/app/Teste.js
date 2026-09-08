const nome = 'Augusto';
function Hello(){
  return(
    <>
      <h1>Olá, {nome}!</h1>
      {/* Renderização condicional com && */}
      {nome === 'Augusto' && <p>Que bom ver você aqui!</p>}
    </>
  );
}

export default Hello;