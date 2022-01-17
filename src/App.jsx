import Formulario from "./components/Formulario";
import Header from "./components/header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";
import Paciente from "./components/Paciente";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (pacienteEliminado) => pacienteEliminado.id !== id
    );
    setPacientes(pacientesActualizados);
  };
  useEffect(() => {
    const obtenerValoresLS = () => {
      // guarda en pacientes  un objeto de pacientes  y si no ecuentra nada me manda un arreglo cvacio
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerValoresLS();
  },[]);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
