import LinkGerador from "./components/linkGerador.jsx";
import Agenda from "./components/agenda.jsx";

function App() {
  return (
    <div className="container">
      <div className="item">
        <LinkGerador />
      </div>
      <div className="item">
        <Agenda />
      </div>
    </div>
  );
}

export default App;
