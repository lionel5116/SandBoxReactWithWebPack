import React, {Component} from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Route,HashRouter } from 'react-router-dom'
import {Form,FormControl,NavDropdown,Container} from 'react-bootstrap';
import NavBarHISD from './NavBarHISD/NavBarHISD.js';
import Login from './Login/Login';
import StudentInformation from './StudentInformation/StudentInformation';
import StudentInformationTempIDS from './StudentInformation/StudentInformationTempIDS';
import HISDReportsMenu from './HISDReportsMenu/HISDReportsMenu.js';
import SandboxUpload from './sandboxupload.component.js';
import './App.css';

function App() {
    return (
      <div id="MasterContainer">                    
        <HashRouter>
          <NavBarHISD />
          <Route
            exact
            path='/'
            component={Login}
          />
          <Route
            exact
            path='/Login'
            component={Login}
          />


            <Route
            exact
            path='/StudentInformation'
            component={StudentInformation}
          />

          
          <Route
            exact
            path='/HISDReportsMenu'
            component={HISDReportsMenu}
          />

         <Route
            exact
            path='/StudentInformationTempIDS'
            component={StudentInformationTempIDS}
          />

          <Route
            exact
            path='/SandboxUpload'
            component={SandboxUpload}
          />
        </HashRouter>
      </div>     
    );
  }
  
  export default App;
  