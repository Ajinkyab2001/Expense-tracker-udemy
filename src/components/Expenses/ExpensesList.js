import React from 'react'
import './ExpensesList.css'

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

//  let expensesContent = <p className='noExpense'>No expense added</p>
  //  let singleExpense = <p className='noExpense'>Only single Expense here. Please add more..</p>
  //  if(filteredExpenses.length  === 1){
  //   expensesContent = filteredExpenses.map((e,i)=>{
  //     return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
  //   })
   
  //   expensesContent = [...expensesContent, singleExpense]

  //  }else if(filteredExpenses.length  > 0){
  //   expensesContent = filteredExpenses.map((e,i)=>{
  //     return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
  //   })
  //  }




    let expensesContent ;
    let singleExpense = <p className='noExpense'>Only single Expense here. Please add more..</p>
    // let singleExpense = [{
    //     title : "Only single Expense here. Please add more..",
    //     id : new Date().getTime()
    // }]

    // let singleExpense = <ExpenseItem title ='Only single Expense here. Please add more..' id = {new Date().getTime()} />

    // let singleExpense = 
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }else if(props.items.length  === 1){
    expensesContent = props.items.map((e,i)=>{
      return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
    })
   
    expensesContent = [...expensesContent, singleExpense]

    // return (
    //     expensesContent = props.items.map((e,i)=>{
    //   return <>
    //   <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
    //   <h2 className='expenses-list__fallback'>Only single Expense here. Please add more...</h2>
    //   </>
    // })
    // )

   }else if(props.items.length  > 0){
    expensesContent = props.items.map((e,i)=>{
      return <ExpenseItem key={e.id} id={e.id} title={e.title} amount={e.amount} date={e.date} location={e.location} />
    })
   }

  return (
    <ul className='expenses-list'>
      
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
    </ul>
  );
};

export default ExpensesList;