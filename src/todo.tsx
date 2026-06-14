import {useState} from 'react';
interface Task {
    text: string;
    id: number;
    completed: boolean;
}
export default function ToDo() {
    const [input, setInput] = useState<string>("");
    //every task has the same 3 variables
    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(){

        if (input.trim() === ""){
            return;
        }
        //user creating a new task
        const newTask: Task = {
            id: Date.now(),
            text: input,
            completed: false,
        };

        setTasks(prev => [...prev, newTask]);
        setInput("");
    }

    function toggleTask(id: number){
        setTasks(prev => 
            prev.map(task => 
                task.id === id
                ? {
                    ...task, completed: ! task.completed
                } : task
            )
        );
    }

    function deleteTask(id: number){
        setTasks(prev =>
            prev.filter(task => task.id !== id)

        );
    }

    return (
        <div>
            <h1> Todo List</h1>
            <input 
            type = "text"
            value = {input}
            onChange = {(e) => setInput(e.target.value)}
            placeholder = "Enter a task"
            />

            <button onClick ={addTask}>
                Add
            </button>
            
            <ul>
                {tasks.map(task => (
                    <li key ={task.id}>
                       <input
                        type = "checkbox"
                        checked = {task.completed}
                        onChange = {() => toggleTask(task.id)}
                        />

                        <span
                            style = {{
                                textDecoration: task.completed
                                ? "line-through"
                                : "none",

                            }}
                            >
                                {task.text}
                            </span>
                            <button 
                            onClick={() => deleteTask(task.id)}
                            >
                                Delete
                            </button>
                    </li>
                ))}
            </ul>
        </div>
    )





} 