import React from 'react';
import { connect } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form,FormControl,NavDropdown,Container,ListGroup} from 'react-bootstrap';
import studentInfoApi from '../../api/studentInfoApi';
import { loadUser } from '../../actions/sharedActions';
import GenericHeader from '../GenericHeader/GenericHeader';



class Login extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        userName: '',
        password: '',
        role: 'Special',
        environment: '--select--',

        axiosRecsAuth: [],
        done: false
      };
    };
    
    
    componentDidMount(){
    
   }


    
  proceedToReportsMenu() {
    this.props.history.push("/HISDReportsMenu");
  }

  customAppDevReports() {
   
  }

  handleTextChange(e) {
      let fieldName = e.target.name;
      let fleldVal = e.target.value;
      this.setState({[fieldName]: fleldVal})
    }

    render() {
        return (
            <div id="MasterContainer">
                <Container>
                    <Form>
                    <Form.Group controlId="environment">
                        <GenericHeader headertext="Welcome to HISD Custom Reporting" />
                    </Form.Group>
                    <ListGroup >
                            <ListGroup.Item variant="primary" action onClick={() => this.proceedToReportsMenu()}>
                                Nutritional Services Reports
                            </ListGroup.Item>
                            <ListGroup.Item variant="warning" action onClick={() => this.customAppDevReports()}>
                                Custom Applications Reports
                            </ListGroup.Item>
                        </ListGroup>
                    </Form>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    userProps: state.userReducer.user,
  };
};

export default connect(mapStateToProps)(Login);

