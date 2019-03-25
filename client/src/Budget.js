import React, { Component } from 'react' 
import BudgetGrid from './BudgetGrid'
import InputBudget from './InputBudget'


class Budget extends Component {
  render() {
    return (
      <div>
        <h1>Description</h1>
        <BudgetGrid />
        <InputBudget />
      </div>
    )
  }
}
export default Budget