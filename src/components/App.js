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
import Counterexample from './counterexample.component.js';
import SampleReactBootStapWebPage from './SampleReactBootStapWebPage.js';
import ParentComponent from './ParentComponent.js';
import Admin from './Admin.js';
import MultiSelect from './MultiSelect.js';
import MultiSelectFromFlask from './MultiSelectFromFlask.js';
import SampleBootstrapTableNext from './SampleBootstrapTableNext.js';

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

          <Route
            exact
            path='/Counterexample'
            component={Counterexample}
          />

        <Route
            exact
            path='/SampleReactBootStapWebPage'
            component={SampleReactBootStapWebPage}
          />

         <Route
            exact
            path='/ParentComponent'
            component={ParentComponent}
          />

          <Route
            exact
            path='/Admin'
            component={Admin}
          />

          <Route
            exact
            path='/MultiSelect'
            component={MultiSelect}
          />

          <Route
            exact
            path='/MultiSelectFromFlask'
            component={MultiSelectFromFlask}
          />

          <Route
            exact
            path='/SampleBootstrapTableNext'
            component={SampleBootstrapTableNext}
          />

        </HashRouter>
      </div>     
    );
  }
  
  export default App;
  