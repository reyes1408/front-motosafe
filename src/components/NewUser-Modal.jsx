import { useState } from "react";
import PropTypes from "prop-types";

const NewUserModal = ({ closeModal }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  NewUserModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleCorreoChange = (e) => {
    setCorreo(e.target.value);
  };

  const agregar = () => {
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50 relative">
        <button
          className="absolute top-4 right-6 -mt-3 -mr-3 text-gray-500 font-semibold hover:text-gray-700"
          onClick={closeModal}
        >
          X
        </button>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 mb-4"
          value={nombre}
          onChange={handleNombreChange}
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 mb-4"
          value={correo}
          onChange={handleCorreoChange}
        />
        <button
          className="bg-gradient-to-tl from-purple-950 to-rose-600 text-white font-semibold w-full px-4 py-2 rounded"
          onClick={agregar}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default NewUserModal;
