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

  return (
    <div className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
         {
      filteredExpenses.map((e,i)=>{
        return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
      })
    }
    </div>
  )
}

export default Expenses