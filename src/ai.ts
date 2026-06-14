import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI ({

    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askAI(question: string): Promise<string> {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: question,

    });

    return response.text ?? "No Response";
}