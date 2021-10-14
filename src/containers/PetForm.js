import React, { useState } from 'react'


const PetForm = ({ addPet, history }) => {



    let [name, setName] = useState("")
    let [species, setSpecies] = useState("")

    
    


    const handleSubmit = (e) =>{
        e.preventDefault();
        // debugger

        fetch('http://localhost:3001/pets', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pet: {name, species}
            })
        })
        .then(resp => resp.json())
        .then(pet => {
            addPet(pet)
            history.push('/pets')
        })
    }
    


  
        return (
            <div>
                <h1>Create Pet</h1>
                <form onSubmit={ handleSubmit }>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="name">Species:</label>
                        <input type="text" name="species" id="species" value={species} onChange={e => setSpecies(e.target.value)}/>
                    </div>
                    <input type="submit" value="Create Pet"/>
                </form>
            </div>
        )
    }

export default PetForm
