export default function mensagem({ mensagem, setMensagem }) {
  return (
    <textarea
      placeholder="Digite a mensagem (opcional)"
      value={mensagem}
      onChange={(e) => setMensagem(e.target.value)}
    />
  );
}
