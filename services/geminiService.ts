import { GoogleGenAI, Type } from "@google/genai";
import { AuditRequest, AuditResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateBusinessAudit = async (data: AuditRequest): Promise<AuditResponse> => {
  const prompt = `
    Act as a world-class business growth consultant (ex-McKinsey/BCG).
    Analyze a business in the "${data.industry}" industry with an annual revenue of "${data.revenueRange}".
    Their primary challenge is: "${data.primaryChallenge}".

    Provide a strategic scaling plan.
    Return the response in strict JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "A 2-sentence executive summary of the situation and opportunity."
            },
            strategies: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  impact: { type: Type.STRING, enum: ["High", "Medium", "Low"] }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AuditResponse;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate audit. Please try again.");
  }
};