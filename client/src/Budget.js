import React, { Component } from 'react' 
import BudgetGrid from './BudgetGrid'
import InputBudget from './InputBudget'

class Budget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      expenses: {
        categories: '',
        description: '',
        amount: ''
      }
    })
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState( prevState => {
      return {
        expenses: {
          ...prevState.expenses,
          [name]: value
        }
      }
    })
  }


  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.expenses)
  }

  render() {
    return (
      <div>
        <h1>Description</h1>
        <InputBudget 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          categories={this.state.expenses.categories}
          description={this.state.expenses.description}
          amount={this.state.expenses.amount}
        />
        <BudgetGrid />
      </div>
    )
  }
}
export default Budget