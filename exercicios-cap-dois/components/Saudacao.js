function Saudacao({ nome = 'Visitante', dia = 'hoje' }) {
  return <h2>Olá, {nome}! Como vai {dia}?</h2>;
}

export default function App() {
  const nomes = ['Maria', 'João', 'Aline'];
  return (
    <>
      <Saudacao nome="Maria" dia="essa manhã" />
      <Saudacao /> {/* Visitante, hoje */}
      {nomes.map(n => <Saudacao key={n} nome={n} dia="agora" />)}
    </>
  );
}