import React, {useState,useEffect} from 'react';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap'
import{
Button,
  Card,
  Container,
  Row,
  Col} from 'react-bootstrap'

import studentInfoApi from '../api/studentInfoApi';
import Config from '../api/config';



function MultiSelect() {

    const [tblFoodsToBeOmmited, settblFoodsToBeOmmitedData] = useState([])

    const optionsArray = [
        { key: "au", label: "Australia" },
        { key: "ca", label: "Canada" },
        { key: "us", label: "USA" },
        { key: "pl", label: "Poland" },
        { key: "es", label: "Spain" },
        { key: "fr", label: "France" },
      ];

     
  
    async function fetchblFoodsToBeOmmitedData() {
        let _FTBOM = [];
        var myAPI = new studentInfoApi;
        _FTBOM = await myAPI.fetchblFoodsToBeOmmitedData()
        //console.log(_FTBOM)
        settblFoodsToBeOmmitedData(_FTBOM)
    }

  function showSelected(selected)
  {
      //each time a change is made, the call back method
      //handleOnChange adds it to an array, selected = [Poland,France]
     console.log('You selected:' + selected)
     splitFTBOmmitedItemsIntoNewArray(tblFoodsToBeOmmited)
  }    

 const splitFTBOmmitedItemsIntoNewArray = (tblFoodsToBeOmmited) =>
 {
     let _properArray = []
     for(const key in tblFoodsToBeOmmited) {
        console.log(`${key}: ${tblFoodsToBeOmmited[key].FOmmittedName}`);
     }

 }

  return (
    <div>
    <main>
       <Container>   
          <Row>
          <Col>
            <Button onClick={() =>fetchblFoodsToBeOmmitedData()}>Fetch FTBO Items</Button>
          </Col>
          </Row> 
           <hr></hr>
         <Row>
           <Col sm={6}>
            <DropdownMultiselect options={optionsArray} 
                                  name="countries"
                                  handleOnChange={(selected) => {
                                    showSelected(selected);
                                  }} />
           </Col>

           <Col sm={6}>
            <DropdownMultiselect options={tblFoodsToBeOmmited} 
                                  name="FTBOItems"
                                  handleOnChange={(selected) => {
                                    showSelected(selected);
                                  }} />
           </Col>

         </Row>
       </Container>
    </main>
    </div>

  )
}

export default MultiSelect