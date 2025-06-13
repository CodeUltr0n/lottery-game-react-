import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {

    let [todos,setTodo]= useState([{task:"sample-task",id:uuidv4(),isdone:false}]);
    let [newtodo,setNewtodo]= useState("");

    let addnewtask = ()=>{
       setTodo((prevtodos) => {
        return [...prevtodos,{task:newtodo,id:uuidv4(),isdone:false}]; //---> destructring arrays and add new array
       });
       setNewtodo("");
    }

    let updatetasks=(event)=>{
    //   console.log(event.target.value);
      setNewtodo(event.target.value);

    }

    let deletetasks=(id)=>{
     setTodo((prevtodos)=> prevtodos.filter((todos)=> todos.id!= id));
    }

    
    let markasdoneall = () => {
    setTodo((prevtodos) =>
    prevtodos.map((todo) => ({
      ...todo,
      isdone: true
    }))
      );
    };


  let markasdone = (id)=>{
    setTodo((prevtodos)=>prevtodos.map((todo)=>{
        if (todo.id == id) {
            return{  ...todo,
            isdone: true
        }
        } else {
            return todo;
        }
    }))
  }


  return (
    <div>
      <input placeholder="add a task" value={newtodo} onChange={updatetasks}/>
      <button onClick={addnewtask}>Add a Task</button>
      <br />
      <br></br>

      <hr></hr>
      <h4>Tasks-to-do</h4>
      <ul>
        {
            todos.map((todo)=>(
                <li key={todo.id}>
                 <span style={todo.isdone ? {textDecorationLine:"line-through"}
                 : {}
                 }>{todo.task}</span>
                 &nbsp;&nbsp;
                 <button onClick={() => deletetasks(todo.id)}>delete</button>&nbsp;
                 <button onClick={() => markasdone(todo.id)}>Mark As Done</button>

                </li>
            ))
        }
      </ul>
      <br></br>
      <button onClick={markasdoneall}>Markasdone_All</button>
    </div>
  );
}