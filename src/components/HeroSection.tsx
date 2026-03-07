"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Settings, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { LogoCarousel } from "@/components/LogoCarousel";

export function HeroSection() {
  // Variantes de animação para stagger (efeito cascata)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 12 } }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Background Glows (Extra contrast area for text readability) */}
      <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl">
        <div className="h-[40rem] w-[40rem] rounded-full bg-purple-600/30 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

          <motion.div variants={itemVariants} className="inline-flex items-center rounded-full border border-[rgba(242,122,84,0.3)] bg-[rgba(242,122,84,0.1)] px-3 py-1 text-sm font-medium text-[#F27A54] backdrop-blur-sm shadow-sm ring-1 ring-inset ring-[rgba(242,122,84,0.2)]">
            <Zap className="mr-2 h-4 w-4 text-[#F27A54]" />
            <span>Automatize processos em minutos, não dias</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-text-primary max-w-4xl mx-auto leading-tight drop-shadow-sm">
            Blueprints Prontos para o seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#F27A54]">
              n8n
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto max-w-[700px] text-lg sm:text-xl text-text-secondary leading-relaxed font-light">
            Economize centenas de horas de desenvolvimento com nossos fluxos de automação hiper configurados. Baixe o JSON, importe e veja a mágica acontecer.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="#blueprints" className="inline-flex items-center justify-center rounded-lg bg-[#5145CD] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#5145CD]/40 hover:bg-[#4135a8] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5145CD] transition-all group uppercase tracking-wide">
              Explorar Blueprints
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#faq" className="inline-flex items-center justify-center rounded-lg bg-graphite-800/80 px-8 py-3.5 text-sm font-semibold text-text-primary shadow-sm hover:bg-graphite-700 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-graphite-600 transition-all border border-graphite-700 backdrop-blur-md uppercase tracking-wide">
              <Settings className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
              Como Funciona
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 flex items-center gap-6 text-sm text-text-secondary pb-8">
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-root bg-graphite-700 flex items-center justify-center text-xs shadow-md">
                  {"🧑‍💻"}
                </div>
              ))}
            </div>
            <p>+500 Devs já automatizaram negócios</p>
          </motion.div>

        </motion.div>
      </div>

      {/* Carrossel Animado de Integrações na Faixa Inferior Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8"
      >
        <LogoCarousel />
      </motion.div>

    </section>
  );
}
