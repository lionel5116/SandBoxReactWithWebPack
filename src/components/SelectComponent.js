import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Config from '../api/config'
 
class SelectComponent extends React.Component {
   
  constructor(props){
    super(props)
    this.state = {
      dropDownOpt : [],
      id: "",
      email: ''
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

  onChange(event){
    
    
    this.setState(
      {
        SequenceID: event.value, 
        FOmmittedName: event.label
       }
     )

     this.onTrigger(this.state.FOmmittedName)

   }
  
   componentDidMount(){
       this.renderData()
   }
  
   render() {
     return (
       <div className="App">
           {this.props.parentToChild}
         <Select 
            options={this.state.dropDownOpt} 
            onChange={this.onChange.bind(this)}
            isMulti
         />
       </div>
     )
   }
 }

 export default SelectComponent