function Saudacao({ nome = 'Usuário', dia = 'no dia de hoje' }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}

export default function App() {
  const nomes = ['Vinicius', 'Lucas', 'Eduardo'];
  return (
    <>
      <Saudacao nome="Vinicius" dia="essa noite" />
      <Saudacao /> {/* Usuário, no dia de hoje */}
      {nomes.map(n => <Saudacao key={n} nome={n} dia="agora" />)}
    </>
  );
}