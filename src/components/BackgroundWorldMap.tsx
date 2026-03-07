"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export function BackgroundWorldMap() {
    // Coordenadas exatas calibradas para o SVG da Wikipedia (viewBox 950x620)
    const nodes = {
        sf: { x: 140, y: 195 },     // San Francisco (West Coast)
        ny: { x: 260, y: 195 },     // New York (East Coast)
        miami: { x: 250, y: 240 },  // Miami / Florida
        mexico: { x: 190, y: 260 }, // Cidade do Mexico
        sp: { x: 315, y: 410 },     // São Paulo
        br: { x: 280, y: 360 },     // Brasil Central (Brasilia)
        london: { x: 440, y: 155 }, // London
        frankfurt: { x: 480, y: 145 }, // Frankfurt Europe
        lisboa: { x: 420, y: 180 }, // Portugal
        dubai: { x: 585, y: 240 },  // Dubai
        lagos: { x: 470, y: 320 },  // Nigeria, West Africa
        nairobi: { x: 550, y: 340 },// Kenya, East Africa
        capetown: { x: 500, y: 480 },// South Africa
        mumbai: { x: 670, y: 260 }, // India
        singapore: { x: 770, y: 320 }, // SEA
        tokyo: { x: 825, y: 200 },  // Tokyo
        sydney: { x: 840, y: 490 }, // Sydney
    };

    // Rotas aéreas "Metálicas" focadas no fluxo global passando massivamente por EUA, Brasil e África
    const connections = useMemo(() => [
        // Rotas das Americas (US e Brasil fortemente interligados ao mundo)
        { from: nodes.sf, to: nodes.ny },
        { from: nodes.ny, to: nodes.london },
        { from: nodes.miami, to: nodes.br },
        { from: nodes.mexico, to: nodes.ny },
        { from: nodes.sp, to: nodes.ny }, // Rota vertical suave (curva)

        // Rotas Saindo/Chegando ao Brasil
        { from: nodes.sp, to: nodes.capetown }, // Cone Sul para Sul da Africa
        { from: nodes.br, to: nodes.lagos },    // Nordeste BR para Africa Ocidental
        { from: nodes.sp, to: nodes.lisboa },   // BR -> Europa Latam

        // Mais rotas da África para o Mundo
        { from: nodes.capetown, to: nodes.nairobi },
        { from: nodes.lagos, to: nodes.london },
        { from: nodes.lagos, to: nodes.dubai },
        { from: nodes.nairobi, to: nodes.mumbai },
        { from: nodes.nairobi, to: nodes.dubai },

        // Rotas Eurásia e Oceania (para não ficar vazio e manter o loop do mundo)
        { from: nodes.london, to: nodes.dubai },
        { from: nodes.frankfurt, to: nodes.mumbai },
        { from: nodes.dubai, to: nodes.singapore },
        { from: nodes.mumbai, to: nodes.tokyo },
        { from: nodes.singapore, to: nodes.sydney },
        { from: nodes.tokyo, to: nodes.sydney },

        // Long Haul Horizons
        { from: nodes.ny, to: nodes.dubai },
        { from: nodes.london, to: nodes.tokyo },
        { from: nodes.sf, to: nodes.tokyo }, // Transpacific
    ], [nodes]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#040405] flex items-center justify-center">

            {/* Glows mais neutros / Azulados para combinar com a nova temática Metálica */}
            <div className="absolute top-1/2 left-1/4 w-[50%] h-[50%] bg-[#00b4d8]/5 rounded-full blur-[150px]" />
            <div className="absolute top-1/4 right-1/4 w-[30%] h-[40%] bg-[#48cae4]/5 rounded-full blur-[100px]" />

            {/* Container Principal do Mapa (Escalado e Centralizado) */}
            <div className="relative w-full max-w-7xl aspect-[2/1] opacity-70 scale-[1.3] md:scale-100 md:translate-y-8">

                {/* Mapa Pontilhado - Utilizando World SVG como Máscara sobre um Grid de Bolinhas */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "radial-gradient(circle, #0077b6 1.8px, transparent 1.8px)",
                        backgroundSize: "10px 10px",
                        backgroundPosition: "center",
                        maskImage: "url('/world.svg')",
                        WebkitMaskImage: "url('/world.svg')",
                        maskSize: "100% 100%",
                        WebkitMaskSize: "100% 100%",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        opacity: 0.45, // Brilho discreto do mapa base
                    }}
                />

                {/* Camada das Conexões - SVG animado azul metálico */}
                <svg
                    viewBox="0 0 950 620"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 w-full h-full z-10"
                >
                    {/* Renderização de Nós Brilhantes Metálicos nos países */}
                    {Object.entries(nodes).map(([key, point]) => (
                        <g key={key}>
                            {/* Halo pulsante azul claro */}
                            <circle cx={point.x} cy={point.y} r={6} fill="#00b4d8" className="opacity-40 animate-pulse" />
                            {/* Centro super luminoso metálico */}
                            <circle cx={point.x} cy={point.y} r={2.5} fill="#48cae4" />
                        </g>
                    ))}

                    {/* Linhas Arcadas Animadas de Conexão */}
                    {connections.map((conn, i) => {
                        const midX = (conn.from.x + conn.to.x) / 2;
                        // O offset do arco depende da distância pra dar uma curvatura realista
                        const distance = Math.sqrt(Math.pow(conn.from.x - conn.to.x, 2) + Math.pow(conn.from.y - conn.to.y, 2));
                        const curveHeight = distance * 0.3; // 30% da distancia como arco
                        const midY = Math.min(conn.from.y, conn.to.y) - curveHeight;

                        const path = `M ${conn.from.x} ${conn.from.y} Q ${midX} ${midY} ${conn.to.x} ${conn.to.y}`;

                        return (
                            <g key={`connection-${i}`}>
                                {/* Base da Rota invisível quase, como reflexo */}
                                <path
                                    d={path}
                                    stroke="#03045e" // Escuro profundo p/ ancoragem
                                    strokeWidth={1}
                                    strokeOpacity={0.4}
                                    fill="none"
                                />
                                {/* Laser Azul Metálico com Trail */}
                                <motion.path
                                    d={path}
                                    stroke="#00b4d8" // Azul metálico brilhante
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    fill="none"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1, 1],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{
                                        duration: 4 + Math.random() * 2, // Tempos levemente aleatórios
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: Math.random() * 3
                                    }}
                                    style={{
                                        filter: "drop-shadow(0px 0px 4px #48cae4)" // Glow metálico cyber
                                    }}
                                />
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* Overlay Gradient para sumir das bordas para o DarkMode limpo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#040405_100%)] pointer-events-none z-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040405] via-transparent to-transparent pointer-events-none z-20" />

        </div>
    );
}
