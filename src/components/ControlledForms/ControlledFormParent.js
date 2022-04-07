import React from 'react'
import { useState } from 'react';
import ChoreForm from './ChoreForm';
import ChoreChart from './ChoreChart';
import { Container } from 'react-bootstrap';

//https://medium.com/swlh/building-controlled-forms-using-functional-components-in-react-965d033a89bd
function ControlledFormParent(props) {
    const [choreLogs, setChoreLogs] = useState([]);
     
    //below uses a spread operator to pass all props
    const addChoreLog = (log) => {
      let logs = [...choreLogs, log];
      setChoreLogs(logs);
   }
  return (
       <div id='MasterContainer'>
        <Container>
            <ChoreForm addChoreLog={addChoreLog} />
            <ChoreChart chores={choreLogs}/>
        </Container>
        </div>
    
  )
}

export default ControlledFormParent