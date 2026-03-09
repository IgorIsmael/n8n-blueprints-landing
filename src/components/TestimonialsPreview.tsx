"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Carlos Eduardo",
        role: "Agência de Performance",
        content: "Os blueprints de qualificação de leads salvaram a nossa operação. Implementamos em 15 minutos.",
        avatar: "CE"
    },
    {
        name: "Mariana Silva",
        role: "E-commerce Manager",
        content: "A automação de carrinho abandonado com faturamento PIX aumentou nossa conversão em 30% já no primeiro mês.",
        avatar: "MS"
    },
    {
        name: "Roberto Almeida",
        role: "Consultor de Vendas",
        content: "Não sei programar quase nada, mas o vídeo passo a passo e o JSON pronto me fizeram parecer um dev sênior.",
        avatar: "RA"
    }
];

export function TestimonialsPreview() {
    return (
        <section className="py-24 relative bg-graphite-900/40 border-y border-graphite-800/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl text-center">Eles Confiam na Nossa Metodologia</h2>
                    <p className="mt-4 text-lg text-text-secondary text-center">Pessoas reais gerando resultados reais com n8n.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-graphite-800/30 p-8 rounded-2xl border border-graphite-700/50 flex flex-col hover:border-purple-500/30 transition-colors"
                        >
                            <div className="flex text-yellow-500 mb-6 gap-1">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-text-secondary mb-8 flex-1 italic leading-relaxed">"{t.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-lg border border-purple-500/30">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-text-primary text-sm">{t.name}</h4>
                                    <span className="text-xs text-text-secondary">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
