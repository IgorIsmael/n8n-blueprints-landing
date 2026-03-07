"use client";

import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, PlayCircle, FileText, CheckCircle2, Download } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

// Using the same mocked data structure to filter by category
type Category = "destaques" | "ecommerce" | "industria" | "contabilidade" | "marketing" | "imobiliaria";

const categoriesMap: Record<Category, string> = {
    destaques: "Principais (Destaques)",
    ecommerce: "E-commerce",
    industria: "Indústrias",
    contabilidade: "Contabilidade",
    marketing: "Agências & Marketing",
    imobiliaria: "Imobiliárias",
};

const allProducts = [
    {
        id: "prod_1",
        name: "Automação de Atendimento WhatsApp",
        description: "Fluxo completo para triagem e atendimento automático via WhatsApp com IA, transbordo para atendente humano e integração com CRM.",
        price: 97.00,
        integrations: ["Evolution API", "OpenAI", "Chatwoot", "ActiveCampaign"],
        category: "destaques",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemplo genérico
        docUrl: "#",
        features: [
            "Integração instantânea com Evolution API",
            "Triagem inteligente com ChatGPT 4o",
            "Envio de dados formatados para CRM",
            "Transbordo de atendimento configurado"
        ]
    },
    {
        id: "prod_2",
        name: "Qualificação de Leads Automática",
        description: "Conecte seus formulários do Facebook/Instagram Lead Ads com o n8n, enriqueça os dados e envie direto para o seu CRM e Slack.",
        price: 67.00,
        integrations: ["Meta Ads", "Clearbit", "Pipefy", "Slack"],
        category: "destaques",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        docUrl: "#",
        features: [
            "Captura em tempo real do Lead Ads",
            "Notificação rápida no Slack ou Teams",
            "Criação automática de card no CRM",
            "Filtro de qualificação inicial"
        ]
    },
    {
        id: "prod_3",
        name: "Faturamento e Cobrança PIX",
        description: "Gere links de pagamento PIX automaticamente, envie por e-mail e WhatsApp, e atualize o status da venda quando o pagamento compensar.",
        price: 147.00,
        integrations: ["Mercado Pago", "Stripe", "Gmail", "WhatsApp"],
        category: "destaques",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        docUrl: "#",
        features: [
            "Geração de PIX dinâmico (Mercado Pago)",
            "Disparo no WhatsApp da fatura",
            "Autenticação de webhook de pagamento",
            "Atualização de planilha de pagamentos"
        ]
    },
    {
        id: "prod_ecom_1",
        name: "Recuperação de Carrinho Abandonado",
        description: "Notifica clientes no WhatsApp 15 minutos e 24 horas após abandonarem o carrinho na sua loja virtual.",
        price: 87.00,
        integrations: ["Shopify", "WooCommerce", "WhatsApp", "ActiveCampaign"],
        category: "ecommerce",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        docUrl: "#",
        features: [
            "Delay cronometrado de 15min e 1 dia no n8n",
            "Conexão via webhook com sua plataforma",
            "Geração de link para checkout customizado"
        ]
    },
    {
        id: "prod_ind_1",
        name: "Notificação de Estoque Baixo",
        description: "Alerta o setor de compras via Slack ou Teams sempre que um insumo essencial atinge a margem de segurança no ERP.",
        price: 120.00,
        integrations: ["Bling", "Omie", "Slack", "Google Sheets"],
        category: "industria",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        docUrl: "#",
        features: [
            "Leitura recorrente do ERP",
            "Lógica de avaliação de margem mínima",
            "Notificação no canal da equipe"
        ]
    },
    {
        id: "prod_cont_1",
        name: "Leitura Automática de Notas Fiscais",
        description: "Processa PDFs de notas fiscais recebidas por e-mail usando IA, extrai os valores e cadastra no seu sistema financeiro.",
        price: 197.00,
        integrations: ["Gmail", "OpenAI Vision", "Conta Azul"],
        category: "contabilidade",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        docUrl: "#",
        features: [
            "Monitoramento da caixa de entrada",
            "Parser de PDF usando OCR/Visão Computacional",
            "Inserção padronizada via API"
        ]
    }
];

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const categoryName = categoriesMap[id as Category] || "Categoria Desconhecida";
    const filteredProducts = allProducts.filter((product) => product.category === id);

    return (
        <div className="min-h-screen py-12 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <Link href="/" className="inline-flex items-center text-sm text-text-secondary hover:text-purple-400 transition-colors mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para Home
                </Link>

                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-text-primary">
                        Blueprints para <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">{categoryName}</span>
                    </h1>
                    <p className="mt-4 text-lg text-text-secondary max-w-2xl">
                        Explore as automações desenhadas especificamente para resolver os maiores gargalos de tempo no seu segmento.
                    </p>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="space-y-16">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="bg-graphite-800/30 border border-graphite-700/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">

                                {/* Product Header & Info */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-graphite-700/50">
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <h2 className="text-2xl font-bold text-text-primary mb-4">{product.name}</h2>
                                        <p className="text-text-secondary mb-8 leading-relaxed">
                                            {product.description}
                                        </p>

                                        <div className="mb-8 flex flex-wrap gap-2">
                                            {product.integrations.map((integration) => (
                                                <span key={integration} className="inline-flex items-center rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-medium text-purple-300 ring-1 ring-inset ring-purple-500/20">
                                                    {integration}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto space-y-4">
                                            {product.features?.map((feature, idx) => (
                                                <li key={idx} className="flex gap-x-3 text-sm text-text-primary items-center">
                                                    <CheckCircle2 className="h-5 w-5 text-purple-500 flex-none" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </div>

                                        <div className="mt-10 flex items-center gap-6">
                                            <div className="text-3xl font-bold text-text-primary">
                                                R$ {product.price.toFixed(2).replace('.', ',')}
                                            </div>
                                            <Link href={`/checkout/${product.id}`} className="flex-1 inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                                Comprar Agora
                                                <Download className="ml-2 h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Media Content (Video & Docs) */}
                                    <div className="bg-graphite-900/50 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-graphite-700/50 flex flex-col items-center justify-center">

                                        <div className="w-full aspect-video rounded-xl overflow-hidden border border-graphite-700/50 bg-black relative group mb-6 shadow-xl">
                                            <iframe
                                                className="w-full h-full"
                                                src={product.videoUrl}
                                                title="Demonstração do Blueprint"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>

                                        <div className="bg-graphite-800/80 rounded-xl p-6 border border-graphite-700/50 w-full">
                                            <h4 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                                                <FileText className="h-4 w-4 text-purple-400" />
                                                Documentação Inclusa
                                            </h4>
                                            <p className="text-sm text-text-secondary mb-4">
                                                Acesso completo ao manual passo a passo de como configurar as credenciais e importar o arquivo no seu n8n.
                                            </p>
                                            <button className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1">
                                                Ver amostra do documento <ArrowLeft className="h-4 w-4 rotate-180" />
                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center rounded-3xl border border-dashed border-graphite-700 bg-graphite-800/10">
                        <p className="text-xl text-text-secondary mb-2">Nenhum fluxo encontrado em "{categoryName}".</p>
                        <p className="text-purple-400">Em breve adicionaremos novos blueprints para esta categoria!</p>
                    </div>
                )}

            </div>
        </div>
    );
}
