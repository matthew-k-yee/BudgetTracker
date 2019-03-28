import React from 'react'

const BudgetGrid = props => {
  return (
    <div>
    {props.expenseList.map( (list, index) => {
      return (
        <div key={index}>
          <p>{list.categories} {list.description} ${list.amount}</p>
          <button onClick={() => props.handleDelete(index)}>Remove</button>
        </div>
      )
    })}
    </div>
  )
  
}
export default BudgetGrid


{/* <table>
<tbody>
  <tr>
    <td>
      <h3>Category</h3>
    </td>
    <td>
      <h3>Description</h3>
    </td>
    <td>
      <h3>Amount</h3>
    </td>
  </tr>
</tbody>
</table> */}


// let example = [{categories: "Groceries", description: "Trader Joe's food", amount: 423.34}
// ,{categories: "Travel", description: "Gas", amount: 764.73}
// ,{categories: "Groceries", description: "Milk & Eggs for the pancake party with neighbors", amount: 2300}
// ,{categories: "Income", description: "Paycheck", amount: 5700}
// ,{categories: "Income", description: "Paycheck", amount: 300}]