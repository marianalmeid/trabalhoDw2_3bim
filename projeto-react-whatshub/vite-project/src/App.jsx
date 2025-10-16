import LinkGerador from "./components/linkGerador.jsx";
import Agenda from "./components/agenda.jsx";
import { FaWhatsapp } from "react-icons/fa";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title"><FaWhatsapp color="#16a34a" /> Whatshub</h1>
      <p className="subtitle">
        O jeito mais rápido de iniciar conversas no WhatsApp. 
        Gere links instantâneos e mantenha seus contatos organizados.
      </p>
      <div className="cards">
        <div className="item">
          <LinkGerador />
        </div>
        <div className="item">
          <Agenda />
        </div>
      </div>
    </div>
  );
}

export default App;
