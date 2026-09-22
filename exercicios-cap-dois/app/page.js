'use client';

import GerarLista from "@/components/Array";
import Badge from "@/components/Badge";
import BotaoAcao from "@/components/BotaoAcao";
import Card from "@/components/Card";
import ListaId from "@/components/ListaId";
import App from "@/components/Saudacao";

export default function Home(){
  const dizerOi = () => alert('E aí usuário, como vai?')
  return(
    <>
      <Card>
        <h1>Saudações</h1>
        <p>Como vai você?</p>
      </Card>

      <GerarLista />

      <App />

      <BotaoAcao onAcao={dizerOi}>
        Clique  
      </BotaoAcao>

      <ListaId />

      <Badge tipo={'warning'} />
    </>
  );
}