import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gradient-to-tl from-purple-950 to-rose-600 w-screen h-screen flex items-center justify-center">
      <div className="border-4 rounded-lg px-10 py-12">
        <h2 className="text-white font-semibold text-4xl mb-12 text-center">
          Registro
        </h2>
        <input
          className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-7 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
          type="email"
          placeholder="password"
            />
            <input
          className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-7 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
          type="email"
          placeholder="registro"
        />
        <Link to="/">
          <button className="w-96 h-14 mt-20 block outline-none bg-rose-500 text-white rounded-xl text-xl font-semibold shadow-gray-800 shadow-md">
            Aceptar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
