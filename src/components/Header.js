import React from 'react';


class Header extends React.Component {
    state = {
        title: "This title is comming from the state!!!",
        color: "blue"
      }
  
  
  
    changeToBlue = () => {
      this.setState({
        color: this.state.color === "blue" ? "black" : "blue"
      })
    }
  
    handleChange = e => {
      this.setState({
        title: e.target.value
      })
  
    }
    render() {
        return (
            <header>
                <h1 onClick = {this.changeToBlue} style={{ color: this.state.color}}>{this.state.title}</h1>
                <input type="text" value={this.state.title} onChange={this.handleChange}></input>
            </header>
        )
    }
}


export default Header;
