import React from 'react'

const InputBudget = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <select 
          name='categories'
          value={props.categories} 
          onChange={props.handleChange}>
        <option value=''>--Select an option--</option>
        <option value="Alcohol">Alcohol & Bars</option>
        <option value="Groceries">Groceries</option>
        <option value="Income">Income</option>
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
        onChange={props.handleChange}
        />
      <input 
        type="number" 
        name='amount'
        value={props.amount}
        placeholder='Amount' 
        onChange={props.handleChange}
        />
      <button type='submit'>Add</button>
    </form>
  )
}
export default InputBudget