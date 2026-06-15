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
        <div className='bg-white rounded 2x1 shadow-lg p-6'>
            <h1 className='font-mono font-bold'>Hours: {hor}</h1>
            <h1 className='font-mono font-bold'>Minutes: {mins}</h1>
            <h1 className='font-mono font-bold'>Seconds: {secs}</h1>

            <button className='font-mono font-bold p-4' onClick={() => setSeconds(0)}>
                Reset
            </button>

            <button className='font-mono font-bold p-4' onClick={() => setRunning(prev => !prev)}>
            {running ? "Pause" : "Resume"}
            </button>
        </div>
    );
}