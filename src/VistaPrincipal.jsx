import { useState } from "react";

import Navbar from "./components/navbar";
import TableContacts from "./components/TableContants";
import NewUserModal from "./components/NewUser-Modal";

const VistaPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-screen">
      {isOpen && <NewUserModal closeModal={closeModal} />}
      <Navbar />
      <div className="p-10">
        <h2 className="text-xl font-semibold">Mensaje personalizado</h2>
        <input
          className="w-full h-14 bg-gray-100 outline-none px-3"
          type="text"
        />
        <div className="flex items-end justify-between pb-2">
          <h2 className="text-xl font-semibold pt-10">Contactos de emergencia</h2>
          <button
            className="bg-gradient-to-tl from-purple-950 to-rose-600 text-white font-semibold w-32 h-7 rounded-md"
            onClick={openModal}
          >
            Agregar
          </button>
        </div>

        <input
          className="w-full h-10 bg-gray-100 outline-none px-3"
          type="text"
          placeholder="Buscar contacto"
        />
      </div>
      <TableContacts />
    </div>
  );
};

export default VistaPrincipal;
