import React from 'react';
import { useState } from 'react';
import {Button,
    Row,
    Col,Form} from 'react-bootstrap';

  function ChoreForm({ addChoreLog }) {
    const [choreDesc, setChoreDesc] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const handleSubmit= (e) => {
      addChoreLog([choreDesc, name, date])
      e.preventDefault();
    }
  
    return (

        <Form onSubmit={e => { handleSubmit(e) }}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridchoreDesc">
                    <Form.Label>Chore Description</Form.Label>
                    <Form.Control type="text" 
                      name='choreDesc'
                      value={choreDesc}
                      onChange={e => setChoreDesc(e.target.value)}
                    />
                </Form.Group>

            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      name='name'
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                         name='date'
                         type="date"
                         value={date}
                         onChange={e => setDate(e.target.value)}
                         />
                </Form.Group>
            </Row>


            <Button variant="primary" type="submit">
                Add Log
            </Button>
        </Form>
    )
  }

  export default ChoreForm;