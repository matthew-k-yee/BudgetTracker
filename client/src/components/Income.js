import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Income = props => { 
  let list = props.budgetList.map( list => parseInt(list.income)).reduce((a,c) => a + c, 0)
    return (
      <div>
        <h3>Income</h3>
        <FontAwesomeIcon icon='money-bill' />
        <p>${list}</p>
      </div>
    )
  }
export default Income