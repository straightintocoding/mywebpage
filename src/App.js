import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Projects from "./components/page/Projects";
import Test from "./components/page/Test";
import Facebookapp from "./components/page/Apps/Facebook/Facebookapp";
import Snake from "./components/page/Apps/Snake/Snake";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Test" component={Test} />
          <Route path="/Snake" component={Snake} />
          <Route path="/Facebookapp" component={Facebookapp} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
