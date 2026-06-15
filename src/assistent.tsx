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
    //className='bg-cyan-500 rounded 2x1 shadow-lg p-6'
    return (
        <div className='bg-black/30 backdrop-blur-md text-white rounded-2xl shadow-xl p-6'>
            <h1 className=' font-mono font-bold'>AI Help</h1>
            <form>
            <input className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Gemini"
            />

            <button className="bg-purple-600/50 backdrop-blur-md font-bold hover:bg-purple-600/70 text-white px-4 py-2 rounded-lg transition"
                onClick={askQuestion}
                disabled={loading}
            >
                {loading ? "Thinking..." : "Ask"}
            </button>
            </form>
            <h2 className=' font-mono font-bold'>Answer</h2>
            <p className=' font-mono font-bold'>{answer}</p>
        </div>
    );
}