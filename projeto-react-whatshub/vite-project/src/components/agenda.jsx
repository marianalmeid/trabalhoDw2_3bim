import { useEffect, useState } from "react";
import { FaUserAlt} from "react-icons/fa";
import { MdDelete, MdCheck } from "react-icons/md";
import DDDInfo from "./ddd";
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

  const salvarContato = async () => {
    if (!numero || !nome) {
    alert("Por favor, digite um número e um nome!");
    return;}
    const numeroLimpo = numero.replace(/\D/g, "");


    if (editId) {
      // Atualizar contato
      const { error } = await supabase
        .from("contatos")
        .update({ nome, numero: numeroLimpo })
        .eq("id", editId);
      if (error) console.error("Erro ao atualizar:", error);
    } else {
      // Inserir novo contato
      const { error } = await supabase
        .from("contatos")
        .insert([{ nome, numero: numeroLimpo }]);
      if (error) console.error("Erro ao inserir:", error);
    }

    setNome("");
    setNumero("");
    setEditId(null);
    buscarContatos(); // recarrega lista
  };

  const editarContato = (c) => {
    setNome(c.nome);
    setNumero(formatarNumero(c.numero)); // coloca o número formatado no input
    setEditId(c.id);
  };

  
  const excluirContato = async (id) => {
    const { error } = await supabase.from("contatos").delete().eq("id", id);
    if (error) console.error("Erro ao excluir:", error);
    else buscarContatos();
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
          <input
            type="text"
            placeholder="Nome do contato"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <input
            type="text"
            placeholder="Número"
            value={numero}
            onChange={(e) => setNumero(formatarNumero(e.target.value))}
          />
        </div>
      </div>
      

      <button className="btn-green" onClick={salvarContato}>
        {editId ? <MdCheck /> : <FaUserAlt color="black" />} {editId ? "Atualizar" : "Salvar na Agenda"}
      </button>

      <h4>Seus Contatos ({contatos.length})</h4>
      <div className="listaContatos">
          {contatos.map((c) => (
            <div key={c.id} className="contato">
                <div className="info">
                  <p className="nome">{c.nome}</p>
                  <div className="dados">
                    <span>{exibirNumeroFormatado(c.numero)}</span>
                    <DDDInfo numero={c.numero} />
                  </div>
                  
                </div>
                <div className="acoes">
                      <button className="btn-green" onClick={() => abrirWhatsApp(c.numero)}>Mensagem</button>
                      <button className="btn-green" onClick={() => editarContato(c)}>Editar</button>
                      <button className="btn-red" onClick={() => excluirContato(c.id)}><MdDelete /></button>
                </div>
            </div>
                ))}
      </div>
      
    </div>
  );
}