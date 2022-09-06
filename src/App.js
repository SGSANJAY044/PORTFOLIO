import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Intro from "./components/Intro";
import Div from "./components/DIV"
import Foot from "./components/Foot";
import Myworks from "./components/Myworks"
import Skills from "./components/Skills";
import Contact from "./components/Contact"
function App() {
  return (
    <div>
    <Header />
    <Intro />
    <About />
    <Div/>
    <Myworks />
    <Div/>
    <Skills />
    <Div/>
    <Contact/>
    <Foot />
    </div>
  );
}

export default App;