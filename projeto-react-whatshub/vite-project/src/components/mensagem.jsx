import React from "react";

export default function Mensagem({ mensagem, setMensagem }) {
  return (
    <div className="input-group">
      <label>Mensagem (opcional)</label>
      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        placeholder="Digite sua mensagem aqui..."
        className="message-input"
      />
    </div>
  );
}
