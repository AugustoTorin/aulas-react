import HelloWorld from "@/components/HelloWorld";
import Hello from "@/components/Hello";

export default function Home(){
  return(
    <>
      <HelloWorld />

      <Hello nome={'Augusto'}/>    
      <Hello nome={'Adriana'}/>    
    </>
  );
}