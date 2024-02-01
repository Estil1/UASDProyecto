import React, { useState, useEffect } from 'react';
import data24 from '../schedules/24.json';

const MateriaSeleccionada = ({ materia, onRemove }) => (
  <div className="flex justify-between items-center mb-1 p-2">
    <span>{materia}</span>
    <button className="btn btn-error ml-2" onClick={onRemove}>
      Quitar
    </button>
  </div>
);

const Hero = () => {
  const [selectedMaterias, setSelectedMaterias] = useState([]);
  const [currentMateria, setCurrentMateria] = useState('');
  const [suggestedMaterias, setSuggestedMaterias] = useState([]);

  useEffect(() => {
    const uniqueSubjects = data24.map((materia) => ({
      NRC: materia.NRC,
      Asignatura: materia.Asignatura,
      Campus: materia.Campus,
      Horario: materia.Horario,
      Días: materia.Días,
      Aula: materia.Aula,
      Clave: materia.Clave,
      Sección: materia.Sección,
      Modalidad: materia.Modalidad,
    }));

    setSuggestedMaterias(uniqueSubjects);
  }, []);

  const handleInputChange = (e) => {
    setCurrentMateria(e.target.value);
  };

  const handleAddMateria = () => {
    if (currentMateria && !selectedMaterias.includes(currentMateria)) {
      setSelectedMaterias([...selectedMaterias, currentMateria]);
      setCurrentMateria('');
    }
  };

  const handleRemoveMateria = (materia) => {
    const updatedMaterias = selectedMaterias.filter((item) => item !== materia);
    setSelectedMaterias(updatedMaterias);
  };

  const handleSubmit = () => {
    console.log('Materias seleccionadas:', selectedMaterias);
  };

  return (
    <div className="hero min-h-screen bg-base-200 dark:bg-base-900">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Generador de Horarios UASD
          </h1>
          <p className="mb-5">
            Esta simple aplicación web utiliza la programación docente de la universidad para mostrarte de una forma más simple tus posibles horarios del semestre.
          </p>
          <div className="relative mb-5">
            <div className="flex items-center">
              <input
                type="text"
                className="input input-primary w-full max-w-xs dark:bg-base-800"
                placeholder="Escribe tus materias..."
                value={currentMateria}
                onChange={handleInputChange}
                list="materias-list"
              />
              <datalist id="materias-list">
                {suggestedMaterias.map((materia) => (
                  <option key={materia.NRC} value={`${materia.NRC} - ${materia.Clave} - ${materia.Asignatura}`}>
                    {`${materia.Campus} | ${materia.Modalidad} | ${materia.Horario} | ${materia.Días} | ${materia.Aula}`}
                  </option>
                ))}
              </datalist>
              <button
                className="btn btn-primary ml-2"
                onClick={handleAddMateria}
              >
                Agregar
              </button>
            </div>

            {selectedMaterias.length > 0 && (
              <div className={`mt-2 dark:bg-base-800 p-2 w-full`}>
                {selectedMaterias.map((materia) => (
                  <MateriaSeleccionada
                    key={materia}
                    materia={materia}
                    onRemove={() => handleRemoveMateria(materia)}
                  />
                ))}
              </div>
            )}
          </div>

          <button className="btn btn-primary" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
