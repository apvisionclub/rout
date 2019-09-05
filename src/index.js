import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "./home";
import Course from "./course";
import About from "./about";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#Home">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#course">
                  <Link to="/course">course</Link>
                </Nav.Link>
                <Nav.Link href="#about">
                  <Link to="/about">about</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/course" component={course} />
            <Route path="/about" component={about} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

