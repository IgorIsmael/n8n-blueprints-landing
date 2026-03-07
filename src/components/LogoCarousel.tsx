"use client";

import React from "react";
import { motion } from "framer-motion";

// Um mock array de nomes de softwares para simular as integrações que passam na página
const integrações = [
    "WhatsApp", "Evolution API", "Mercado Pago", "Stripe",
    "ChatGPT", "Claude", "Slack", "Bling ERP", "Shopify",
    "WooCommerce", "Gmail", "Pipefy", "ActiveCampaign", "ContaAzul"
];

// Duplicar a array para dar o efeito de loop infinito suave (Seamless Carrossel)
const logosInfinite = [...integrações, ...integrações];

export function LogoCarousel() {
    return (
        <div className="w-full overflow-hidden bg-graphite-900/30 border-y border-graphite-800/50 py-8 relative">

            {/* Sombras laterais para dar aquele efeito de 'fading' nas bordas */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0314] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0314] to-transparent z-10 pointer-events-none" />

            <p className="text-center text-sm font-semibold text-[#5145CD] uppercase tracking-widest mb-6">Integre 100+ plataformas nativamente</p>

            <div className="flex w-[200%] md:w-[150%] animate-marquee pause-on-hover px-4">
                {logosInfinite.map((logo, idx) => (
                    <div
                        key={idx}
                        className="flex-1 flex justify-center items-center min-w-[max-content] mx-6"
                    >
                        {/* Como nao temos as imagens das logos, criamos um placeholder atraente */}
                        <div className="px-6 py-3 rounded-lg bg-graphite-800/40 border border-graphite-700/50 backdrop-blur-md text-text-secondary font-medium tracking-wide hover:border-purple-500/50 hover:text-white hover:scale-105 transition-all cursor-crosshair shadow-lg">
                            {logo}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
