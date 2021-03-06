import React, { Component } from 'react' 
import ExpenseList from './ExpenseList'
import InputExpense from './InputExpense'
import Total from './Total'
// import Chart from './Chart'
import {defaultTransactions} from '../modules/default'
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
      editID: ''

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

  handleChangeAmount = (e) => {
    this.setState({
      expenses: {
        amount: e.target.value
      }
    })  
  }     

  onSubmitChange = e => {
    e.preventDefault()
    this.setState({
      expenses: {
        categories: '',
        description: '',
        amount: ''
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


  handleId = (e,index, list) => {
    this.setState({
      editID: index, 
      // expenses: {
      //   categories: list.categories,
      //   description: list.description,
      //   amount: list.amount
      // }
    })
    console.log(this.state.expenses)
  }

  handleUpdate = e => {
    e.preventDefault()
  }

  handleCommentChange = e => {

  }


  render() {
    return (
      <div>
        <InputBudget 
          handleSavingsChange={this.handleSavingsChange}
          handleSavingsSubmit={this.handleSavingsSubmit}
          income={this.state.budget.income}
          />
        <InputExpense 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          categories={this.state.expenses.categories}
          description={this.state.expenses.description}
          amount={this.state.expenses.amount}
        />
        <ExpenseList 
          expenseList={this.state.expenseList}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
          handleId={this.handleId}
          id={this.state.editID}
          expenses={this.state.expenses}
        />
        <Total 
          amount={this.state.expenseList}
          budget={this.state.budgetList}
        />
        {/* <Chart 
          amount={this.state.expenseList}
          budget={this.state.budgetList}/> */}
      </div>
    )
  }
}
export default Budget