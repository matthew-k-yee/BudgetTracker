import React from 'react'

const Balance = props => { 
  let list = props.budgetList.map( list => parseInt(list.income))
  console.log(list)
    return (
      <div>
        <h1>${list.reduce((a,c) => a +c,0)}</h1>
      </div>
    )
  }
export default Balance