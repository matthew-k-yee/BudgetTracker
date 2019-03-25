import React from 'react'

const InputBudget = props => {
  return (
    <form>
      <select>
        <option value="">Alcohol & Bars</option>
        <option value="">Groceries</option>
        <option value="">Misc</option>
        <option value="">Restaurant</option>
        <option value="">Travel</option>
        <option value="">Utilities</option>
      </select>
      <input type='text' placeholder='Description'/>
      <input type="number" placeholder='Value'/>
    </form>
  )
}
export default InputBudget