import React, {useState,useEffect} from 'react';
import{
    Button,
      Card,
      Container,
      Row,
      Col,Form} from 'react-bootstrap'

import studentInfoApi from '../api/studentInfoApi';

function MultiSelectFromFlask() {

    async function fetchblFoodsToBeOmmitedData_PYTHON_FLASK() {
        
        /*THIS IS THE LAST RESORT FIX.. USE A TRADITIONAL SELECT  */
          let _FTBOM = [];
          var myAPI = new studentInfoApi;
          _FTBOM = await myAPI.fetchblFoodsToBeOmmitedData_FROM_FLASK()
         
          var _TFBOSelect = document.getElementById('selFTBO'); 
  
          const _dropDownValue = _FTBOM.map((response) => ({
            "value" : response.SequenID,
            "label" : response.FOmmittedName
          }))
          
          let _properArray = []  //this proper array is for trying to get the   <DropdownMultiselect options={tblFoodsToBeOmmited} to work
          for(const key in _FTBOM) {
             _properArray.push(_FTBOM[key].FOmmittedName)
             //the line below is for setting the options for regular select - it works
             _TFBOSelect.options[_TFBOSelect.options.length] = new Option(_FTBOM[key].FOmmittedName);
          }
      
      }

  return (
    <div>
    <main>
       <Container>   
       <Row>
          <Col>
            <Button onClick={() =>fetchblFoodsToBeOmmitedData_PYTHON_FLASK()}>Fetch FTBO Items (Flask WS)</Button>
           
          </Col>
          </Row> 

         <h2>Select fetching items from flask service</h2> 
         <Row>
           <Col sm={12}>
           <select id="selFTBO"
             multiple>
           </select>
           </Col>

         </Row>
        
    
       </Container>
    </main>
    </div>
  )
}

export default MultiSelectFromFlask