import React from 'react'

const InputExpense = props => {
  return (
    <div className='container w-50 p-3'>
      <form onSubmit={props.handleSubmit}>
      <div className='form-group row expense-box'>
        <label className='col-sm-12 col-form-label'><h5>Enter Expenses</h5></label>
        <div className='col-sm-12 expense-input'>
          <select 
              name='categories'
              className='col-sm-3'
              value={props.categories} 
              required onChange={props.handleChange}>
            <option value=''>--Select an option--</option>
            <option value="Alcohol">Alcohol & Bars</option>
            <option value="Groceries">Groceries</option>
            <option value="Misc">Misc</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Travel">Travel</option>
            <option value="Utilities">Utilities</option>
          </select>
          <input 
            className='col-sm-5'
            type='text' 
            name='description'
            value={props.description} 
            placeholder='Description' 
            required onChange={props.handleChange}
            />
          <input 
            className='col-sm-2'
            type="number" 
            name='amount'
            value={props.amount}
            placeholder='Amount' 
            required onChange={props.handleChange}
            />
        </div>
        <button className='add-button btn btn-success' type='submit'>Add</button>
      </div>
      </form>
    </div>
  )
}
export default InputExpense
