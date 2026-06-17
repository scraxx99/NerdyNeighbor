export interface Env {
  GEMINI_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle browser preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Only allow POST requests
    if (request.method !== "POST") {
      return new Response("Method not allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const body = (await request.json()) as {
        question: string;
      };

      const { question } = body;

      if (
        typeof question !== "string" ||
        question.trim().length === 0
      ) {
        return new Response("Invalid question", {
          status: 400,
          headers: corsHeaders,
        });
      }

      if (question.length > 500) {
        return new Response(
          "Question too long (max 500 characters)",
          {
            status: 400,
            headers: corsHeaders,
          }
        );
      }

      const geminiResponse = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": env.GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: question,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!geminiResponse.ok) {
        const errorText = await geminiResponse.text();

        return new Response(
          `Gemini API error: ${errorText}`,
          {
            status: geminiResponse.status,
            headers: corsHeaders,
          }
        );
      }

      const data: any = await geminiResponse.json();

      const answer =
        data.candidates?.[0]?.content?.parts?.[0]?.text ??
        "No response from Gemini.";

      return Response.json(
        { answer },
        {
          headers: corsHeaders,
        }
      );
    } catch (error) {
      console.error(error);

      return new Response("Internal server error", {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};