import { useState } from "react";
import InputNumero from "./digNumero";

export default function gerarLink() {
    const [numero, setNumero] = useState("");

    const gerarLink = () =>{
        if (!numero) {
            alert("Por favor, insira um número de WhatsApp.");
            return;
        }
        
    const numeroLimpo = numero.replace(/\D/g, "");
  

    setLink(linkGerado);
    };

    return (
    <div className="link-generator">
      <h2>Gerador de Links</h2>

      <InputNumero numero={numero} setNumero={setNumero} />

      <button className="btn-generate" onClick={gerarLink}>
        Preparar Mensagem
      </button>

      {link && <LinkOutput link={link} />}
    </div>
  );
}