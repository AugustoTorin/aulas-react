import Hello from '@/components/Teste';
import ValorZero from '@/components/Condicionais';
import Atributos from '@/components/Atributos';

export default function Home(){
  return(
    <>
      <div>
        <Hello />
      </div>

      <>
        <ValorZero />
      </>

      <>
        <Atributos />
      </>
    </>
   
  );
}