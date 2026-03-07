import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

export default async function CheckoutPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return (
        <div className="min-h-screen flex items-center justify-center p-4 selection:bg-purple-500/30">
            <div className="max-w-md w-full bg-graphite-800/40 border border-graphite-700/50 rounded-2xl p-8 backdrop-blur-md shadow-2xl text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20 mb-6">
                    <ShoppingCart className="h-6 w-6 text-purple-400" />
                </div>
                <h1 className="text-2xl font-bold text-text-primary mb-4">Checkout</h1>
                <p className="text-text-secondary mb-8">
                    A integração com o <strong>Mercado Pago</strong> para o produto <code className="bg-graphite-900 px-2 py-1 rounded text-purple-300 text-sm">{id}</code> será implementada aqui em breve.
                </p>
                <Link href="/" className="inline-flex items-center justify-center rounded-lg bg-graphite-700/50 px-6 py-3 test-sm font-semibold text-text-primary shadow-sm hover:bg-graphite-600 focus-visible:outline border border-graphite-600 transition-all group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Voltar para os Blueprints
                </Link>
            </div>
        </div>
    );
}
