export default function Mensagem({ mensagem, setMensagem }) {
  return (
    <textarea
      placeholder="Digite sua mensagem aqui..."
      value={mensagem}
      onChange={(e) => setMensagem(e.target.value)}
    />
  );
}
