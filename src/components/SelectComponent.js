import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Config from '../api/config'

import{
    Button,
      Card,
      Container,
      Row,
      Col,Form,Tabs,Tab} from 'react-bootstrap'

 
class SelectComponent extends React.Component {
   
  constructor(props){
    super(props)
    this.state = {
      dropDownOpt : [],
      id: "",
      email: '',
      multiValues: []
    }
  }

  onTrigger(data) {
    console.log(data)
    this.props.parentCallback(data);
}


  async renderData(){
    const url = Config.REST_URL + '/api/Admin/fetchFoodsToBeOmmited/';
    const API = await axios.get(url)
    const serverResponse = API.data
 
    const dropDownValue = serverResponse.map((response) => ({
      "value" : response.SequenceID,
      "label" : response.FOmmittedName
    }))
 
    this.setState(
      {
        dropDownOpt: dropDownValue
      }
    )
 
  }

  //good article on react-select   https://blog.logrocket.com/getting-started-with-react-select/
  //https://react-select.com/props
  onChange(event){
      this.setState(
      {
        SequenceID: event.value, 
        FOmmittedName: event.label
       }
     )
     
     let _properArray = []
        for(const key in event) {
           _properArray.push(event[key].label)
        }
        
        var strSelectedItems =''

        _properArray.forEach(function (item, index) {
            console.log(item, index);
            strSelectedItems += item;
            strSelectedItems += ","
          });

        //below works to store values from dropdown selected values onto a text field
        var selectedValues = document.getElementById('selectedValues');
        selectedValues.value = strSelectedItems.substring(0,strSelectedItems.length - 1);
   }
  
    helloWorld()
    {
      var _TFBOSelect = document.getElementById('selFTBO');

      //below actually works to build the options, but we have to further research how to
      //set values
      var selectedValues = document.getElementById('selectedValues');
      //let text = selectedValues.value;
      
      let text = 'Eggs as an Ingredient,Seafood'

      var arrSelectedValues =  text.split(",");

      var newOptions = []
      
      
      for (var i=0; i<arrSelectedValues.length; i++){
          var nextElement = '{ value:' + i + ' label:' + arrSelectedValues[i] + '}' 
            newOptions.push(nextElement)
      }
      console.log(newOptions)
      _TFBOSelect.selectedValues = newOptions;
      //console.log(newOptions)
    }

    addItemsToSelect()
    {
        var _mySelect = document.getElementById('mySelect');
        var _mySelect2 = document.getElementById('mySelect2');
        
        Array.from(_mySelect.options).forEach(function(option_element) {
            let option_text = option_element.text;
            let option_value = option_element.value;
            let is_option_selected = option_element.selected;
        
            /*
            console.log('Option Text : ' + option_text);
            console.log('Option Value : ' + option_value);
            console.log('Option Selected : ' + (is_option_selected === true ? 'Yes' : 'No'));
            */

            if(is_option_selected)
            {
                _mySelect2.options[_mySelect2.options.length] = new Option( option_text, option_value);
            }
        
        });

    }

    removeItemsFromSelect()
    {
        var _mySelect2 = document.getElementById('mySelect2');
        _mySelect2.remove(_mySelect2.selectedIndex);
    }

   componentDidMount(){
       this.renderData()
   }
  
   render() {
     return (
       <div className="App">
             <main>
                 <Container>
                     <Form>
                         <Tabs>
                             <Tab eventKey="home" title="Home">
                             <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>
                             </Tab>
                             <Tab eventKey="profile" title="Profile">
                               <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress2">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>
                             </Tab>
                             <Tab eventKey="contact" title="FTBO Items">
                                 <Row>
                                     <Col sm={12}>
                                      <input type='text' id='selectedValues'></input>
                                     </Col>
                                 </Row>
                                 <hr></hr>
                                 <Row>
                                     <Col sm={12}>
                                         <Select id='selFTBO'
                                             options={this.state.dropDownOpt}
                                             onChange={this.onChange.bind(this)}
                                             isMulti
                                         />
                                     </Col>
                                 </Row>
                                 <br>
                                 </br>

                                 <Row>
                                     <Col sm={6}>
                                     <select id="mySelect"
                                             multiple 
                                             style={{width:150}}>
                                            <option>football</option>
                                            <option>Basketball</option>
                                            <option>Hockey</option>
                                            <option>Swiming</option>
                                      </select>
                                     </Col>
                                     <Col sm={6}>
                                     <select id="mySelect2"
                                           multiple
                                           style={{width:150}}>
                                         
                                      </select>
                                     </Col>
                                 </Row>
                                 <br></br>
                                 <Row>
                                     <Col sm={4}>
                                     <Button variant="success" id="btnBindOnClick" onClick={() => this.addItemsToSelect()}>Add</Button>
                                     </Col>
                                     <Col sm={4}>
                                     <Button variant="danger" id="btnBindOnClick2" onClick={() => this.removeItemsFromSelect()}>Remove</Button>
                                     </Col>
                                 </Row>


                             </Tab>
                         </Tabs>
                     </Form>
                    
                 </Container>
             </main>

        
       </div>
     )
   }
 }

 export default SelectComponent