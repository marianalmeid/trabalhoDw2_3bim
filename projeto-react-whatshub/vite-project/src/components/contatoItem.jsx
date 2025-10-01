import { useState } from "react";

export default function contatoItem({ contato, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState(contato.nome);
  const [numero, setNumero] = useState(contato.numero);

  const handleSave = () => {
    onUpdate(contato.id, { ...contato, nome, numero });
    setIsEditing(false);
  };

  const abrirWhatsApp = () => {
    const link = `https://wa.me/55${numero.replace(/\D/g, "")}`;
    window.open(link, "_blank");
  };

  return (
    <li className="contato-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            className="input-edit"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
          />
          <input
            className="input-edit"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            placeholder="Número"
          />
          <button className="btn salvar" onClick={handleSave}>
            Salvar
          </button>
          <button className="btn cancelar" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </div>
      ) : (
        <div className="contato-box">
          <div className="contato-info">
            <strong>{contato.nome}</strong>
            <p>{contato.numero}</p>
          </div>
          <div className="contato-acoes">
            <button className="btn mensagem" onClick={abrirWhatsApp}>
              Mensagem
            </button>
            <button className="btn editar" onClick={() => setIsEditing(true)}>
              Editar
            </button>
            <button className="btn excluir" onClick={() => onDelete(contato.id)}>
              Excluir
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
