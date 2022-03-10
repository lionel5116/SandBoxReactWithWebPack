import React from 'react'




function ChildDropDown(_FTBOM) {
    /*
    var _TFBOSelect = document.getElementById('selFTBO'); 
        let _properArray = []
        for(const key in _FTBOM) {
           _properArray.push(_FTBOM[key].FOmmittedName)
           _TFBOSelect.options[_TFBOSelect.options.length] = new Option(_FTBOM[key].FOmmittedName);
        }
        */
  return (
    <select  id="selFTBO"  label="Multiple Select" multiple>
    
   </select>
  )

  function createSelectItems(props) {
    let items = [];
    console.log('The lenght of my props: ' + props.length)         
    for (let i = 0; i <= props.length; i++) {             
         items.push(<option key={i} value={props[i]}>{props[i]}</option>);   
         //here I will be creating my options dynamically based on
         //what props are currently passed to the parent component
    }
    console.log(items)
    return items;
}

function onDropdownSelected(e) {
    console.log("THE VAL", e.target.value);
    //here you will see the current selected value of the select input
}
  
}



export default ChildDropDown