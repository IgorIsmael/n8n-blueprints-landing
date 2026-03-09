"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Settings, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { LogoCarousel } from "@/components/LogoCarousel";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 15 } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 15, delay: 0.2 } }
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Background Glows (Extra contrast area for text readability) */}
      <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl">
        <div className="h-[40rem] w-[40rem] rounded-full bg-purple-600/30 mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column - Text */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={textVariants} className="inline-flex items-center rounded-full border border-[rgba(242,122,84,0.3)] bg-[rgba(242,122,84,0.1)] px-3 py-1 text-sm font-medium text-[#F27A54] backdrop-blur-sm shadow-sm ring-1 ring-inset ring-[rgba(242,122,84,0.2)]">
              <Zap className="mr-2 h-4 w-4 text-[#F27A54]" />
              <span>Automatize processos em minutos, não dias</span>
            </motion.div>

            <motion.h1 variants={textVariants} className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-text-primary max-w-2xl leading-tight drop-shadow-sm">
              Blueprints Prontos para o seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#F27A54]">
                n8n
              </span>
            </motion.h1>

            <motion.p variants={textVariants} className="max-w-[600px] text-lg sm:text-xl text-text-secondary leading-relaxed font-light">
              Economize centenas de horas de desenvolvimento com nossos fluxos de automação hiper configurados. Baixe o JSON, importe e veja a mágica acontecer.
            </motion.p>

            <motion.div variants={textVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#blueprints" className="inline-flex items-center justify-center rounded-lg bg-[#5145CD] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#5145CD]/40 hover:bg-[#4135a8] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5145CD] transition-all group uppercase tracking-wide">
                Explorar Blueprints
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#faq" className="inline-flex items-center justify-center rounded-lg bg-graphite-800/80 px-8 py-3.5 text-sm font-semibold text-text-primary shadow-sm hover:bg-graphite-700 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-graphite-600 transition-all border border-graphite-700 backdrop-blur-md uppercase tracking-wide">
                <Settings className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" />
                Como Funciona
              </Link>
            </motion.div>

            <motion.div variants={textVariants} className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-text-secondary pb-8">
              <div className="flex -space-x-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-root bg-graphite-700 flex items-center justify-center text-xs shadow-md">
                    {"🧑‍💻"}
                  </div>
                ))}
              </div>
              <p>+500 Devs já automatizaram</p>
            </motion.div>

          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="show"
          >
            {/* Image Container matching Sieg's proportions (floating, shadow) */}
            <div className="relative w-full max-w-[700px] rounded-2xl overflow-hidden shadow-2xl shadow-[#5145CD]/20 border border-graphite-700/50 bg-graphite-800/80 backdrop-blur-sm p-4 transform translate-y-[-10px] hover:translate-y-0 transition-transform duration-500 ease-out">
              <div className="absolute top-0 left-0 w-full h-10 bg-graphite-900/50 flex items-center px-4 gap-2 border-b border-graphite-700/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              {/* Placeholder for the user's uploaded image. Tell user to save it as /workflow-preview.jpg in public */}
              <img
                src="/workflow-preview.jpg"
                alt="n8n Workflow Preview"
                className="w-full h-auto rounded-lg mt-6 bg-graphite-900 object-cover min-h-[300px]"
                onError={(e) => {
                  // Fallback if image isn't there yet
                  e.currentTarget.src = "https://via.placeholder.com/800x450/19191c/863ff0?text=Adicione+a+imagem+aqui+(/public/workflow-preview.jpg)";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carrossel Animado de Integrações na Faixa Inferior Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 border-t border-graphite-800/30 pt-8 bg-gradient-to-t from-graphite-900/50 to-transparent"
      >
        <LogoCarousel />
      </motion.div>

    </section>
  );
}
