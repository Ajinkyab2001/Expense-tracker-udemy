
import { useState } from 'react';
import './App.css';

import NewExpense from './components/Form/NewExpense';
import Expenses from './components/Expenses/expenses';


const App = () => {
  // const expenses = [
  //   {
  //     id: 'e1',
  //     title: 'Toilet Paper',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  //     location : "mumbai",
  //   },
  //   { id: 'e2',
  //    title: 'New TV',
  //     amount: 799.49,
  //      date: new Date(2021, 2, 12),
  //      location : "pune",
  //      },
       
  //   {
  //     id: 'e3',
  //     title: 'Car Insurance',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //     location : "hyderabad",
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New Desk (Wooden)',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //     location : "banglore",
  //   },
  // ];
    const [expenses,setExpenses] = useState([])


     const addExpenseHandler = expense =>{
      console.log(expenses)
      setExpenses((prevExpenses) => {
        return [...prevExpenses, expense];
      });
      
     }
  return (
    <div>
    <div>
       <NewExpense onAddExpense = {addExpenseHandler}/>
    </div>
    <div className="App">
        <Expenses items={expenses} />
    
    </div>
    </div>
  );
}

export default App;
