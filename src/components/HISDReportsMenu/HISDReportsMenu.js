import React from 'react';
import { connect } from "react-redux";
import Nav from 'react-bootstrap/Nav';
import {Navbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form,FormControl,NavDropdown,Container,ListGroup} from 'react-bootstrap';
import GenericHeader from '../GenericHeader/GenericHeader';

export class HISDReportsMenu extends React.Component {

    componentDidMount(){
        console.log(this.props.userProps.role)
        console.log(this.props.userProps.fullName)
     }


    runStudentInformationReportTEMPIDS()
    {
        this.props.history.push("/StudentInformationTempIDS");
    }


    runSummaryReport()
    {
        this.props.history.push("/StudentInformation");
    }

    render() {
        return (
            <div id="MasterContainer">
                <Container>
                    <Form>
                    <Form.Group controlId="environment">
                        <GenericHeader headertext={`Logged in User :${this.props.userProps.fullName}`} />
                    </Form.Group>
                        <ListGroup >
                            <ListGroup.Item variant="primary" action onClick={() => this.runSummaryReport()}>
                                Student Information Report
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => this.runStudentInformationReportTEMPIDS()}>
                                Temp Student ID Report
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

export default connect(mapStateToProps)(HISDReportsMenu);
