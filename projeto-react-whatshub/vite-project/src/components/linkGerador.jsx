import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaRegCopy } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function GeradorLinks() {
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [link, setLink] = useState("");
  const [copiado, setCopiado] = useState(false); // Estado para feedback de cópia

  const formatarNumero = (valor) => {
    const numeros = valor.replace(/\D/g, "");
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 7) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length <= 11) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  };

  const prepararLink = () => {
    const numeroLimpo = numero.replace(/\D/g, "");
    const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : "";
    setLink(`https://wa.me/55${numeroLimpo}${texto}`);
    setCopiado(false); // reseta feedback
  };

  const copiarLink = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiado(true); // mostra feedback
      setTimeout(() => setCopiado(false), 2000); // remove feedback após 2s
    });
  };

  return (
    <div className="card">
      <h2><FaWhatsapp color="#16a34a" /> Gerador de Links</h2>

      <p>Número de WhatsApp</p>
      <div className="inputlink">
        <FaPhoneAlt color="#16a34a" />
        <input
          type="text"
          placeholder="(00) 00000-0000"
          value={numero}
          onChange={(e) => setNumero(formatarNumero(e.target.value))}
        />
      </div>
      <p>Mensagem (opicional)</p>
      <div className="mensage">
        <textarea
          placeholder="Digite sua mensagem aqui..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </div>

      <button className="btn-green" onClick={prepararLink}>
        <FaWhatsapp /> Preparar Mensagem
      </button>

      <div className="gerador">
          <p>Link gerado:</p>
            <div className="link">
              <input type="text" value={link} readOnly />
              <button><FaRegCopy color="#7f8481ff" style={{ cursor: 'pointer' }} onClick={copiarLink} /></button>
            </div>
            {copiado && <p style={{ color: "#16a34a", fontSize: "12px", margin: "4px 0" }}>Link copiado!</p>}
            <button className="btn-green" onClick={() => window.open(link, "_blank")}>
              <FaWhatsapp /> Abrir WhatsApp
            </button>

      </div>
        
    </div>
  );
}
