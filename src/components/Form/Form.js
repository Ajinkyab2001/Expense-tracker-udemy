import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {
    const [enteredTitle,setenteredTitle] = useState('');
    const [enteredAmount,setAmount] = useState('');
    const [enteredLocation,setLocation] = useState('');
    const [enteredDate,setdate] = useState('');
    
    function handleInput(e){
        if(e.target.name === "Title"){
            setenteredTitle(e.target.value)
            console.log(e.target.value)
        }else if(e.target.name === 'amount'){
            setAmount(e.target.value)
            console.log(e.target.value)
        }else if(e.target.name === 'location'){
            setLocation(e.target.value)
            console.log(e.target.value)
        }else if(e.target.name === 'date'){
            setdate(e.target.value)
            console.log(e.target.value)
        }
        <input type='text' />
 
    }
    
    const submitHandler = (e) =>{
         e.preventDefault(); 
         
         const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            location : enteredLocation,
            date : new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData); 

         setenteredTitle("") ;
         setAmount("")
         setLocation("")
         setdate("")  
    }

   



  return (
    
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text'  value={enteredTitle} name='Title' placeholder='Title' onChange={handleInput} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01'  value={enteredAmount} name='amount' placeholder='amount' onChange={handleInput} />
      </div>
      <div className='new-expense__control'>
        <label>location</label>
        <input type='text'   value={enteredLocation} name='location' placeholder='location' onChange={handleInput} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31'  value={enteredDate} name='date'  onChange={handleInput} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit' >Add Expense</button>
    </div>
  </form>
    
  )
}

export default Form