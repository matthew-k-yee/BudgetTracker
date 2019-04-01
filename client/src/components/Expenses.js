import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expenses = props => {
  const amount = props.amount.map( expense => parseInt(expense.amount))
  return (
    <div>
      <h3>Expenses</h3>
      <FontAwesomeIcon icon='credit-card' />
      <p>${amount.reduce((a,c) => a + c, 0)}</p>
    </div>
  )
}

export default Expenses