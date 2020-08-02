import React, {useState} from 'react';

const AddAnimalForm = (props) => {

    const initAnimal = {id: null, name: '', type: '', eatingHabits: '', extinction: ''};

    const [animal, setAnimal] = useState(initAnimal);

    const handleChange = e => {
        const {name, value} = e.target;
        setAnimal({...animal, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (animal.name && animal.type) {
            handleChange(e, props.addAnimal(animal));
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={animal} name="name" onChange={handleChange} />
            <label>Type</label>
            <input className="u-full-width" type="text" value={animal.animal} name="animal" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add Animal</button>
        </form>
    )
}

export default AddAnimalForm;