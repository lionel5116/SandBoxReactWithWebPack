import React from 'react'
import { useState } from 'react';
import {
    Button,
    Row,
    Col, Form, Container
} from 'react-bootstrap';

import studentInfoApi from '../../api/studentInfoApi'

//https://react-bootstrap.github.io/forms/layout/
function ComplexForm() {
    const [student, setStudent] = useState({});

    async function AddStudentComplexDataRecord() {
        var myAPI = new studentInfoApi;
        var _response = await myAPI.AddStudentComplexDataRecord(student)
    }


    function handleChange (e){
        const { name, value } = e.target;
        //let formErrors = this.state.formErrors;
       
        switch (name) {
            case 'firstName':
                setStudent({ ...student, firstName: value });

                break;
            case 'lastName':

                setStudent({ ...student, lastName: value });
                break;
            case 'Email':
                setStudent({ ...student, Email: value });

                break;
            case 'Password':
                setStudent({ ...student, Password: value });

                break;
            case 'Address':
                setStudent({ ...student, Address: value });

                break;

            case 'City':
                setStudent({ ...student, City: value });

                break;

            case 'Status':
                setStudent({ ...student, Status: value });

                break;

            case 'Zip':
                setStudent({ ...student, Zip: value });

                break;


            case 'FinalDate':
                setStudent({ ...student, FinalDate: value });

                break;
            default:
                break;
        }

       // console.log(user)
      }

      const showFormObject =()=>
      {
          console.log(student)
      }
    
    return (
        <div>
        <Container>
                <Form>

                <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control 
                               type="text"
                                name='firstName'
                                onChange={handleChange}
                            />

                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name='lastName' 
                                onChange={handleChange}/>
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                               type="text"
                                name='Email'
                                onChange={handleChange}
                            />

                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="text"
                                name='Password'
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            name='Address' 
                            onChange={handleChange}/>
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} >
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name='City' 
                                onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select"
                                name='Status'
                                onChange={handleChange}
                            >
                                <option>Active</option>
                                <option>Inactive</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                name='Zip' 
                                onChange={handleChange}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                    <Form.Label>Final Date</Form.Label>
                        <Form.Control 
                            type="date"
                            name='FinalDate' 
                            onChange={handleChange}/>
                    </Form.Group>
                     
                    <Button variant="primary" type="button"
                       onClick={()=>AddStudentComplexDataRecord()}>
                        Validate Object
                    </Button>

                </Form>
        </Container>
        </div>
    )
}

export default ComplexForm