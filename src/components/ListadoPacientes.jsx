import React from "react";
import Paciente from "./Paciente.jsx";
import { useEffect } from "react";
import imagen from '../img/veterinario.png'

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll  ">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="mt-5 mb-10 text-center ">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold text-center">
          Pacientes y Citas
        </span>
      </p>

      <div>
        {pacientes.length !== 0 ? (
          pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))
        ) : (
          <div className=" grid justify-items-center overscroll-none">
            {" "}
            <div className="px-10 py-5 bg-violet-400  rounded-lg text-center text-white text-2xl font-bold m-5">
              No hay pacientes por el momento
            </div>
            <div className="">
              <img
                className=""
                height="150"
                width="400"
                alt="Imagen veterinaria"
                src={imagen}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
//h-screen hace que tome toda la altura de la ventana
//overflow-y-scroll hace un scroll del area especificada
export default ListadoPacientes;
