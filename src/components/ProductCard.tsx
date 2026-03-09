"use client";

import React, { MouseEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Download } from "lucide-react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

interface ProductProps {
    id: string;
    name: string;
    description: string;
    price: number;
    integrations: string[];
    category: string;
}

export function ProductCard({ id, name, description, price, integrations, category }: ProductProps) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative flex flex-col rounded-2xl border border-graphite-700 bg-graphite-800/40 p-6 shadow-sm transition-all hover:border-purple-500/50 hover:shadow-purple-500/10 hover:shadow-xl overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(134, 63, 240, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-text-primary">{name}</h3>
                    <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                        {description}
                    </p>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                    {integrations.map((integration) => (
                        <span
                            key={integration}
                            className="inline-flex items-center rounded-md bg-purple-500/10 px-2 py-1 text-xs font-medium text-purple-300 ring-1 ring-inset ring-purple-500/20"
                        >
                            {integration}
                        </span>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-graphite-700/50 flex flex-col h-full justify-end">
                    <div className="flex items-baseline gap-x-1">
                        <span className="text-3xl font-bold tracking-tight text-text-primary">
                            R$ {price.toFixed(2).replace('.', ',')}
                        </span>
                    </div>
                    <p className="mt-1 text-xs text-text-secondary">Acesso vitalício + Atualizações</p>

                    <ul className="mt-6 flex flex-col gap-3 text-sm text-text-secondary">
                        <li className="flex gap-x-3">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 flex-none" />
                            Arquivo JSON pronto para importar
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircle2 className="h-5 w-5 text-purple-500 flex-none" />
                            Vídeo de instruções passo a passo
                        </li>
                    </ul>

                    <Link href={`/catalogo/${category}`} className="mt-8 block w-full rounded-lg bg-white px-3 py-3 text-center text-sm font-semibold text-root shadow-sm hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
                        <span className="flex items-center justify-center gap-2">
                            Ver Detalhes <Download className="h-4 w-4" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
