import React from 'react'

const BudgetGrid = props => {
  console.log(props.expenseList)
  return (
    
    <div>
    {props.expenseList.map( (list, index) => {
      return (
        <div key={index}>
          <p>{list.categories} {list.description} {list.amount}</p>
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