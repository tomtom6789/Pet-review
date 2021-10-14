import React, {useState, useEffect} from 'react'

const PetShow = ({pets, match}) => {


    let [name, setName] = useState("Fido")
    let [species, setSpecies] = useState("Dog");
    let [loading,  setLoading] = useState(true)




    useEffect(() => {
        const pet = pets.find(pet => pet.id === parseInt(match.params.id, 10))
        if(pet) {
            setName(pet.name)
            setSpecies(pet.species)
            setLoading(false)

        }
    }, [pets])
  
        if(loading){
            return <p>Loading...</p>
        }


        return (
            <div>
                <p>Pet name is {name}</p>
                <p>Pet Spcies  is {species}</p>
                <button onClick = { () => setName("Garfiled")}> Change the name</button>
                <button onClick = { () => setSpecies("Cat")}> Change the Species</button>

            </div>
        )
}

export default PetShow
