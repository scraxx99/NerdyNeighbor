import { useEffect, useState } from "react";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

export default function Todo() {
    const [input, setInput] = useState<string>("");

    // Load tasks from localStorage when the component is created
    const [tasks, setTasks] = useState<Task[]>(() => {
        const savedTasks = localStorage.getItem("tasks");

        if (savedTasks) {
            return JSON.parse(savedTasks);
        }

        return [];
    });

    // Save tasks whenever they change
    useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );
    }, [tasks]);

    function addTask() {
        if (input.trim() === "") {
            return;
        }

        const newTask: Task = {
            id: Date.now(),
            text: input,
            completed: false,
        };

        setTasks(prev => [...prev, newTask]);
        setInput("");
    }

    function toggleTask(id: number) {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? {
                          ...task,
                          completed: !task.completed,
                      }
                    : task
            )
        );
    }

    function deleteTask(id: number) {
        setTasks(prev =>
            prev.filter(task => task.id !== id)
        );
    }

    return (
        <div className="bg-black/30 backdrop-blur-md text-white rounded-2xl shadow-xl p-6">
            <h1 className=' font-mono font-bold'>Todo List</h1>
            <form
             onSubmit={(e) => {
            e.preventDefault();
            addTask();
            }}
            className="flex gap-2"
            >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
                className="flex-1 p-3 border rounded-xl"
            />

            <button  
            type="submit"
            className="bg-purple-600/50 backdrop-blur-md font-bold hover:bg-purple-600/70 text-white px-4 py-2 rounded-lg transition"
            onClick={addTask}
            >
                Add
            </button>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() =>
                                toggleTask(task.id)
                            }
                        />

                        <span
                            style={{
                                textDecoration:
                                    task.completed
                                        ? "line-through"
                                        : "none",
                                marginLeft: "8px",
                                marginRight: "8px",
                            }}
                        >
                            {task.text}
                        </span>

                        <button
                        className="bg-purple-600/50 backdrop-blur-md hover:bg-red-600/70 text-white px-4 py-2 rounded-lg transition"
                            onClick={() =>
                                deleteTask(task.id)
                            }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}