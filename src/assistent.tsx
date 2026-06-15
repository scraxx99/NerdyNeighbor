import { useState } from "react";
import { askAI } from "./ai";

export default function Assistant() {
    const [input, setInput] = useState<string>("");
    const [answer, setAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    async function askQuestion() {
        if (input.trim() === "") {
            return;
        }

        setLoading(true);

        try {
            const response = await askAI(input);
            setAnswer(response);
            setInput("");
        } catch (error) {
            console.error(error);
            setAnswer("An error occurred while   contacting Gemini.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='bg-white rounded 2x1 shadow-lg p-6'>
            <h1 className=' font-mono font-bold'>AI Help</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Gemini"
            />

            <button className=' font-mono font-bold'
                onClick={askQuestion}
                disabled={loading}
            >
                {loading ? "Thinking..." : "Ask"}
            </button>

            <h2 className=' font-mono font-bold'>Answer</h2>
            <p className=' font-mono font-bold'>{answer}</p>
        </div>
    );
}