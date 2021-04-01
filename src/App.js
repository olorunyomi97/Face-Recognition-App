import React, { Component } from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

const ParticlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    interactivity: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable:true,
        mode: "push"
      }
    }
  }
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
        params={ParticlesOptions} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
