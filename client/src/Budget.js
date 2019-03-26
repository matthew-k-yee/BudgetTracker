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
      }, 
      expenseList: []
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
    this.setState(prevState => {
      return {
        expenseList: [
          ...prevState.expenseList,
          prevState.expenses
        ], 
        expenses: {
          categories: '',
          description: '',
          amount: ''
        }
      }
    })
    console.log(this.state.expenseList)
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
        <BudgetGrid 
          expenseList={this.state.expenseList}
        />
      </div>
    )
  }
}
export default Budget