
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
let [todo,setTodo]=useState([{task:"Sample Task",id:uuidv4(),isDone:false}]);
let [newTodo,setNewTodo]=useState("");
let addnewTask=()=>{
    setTodo((prevTodo)=>[...prevTodo,{task:newTodo,id:uuidv4(),isDone:false}]);
    setNewTodo("");
}
let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
}
let deleteTask=(id)=>{
  setTodo(todo.filter((todo)=>todo.id!=id));
};
let uppercaseAll=()=>{
    setTodo(todo.map((todo)=>({task:todo.task.toUpperCase(),id:todo.id})));
}
// let UppercaseOne=(id)=>{
//     setTodo(todo.map((todo)=>todo.id===id?{task:todo.task.toUpperCase(),id:todo.id}:todo));
// }
let MarkAsDone=(id)=>{
    setTodo(todo.map((todo)=>todo.id===id?{task:todo.task,id:todo.id,isDone:true}:todo));
}
    return(
<div>
    <input type="text" placeholder="Add task" value={newTodo} onChange={updateTodoValue}/>
    <br></br>
    <button onClick={addnewTask}>Add</button>
    <br></br><br></br><br></br>
    <hr></hr>

    <h4>Tasks Todo</h4>
    <ul>
        {todo.map((todo)=><li key={todo.id}><span>{todo.task}</span>
        &nbsp;&nbsp;
        <button onClick={()=>deleteTask(todo.id)}>Delete</button>
        <button onClick={()=>MarkAsDone(todo.id)}>Mark As Done</button>
        </li>)}

       <br>
       </br>
       <button onClick={uppercaseAll}>Uppercase All Tasks</button>
    </ul>
</div>
    )
}