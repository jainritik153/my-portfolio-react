import React from "react";
import "./css/App.css";
import Navigation from "./components/Navigation";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Error from "./components/Error";
import BlogList from "./components/BlogList";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <HashRouter>
      <Fade top>
        <Navigation />
      </Fade>

      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/projects" component={Projects} />
        <Route path="/blogs/:category" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
}

export default App;
