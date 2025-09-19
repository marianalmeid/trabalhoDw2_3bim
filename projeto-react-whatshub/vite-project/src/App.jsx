import LinkGerador from "./components/LinkGenerator";

function App() {
  return (
    <div>
      <header style={{ textAlign: "center", margin: "20px 0" }}>
        <h1 style={{ color: "#22c55e" }}>WhatsHub</h1>
        <p>O jeito mais rápido de iniciar conversas no WhatsApp 🚀</p>
      </header>

      <main style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {/* Esquerda → Gerador de Links */}
        <LinkGenerator />

        {/* Direita → Agenda de Contatos (a gente monta depois) */}
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
          <h2>Agenda de Contatos</h2>
          <p>(Em breve aqui 😉)</p>
        </div>
      </main>
    </div>
  );
}

export default App;
