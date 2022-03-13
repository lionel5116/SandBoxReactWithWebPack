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

    const [dropDownValues_FTBO, setdropDownValueDataftbo] = useState([])
    const [dropDownValues, setdropDownValueData] = useState([])
    let optionsForMultiselect = ['Dairy Products', 'Eggs as an Ingredient', 'Fluid Dairy Milk', 'Foods Processed in a Facility that Contains Nuts', 'Milk Protein', 'Peanuts', 'Seafood', 'Soy', 'Tree Nuts', 'Wheat/Gluten', 'Whole Egg ']
    let optionsForMultiselect2 = [];

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

        let _properArray = []  //this proper array is for trying to get the   <DropdownMultiselect options={tblFoodsToBeOmmited} to work
        for(const key in _FTBOM) {
           _properArray.push(_FTBOM[key].FOmmittedName)
           //the line below is for setting the options for regular select - it works
           _TFBOSelect.options[_TFBOSelect.options.length] = new Option(_FTBOM[key].FOmmittedName);
        }
     
      
       /*
        initializeFTBO(['Dairy Products', 'Eggs as an Ingredient', 'Fluid Dairy Milk', 'Foods Processed in a Facility that Contains Nuts', 'Milk Protein', 'Peanuts', 'Seafood', 'Soy', 'Tree Nuts', 'Wheat/Gluten', 'Whole Egg '])  //set the data from _properyArray to dropDownValues_FTBO
        console.log("Should show dropDownValues_FTBO on next log call")
        console.log(dropDownValues_FTBO)
        console.log("The next line shows _properArray data")
        console.log(_properArray)
      */

      
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

    const initializeFTBO = (data) =>
    {
      setdropDownValueDataftbo(data)
    }
    function helloWorld()
    {
      initializeFTBO(optionsForMultiselect)
      console.log(dropDownValues_FTBO)
      /*
      var _TFBOSelect = document.getElementById('selFTBO');
      for (var i=0; i<_TFBOSelect.length; i++){
        //console.log(_TFBOSelect.options[i].text+" "+_TFBOSelect.options[i].value)
        if(_TFBOSelect.options[i].selected) {
          console.log(_TFBOSelect.options[i].value)
        }
      }
      */
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
          <h2>Countries Static Values Col One / dynamically rendered FTBO Items but not working Col 2</h2> 
         <Row>
           <Col sm={6}>
            <DropdownMultiselect options={optionsArray} 
                                  name="countries"
                                  handleOnChange={(selected) => {
                                    showSelected(selected);
                                  }} />
           </Col>

           <Col sm={6}>
            
            <DropdownMultiselect options={dropDownValues_FTBO} 
                                  name="FTBOItems"
                                  handleOnChange={(selected) => {
                                    showSelected(selected);
                                  }} /> 
           </Col>

         </Row>
         <hr></hr>
         <h2>Below Col one dyanically rendered from WS/ Col 2 Same but cannot get the handle change event to work</h2> 
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
         <h2>Only one column (size = 6) child dropdown passing in static array to populate a select - works with static</h2>
         <Row>
         <Col sm={6}>
           <ChildDropDown items = {optionsForMultiselect} />
          </Col>
         </Row>
         
         
         <hr></hr>
         <h2>Select Component trying to get the callback to work along with Sample TAB Markup and trad javascript selects</h2>
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