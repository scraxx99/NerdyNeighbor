import {useEffect, useState} from 'react';
//Basic timer that counts need to figuire out how to convert seconds into minutes, hours, etc.

    export function Counter(){
        const [count, setCount] = useState<number>(0);        

        useEffect(() => {
            const interval = setInterval(() => {
                setCount(prev => prev + 1);
            
            },1000);
            
            return() => clearInterval(interval);

        },[]);
       return (<div><h1>{count}</h1>
       <button onClick={() => setCount (0)}> Reset</button></div>);     
    }
    
   
    
    
