"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ from: 'bot' | 'user', text: string, time: string }[]>([
        {
            from: "bot",
            text: "Olá! Como posso ajudar você hoje?",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState("");

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages([...messages, {
            from: 'user',
            text: inputValue,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        setInputValue("");

        setTimeout(() => {
            setMessages(prev => [...prev, {
                from: 'bot',
                text: "Entendi! Nossa equipe entrará em contato em breve.",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-end font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="bg-graphite-800 rounded-2xl shadow-2xl w-[90vw] sm:w-[350px] flex flex-col overflow-hidden border border-graphite-700 font-sans absolute right-0 bottom-20"
                    >
                        {/* Header */}
                        <div className="bg-[#5145CD] p-4 flex items-center justify-between text-white shadow-sm z-10">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[15px] tracking-wide leading-tight">Suporte N8N</h3>
                                    <p className="text-[12px] text-white/90">Online agora</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-black/20 p-1.5 rounded-full transition-colors flex-shrink-0">
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="p-4 bg-graphite-900/50 h-[300px] overflow-y-auto flex flex-col gap-4">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div className={`p-3 text-[14px] leading-relaxed max-w-[85%] shadow-sm ${msg.from === 'user'
                                            ? 'bg-[#5145CD] text-white rounded-2xl rounded-br-sm'
                                            : 'bg-graphite-800 text-text-primary border border-graphite-700 rounded-2xl rounded-tl-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                    <span className="text-[10px] text-text-secondary mt-1.5 mx-1 font-medium">{msg.time}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-graphite-800 flex flex-col gap-2 rounded-b-2xl border-t border-graphite-700">
                            <form onSubmit={handleSend} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Escreva sua mensagem..."
                                    className="flex-1 bg-graphite-900 border-transparent rounded-full px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-[#5145CD] focus:ring-1 focus:ring-[#5145CD] transition-all placeholder:text-gray-500"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="h-10 w-10 bg-[#5145CD] disabled:bg-graphite-700 disabled:cursor-not-allowed hover:bg-[#4135a8] text-white rounded-full flex gap-0 items-center justify-center transition-colors flex-shrink-0 shadow-sm"
                                >
                                    <Send className="h-4 w-4 -ml-[2px]" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button (Launcher) */}
            {!isOpen && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpen}
                    className="relative h-14 w-14 bg-[#5145CD] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#5145CD]/40 hover:bg-[#4135a8] transition-colors"
                >
                    <MessageSquare className="h-6 w-6" />
                </motion.button>
            )}
        </div>
    );
}
