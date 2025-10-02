import { useState } from "react";
import DigNumero from "./digNumero.jsx";

export default function ContatoForm({ onAdd }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !numero) {
      alert("Por favor, preencha Nome e Número.");
      return;
    }
    onAdd({ nome, numero });
    setNome("");
    setNumero("");
  };

  return (
    <form className="contato-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <DigNumero numero={numero} setNumero={setNumero} />
      <button type="submit" className="btn-green">Salvar na Agenda</button>
    </form>
  );
}
