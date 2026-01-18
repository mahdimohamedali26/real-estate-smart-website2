
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'يا هلا ومية هلا بيك بشركة الوكيل! أني مستشارك العقاري وبخدمتك.. شلون أكدر أساعدك اليوم بخصوص استثماراتك؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    // حفظ الرسالة وإفراغ الحقل فوراً
    const currentInput = trimmedInput;
    setInput('');
    setIsLoading(true);

    // إضافة رسالة المستخدم للواجهة
    const newHistory = [...messages];
    setMessages(prev => [...prev, { role: 'user', text: currentInput }]);

    try {
      // إرسال التاريخ (بدون الرسالة الجديدة لأنها تُرسل كبراميتر منفصل في الخدمة)
      const aiResponse = await getGeminiResponse(currentInput, newHistory);
      
      if (aiResponse) {
        setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "عذراً أستاذي، صار عندي خلل بسيط بالاتصال. جرب مرة ثانية يالغالي." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[9999] flex flex-col items-end">
      {isOpen ? (
        <div className="w-[calc(100vw-32px)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden flex flex-col mb-4 transition-all duration-300 transform scale-100 origin-bottom-right max-h-[70vh] sm:max-h-[600px]">
          <div className="bg-luxury p-4 flex justify-between items-center text-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles size={20} className="text-orange-200" />
              </div>
              <div>
                <h3 className="font-bold text-sm">مستشار الوكيل العقاري</h3>
                <p className="text-[10px] text-white/80">متصل الآن - بخدمتكم</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' ? 'bg-luxury text-white rounded-tr-none' : 'bg-white text-gray-800 border border-orange-50 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl text-sm shadow-sm flex gap-1.5 items-center border border-orange-50">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white flex gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب استفسارك هنا عيني..."
              className="flex-1 border-gray-200 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-right"
              dir="rtl"
            />
            <button onClick={handleSend} disabled={isLoading} className="bg-luxury text-white p-3 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/20">
              <Send size={20} className="rotate-180" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-luxury text-white p-4 sm:p-5 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-orange-500/40 border-2 border-white/20 animate-float"
        >
          <div className="flex flex-col items-start leading-none hidden sm:flex text-right">
            <span className="text-[10px] opacity-80 mb-1">استشر خبيرنا الآن</span>
            <span className="font-bold">مرحبا بك في الوكيل</span>
          </div>
          <MessageSquare size={28} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
