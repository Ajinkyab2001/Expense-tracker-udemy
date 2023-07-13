import React, { useState } from 'react'
import Form from './Form'
import './NewExpense.css'

const NewExpense = (props) => {

const [isEditing , setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) =>{
      const expenseData = {
        ...enteredExpenseData,
        id : new Date().getTime()
      };
      props.onAddExpense(expenseData)
  }

  function clickHandler() {
    setIsEditing(true)
  }

  function cancelHandler(){
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
    
    { !isEditing && (<button onClick={clickHandler}>Add New Expense</button>) }

    {isEditing && <Form  onCancel={cancelHandler}   onSaveExpenseData = {saveExpenseDataHandler}  /> }


    

  </div>
  )
}

export default NewExpense