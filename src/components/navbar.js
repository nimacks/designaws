import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, FormControl, Form, NavDropdown, Navbar,Nav } from "react-bootstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  render() {
    return (
      <div className="App">
        <Container>
          <header>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand ><Link to="/">Design AWS</Link> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Manage Designs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      View all
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                    <Link to="/manage/add">Add Design</Link> 
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </header>
        </Container>
      </div>
    );
  }
}

export default NavBar;