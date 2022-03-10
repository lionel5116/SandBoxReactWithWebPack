import React, {useState,useEffect} from 'react';
import DropdownMultiselect from 'react-multiselect-dropdown-bootstrap'
import{
Button,
  Card,
  Container,
  Row,
  Col,Form} from 'react-bootstrap'

import studentInfoApi from '../api/studentInfoApi';
import Config from '../api/config';



function MultiSelect() {

    const [tblFoodsToBeOmmited, settblFoodsToBeOmmitedData] = useState([])
    const [tblFoodsToBeOmmited_FINAL, settblFoodsToBeOmmited_FINAL_Data] = useState([])

    const optionsArray = [
        { key: "au", label: "Australia" },
        { key: "ca", label: "Canada" },
        { key: "us", label: "USA" },
        { key: "pl", label: "Poland" },
        { key: "es", label: "Spain" },
        { key: "fr", label: "France" },
      ];

     
      /*THIS GET'S CALLED TOOOPOOO MANY TIMES - IT LOOPS*/
      useEffect(() => {
        fetchblFoodsToBeOmmitedData();
        splitFTBOmmitedItemsIntoNewArray(tblFoodsToBeOmmited)
        console.log("Calling useEffect")
      },[]);
     


    async function fetchblFoodsToBeOmmitedData() {
        let _FTBOM = [];
        var myAPI = new studentInfoApi;
        _FTBOM = await myAPI.fetchblFoodsToBeOmmitedData()
       settblFoodsToBeOmmitedData(_FTBOM)
      
    }

  function showSelected(selected)
  {
     console.log('You selected:' + selected)
  }    

  function splitFTBOmmitedItemsIntoNewArray(tblFoodsToBeOmmited)
  {
    console.log("In splitFTBOmmitedItemsIntoNewArray function already!!!")
    var _TFBOSelect = document.getElementById('selFTBO'); 
     let _properArray = []
     for(const key in tblFoodsToBeOmmited) {
        _properArray.push(tblFoodsToBeOmmited[key].FOmmittedName)
        _TFBOSelect.options[_TFBOSelect.options.length] = new Option(tblFoodsToBeOmmited[key].FOmmittedName);
     }
     
     
     //settblFoodsToBeOmmited_FINAL_Data(_properArray);
     //console.log(tblFoodsToBeOmmited_FINAL)

    }

    function helloWorld()
    {

    }

  return (
    <div>
    <main>
       <Container>   
          <Row>
          <Col>
            <Button onClick={() =>helloWorld()}>Fetch FTBO Items</Button>
            <Button variant="warning" onClick={() =>splitFTBOmmitedItemsIntoNewArray(tblFoodsToBeOmmited)}>Bind Final Array</Button>
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
            {/*
            <DropdownMultiselect options={tblFoodsToBeOmmited_FINAL} 
                                  name="FTBOItems"
                                  handleOnChange={(selected) => {
                                    showSelected(selected);
                                  }} /> */}
           </Col>

         </Row>
           <Col>
           <select id="selFTBO">
           </select>
           </Col>
         <Row>
         <hr></hr>

         </Row>
           <Col>
          
           </Col>
         <Row>
         <hr></hr>

         </Row>
       </Container>
    </main>
    </div>

  )
}

export default MultiSelect