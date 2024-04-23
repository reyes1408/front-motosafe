
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import VistaPrincipal from "./VistaPrincipal";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Menu" element={<VistaPrincipal />} />
        <Route path="/Registro" element={<Register /> } />
      </Routes>
    </Router>
  );
}

export default App;
