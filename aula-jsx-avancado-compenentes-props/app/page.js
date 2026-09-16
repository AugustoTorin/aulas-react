import Hello from '@/components/Teste';
import ValorZero from '@/components/Condicionais';
import Atributos from '@/components/Atributos';
import App from '@/components/BotaoGrande';
import Alerta from '@/components/RestProps';

export default function Home(){
  return(
    <>
      <div>
        <Hello />
      </div>

      <ValorZero />
      
      <Atributos />

      <App />

      <Alerta tipo="warning" id="aviso">Cuidado!</Alerta>
      <Alerta>Mensagem informativa</Alerta>
    </>
   
  );
}