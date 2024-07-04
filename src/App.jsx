import "./App.css";
import { RiKnifeLine } from "react-icons/ri";
import { MdCelebration } from "react-icons/md";
import { Alert } from "@mui/material";

function App() {
  return (
    <>
      <h1>
        ¡Ánimo equipo 4! <MdCelebration />
      </h1>
      <h4>Se logra</h4>
      <Alert variant="filled" severity="warning">
        Más les vale <RiKnifeLine />
      </Alert>
    </>
  );
}

export default App;
