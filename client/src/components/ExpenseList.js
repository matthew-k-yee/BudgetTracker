import React from 'react'

const ExpenseList = props => {
  return (
    <table className='table table-striped table-md content'>
      <tbody>
      <tr>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
        <th scope="col">Actions</th>
      </tr>
    {props.expenseList.map( (list, index) => {
      return (
        <tr key={index}>
          <td>{list.categories}</td>
          <td>{list.description} </td>
          <td>${list.amount}</td>
          <td>
            <button onClick={() => props.handleDelete(index)}>-</button>
          </td>
        </tr>
      )
    })}
      </tbody>
    </table>
  )
  
}
export default ExpenseList
