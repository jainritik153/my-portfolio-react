import React from "react";
import "./css/App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Error from "./components/Error";
import BlogList from "./components/BlogList";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <BrowserRouter>
      <Fade top>
        <Navigation />
      </Fade>

      <Switch>
        <Route
          path="https://jainritik153.github.io/my-portfolio/"
          component={About}
          exact
        />
        <Route
          path="https://jainritik153.github.io/my-portfolio/projects"
          component={Projects}
        />
        <Route
          path="https://jainritik153.github.io/my-portfolio/blogs/:category"
          component={Blog}
        />
        <Route
          path="https://jainritik153.github.io/my-portfolio/contact"
          component={Contact}
        />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
