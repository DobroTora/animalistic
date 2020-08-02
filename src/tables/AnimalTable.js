import React from 'react';

const AnimalTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Eating Habits</th>
                    <th>Extinction Status</th>
                </tr>
            </thead>
            <tbody>
                { props.animals.length > 0 ? (
                    props.animals.map(animal => {
                        const {id, name, type, eatingHabits, extinction} = animal;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{type}</td>
                                <td>{eatingHabits}</td>
                                <td>{extinction}</td>
                                <td>
                                    <button className="waves-effect waves-light btn pink lighten-2" onClick={() => props.deleteAnimal(id)}>Delete</button>
                                    <button className="waves-effect waves-light btn purple lighten-2" onClick={() => props.editAnimal(id, animal)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (<div></div>)   
                }
            </tbody>
        </table>
    )
}

export default AnimalTable;