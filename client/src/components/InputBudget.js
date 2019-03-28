import React from 'react'

const InputBudget = props => {
  return (
    <form onSubmit={props.handleSavingsSubmit}>
      <label>
        Enter Savings
      </label>
      <input 
        type="number" 
        name='income'
        value={props.budget.income}
        onChange={props.handleSavingsChange}
        />
      <button type='submit'>Add</button>
    </form>
  )
}

export default InputBudget