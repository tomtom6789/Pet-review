import React, { Component } from 'react'
import PetCard from '../components/PetCard'

export class PetList extends Component {

    // componentDidMount() {
    //     console.log(this.props)
    // }
  

    render() {
        const pets = this.props.pets.map((pet, i) => <PetCard key={i} pet={pet} />)
     

        return (
            <div>
                <h3>PetList</h3>
                <ul>{pets}</ul> 
            </div>
        )
    }
}

export default PetList
