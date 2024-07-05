import "./App.css";
import Categoria from "./pages/Categoria/Categoria";
const categoria_nombre = "Electricidad";

function App() {
  return (
    <>
      <Categoria categoria_nombre={categoria_nombre} />
    </>
  );
}

export default App;
