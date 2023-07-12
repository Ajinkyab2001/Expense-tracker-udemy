import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './expenseitem.css'


const ExpenseItem = (props) => {
   
  return (
    <Card >
        <div>
          <ExpenseDate date={props.date}/>
        </div>
        <div><ExpenseDetails title={props.title} location={props.location} amount = {props.amount}/></div>
           
            
        
    </Card>
  )
}

export default ExpenseItem







