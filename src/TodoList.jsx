import { set } from "mongoose";
import { useState } from "react";
export default function TodoList() {
let [todo,setTodo]=useState(["Sample Task"]);
let [newTodo,setNewTodo]=useState("");
let addnewTask=()=>{
    setTodo([...todo,newTodo]);
    setNewTodo("");
}
let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
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
        {todo.map((todo)=><li>{todo}</li>)}
    </ul>
</div>
    )
}