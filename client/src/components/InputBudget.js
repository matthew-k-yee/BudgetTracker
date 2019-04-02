import React from 'react'

const InputBudget = props => {
  return (
    <div className='container budget-input w-50 p-3'>
      <form onSubmit={props.handleSavingsSubmit}>
        <div className='budget-box'>
          <label className='col-sm-3 col-form-label'><h5>Enter Savings</h5></label>
          <div className='col-sm-4 budget-form-field'> 
            <input 
              className='form-control'
              type="number" 
              name='income'
              placeholder='$$$'
              value={props.income}
              onChange={props.handleSavingsChange}
              />
               <button className='btn btn-success' type='submit'>Add</button>
            </div>
          </div>
      </form>
    </div>
  )
}

export default InputBudget
