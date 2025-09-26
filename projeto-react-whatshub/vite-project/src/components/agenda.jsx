import { useState } from "react";
import ContatoForm from "./contatoForm";
import ContatoList from "./contatoList";


export default function Agenda() {
  const [contatos, setContatos] = useState([]);

  const addContato = (contato) => {
    setContatos([...contatos, {id: Date.now(), ...contato}]);
  };

  const updateContato = (id, updated) => {
    setContatos(contatos.map(c => (c.id === id ? updated : c)));
  };

  const deleteContato = (id) => {
    setContatos(contatos.filter(c => c.id !== id));
  };

  return (
    <div className="agenda">
      <h2 className="titulos">Agenda</h2>
        <ContatoForm onAdd={addContato} />
        <ContatoList
          contatos={contatos}
          onUpdate={updateContato}
          onDelete={deleteContato}
        />
    </div>
  )
}