import React, { useState } from 'react';

const AddAnimalForm = (props) => {
    const initAnimal = {id: null, name: '', type: '',  eatingHabits: '', extinction: '' };
    const [animal, setAnimal] = useState(initAnimal);
    const handleChange = e => {
        const {name, value} = e.target;
        setAnimal({...animal, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (animal.name && animal.type && animal.eatingHabits) {
            handleChange(e, props.addAnimal(animal));
        }
    }

    return (
        <form className="stripped">
            <label>Name</label>
            <div className="row">
                <div className="input-field col s6">
                    <input type="text" className="validate" value={animal.name} name="name" onChange={handleChange} ></input>
                </div>
            </div>
            
            <label>Type</label>
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="mammal reptile fish amphibious" type="text" className="validate" value={animal.type} name="type" onChange={handleChange}></input>
                </div>
            </div>

            <label>Eating Habits</label>
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="herbivore carnivore omnivore" type="text" className="validate" value={animal.eatingHabits} name="eatingHabits" onChange={handleChange}></input>
                </div>
            </div>

            <label>Extinction Status</label>
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="is it extinct ?"  type="text" className="validate" value={animal.extinction} name="extinction" onChange={handleChange}></input>
                </div>
            </div>

            <button className="waves-effect waves-light btn" type="submit" onClick={handleSubmit}>ADD</button>
        </form>
    )
}

export default AddAnimalForm;