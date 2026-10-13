import Contador from "@/components/Contador";
import Relogio from "@/components/Relogio";
import TemaClaroEscuro from "@/components/Temas";
import TextoControlado from "@/components/TextoControlado";
import Timer from "@/components/Timer";
import ListaItens from "@/components/ToDoSimples";

export default function Home() {
  return (
    <>
    
      <Contador />

      <Relogio />

      <TextoControlado />

      <ListaItens />

      <Timer />

      <TemaClaroEscuro />
    </>
  );
}