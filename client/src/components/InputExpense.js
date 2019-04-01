import React from 'react'

const InputExpense = props => {
  return (
    <div className='container'>
      <form onSubmit={props.handleSubmit}>
      <div className='form-group row'>
        <label className='col-sm-12 col-form-label'><h5>Enter Expenses</h5></label>
        <div className='col-sm-12 expense-input'>
          <select 
              name='categories'
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
            type='text' 
            name='description'
            value={props.description} 
            placeholder='Description' 
            required onChange={props.handleChange}
            />
          <input 
            type="number" 
            name='amount'
            value={props.amount}
            placeholder='Amount' 
            required onChange={props.handleChange}
            />
        </div>
      </div>
        <button className='btn btn-success' type='submit'>Add</button>
      </form>
    </div>
  )
}
export default InputExpense



{/* <form onSubmit={props.handleSavingsSubmit}>
<div className='form-group row'>
  <label className='col-sm-3 col-form-label'>Enter Savings</label>
  <div className='col-sm-9'> 
    <input 
      className='form-control'
      type="number" 
      name='income'
      value={props.budget.income}
      onChange={props.handleSavingsChange}
      />
    </div>
  </div>
<button className='btn btn-success' type='submit'>Add</button>
</form> */}