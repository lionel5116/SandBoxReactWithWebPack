import React from 'react'


function CustomButton({handleClick,children}) {
   console.log('Rendering button - ',children)
  return (
   <button onClick={handleClick}>
      {children}
   </button>
   
  )
}

//export default CustomButton
export default React.memo(CustomButton) //prevents uneccesary renders