import React, { Component } from 'react' 
import BudgetGrid from './BudgetGrid'
import InputExpense from './InputExpense'
import Balance from './Balance'
import Expenses from './Expenses'
import {defaultTransactions, defaultBudget} from '../modules/default'
import InputBudget from './InputBudget';

class Budget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      expenses: {
        categories: '',
        description: '',
        amount: ''
      }, 
      expenseList: defaultTransactions,
      budget: {
        income: ''
      }, 
      budgetList: [], 

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
  }

  handleDelete = index => {
    this.setState(prevState => {
      return { 
        expenseList:[...prevState.expenseList.filter( (list, i) => i !== index)]
      }
    })
  }

  handleSavingsChange = e => {
    const { name, value } = e.target
    this.setState({
      budget: {
        [name]: value
      }
    })
  }

  handleSavingsSubmit = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        budgetList: [
          ...prevState.budgetList,
          prevState.budget
        ], 
        budget: {
          income: ''
        }
      }
    })
  }

  render() {
    console.log(this.state.budgetList)
    return (
      <div>
        {/* <InputBudget 
          handleSavingsChange={this.handleSavingsChange}
          handleSavingsSubmit={this.handleSavingsSubmit}
          budget={this.state.budget.income}
          /> */}
        <InputExpense 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          categories={this.state.expenses.categories}
          description={this.state.expenses.description}
          amount={this.state.expenses.amount}
        />
        <BudgetGrid 
          expenseList={this.state.expenseList}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
        <Expenses amount={this.state.expenseList}/>
        {/* <Balance budgetList={this.state.budgetList}/> */}
      </div>
    )
  }
}
export default Budget