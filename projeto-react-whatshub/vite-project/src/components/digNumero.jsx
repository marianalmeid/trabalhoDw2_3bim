export default function DigNumero({ numero, setNumero }) {
    const formatarNumero = (valor) => {
      let apenasNumeros = valor.replace(/\D/g, "");
      if (apenasNumeros.length > 2) {
        apenasNumeros = apenasNumeros.replace(/^(\d{2})(\d)/g, "($1) $2");
      }
      if (apenasNumeros.length > 10) {
        apenasNumeros = apenasNumeros.replace(/(\d{5})(\d)/, "$1-$2");
      }
      setNumero(apenasNumeros);
    };
  
    return (
      <input
        type="text"
        placeholder="Digite o número com DDD"
        value={numero}
        onChange={(e) => formatarNumero(e.target.value)}
      />
    );
  }
  