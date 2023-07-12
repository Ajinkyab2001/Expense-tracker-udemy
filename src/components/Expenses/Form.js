import React, { useState } from 'react'

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
           
       
    }
  return (
    <div>
        <form>
            <input type='text' value={title} name='title' placeholder='title' onChange={handleInput} />
            <input type='text' value={amount} name='amount' placeholder='amount' onChange={handleInput} />
            <input type='text' value={location} name='location' placeholder='location' onChange={handleInput} />
            <input type='date' value={date} name='date'  onChange={handleInput} />
            <button type='submit'>add expense</button>
        </form>
    </div>
  )
}

export default Form