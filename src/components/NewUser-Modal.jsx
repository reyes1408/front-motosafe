import { useState } from "react";
import PropTypes from "prop-types";

const NewUserModal = ({ closeModal }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  NewUserModal.propTypes = {
    closeModal: PropTypes.func.isRequired,
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const agregar = () => {
    const data = {
      id_user: "a81b5919-aeb8-49fa-8935-96ba2a59692b",
      name: nombre,
      cellphone: telefono
    };

    // Opciones para la solicitud fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    // Realizar la solicitud fetch
    fetch("http://localhost:3000/contacts", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al agregar usuario");
        }
        closeModal();
      })
      .catch((error) => console.error("Error:", error));
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
          placeholder="Telefono"
          className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 mb-4"
          value={telefono}
          onChange={handleTelefonoChange}
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
