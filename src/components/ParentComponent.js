import React,{useState,useCallback} from 'react'
import {
  Card,
  Container,
  Row,
  Col,
  Image} from 'react-bootstrap';

  import Title from './Title';
  import Count from './Count';
  import CustomButton from './CustomButton';

//https://www.youtube.com/watch?v=IL82CzlaCys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=69

function ParentComponent() {
 const [age,setAge] = useState(25);
 const [salary,setSalary] = useState(125000)

 /*
 function incrementAge()  {
     setAge(age +1)
 }
*/

//below is how to use useCallBack - keeps a cached copy of a memozized component (export default React.memo(CustomButton))
//and only renders the component that needs to be rendered (not all components ) when a prop or state changes
const incrementAge = useCallback( () => {
  setAge(age +1)
},[age])


const incrementSalary = useCallback( () => {
  setSalary(salary + 1000)
},[salary])



  return (
    <div>
    <main>
       <Container>

         <Row>
           <Col sm={12}>
            
              <Title />

              {/*notice how we are passing props to child components  */}

              <Count text="Age" count={age} />
               
              
              <CustomButton handleClick={ incrementAge } >
                Increment Age
              </CustomButton>

              <Count text="Salary" count={salary} />

              <CustomButton handleClick={ incrementSalary} >
                Increment Salary
              </CustomButton>

           </Col>
         </Row>

       </Container>
    </main>
    </div>
  )
}

export default ParentComponent