import './expenseitem.css'

const ExpenseItem = () => {
   const date = new Date(2021 , 3 ,28);
   const expenseName = 'car insurance';
   const price = 276.3;

  return (
    <div  className='expense-item'>
        <div>{date.toDateString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseName}</h2>
            <div className='expense-item__price'>${price}</div>
        </div>
    </div>
  )
}

export default ExpenseItem







