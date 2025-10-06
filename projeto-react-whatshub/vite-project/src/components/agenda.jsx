import { useEffect, useState } from "react";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { MdSave, MdEdit, MdDelete, MdMessage, MdCheck } from "react-icons/md";
import { supabase } from "../supabaseClient";

export default function Agenda() {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [editId, setEditId] = useState(null); // ID do contato que está sendo editado

//carrega os contatos ao iniciar
  useEffect(() => {
    buscarContatos();
  }, []);


  const buscarContatos = async () => {
    const { data, error } = await supabase
      .from("contatos")
      .select("*")
      .order("id", { ascending: true });
    if (error) console.error("Erro ao carregar:", error);
    else setContatos(data);
  };

  // Formata número para exibição (00) 00000-0000
  const formatarNumero = (valor) => {
    const numeros = valor.replace(/\D/g, "");
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 7) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length <= 11) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  };

  // Para exibir formatado na lista
  const exibirNumeroFormatado = (num) => {
    if (!num) return "";
    return formatarNumero(num);
  };

  const salvarContato = () => {
    if (!nome || !numero) return;
    const numeroLimpo = numero.replace(/\D/g, "");

    if (editId) {
      // Atualiza contato existente
      setContatos(contatos.map(c => c.id === editId ? { ...c, nome, numero: numeroLimpo } : c));
      setEditId(null);
    } else {
      // Adiciona novo contato
      setContatos([...contatos, { id: Date.now(), nome, numero: numeroLimpo }]);
    }

    setNome("");
    setNumero("");
  };

  const editarContato = (c) => {
    setNome(c.nome);
    setNumero(formatarNumero(c.numero)); // coloca o número formatado no input
    setEditId(c.id);
  };

  const excluirContato = (id) => {
    setContatos(contatos.filter(c => c.id !== id));
    if (editId === id) { // Se estava editando esse contato, limpa o form
      setNome("");
      setNumero("");
      setEditId(null);
    }
  };

  const abrirWhatsApp = (numero) => {
    const link = `https://wa.me/55${numero.replace(/\D/g, "")}`;
    window.open(link, "_blank");
  };

  return (
    <div className="agenda">
      <h2><FaUserAlt color="#16a34a" /> Agenda de Contatos</h2>

      <div className="input">
        <div className="inputBox">
          <FaUserAlt color="#16a34a" />
          <input
            type="text"
            placeholder="Nome do contato"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <FaPhoneAlt color="#16a34a" />
          <input
            type="text"
            placeholder="Número"
            value={numero}
            onChange={(e) => setNumero(formatarNumero(e.target.value))}
          />
        </div>
      </div>
      

      <button className="btn-green" onClick={salvarContato}>
        {editId ? <MdCheck /> : <MdSave />} {editId ? "Atualizar" : "Salvar na Agenda"}
      </button>

      <h4>Seus Contatos ({contatos.length})</h4>
      {contatos.map((c) => (
        <div key={c.id} className="contato">
          <p>{c.nome}</p>
          <span>{exibirNumeroFormatado(c.numero)}</span>
          <div className="acoes">
            <button className="btn-green" onClick={() => abrirWhatsApp(c.numero)}><MdMessage /> Mensagem</button>
            <button className="btn-green" onClick={() => editarContato(c)}><MdEdit /> Editar</button>
            <button className="btn-red" onClick={() => excluirContato(c.id)}><MdDelete /> Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
