import FormularioContacto from "./components/FormularioContacto";
import FormularioEstudiante from "./components/FormularioEstudiante"; 

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Mi App con React + TypeScript</h1>

      
      <FormularioContacto />

      <hr />

      
      <FormularioEstudiante />
    </div>
  );
}

export default App;
