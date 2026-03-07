import React from "react";
import { Mail } from "lucide-react";

export default function ContatoPage() {
    return (
        <div className="min-h-screen py-24 px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-text-primary mb-6">Entre em Contato</h1>
                <p className="text-lg text-text-secondary mb-12">
                    Tem alguma dúvida específica ou precisa de um blueprint sob medida?
                </p>

                <div className="bg-graphite-800/40 border border-graphite-700/50 rounded-2xl p-8 flex flex-col items-center">
                    <div className="h-16 w-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                        <Mail className="h-8 w-8 text-purple-400" />
                    </div>
                    <h2 className="text-xl font-semibold text-text-primary mb-2">Suporte por Email</h2>
                    <p className="text-text-secondary mb-6">suporte@n8nblueprints.com</p>
                    <button className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                        Enviar Mensagem
                    </button>
                </div>
            </div>
        </div>
    );
}
