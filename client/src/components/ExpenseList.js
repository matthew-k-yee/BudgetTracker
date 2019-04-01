import React from 'react'

const ExpenseList = props => {
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
export default ExpenseList

  // <tr>
  //   <td>
  //     <h3>Category</h3>
  //   </td>
  //   <td>
  //     <h3>Description</h3>
  //   </td>
  //   <td>
  //     <h3>Amount</h3>
  //   </td>
  // </tr>



        {/* <div key={index}>
          <p>{list.categories} {list.description} ${list.amount}</p>
          <button onClick={() => props.handleDelete(index)}>Remove</button>
        </div> */}