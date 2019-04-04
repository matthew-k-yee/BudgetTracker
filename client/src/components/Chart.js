import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';



class Chart extends Component {
  render() {
    const amounts = this.props.amount
    
    const data = {
      labels: [
        "Alcohol", 
        'Groceries', 
        'Misc', 
        'Restaurant', 
        'Travel', 
        'Utilities'
      ],
      datasets: [{
        data: [50, 100, 30, 31, 31, 50],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    return (
      <div>
        <Pie data={data} height={75} />
      </div>
    )
  }
}
// const Chart = props => {

  // const data = {
  //   labels: [
  //     "Alcohol", 
  //     'Groceries', 
  //     'Misc', 
  //     'Restaurant', 
  //     'Travel', 
  //     'Utilities'
  //   ],
  //   datasets: [{
  //     data: [50],
  //     backgroundColor: [
  //       '#FF6384',
  //       '#36A2EB',
  //       '#FFCE56'
  //     ]
  //   }]
  // };
  
//   return (
//     <div>
//     <Pie data={data} height={75}></Pie>
//     </div>
//   )
// }
export default Chart
