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
        <div>
            <h1>Todo List</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a task"
            />

            <button onClick={addTask}>
                Add
            </button>

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