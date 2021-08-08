import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";
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
              <Link to="/search">Search for Movies</Link>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
