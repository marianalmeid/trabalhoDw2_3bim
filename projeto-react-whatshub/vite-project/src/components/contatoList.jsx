import ContatoItem from "./contatoItem";

export default function ContatoList({ contatos, onUpdate, onDelete }) {
  if (contatos.length === 0) {
    return <p className="empty">Nenhum contato salvo ainda</p>;
  }

  return (
    <div>
      <ul className="contatoList">
        {contatos.map((contato) => (
          <ContatoItem
            key={contato.id}
            contato={contato}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
