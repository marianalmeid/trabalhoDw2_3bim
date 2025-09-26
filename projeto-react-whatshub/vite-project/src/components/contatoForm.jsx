import { useState } from "react";


export default function ContatoForm({onAdd})
{
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !numero){
      alert("Escreva um nome e um numero");
      return;
    }
    onAdd({nome, numero});
    setNome("");
    setNumero("");
  };


  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input type="text" 
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}/>
      
      <input type="text" 
            placeholder="Numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}/>

      <button type="submit">Add</button>
    </form>
  )
}