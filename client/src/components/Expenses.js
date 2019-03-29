import React from 'react'

const Expenses = props => {
  const amount = props.amount.map( expense => parseInt(expense.amount))
  console.log(amount)
  return (
    <div>
      <h1>Expenses</h1>
      <p>${amount.reduce((a,c) => a + c, 0)}</p>
    </div>
  )
}

export default Expenses