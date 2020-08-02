import React, { useState } from "react";
import animalList from "./data.js";
import AnimalTable from "./tables/AnimalTable";
import AddAnimalForm from "./forms/AddAnimalForm";
import EditAnimalForm from "./forms/EditAnimalForm";

const App = () => {
  const [animals, setAnimals] = useState(animalList);

  const addAnimal = (animal) => {
    animal.id = animals.length + 1;
    setAnimals([...animals, animal]);
  };

  const deleteAnimal = (id) => {
    setAnimals(animals.filter((animal) => animal.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialAnimal = { id: null, name: "", type: "", eatingHabits: "", extinct: "" };
  const [currentAnimal, setCurrentAnimal] = useState(initialAnimal);

  const editAnimal = (id, animal) => {
    setEditing(true);
    setCurrentAnimal(animal);
  };

  const updateAnimal = (newAnimal) => {
    setAnimals(
      animals.map((animal) => (animal.id === currentAnimal.id ? newAnimal : animal))
    );
    setCurrentAnimal(initialAnimal);
    setEditing(false);
  };

  return (
    <div className="container">
      <nav>
        <div className="nav-wrapper">
              <h4>ANIMAL KINGDOM</h4>
        </div>
      </nav>
      
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit animal</h2>
              <EditAnimalForm
                currentAnimal={currentAnimal}
                setEditing={setEditing}
                updateAnimal={updateAnimal}
              />
            </div>
          ) : (
            <div>
              <h2>Add Animal</h2>
              <AddAnimalForm addAnimal={addAnimal} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View Animals</h2>
          <AnimalTable
            animals={animals}
            deleteAnimal={deleteAnimal}
            editAnimal={editAnimal}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
