import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form,FormControl,NavDropdown} from 'react-bootstrap';


class NavBarHISD extends React.Component {
  constructor(props){
    super(props);  
    
  };

 

  render() {
      return (
        <div id="MasterContainer">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/HISDReportsMenu">HISD Custom Reporting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavDropdown title="Actions" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#/Login">Authenticate</NavDropdown.Item>
                    <NavDropdown.Item href="#/SandboxUpload">File Upload Example</NavDropdown.Item>
                    <NavDropdown.Item href="#/Counterexample">Counter Example Redux Pure Function</NavDropdown.Item>
                    <NavDropdown.Item href="#/SampleReactBootStapWebPage">Sample Web Page Bootstrap 5</NavDropdown.Item>
                    <NavDropdown.Item href="#/ParentComponent">Parent Child Component Example -Props</NavDropdown.Item>
                    <NavDropdown.Item href="#/Admin">Administration</NavDropdown.Item>
                    <NavDropdown.Item href="#/MultiSelect">MultiSelect Example</NavDropdown.Item>
                    <NavDropdown.Item href="#/SampleBootstrapTableNext">Bootstrap Table Next Example</NavDropdown.Item>
                    <NavDropdown.Item href="#/MultiSelectFromFlask">MultiSelect Example (Flask WS)</NavDropdown.Item>
                    <NavDropdown.Item href="#/ControlledFormParent">Controlled Form Example -No Validation</NavDropdown.Item>
                    <NavDropdown.Item href="#/SignupForm">Sign Up Form - Example of Using Object with UseState</NavDropdown.Item>
                    <NavDropdown.Item href="#/ComplexForm">Complex Form</NavDropdown.Item>
                    <NavDropdown.Item href="#"></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link href="#"></Nav.Link>
                <Nav.Link href="#/HISDReportsMenu">Reports</Nav.Link>
                </Nav>
                <Form inline>
                  {/*
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>*/}
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
      )
  }
}
export default NavBarHISD;