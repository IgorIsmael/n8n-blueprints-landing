"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-graphite-700">
            <button
                className="flex w-full items-center justify-between py-6 text-left 
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-md"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="text-base font-semibold text-text-primary">{question}</span>
                <ChevronDown
                    className={`h-5 w-5 text-purple-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-text-secondary text-base leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

const faqs = [
    {
        question: "Como eu instalo os blueprints no meu n8n?",
        answer: "Após a compra, você fará o download de um arquivo JSON. No seu n8n, basta criar um novo workflow, clicar no botão de opções no canto superior direito e selecionar 'Import from File'. Selecione o arquivo baixado e o fluxo estará pronto para uso."
    },
    {
        question: "Preciso de conhecimento em programação?",
        answer: "Não necessariamente. Nossos blueprints são desenvolvidos para serem 'plug and play'. Você precisará apenas configurar as suas credenciais (tokens de API) nos nós indicados, conforme explicamos no vídeo de instruções."
    },
    {
        question: "Terei acesso a atualizações?",
        answer: "Sim! Ao comprar um blueprint, você tem acesso vitalício à versão adquirida e a todas as atualizações futuras e melhorias que fizermos naquele fluxo específico."
    },
    {
        question: "O blueprint funciona no n8n Cloud e no Self-Hosted?",
        answer: "Sim, os arquivos JSON são compatíveis com qualquer instância do n8n, seja na versão Cloud oficial ou se você hospedar na sua própria infraestrutura."
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
