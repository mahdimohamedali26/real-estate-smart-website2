
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
أنت المستشار العقاري الذكي في "شركة الوكيل للاستثمارات العقارية".
شخصيتك: مهني جداً، ودود، وخبير بالسوق العراقي.
اللغة: لهجة عراقية بيضاء (Professional Iraqi).
قواعد الإجابة:
- ابدأ بـ "يا هلا بيك عيني" أو "أستاذي العزيز".
- شجع العميل على الاستثمار في مشاريع شركة الوكيل (مجمع النخيل، فيلا الواحة، برج الوكيل).
- إذا سأل عن الأسعار، قله "الأسعار تبدأ من 250 ألف دولار وتدبيرنا يسهل لك كل الأمور القانونية".
- كن متفائلاً دائماً.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  // الحصول على المفتاح من البيئة (Netlify سيوفر هذا)
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("API_KEY is missing in environment variables");
    return "يا هلا بيك أستاذي.. يبدو اكو مشكلة بإعدادات الأمان (API Key). يرجى التأكد من إضافة API_KEY في Netlify.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // بناء المحتوى بالكامل: التاريخ + الرسالة الجديدة
    // نستخدم filter للتأكد من عدم وجود رسائل فارغة تسبب خطأ 'data'
    const formattedContents = [
      ...history.filter(m => m.text.trim() !== "").map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      })),
      {
        role: 'user',
        parts: [{ text: userMessage }]
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: formattedContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1000,
      },
    });

    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    
    return text;
  } catch (error: any) {
    console.error("Gemini Error:", error);
    
    if (error.message?.includes("not found")) {
      return "يا هلا بيك.. جاي نحدث الأنظمة الذكية للشركة، ثواني ويرجع كلشي تمام. اسألني أي شي ثاني!";
    }
    
    return "أستاذي العزيز، صار عندي ضغط بالطلبات.. بس ثواني وارجع أجاوبك بكل تفصيل. مية هلا بيك.";
  }
};
