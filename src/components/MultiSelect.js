import React from 'react'
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap'
import{
Button,
  Card,
  Container,
  Row,
  Col} from 'react-bootstrap'


function MultiSelect() {
    const optionsArray = [
        { key: "au", label: "Australia" },
        { key: "ca", label: "Canada" },
        { key: "us", label: "USA" },
        { key: "pl", label: "Poland" },
        { key: "es", label: "Spain" },
        { key: "fr", label: "France" },
      ];
  return (
    <div>
    <main>
       <Container>         
         <Row>
           <Col sm={12}>
            <DropdownMultiselect options={optionsArray} name="countries" />
           </Col>
         </Row>
       </Container>
    </main>
    </div>

  )
}

export default MultiSelect