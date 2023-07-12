import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './expenseitem.css'


const ExpenseItem = (props) => {
   const clickhandler = () =>{
    const element = document.getElementById(props.id);
  
      element.remove();
    
   }
  return (
    <div id={props.id} className='expense-item'>
    <Card >
    
        <div >
          <ExpenseDate date={props.date}/>
        </div>
        <div><ExpenseDetails title={props.title} location={props.location} amount = {props.amount}/></div>
        <div>
          <button onClick={clickhandler}>delete</button>
        </div>
        
           
            
        
    </Card>
    </div>
  )
}

export default ExpenseItem







