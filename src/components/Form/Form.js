import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const [title,setTitle] = useState();
    const [amount,setAmount] = useState();
    const [location,setLocation] = useState();
    const [date,setdate] = useState();
    
    function handleInput(e){
        if(e.target.name === "title"){
            setTitle(e.target.value)
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
  return (
    
    <form>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text'  value={title} name='title' placeholder='title' onChange={handleInput} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.01' step='0.01'  value={amount} name='amount' placeholder='amount' onChange={handleInput} />
      </div>
      <div className='new-expense__control'>
        <label>location</label>
        <input type='text'   value={location} name='location' placeholder='location' onChange={handleInput} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31'  value={date} name='date' placeholder='title' onChange={handleInput} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit' >Add Expense</button>
    </div>
  </form>
    
  )
}

export default Form