import React , { Component } from 'react';
// import Header from './components/Header';
import PetForm from './containers/PetForm';
import "./App.css"
import PetList from './containers/PetList';
import Nav from './components/Nav'
import Home from './containers/Home';
import PetShow from './containers/PetShow';

import { BrowserRouter as Router , Route, Switch} from  'react-router-dom'


class App extends Component {
  

  state = {
    pets: [],
  }

  componentDidMount() {
    fetch('http://localhost:3001/pets')
    .then(resp => resp.json())
    .then(pets => this.setState({ pets }))
  }


  addPet = pet => {
    this.setState({
      pets: [...this.state.pets, pet],
    })
    
    // debugger;
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Nav  />
        <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/pets/new" render={ props => <PetForm {...props} addPet={this.addPet} /> } />
         <Route exact path="/pets" render={ props => <PetList {...props} pets={this.state.pets} /> } />
         <Route exact path="/pets/:id" render={ props => <PetShow {...props} pets={this.state.pets} /> } />
         <Route render={ () => <p>Not exist</p>} />
         </Switch>
      </div>
      </Router>
    );
  }
  }


export default App;
