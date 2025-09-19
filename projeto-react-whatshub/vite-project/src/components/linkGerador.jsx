import { useState } from "react";
import InputNumber from "./InputNumber";
import MessageInput from "./MessageInput";
import "../styles/LinkGenerator.css";

export default function LinkGenerator() {
  const [numero, setNumero] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [link, setLink] = useState("");

  const gerarLink = () => {
    if (!numero) {
      alert("Por favor, insira um número de WhatsApp.");
      return;
    }

    const numeroLimpo = numero.replace(/\D/g, "");
    const mensagemCodificada = encodeURIComponent(mensagem);

    const linkGerado = mensagem
      ? `https://wa.me/55${numeroLimpo}?text=${mensagemCodificada}`
      : `https://wa.me/55${numeroLimpo}`;

    setLink(linkGerado);
  };

  const copiarLink = () => {
    navigator.clipboard.writeText(link);
    alert("Link copiado para a área de transferência!");
  };

  return (
    <div className="link-generator">
      <h2>Gerador de Links</h2>

      <InputNumber numero={numero} setNumero={setNumero} />
      <MessageInput mensagem={mensagem} setMensagem={setMensagem} />

      <button className="btn-generate" onClick={gerarLink}>
        Preparar Mensagem
      </button>

      {link && (
        <div className="link-output">
          <input type="text" value={link} readOnly />
          <div className="btn-group">
            <button onClick={copiarLink}>Copiar</button>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Abrir WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
