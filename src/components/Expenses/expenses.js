import React from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

   let expensesContent = <p className='noExpense'>No expense added</p>
   let singleExpense = <p className='noExpense'>Only single Expense here. Please add more..</p>
   if(filteredExpenses.length  === 1){
    expensesContent = filteredExpenses.map((e,i)=>{
      return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
    })
   
    expensesContent = [...expensesContent, singleExpense]

   }else if(filteredExpenses.length  > 0){
    expensesContent = filteredExpenses.map((e,i)=>{
      return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
    })
   }


  return (
    <div className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    {expensesContent}

    {/* another way of checking if the list is empty or not */}
    {/* {filteredExpenses.length === 0 && <p>no expense added</p>}
    {filteredExpenses.length > 0 &&  filteredExpenses.map((e,i)=>{
        return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
      })} */}



    {/* using ternary operator to check if the list is empty */}
    {/* {
      filteredExpenses.length ===0 ? <p>No expense added</p> :  filteredExpenses.map((e,i)=>{
        return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
      })
    } */}



    {/* simple filter func */}
         {/* {
      filteredExpenses.map((e,i)=>{
        return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
      })
    } */}
    </div>
  )
}

export default Expenses