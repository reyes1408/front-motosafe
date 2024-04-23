import logoMotoSafe from "../assets/logoMotoSafe.png";
import casco from "../assets/casco.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gradient-to-tl from-purple-950 to-rose-600 w-screen h-screen">
      <div>
        <div className="h-20 w-screen flex flex-row-reverse items-center justify-center">
          <p className="text-white font-semibold lg:text-xl md:text-sm sm:text-xs w-2/12">
            Acerca de
          </p>
          <p className="text-white font-semibold text-xl w-10/12 pr-10 text-right">
            Contactanos
          </p>
        </div>
        <div className="w-screen flex px-32 pt-14">
          <div className="w-2/5 relative">
            <h1 className="font-bungee-shade text-white text-6xl">MOTOSAFE</h1>
            <div className="my-10">
              <h2 className="text-white font-semibold text-2xl mb-5">
                Inicio de sesión
              </h2>
              <div className="relative">
                <input
                  className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-7 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
                  type="email"
                  placeholder="Usuario"
                />
                <input
                  className="w-96 h-14 block bg-transparent outline-none border-white border-4 rounded-xl text-lg text-white p-7 shadow-gray-800 shadow-md mb-6 placeholder:text-white"
                  type="password"
                  placeholder="Contraseña"
                />
                <img
                  className="w-20 absolute -top-12 left-80 rotate-3 animate-bounce"
                  src={casco}
                  alt="casco"
                />
              </div>
              <Link to="/Menu">
                <button className="w-96 h-14 mt-20 block outline-none bg-rose-500 text-white rounded-xl text-xl font-semibold shadow-gray-800 shadow-md">
                  Aceptar
                </button>
              </Link>
            </div>
          </div>

          <div className="w-3/5 items-center flex justify-center py-10">
            <img src={logoMotoSafe} alt="Logo MotoSafe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
