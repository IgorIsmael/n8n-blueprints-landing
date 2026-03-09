"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export function Topbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [catalogOpen, setCatalogOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobile = () => setMobileOpen(false);

    // Link components for reusability and styling consistency
    const NavLink = ({ href, children, isSpecial = false }: { href: string; children: React.ReactNode; isSpecial?: boolean }) => {
        const isActive = pathname === href;
        return (
            <Link
                href={href}
                onClick={closeMobile}
                className={`font-semibold text-[15px] transition-colors ${isSpecial
                    ? "text-[#F27A54] hover:text-[#d96644]"
                    : isActive
                        ? "text-[#5145CD]"
                        : "text-[#333333] hover:text-[#5145CD]"
                    }`}
            >
                {children}
            </Link>
        );
    };

    const isHomePage = pathname === '/';

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md border-b border-gray-100 py-4" : "bg-white py-5 lg:py-6"
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">

                    {/* Logo Area */}
                    <Link href="/" className="flex flex-col items-start gap-0.5 z-50" onClick={closeMobile}>
                        <div className="text-2xl font-extrabold tracking-tight text-[#0a0314] flex items-center gap-1">
                            <span className="text-[#5145CD] text-3xl">n8n</span>
                        </div>
                        <span className="text-[10px] font-bold text-[#5145CD] uppercase tracking-wider">Blueprints Estratégicos</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <NavLink href="/sobre">Conheça a Plataforma</NavLink>

                        {/* Dropdown Catálogo */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setCatalogOpen(true)}
                            onMouseLeave={() => setCatalogOpen(false)}
                        >
                            <button className={`flex items-center gap-1 font-semibold text-[15px] transition-colors py-2 ${pathname.includes('/catalogo') ? "text-[#5145CD]" : "text-[#333333] group-hover:text-[#5145CD]"
                                }`}>
                                Catálogo de Automações
                                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${catalogOpen ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Menu (Sieg Blue background style) */}
                            <div
                                className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${catalogOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible 10px"
                                    }`}
                            >
                                <div className="bg-[#0b0f24] text-white rounded-lg shadow-2xl p-4 w-56 flex flex-col gap-2 relative before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-[#0b0f24]">
                                    <Link href="/catalogo/destaques" className="font-semibold text-sm hover:text-[#F27A54] transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Principais (Destaques)</Link>
                                    <Link href="/catalogo/ecommerce" className="font-semibold text-sm hover:text-[#F27A54] transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">E-commerce</Link>
                                    <Link href="/catalogo/industria" className="font-semibold text-sm hover:text-[#F27A54] transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Indústrias</Link>
                                    <Link href="/catalogo/contabilidade" className="font-semibold text-sm hover:text-[#F27A54] transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Contabilidade</Link>
                                    <Link href="/catalogo/marketing" className="font-semibold text-sm hover:text-[#F27A54] transition-colors py-1.5 px-2 rounded-md hover:bg-white/5">Engenharia de Prompt</Link>
                                </div>
                            </div>
                        </div>

                        <NavLink href="/depoimentos">Cases de Sucesso</NavLink>
                        <NavLink href="/contato">Contato</NavLink>
                        <NavLink href="/faq" isSpecial>Dúvidas Frequentes</NavLink>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/#blueprints"
                            className="bg-[#5145CD] hover:bg-[#4135a8] text-white font-bold text-sm px-6 py-3 rounded-md transition-all uppercase tracking-wide flex items-center gap-2"
                        >
                            Comprar Agora
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/login"
                            className="bg-white border-2 border-[#5145CD] text-[#5145CD] font-bold text-sm px-6 py-2.5 rounded-md hover:bg-gray-50 transition-all uppercase tracking-wide"
                        >
                            Acesse sua Conta
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-[#333333] z-50"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Fullscreen Menu */}
            <div
                className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden pt-24 pb-8 px-6 flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col gap-6 text-xl">
                    <NavLink href="/sobre">Conheça a Plataforma</NavLink>

                    <div className="flex flex-col gap-4">
                        <span className="font-semibold text-[#333333]">Catálogo de Automações</span>
                        <div className="pl-4 flex flex-col gap-3 text-lg border-l-2 border-gray-100">
                            <Link href="/catalogo/destaques" onClick={closeMobile} className="text-gray-600 hover:text-[#5145CD]">Principais</Link>
                            <Link href="/catalogo/ecommerce" onClick={closeMobile} className="text-gray-600 hover:text-[#5145CD]">E-commerce</Link>
                            <Link href="/catalogo/industria" onClick={closeMobile} className="text-gray-600 hover:text-[#5145CD]">Indústrias</Link>
                            <Link href="/catalogo/contabilidade" onClick={closeMobile} className="text-gray-600 hover:text-[#5145CD]">Contabilidade</Link>
                        </div>
                    </div>

                    <NavLink href="/depoimentos">Cases de Sucesso</NavLink>
                    <NavLink href="/contato">Contato</NavLink>
                    <NavLink href="/faq" isSpecial>Dúvidas Frequentes</NavLink>
                </div>

                <div className="mt-auto flex flex-col gap-4 pt-8 border-t border-gray-100">
                    <Link
                        href="/#blueprints"
                        onClick={closeMobile}
                        className="bg-[#5145CD] text-white font-bold text-center py-4 rounded-md uppercase tracking-wide"
                    >
                        Comprar Agora
                    </Link>
                    <Link
                        href="/login"
                        onClick={closeMobile}
                        className="bg-white border-2 border-[#5145CD] text-[#5145CD] font-bold text-center py-3.5 rounded-md uppercase tracking-wide"
                    >
                        Acesse sua Conta
                    </Link>
                </div>
            </div>
        </>
    );
}
