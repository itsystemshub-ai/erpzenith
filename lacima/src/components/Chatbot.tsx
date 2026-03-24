"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

interface Message {
  type: "bot" | "user";
  text?: string;
  products?: Product[];
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "Hola, soy tu asistente virtual. ¿Qué repuesto buscas hoy? (Ej: \"Radiador Toyota\")" },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages(prev => [...prev, { type: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      if (data.count > 0) {
        setMessages(prev => [
          ...prev,
          { type: "bot", text: `Encontré ${data.count} resultado(s):` },
          { type: "bot", products: data.results },
        ]);
      } else {
        setMessages(prev => [...prev, { type: "bot", text: "No encontré productos para esa búsqueda. Intenta con otra marca o modelo." }]);
      }
    } catch {
      setMessages(prev => [...prev, { type: "bot", text: "Tuve un problema buscando eso. Intenta de nuevo." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#1d9e4a] text-white shadow-lg flex items-center justify-center hover:bg-[#1d4c27] transition-colors"
        aria-label="Abrir chat"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: 460 }}>
          {/* Header */}
          <div className="bg-[#1d9e4a] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Asistente RYTDV</p>
              <p className="text-white/80 text-xs">En línea</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg, i) => (
              <div key={i}>
                {msg.text && (
                  <div className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                      msg.type === "user"
                        ? "bg-[#1d9e4a] text-white rounded-br-none"
                        : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                )}
                {msg.products && (
                  <div className="space-y-2">
                    {msg.products.map(p => (
                      <div key={p.sku} className="flex items-center gap-2 bg-white border border-gray-100 rounded-lg p-2 shadow-sm">
                        <Image src={p.image} alt={p.name} width={48} height={48}
                          className="w-12 h-12 object-cover rounded" />
                        <div>
                          <p className="text-xs font-semibold text-gray-800 leading-tight">{p.name}</p>
                          <p className="text-xs text-gray-500">{p.sku}</p>
                          <p className="text-xs text-[#1d9e4a]">{p.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-2 text-sm text-gray-500 shadow-sm">
                  Buscando...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Escribe aquí..."
              className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm outline-none focus:border-[#1d9e4a] transition-colors"
            />
            <button
              onClick={send}
              className="w-9 h-9 rounded-full bg-[#1d9e4a] text-white flex items-center justify-center hover:bg-[#1d4c27] transition-colors flex-shrink-0"
              aria-label="Enviar"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
