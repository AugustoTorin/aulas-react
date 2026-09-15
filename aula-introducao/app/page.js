import HelloWorld from '@/components/HelloWorld';
import HelloNome from '@/components/HelloNome';

export default function HomeWorld(){
  return(
    <div>

      <HelloWorld />

      <HelloNome nome='Augusto' />
      <HelloNome nome='Adriana' />

    </div>
  );
}