import { useEffect, useState } from "react";

//Initial timer function with hours seconds and minutes I dont even wanna talk about how long this took
export function Counter() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [running]);
    
    
    const mins = Math.floor((seconds % 3600) / 60);
    const hor = Math.floor(seconds / 3600);
    const secs = seconds % 60;

    return (
        <div className="bg-black/30 backdrop-blur-md font-bold text-white rounded-2xl shadow-xl p-6">
            <h1 className="text-6xl font-mono text-center">Hours: {hor}</h1>
            <h1 className="text-6xl font-mono text-center">Minutes: {mins}</h1>
            <h1 className="text-6xl font-mono text-center">Seconds: {secs}</h1>

            <button className="bg-purple-600/50 m-4 backdrop-blur-md hover:bg-purple-600/70 text-white px-4 py-2 rounded-lg transition" onClick={() => setSeconds(0)}>
                Reset
            </button>

            <button className="bg-purple-600/50 backdrop-blur-md hover:bg-purple-600/70 text-white px-4 py-2 rounded-lg transition" onClick={() => setRunning(prev => !prev)}>
            {running ? "Pause" : "Resume"}
            </button>
        </div>
    );
}