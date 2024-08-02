import { Link } from "react-router-dom";

const Menu = () => {
  return (

    <div className="w-screen h-screen bg-gradient-to-tl from-purple-950 to-rose-600 flex">
      <div className="w-1/3"></div>
      <div className="w-1/3 h-full">
        <div className="h-2/5 flex items-end justify-center">
          <h1 className="font-bungee-shade text-white text-8xl">MOTOSAFE</h1>
        </div>
        <div className="h-3/5 flex flex-col gap-5 pt-16">
          <Link
            to="/Principal"
            className="w-full h-14 mb-3 outline-none bg-rose-500 text-white rounded-xl text-xl font-semibold shadow-gray-800 shadow-md flex items-center justify-center"
          >
            Contactos
          </Link>
          <Link
            to="/Historial-eventos"
            className="w-full h-14 mb-3 outline-none bg-rose-500 text-white rounded-xl text-xl font-semibold shadow-gray-800 shadow-md flex items-center justify-center"
          >
            Historial de eventos
          </Link>
        </div>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default Menu;
