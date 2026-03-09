"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-graphite-700 overflow-hidden">
            <button
                className="flex w-full items-center justify-between py-6 text-left 
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md group"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-base font-semibold text-text-primary group-hover:text-purple-400 transition-colors">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="h-5 w-5 text-purple-400" />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p className="text-text-secondary text-base leading-relaxed pb-6 pr-8">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const faqs = [
    {
        question: "Preciso ter meu próprio servidor ou entender de programação?",
        answer: "Não! Nós cuidamos de toda a infraestrutura técnica. Você não precisa contratar servidores na Amazon ou DigitalOcean, nem saber programar. Nós subimos uma instância exclusiva para você em uma VPS otimizada (via Docker), garantindo que sua automação rode de forma estável, rápida e sem dores de cabeça."
    },
    {
        question: "Como funciona o processo de implantação após a compra?",
        answer: "Assim que o pagamento é confirmado, agendamos uma Reunião de Briefing. Nela, entendemos o seu processo atual e pegamos os acessos/tokens necessários (como seu número de WhatsApp, acessos de CRM, etc). Depois da reunião, nossa equipe faz toda a configuração e implantação no servidor. Você recebe tudo pronto, rodando!"
    },
    {
        question: "Meus dados ficam misturados com os de outros clientes?",
        answer: "Definitivamente não. Levamos a segurança e a privacidade a sério. Cada cliente recebe um ambiente isolado em nosso servidor. As suas contas, seus fluxos no n8n e os dados dos seus clientes nunca se misturam com os de outras empresas."
    },
    {
        question: "Terei acesso a atualizações e suporte?",
        answer: "Sim! Como nós gerenciamos o ambiente para você, garantimos que sua instância do n8n esteja sempre atualizada e segura. Além disso, você tem suporte direto com nossa equipe caso alguma automação pare de funcionar por mudanças em APIs externas."
    }
];

export function FAQ() {
    return (
        <section className="py-24" id="faq">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                            Perguntas Frequentes
                        </h2>
                        <p className="mt-4 text-lg text-text-secondary">
                            Tudo o que você precisa saber antes de automatizar sua operação.
                        </p>
                    </div>

                    <div className="mt-8 rounded-2xl bg-graphite-800/20 p-6 sm:p-8 backdrop-blur-sm border border-graphite-700/50">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
