

export default function InputNumero({numero, setNumero}){
   const formatarNumero = (valor) => {
    let apenasNumeros = valor.replace(/\D/g, "");
    if (apenasNumeros.length > 2) {
      apenasNumeros = apenasNumeros.replace(/^(\d{2})(\d)/g, "($1) $2");
    }
    if (apenasNumeros.length > 10) {
      apenasNumeros = apenasNumeros.replace(/(\d{5})(\d{4})$/, "$1-$2");
    }
    return apenasNumeros;
  };
 
  const handleChange = (e) => {
    setNumero(formatarNumero(e.target.value));
  };

//campo p/ digitar o numero
  return (
    <div style={{width: "5rem", height: "1rem"}}>
        <input 
        type="text"
        placeholder="(XX) XXXXX-XXXX"
        value={numero}
        onChange={handleChange}
        className="input-number"
        />
    </div>
    
  );
}