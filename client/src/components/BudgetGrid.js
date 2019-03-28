import React from 'react'

const BudgetGrid = props => {
  return (
    <div>
    {props.expenseList.map( (list, index) => {
      return (
        <div key={index}>
          <p>{list.categories} {list.description} ${list.amount}</p>
          <button onClick={props.handleUpdate}>Update</button>
          <button onClick={() => props.handleDelete(index)}>Remove</button>
        </div>
      )
    })}
    </div>
  )
  
}
export default BudgetGrid
