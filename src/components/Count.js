import React from 'react'

function Count({text,count}) {
   console.log(`Rendering ${text}`)
    return (
     <div>{text} - {count}</div>
  )
}

//export default Count
export default React.memo(Count) //prevents uneccesary renders


