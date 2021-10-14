import React , { useState, useEffect} from 'react';
// import Header from './components/Header';
import PetForm from './containers/PetForm';
import "./App.css"
import PetList from './containers/PetList';
import Nav from './components/Nav'
import Home from './containers/Home';
import PetShow from './containers/PetShow';

import { BrowserRouter as Router , Route, Switch} from  'react-router-dom'


const App = () => {
  


  const [pets, setPets] = useState([])

  
  useEffect(() => {
    fetch('http://localhost:3001/pets')
    .then(resp => resp.json())
    .then(pets => setPets(pets))
  }, [])


  const addPet = pet => {
      setPets([...pets, pet])
    }
    
    return (
      <Router>
      <div className="App">
        <Nav  />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/pets/new" render={ props => <PetForm {...props} addPet={ addPet } /> } />
         <Route exact path="/pets" render={ props => <PetList {...props} pets={ pets } /> } />
         <Route exact path="/pets/:id" render={ props => <PetShow {...props} pets={ pets } /> } />
         <Route render={ () => <p>Not exist</p>} />
         </Switch>
      </div>
      </Router>
    );
  }

export default App;
