
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import VistaPrincipal from "./VistaPrincipal";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/Menu" element={<VistaPrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;
