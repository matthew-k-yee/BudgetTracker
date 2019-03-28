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
        ]
      }
    })
  }

  handleDelete = index => {
    this.setState(prevState => {
      return { 
        expenseList:[...prevState.expenseList.filter( (list, i) => i !== index)]
      }
    })
    console.log(this.state.expenseList)
  }
  // income = () => {
  //   let list = this.state.expenseList
  //   let total = []
  //   for ( let i = 0; i < list.length; i++) {
  //     if ( list[i].categories === 'Income')
  //     total.push(list[i].amount)
  //   }
  //   this.setState({
  //     total: total.reduce((a,c) => a + c)
  //   })
  // }

  // handleIncomeUpdate = e => {
  //   let list = this.state.expenseList
  //   let total = []
  //   for ( let i = 0; i < list.length; i++) {
  //     if ( list[i].categories === 'Income')
  //     total.push(list[i].amount)
  //   }
  //   this.setState({
  //     total: total.reduce((a,c) => a + c)
  //   })
  // }

  // componentDidMount() {
  //   this.income()
  // }

  render() {
    console.log(this.state.expenseList)
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
          handleDelete={this.handleDelete}
        />
        <Balance total={this.state.total}/>
      </div>
    )
  }
}
export default Budget