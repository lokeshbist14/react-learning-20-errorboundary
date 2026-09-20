import React from 'react'

function SecondBuggyComponent() {
    throw new Error("Second component crashed!");

  return <h2>Second component</h2>;
}

export default SecondBuggyComponent;
