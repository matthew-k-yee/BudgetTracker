import React from 'react'

const Income = props => { 
  let list = props.budgetList.map( list => parseInt(list.income))
    return (
      <div>
        <h1>Budget</h1>
        <p>${list.reduce((a,c) => a +c,0)}</p>
      </div>
    )
  }
export default Income