import React from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };
  return (
    <div>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
         {
      props.expenses.map((e,i)=>{
        return <ExpenseItem key={i} id={i} title={e.title} amount={e.amount} date={e.date} location={e.location} />
      })
    }
    </div>
  )
}

export default Expenses