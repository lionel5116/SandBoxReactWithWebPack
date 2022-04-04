import React from 'react'
import {Button,
    Row,
    Col,
  Modal} from 'react-bootstrap';
import CustomButton from './CustomButton';

function GenericModal(props,handleClick) {
  return (
    <div>
     <Modal
                show={props.flag}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                  {props.title}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4> {props.title}</h4>
                  <Row>
                    <Col sm={2}>
                      <label>Food Item</label>
                    </Col>

                    <Col sm={4}>
                      <input value={props.formattedName}>
                      </input>
                    </Col>

                    <Col sm={2}>
                      <label>New Value</label>
                    </Col>

                    <Col sm={4}>
                      <input id= {props.id}>
                      </input>
                    </Col>
                  </Row>
                </Modal.Body>
                <Modal.Footer>
                  <CustomButton onClick = {handleClick}>
                      Submit
                 </CustomButton>
                  <CustomButton onClick={handleClick}>
                   Close
                  </CustomButton>
                </Modal.Footer>
              </Modal>

    </div>
  )
}

export default GenericModal