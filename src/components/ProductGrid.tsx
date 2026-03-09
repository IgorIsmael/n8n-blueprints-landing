"use client";

import React, { useState } from "react";
import { ProductCard } from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";

// Tipagem baseada nos produtos da Supabase futura
type Category = "destaques" | "ecommerce" | "industria" | "contabilidade" | "marketing" | "imobiliaria";

const categoriesList: { id: Category; label: string }[] = [
    { id: "destaques", label: "Destaques" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "industria", label: "Indústria" },
    { id: "contabilidade", label: "Contabilidade" },
];

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    integrations: string[];
    category: Category;
}

// Mock data initially
const allProducts: Product[] = [
    {
        id: "prod_1",
        name: "Automação de Atendimento WhatsApp",
        description: "Fluxo completo para triagem e atendimento automático via WhatsApp com IA, transbordo para atendente humano e integração com CRM.",
        price: 97.00,
        integrations: ["Evolution API", "OpenAI", "Chatwoot", "ActiveCampaign"],
        category: "destaques"
    },
    {
        id: "prod_2",
        name: "Qualificação de Leads Automática",
        description: "Conecte seus formulários do Facebook/Instagram Lead Ads com o n8n, enriqueça os dados e envie direto para o seu CRM e Slack.",
        price: 67.00,
        integrations: ["Meta Ads", "Clearbit", "Pipefy", "Slack"],
        category: "destaques"
    },
    {
        id: "prod_3",
        name: "Faturamento e Cobrança PIX",
        description: "Gere links de pagamento PIX automaticamente, envie por e-mail e WhatsApp, e atualize o status da venda quando o pagamento compensar.",
        price: 147.00,
        integrations: ["Mercado Pago", "Stripe", "Gmail", "WhatsApp"],
        category: "destaques"
    },
    // Simulação de produtos em outras categorias
    {
        id: "prod_ecom_1",
        name: "Recuperação de Carrinho Abandonado",
        description: "Notifica clientes no WhatsApp 15 minutos e 24 horas após abandonarem o carrinho na sua loja virtual.",
        price: 87.00,
        integrations: ["Shopify", "WooCommerce", "WhatsApp", "ActiveCampaign"],
        category: "ecommerce"
    },
    {
        id: "prod_ind_1",
        name: "Notificação de Estoque Baixo",
        description: "Alerta o setor de compras via Slack ou Teams sempre que um insumo essencial atinge a margem de segurança no ERP.",
        price: 120.00,
        integrations: ["Bling", "Omie", "Slack", "Google Sheets"],
        category: "industria"
    },
    {
        id: "prod_cont_1",
        name: "Leitura Automática de Notas Fiscais",
        description: "Processa PDFs de notas fiscais recebidas por e-mail usando IA, extrai os valores e cadastra no seu sistema financeiro.",
        price: 197.00,
        integrations: ["Gmail", "OpenAI Vision", "Conta Azul"],
        category: "contabilidade"
    }
];

export function ProductGrid() {
    const [activeCategory, setActiveCategory] = useState<Category>("destaques");

    const filteredProducts = allProducts.filter(
        (product) => product.category === activeCategory
    );

    return (
        <section className="py-24 relative" id="blueprints">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-2xl sm:text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl text-center">
                        Catálogo de Blueprints
                    </h2>
                    <p className="mt-4 text-lg text-text-secondary text-center">
                        Escolha a automação perfeita para o seu segmento. Adquira fluxos validados e focados em gerar retorno imediato.
                    </p>
                </div>

                {/* Tabs Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categoriesList.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${activeCategory === cat.id ? "text-white" : "text-text-secondary hover:text-text-primary bg-graphite-800/40 border border-graphite-700/50 hover:bg-graphite-700/50"
                                }`}
                        >
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#5145CD] rounded-full shadow-lg shadow-[#5145CD]/20"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{cat.label}</span>
                        </button>
                    ))}
                </div>

                <motion.div layout className="w-full">
                    <AnimatePresence mode="wait">
                        {filteredProducts.length > 0 ? (
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 min-h-[400px]"
                            >
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} {...product} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center justify-center p-16 text-center rounded-2xl border border-dashed border-graphite-700 bg-graphite-800/20 w-full min-h-[400px]"
                            >
                                <p className="text-text-secondary text-lg">Nenhum blueprint cadastrado nesta categoria ainda.</p>
                                <p className="text-sm text-purple-400 mt-2 font-medium">Em breve novos fluxos estarão disponíveis!</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
