import GerarLista from "@/components/Array";
import Card from "@/components/Card";

export default function App(){
  return(
    <>
      <Card>
        <h1>Saudações</h1>
        <p>Como vai você?</p>
      </Card>

      <GerarLista />
    </>
  );
}