import React from 'react'

const Income = props => { 
  let list = props.budgetList.map( list => parseInt(list.income)).reduce((a,c) => a + c, 0)
    return (
      <div>
        <h1>Budget</h1>
        <p>${list}</p>
      </div>
    )
  }
export default Income