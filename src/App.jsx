import Ludoboard from './ludoboard'
import Todolist from './todolist'
import './App.css'
import Lottery from './lottery'
import Ticketnum from './ticketnum'
import Ticket from './ticket'
import { sum } from './helper'
import Form from './Form'
import CommentsForm from './commentsform'
import Comment from './comments'
import Counter from './counter'
import Joker from './joker'


function App() {
 

  let winCondition=(ticket)=>{
    return sum(ticket) === 15;
  }


  return <>

   {/* <Todolist/> */}
  {/* <Ludoboard/> */}
  <Lottery n={4} winCondition={winCondition}/>
  {/* <Ticket ticket={[1, 0, 3]} />
   <Ticket ticket={[9,0,5,3]} /> */}

   {/* <Form/> */}

   
   {/* < Comment/> */}
   {/* <Counter/> */}
   {/* <Joker/> */}
   
  </>
}

export default App
