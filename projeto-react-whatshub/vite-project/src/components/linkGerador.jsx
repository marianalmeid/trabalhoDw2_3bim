import { useState } from "react";
import DigNumero from "./digNumero.jsx";
import Mensagem from "./mensagem.jsx";


export default function linkGerador() {
  const [numero, setNumero] = useState("");
  const [mensagemTexto, setMensagemTexto] = useState("");
  const [link, setLink] = useState("");

  const gerarLink = () => {
    if (!numero.trim()) {
      alert("Por favor, insira um número de WhatsApp.");
      return;
    }

    const numeroLimpo = numero.replace(/\D/g, "");

    if (numeroLimpo.length < 10 || numeroLimpo.length > 11) {
      alert("Número de WhatsApp inválido. Verifique o DDD e o número.");
      return;
    }

    const mensagemCodificada = encodeURIComponent(mensagemTexto);

    const linkGerado = mensagemTexto
      ? `https://wa.me/55${numeroLimpo}?text=${mensagemCodificada}`
      : `https://wa.me/55${numeroLimpo}`;

    setLink(linkGerado);
  };

  const copiarLink = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      alert("Link copiado para a área de transferência!");
    } catch (err) {
      alert("Não foi possível copiar o link.");
      console.error(err);
    }
  };

  const limparCampos = () => {
    setNumero("");
    setMensagemTexto("");
    setLink("");
  };

  return (
    <div className="link-gerador">
      <h2>Gerador de Links</h2>

      <DigNumero numero={numero} setNumero={setNumero} />
      <Mensagem mensagem={mensagemTexto} setMensagem={setMensagemTexto} />

      <button 
        className="btn-generate" 
        onClick={gerarLink} 
        disabled={!numero.trim()}
      >
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
            <button onClick={limparCampos}>Limpar</button>
          </div>
        </div>
      )}
    </div>
  );
}
