import React from "react";
import { Server, ShieldCheck, Users, Rocket } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="min-h-screen pt-40 pb-24 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Como Trabalhamos</h1>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                        Nós acreditamos que a automação deve ser acessível e sem barreiras técnicas.
                        Por isso, criamos um modelo "Done For You" (Feito Por Você).
                    </p>
                </div>

                <div className="bg-graphite-800/40 border border-graphite-700/50 p-8 md:p-12 rounded-2xl shadow-xl shadow-purple-500/5 mb-16">
                    <h2 className="text-2xl font-semibold text-text-primary mb-8 text-center border-b border-graphite-700/50 pb-6">
                        O processo de implantação, do zero ao ar.
                    </h2>

                    <div className="space-y-12">
                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold border border-purple-500/30">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-text-primary flex items-center gap-2 mb-2">
                                    <Rocket className="h-5 w-5 text-purple-400" /> A Compra & Setup da Conta
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Você escolhe o Blueprint ideal para o seu negócio e realiza o pagamento seguro. Não é necessário ter conhecimento prévio em n8n ou ter um servidor próprio.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/30">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-text-primary flex items-center gap-2 mb-2">
                                    <Users className="h-5 w-5 text-blue-400" /> Reunião de Briefing
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Após a compra, nós nos conectamos com você em uma reunião rápida. O objetivo aqui é entender suas regras de negócio e capturar os tokens/acessos necessários (como WhatsApp, CRM, Trello, etc) para conectar tudo.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold border border-green-500/30">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-text-primary flex items-center gap-2 mb-2">
                                    <Server className="h-5 w-5 text-green-400" /> Infraestrutura Dedicada & Configuração
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Do nosso lado, a mágica acontece. Nós gerenciamos toda a infraestrutura técnica utilizando VPS otimizada e instâncias isoladas em Docker. Nós instalamos o n8n grátis, importamos o Blueprint e inserimos as suas chaves com total segurança. Você não se preocupa com falhas de servidor, atualizações ou banco de dados.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold border border-orange-500/30">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-text-primary flex items-center gap-2 mb-2">
                                    <ShieldCheck className="h-5 w-5 text-orange-400" /> Entrega & Monitoramento
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    A sua automação passa a rodar. Cada cliente possui um fluxo totalmente separado, garantindo que seus dados nunca se misturem. Cuidamos do monitoramento dos servidores para garantir que sua automação não pare e seu negócio continue vendendo no automático.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-text-secondary">
                        Ter uma automação robusta não precisa ser estressante. Deixe a parte técnica conosco.
                    </p>
                </div>
            </div>
        </div>
    );
}
