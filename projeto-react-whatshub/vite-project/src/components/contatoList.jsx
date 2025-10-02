import ContatoItem from "./contatoItem.jsx";

export default function ContatoList({ contatos, onUpdate, onDelete }) {
  if (contatos.length === 0) {
    return <p className="empty">Nenhum contato salvo ainda</p>;
  }

  return (
    <ul className="contato-list">
      {contatos.map((contato) => (
        <ContatoItem
          key={contato.id}
          contato={contato}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
