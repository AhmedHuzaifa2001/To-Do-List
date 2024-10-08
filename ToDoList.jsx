import React , {useState} from "react"

function ToDoList(){

const [tasks , setTasks] = useState([]);
const [newTasks , setNewTasks] = useState(""); 

function handleinputchange(event) {

    setNewTasks(event.target.value);
}

function addTask(){
   
    if (newTasks.trim() !== "") {
        setTasks( t => [...tasks , newTasks]);
        setNewTasks("");
    }
    
}

function deletetask(index){

    const updatedTasks = tasks.filter((element , i) => i !== index);
    setTasks(updatedTasks);
}

function movetaskup(index){

    if(index > 0){
    const updatedTasks = [...tasks];
    [updatedTasks[index] , updatedTasks[index - 1]] = [updatedTasks[index - 1] , updatedTasks[index]];
    setTasks(updatedTasks);
    }
}

function movetaskdown(index){
    
    
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index] , updatedTasks[index + 1]] = [updatedTasks[index + 1] , updatedTasks[index]];
        setTasks(updatedTasks);

    }
}


    return(
   <div className="todolist-grid">
    <h1>ToDo List</h1>
    <div>
        <input type="text" placeholder="Enter a Task" 
        value={newTasks} onChange={handleinputchange}>
        </input>
        <button className="addTask" onClick={addTask}>
            ADD</button>
    </div>
    <ol>
       {tasks.map((tasks , index) => 
        <li key={index}>
           <span className="text"> {tasks} </span> 
           <button className="delete" onClick={() => deletetask(index)}>
            Delete</button>

            <button className="move-up" onClick={() => movetaskup(index)}>
            UP</button>

            <button className="move-down" onClick={() => movetaskdown(index)}>
            Down</button>
            </li>
    )}
    </ol>
    </div>
    

);

}

export default ToDoList