import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import axios from "axios";

class App extends Component {
  async componentDidMount () {
    try {
      const response = await axios.get('/healthcheck')
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

//   userLogin = () => {
//   axios.post(`/login/${this.state.login}`);
//   this.clearInput();
// }; 

  render() {
    return (
      <div className="App">
        <header className="App-header">
         {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Gluten Prisoner</h1>
        </header>
        <p className="App-intro">
        Are you tired of eating sand? Find a delicious meal based on the opinions of fellow gluten prisoners in your city.
        </p>
      </div>
    );
  }
}

export default App;