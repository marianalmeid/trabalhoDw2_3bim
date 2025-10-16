import { useEffect, useState } from "react";

export default function DDDInfo({ numero }) {
  const [info, setInfo] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarDDD = async () => {
      if (!numero) return;

      // Extrai os dois primeiros dígitos do número limpo
      const apenasNumeros = numero.replace(/\D/g, "");
      const ddd = apenasNumeros.slice(0, 2);

      try {
        const resposta = await fetch(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
        if (!resposta.ok) throw new Error("DDD não encontrado");
        const dados = await resposta.json();
        setInfo(dados);
        setErro(null);
      } catch (e) {
        setErro("DDD inválido");
        setInfo(null);
      }
    };

    buscarDDD();
  }, [numero]);

  if (erro) return <p className="ddd text-red-500">{erro}</p>;
  if (!info) return <p className="ddd text-gray-400">Buscando...</p>;

  return (
    <span className="ddd text-gray-600">
      {info.state}
    </span>
  );
}
