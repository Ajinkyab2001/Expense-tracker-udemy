import React from 'react'
import Form from './Form'
import './NewExpense.css'

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData,
        id : new Date().getTime()
      };
      props.onAddExpense(expenseData)
  }

  return (
    <div className='new-expense'>
    <Form onSaveExpenseData = {saveExpenseDataHandler}  />
  </div>
  )
}

export default NewExpense