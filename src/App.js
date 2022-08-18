import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Intro from "./components/Intro";
import Div from "./components/DIV"
import Foot from "./components/Foot";
import Myworks from "./components/Myworks"
import Skills from "./components/Skills";
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
    <Foot />
    </div>
  );
}

export default App;
