import React from 'react' 
import Income from './Income'
import Balance from './Balance'
import Expenses from './Expenses'

const Total = props => {
  return (
    <div className='container total-list'>
        <Income budgetList={props.budget}/>
        <Expenses amount={props.amount}/>
        <Balance 
          amount={props.amount}
          budget={props.budget}
          />
    </div>
  )
}
export default Total 