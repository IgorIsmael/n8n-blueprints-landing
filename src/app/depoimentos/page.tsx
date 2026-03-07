import React from "react";
import { Star } from "lucide-react";

const depoimentos = [
    {
        nome: "Carlos Eduardo",
        empresa: "E-commerce X",
        texto: "A automação de carrinho abandonado recuperou mais de R$ 5.000,00 logo na primeira semana de uso. O blueprint estava muito fácil de entender.",
        estrelas: 5,
    },
    {
        nome: "Mariana Souza",
        empresa: "Agência MKT",
        texto: "Usar o fluxo de qualificação de leads tirou um peso enorme da nossa equipe de SDR. A integração com o Slack funciona magicamente.",
        estrelas: 5,
    },
    {
        nome: "Roberto Alves",
        empresa: "Indústria RC",
        texto: "Gostei bastante da notificação de estoque. Tivemos um pequeno problema com a nossa API legada, mas a documentação inclusa nos guiou perfeitamente.",
        estrelas: 4,
    }
];

export default function DepoimentosPage() {
    return (
        <div className="min-h-screen py-24 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-text-primary mb-4">O que dizem nossos clientes</h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Veja como empresas reais estão economizando tempo e dinheiro utilizando nossos blueprints hiper configurados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {depoimentos.map((dep, idx) => (
                        <div key={idx} className="bg-graphite-800/40 p-8 rounded-2xl border border-graphite-700/50 shadow-xl backdrop-blur-sm relative">
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-5 w-5 ${i < dep.estrelas ? "fill-purple-500 text-purple-500" : "text-graphite-600"}`}
                                    />
                                ))}
                            </div>
                            <p className="text-text-primary italic mb-8 leading-relaxed">
                                "{dep.texto}"
                            </p>
                            <div className="mt-auto">
                                <p className="font-semibold text-purple-400">{dep.nome}</p>
                                <p className="text-sm text-text-secondary">{dep.empresa}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
