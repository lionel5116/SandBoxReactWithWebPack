import React from 'react'
import {Button} from 'react-bootstrap'


function CustomButton({handleClick,children}) {
   console.log('Rendering button - ',children)
  return (
   <Button variant="outline-secondary" onClick={handleClick}>
      {children}
   </Button>
   
  )
}

//export default CustomButton
export default React.memo(CustomButton) //prevents uneccesary renders