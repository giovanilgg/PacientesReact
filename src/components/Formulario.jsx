//autocompletado react rfce
import React from "react";
import { useState, useEffect } from "react";
import Mensaje from "./Mensaje.jsx";


function Formulario({ setPacientes, pacientes, paciente, setPaciente }) {
  //declaracion del estado del componente
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState(false);
  const [insertado, setInsertado] = useState(false);
  useEffect(() => {
    if (Object.keys(paciente).length > 0 ) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    } else {
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()

    if ([nombre, propietario, email, sintomas, fecha].includes("") || typeof(nombre,propietario,email,sintomas,fecha)==='undefined') {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        sintomas,
        fecha,
      };

      if (paciente.id) {
        //editando un actual registro
        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map((pacienteState) =>
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState
        );
        setPaciente({});
        setPacientes(pacientesActualizados);
       
      } else {
        //agregando un nuevo registro
    
          objetoPaciente.id = generarId();
          setPacientes([...pacientes, objetoPaciente]);
          setInsertado(true);

          setTimeout(() => {
            setInsertado(false);
          }, 2000);
          
        
      }
      function generarId() {
        const random = Math.random().toString(36).substr(2);

        const fecha = Date.now().toString(36);
        return random + fecha;
      }
      console.log(objetoPaciente);

      //reiniciar formulario  nada
      setNombre("");
      setEmail("");
      setFecha("");
      setSintomas("");
      setPropietario("");
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes{" "}
      </h2>

      <p className="text-lg text-center mt-5 mb-5">
        Añade Pacientes{" "}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <h2>
        {error && (
          <Mensaje>
            {" "}
            <p>Todos los campos son obligatorios</p>{" "}
          </Mensaje>
        )}
        {insertado && (
          <div className="bg-green-600 text-white text-center p-3 uppercase mb-3 rounded-xl font-bold">
            <p>Paciente ingresado correctamente</p>
          </div>
        )}
      </h2>
      <form
        onSubmit={handleSubmit}
        className="degradado shadow-md rounded-lg py-10 px-10 mb-10"
      >
        <div>
          <label
            htmlFor="mascota"
            className="block uppercase text-gray-700 font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-4 w-full p-2 m-1 placeholder-gray-500 rounded-lg"
            value={nombre || ''}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
        <div className="mt-2 ">
          <label
            htmlFor="propietario"
            className="block uppercase text-gray-700 font-bold"
          >
            Nombre Propietario
          </label>
          <input
            value={propietario || ''}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-4 w-full p-2 m-1 placeholder-gray-500 rounded-lg"
          />
        </div>
        <div className="mt-2 ">
          <label
            htmlFor="email"
            className="block uppercase text-gray-700 font-bold"
          >
            Email
          </label>
          <input
            value={email || ''}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            type="email"
            placeholder="Introduce tu email"
            className="border-4 w-full p-2 m-1 placeholder-gray-500 rounded-lg"
          />
        </div>
        <div className="mt-2 ">
          <label
            htmlFor="alta"
            className="block uppercase text-gray-700 font-bold"
          >
            Alta
          </label>
          <input
            value={fecha || ''}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
            id="alta"
            type="date"
            className="border-4 w-full p-2 m-1 placeholder-gray-500 rounded-lg"
          />
        </div>
        <div className="mt-2 ">
          <label
            htmlFor="alta"
            className="block uppercase text-gray-700 font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="border-4 w-full p-2 m-1 placeholder-gray-500 rounded-lg"
            name=""
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas || ''}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          ></textarea>
        </div>
        <input
          type="submit"
          className=" rounded-lg mt-5 bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer"
          value={paciente.id ? "Actualizar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;

//la clase display block toma todo el espacio disponible
//al ,agregar un for en el formulario hace que solo se active cuando pasa por el
//w-full hace que tome todo el ancho el input
