import React, { Component } from 'react' 
import BudgetGrid from './BudgetGrid'
import InputBudget from './InputBudget'
import Balance from './Balance'
import {defaultTransactions} from '../modules/default'

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
      total: []
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

  income = () => {
    let list = this.state.expenseList
    let arr = [];
    for ( let i = 0; i < list.length; i++) {
      if ( list[i].categories === 'Income') {
        let amount = parseInt(list[i].amount)
        arr.push(amount)
      }
    }
    // this.setState({
    //   total: arr
    // })
    console.log(arr)
  }

  // componentDidMount() {
  //   this.income()
  // }
  render() {
    // {this.income()}
    return (
      <div>
        <InputBudget 
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
        <Balance expenseList={this.state.expenseList}/>
      </div>
    )
  }
}
export default Budget