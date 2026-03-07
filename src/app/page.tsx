import { HeroSection } from "@/components/HeroSection";
import { ProductGrid } from "@/components/ProductGrid";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductGrid />
      <FAQ />

      {/* Simple Footer */}
      <footer className="border-t border-graphite-800/50 py-12 mt-auto">
        <div className="container mx-auto px-4 text-center text-text-secondary flex flex-col items-center justify-center gap-4">
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contato</a>
          </div>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} N8N Blueprints. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
