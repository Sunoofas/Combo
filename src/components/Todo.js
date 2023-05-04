import React, {useEffect, useState} from 'react';
import './Todo.css';
import Addtask from './Addtask';
import Listtask from './Listtask';
export default function Todo(){
    
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
        document.title=`You have ${tasks.length} pending task(s)`
  });

 const addTask = (title)=>{
    const newTask =[...tasks, {title}]
    setTasks(newTask);
 };

 const deleteTask=(index)=>{
    const newTask = [...tasks]
    newTask.splice(index,1);
    setTasks(newTask)
 }

    return(
        <>
             <div className="todo-conatiner">
                
                <div className="header">TodoApp</div>
                <div className="addtask">
                     <Addtask  addTask={addTask}/>
                    </div>
                <div className="listtask">
                    {tasks.map((task, index)=>(
                         <Listtask  task={task} deleteTask={deleteTask}
                         index={index} key={index}/>
                    ))}
                    
                    </div>
             </div>
        </>
    );
};


    
   


