import React, {useState, useEffect} from 'react';

const EditAnimalForm = (props) => {

    useEffect(() => {
        setAnimal(props.currentAnimal)
    }, [props])

    const [animal, setAnimal] = useState(props.currentAnimal);

    const handleChange = e => {
        const {name, value} = e.target;
        setAnimal({...animal, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (animal.name && animal.type) props.updateAnimal(animal);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={animal.name} name="name" onChange={handleChange} />
            <label>Type</label>
            <input className="u-full-width" type="text" value={animal.type} name="type" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit}>Edit Animal</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditAnimalForm;