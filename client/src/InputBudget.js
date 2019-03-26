import React from 'react'

const InputBudget = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <select 
          name='categories'
          value={props.categories} 
          onChange={props.handleChange}>
        <option value="alcohol">Alcohol & Bars</option>
        <option value="groceries">Groceries</option>
        <option value="misc">Misc</option>
        <option value="restaurant">Restaurant</option>
        <option value="travel">Travel</option>
        <option value="utilities">Utilities</option>
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