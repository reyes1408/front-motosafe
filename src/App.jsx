
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import VistaPrincipal from "./VistaPrincipal";
import Menu from "./components/Menu";
import Historial from "./components/Historial-evento";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Historial-eventos" element={<Historial />} />
        <Route path="/Principal" element={<VistaPrincipal />} />
        <Route path="/Registro" element={<Register /> } />
      </Routes>
    </Router>
  );
}

export default App;
