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
import ChildDropDown from './ChildDropDown';
import SelectComponent from './SelectComponent';

import Select from 'react-select'




function MultiSelect() {

    const [tblFoodsToBeOmmited, settblFoodsToBeOmmitedData] = useState([])
    const [dropDownValues, setdropDownValueData] = useState([])

    //for the child component
    const [data, setDataForChildComponent] = useState('');

    const handleCallback  = (childdata) => {
      setDataForChildComponent(childdata);
      console.log("Data From Child:" + data)
    }


    const optionsArray = [
        { key: "au", label: "Australia" },
        { key: "ca", label: "Canada" },
        { key: "us", label: "USA" },
        { key: "pl", label: "Poland" },
        { key: "es", label: "Spain" },
        { key: "fr", label: "France" },
      ];

     
      useEffect(() => {
        fetchblFoodsToBeOmmitedData();
      },[]);
     


    async function fetchblFoodsToBeOmmitedData() {
        
      /*THIS IS THE LAST RESORT FIX.. USE A TRADITIONAL SELECT  */
        let _FTBOM = [];
        var myAPI = new studentInfoApi;
        _FTBOM = await myAPI.fetchblFoodsToBeOmmitedData()
       
        var _TFBOSelect = document.getElementById('selFTBO'); 

        const _dropDownValue = _FTBOM.map((response) => ({
          "value" : response.SequenID,
          "label" : response.FOmmittedName
        }))
        setdropDownValueData(_dropDownValue)




        let _properArray = []
        for(const key in _FTBOM) {
           _properArray.push(_FTBOM[key].FOmmittedName)
           _TFBOSelect.options[_TFBOSelect.options.length] = new Option(_FTBOM[key].FOmmittedName);
        }
     
        
    
        /*
        var _FTBOItems  = document.getElementById('FTBOItems'); 
        for(const key in _FTBOM) {
          _FTBOItems.options[_FTBOItems.options.length] = new Option(_FTBOM[key].FOmmittedName);
       }
       */

        ///console.log(_properArray)
        //settblFoodsToBeOmmitedData(_properArray)

      /*
      var btnObj = document.getElementById('btnBindOnClick'); 
      btnObj.click()
      */
    
    }

    function handleSelectChange(event) {
      setdropDownValueData(event.target.value);
   }

  function showSelected(selected)
  {
     console.log('You selected:' + selected)
  }    


    function helloWorld()
    {
      var _TFBOSelect = document.getElementById('selFTBO');
      for (var i=0; i<_TFBOSelect.length; i++){
        //console.log(_TFBOSelect.options[i].text+" "+_TFBOSelect.options[i].value)
        if(_TFBOSelect.options[i].selected) {
          console.log(_TFBOSelect.options[i].value)
        }
      }
    }

  return (
    <div>
    <main>
       <Container>   
          <Row>
          <Col>
            <Button onClick={() =>helloWorld()}>Fetch FTBO Items</Button>
            <Button variant="warning" id="btnBindOnClick" onClick={() =>helloWorld()}>Bind Final Array</Button>
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
         <hr></hr>
         <Row>
           <Col sm={6}>
           <select id="selFTBO"
             multiple>
           </select>
           </Col>

           <Col sm={6}>
           <Select  id="selFTBO_REACT"
             options={dropDownValues}
             onChange={() =>handleSelectChange}
            isMulti
         />
           </Col>

         </Row>
         <hr></hr>

         <Row>
         <Col sm={6}>
           <ChildDropDown _FTBOM={tblFoodsToBeOmmited}/>
          </Col>
         </Row>
         
         
         <hr></hr>
         <Row>
         <Col sm={6}>
           <SelectComponent parentCallback = {handleCallback}/>
          </Col>
         </Row>
    
       </Container>
    </main>
    </div>

  )
}

export default MultiSelect