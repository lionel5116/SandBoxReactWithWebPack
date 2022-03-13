import React , {useEffect} from 'react'

function ChildDropDown(props) {

    useEffect(() => {
        createSelectItems(props);
      },[]);

  return (
    <select  id="selFTBO2"  label="Multiple Select" multiple>
    
   </select>
  )

  function createSelectItems(props) {
    var _TFBOSelect = document.getElementById('selFTBO2'); 

    for(const key in props.items) {
        //console.log(props.items[key]);
        _TFBOSelect.options[_TFBOSelect.options.length] = new Option(props.items[key]);
     }  
    
  }

function onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
}
  
}



export default ChildDropDown