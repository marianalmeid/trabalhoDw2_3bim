import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaRegCopy } from "react-icons/fa";
import { MdMessage } from "react-icons/md";

export default function GeradorLinks() {
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [link, setLink] = useState("");

  // Função para formatar o número enquanto digita
  const formatarNumero = (valor) => {
    // Remove tudo que não é número
    const numeros = valor.replace(/\D/g, "");

    // Formatação: (00) 00000-0000
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 7) return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    if (numeros.length <= 11) return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7)}`;

    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  };

  const prepararLink = () => {
    const numeroLimpo = numero.replace(/\D/g, ""); // só números
    const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : "";
    setLink(`https://wa.me/55${numeroLimpo}${texto}`);
  };

  return (
    <div className="card">
      <h2><FaWhatsapp color="#16a34a" /> Gerador de Links</h2>

      <div className="inputBox">
        <FaPhoneAlt color="#6d706eff" />
        <input
          type="text"
          placeholder="(00) 00000-0000"
          value={numero}
          onChange={(e) => setNumero(formatarNumero(e.target.value))}
        />
      </div>

      <div className="inputBox">
        <textarea
          placeholder="Digite sua mensagem aqui..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </div>

      <button className="btn-green" onClick={prepararLink}>
        <FaWhatsapp /> Preparar Mensagem
      </button>

      {link && (
        <>
          <div className="inputBox">
            <input type="text" value={link} readOnly />
            <FaRegCopy color="#16a34a" />
          </div>
          <button className="btn-green">
            <FaWhatsapp /> Abrir WhatsApp
          </button>
        </>
      )}
    </div>
  );
}
