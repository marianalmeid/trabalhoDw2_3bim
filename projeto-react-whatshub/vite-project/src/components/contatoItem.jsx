import { useState } from "react";

export default function ContatoItem({ contato, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [nome, setNome] = useState(contato.nome);
  const [numero, setNumero] = useState(contato.numero);

  const handleSave = () => {
    onUpdate(contato.id, { ...contato, nome, numero });
    setIsEditing(false);
  };

  return (
    <li className="contactItem">
      {isEditing ? (
        <>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
          <input value={numero} onChange={(e) => setNumero(e.target.value)} />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span>{contato.nome} - {contato.numero}</span>
          <div className="btns">
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => onDelete(contato.id)}>Excluir</button>
          </div>
        </>
      )}
    </li>
  );
}
