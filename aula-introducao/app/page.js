import HelloWorld from './HelloWorld';
import HelloNome from './HelloNome';

export default function HomeWorld(){
  return(
    <div>

      <HelloWorld />

      <HelloNome nome='Augusto' />
      <HelloNome nome='Adriana' />

    </div>
  );
}