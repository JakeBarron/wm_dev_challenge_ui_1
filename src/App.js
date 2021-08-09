/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";
import Details from "./components/details";
import NoMatch from "./components/404";
import Requirements from "./components/requirements";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";

function App() {
  return (
    <Router>
      <div>
        <Navbar color="light">
          <NavbarBrand>Jake Barron's WM Dev Challenge</NavbarBrand>
          <Nav>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/search">Search for Titles</Link>
            </NavItem>
            <NavItem>
              <Link to="/requirements">Refresh on Requirements</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/details/:titleId" children={<Details />} />
          <Route path="/requirements">
            <Requirements />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
