import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      name,
      cellphone,
      password,
    };

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      const response = await fetch(
        "http://localhost:3000/users",
        requestOptions
      );

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }
    
  } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gradient-to-tl from-purple-950 to-rose-600 w-screen h-screen flex items-center justify-center">
      <div className="border-4 rounded-lg px-10 py-12">
        <h2 className="text-white font-semibold text-4xl mb-12 text-center">
          Registro
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-6 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
            type="email"
            placeholder="correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-6 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
            type="text"
            placeholder="nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-6 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
            type="text"
            placeholder="telefono"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
            required
          />
          <input
            className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-6 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-96 h-14 mt-20 block outline-none bg-rose-500 text-white rounded-xl text-xl font-semibold shadow-gray-800 shadow-md"
          >
            Aceptar
          </button>
        </form>
        <Link to="/">
          <button className="w-96 h-14 mt-4 block outline-none bg-blue-500 text-white rounded-xl text-xl font-semibold shadow-gray-800 shadow-md">
            Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
