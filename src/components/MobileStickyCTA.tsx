"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show when scrolled past hero section (approx 400px)
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-0 left-0 right-0 z-40 p-4 lg:hidden bg-gradient-to-t from-root via-root/90 to-transparent pb-6 pt-12 pointer-events-none"
                >
                    <Link
                        href="#blueprints"
                        className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#5145CD] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#5145CD]/40 active:scale-95 transition-all"
                    >
                        Ver Blueprints
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
