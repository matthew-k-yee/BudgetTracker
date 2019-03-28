import React from 'react'

class Balance extends React.Component { 

  render() {
    return (
      <div>
        <h3>Income</h3>
        <p>${this.props.total}</p>
      </div>
    )
  }
}
export default Balance