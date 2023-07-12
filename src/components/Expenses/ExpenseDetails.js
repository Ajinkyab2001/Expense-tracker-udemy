import React, { useState } from 'react'

const ExpenseDetails = (props) => {

  const [amt,setAmt] = useState(props.amount);

  function changeHandler(){
    setAmt(100);
  }
  
  return (
    <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>${amt}</div>
            <button onClick={changeHandler}>change</button>
            
    </div>
  )
}

export default ExpenseDetails