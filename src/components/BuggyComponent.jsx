import React from 'react'

function BuggyComponent() {
    throw new Error ("Something went wrong!")

  return <h2>This will not appear</h2>;
}

export default BuggyComponent
