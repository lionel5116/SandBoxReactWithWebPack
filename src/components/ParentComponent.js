import React,{useState} from 'react'

function ParentComponent() {
 const [age,setAge] = useState(25);
 const [salary,setSalary] = useState(125000)

 const incrementAge = () => {
     setAge(age +1)
 }

 const incrementSalary = () => {
    setSalary(salary + 1000)
}

  return (
    <div>ParentComponent</div>
  )
}

export default ParentComponent