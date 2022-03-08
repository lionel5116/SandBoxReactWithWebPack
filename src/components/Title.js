import React from 'react'

function Title() {
    console.log("Rendering Title")
  return (
   <h2>
      useCallBack
   </h2>
  )
}

//export default Title
export default React.memo(Title)  //prevents uneccesary renders - to use with useCallback