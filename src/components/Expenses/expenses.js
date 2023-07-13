import React from 'react'
// import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import './Expenses.css'
import ExpensesList from './ExpensesList'

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

    <ExpensesList items = {filteredExpenses} />
    {/* {expensesContent} */}

   
    </div>
  )
}

export default Expenses