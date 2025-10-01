export default function digNumero({ numero, setNumero }) {
  const formatarNumero = (valor) => {
    let apenasNumeros = valor.replace(/\D/g, "");

    if (apenasNumeros.length > 11) {
      apenasNumeros = apenasNumeros.slice(0, 11);
    }

    if (apenasNumeros.length > 2) {
      apenasNumeros = apenasNumeros.replace(/^(\d{2})(\d)/g, "($1) $2");
    }
    if (apenasNumeros.length > 9) {
      apenasNumeros = apenasNumeros.replace(/(\d{5})(\d{4})$/, "$1-$2");
    }

    setNumero(apenasNumeros);
  };

  return (
    <input
      type="text"
      className="input-numero"
      placeholder="Número"
      value={numero}
      onChange={(e) => formatarNumero(e.target.value)}
    />
  );
}
