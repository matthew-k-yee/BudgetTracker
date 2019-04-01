import React from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Balance = props => {
  const debts = props.amount.map( debt => parseInt(debt.amount)).reduce((a,c) => a + c, 0)
  const incomes = props.budget.map( income => parseInt(income.income)).reduce((a,c) => a + c, 0)
  let total = incomes - debts
  return (
    <div>
      <h3>Balance</h3>
      <FontAwesomeIcon icon='balance-scale'/>
      <p>${total}</p>
    </div>
  )
}

export default Balance