import { Button } from "@/components/ui/button";
import { Music, MapPin, Calendar, Ticket } from "lucide-react";
import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import InstagramFeed from "@/components/InstagramFeed";
import FAQ from "@/components/FAQ";

/**
 * Festival Cristófoli 2026 - Home Page
 * Design Philosophy: Energia Vibrante & Tipografia Ousada
 * 
 * Color Palette:
 * - Primary: Roxo profundo (#4B1B7F)
 * - Secondary: Amarelo ouro (#FFD700)
 * - Accent: Rosa quente (#FF1493)
 * - Background: Branco (#FFFFFF)
 * 
 * Typography:
 * - Display: Bebas Neue (bold, ousada)
 * - Heading: Poppins
 * - Body: Inter
 * 
 * Layout: Assimétrico com movimento e energia
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("ingresso");

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-festival-purple shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo-oficial.png" 
              alt="Festival Cristófoli" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl text-festival-purple">CRISTÓFOLI</h1>
              <p className="text-xs text-festival-pink font-bold">2026</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="text-festival-purple font-bold hover:text-festival-pink transition">SOBRE</a>
            <a href="#lineup" className="text-festival-purple font-bold hover:text-festival-pink transition">LINEUP</a>
            <a href="#ingressos" className="text-festival-purple font-bold hover:text-festival-pink transition">INGRESSOS</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-festival-purple via-festival-purple to-festival-pink overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "url('/images/hero_background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Diagonal Cut Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-festival-purple/80 to-transparent"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)"
          }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-4xl animate-fade-in">
            {/* Logo Animated */}
            <div className="mb-8 animate-pulse">
              <img 
                src="/images/logo-oficial.png" 
                alt="Festival Cristófoli 2026" 
                className="h-32 md:h-48 w-auto mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-festival-yellow mb-8 drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
              MAIOR FESTIVAL
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
              <span className="text-festival-pink">DE ROCK</span>
              <span className="text-festival-yellow"> DA REGIÃO</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base md:text-xl text-white mb-8 font-medium max-w-2xl mx-auto leading-relaxed">
              Curta um dia inteiro de música, energia e momentos inesquecíveis com artistas que vão fazer história no palco do Festival Cristófoli 2026.
            </p>

            {/* CTA Button */}
            <button className="festival-button mb-8 text-lg md:text-xl px-6 md:px-8 py-3 md:py-4">
              GARANTA SEU INGRESSO JÁ
            </button>

            {/* Event Info - Highlighted */}
            <div className="mt-12 bg-white/95 backdrop-blur rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto border-4 border-festival-yellow">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 justify-center">
                  <Calendar className="w-7 h-7 md:w-8 md:h-8 text-festival-pink flex-shrink-0" />
                  <span className="font-bold text-lg md:text-2xl text-festival-purple">19 DE SETEMBRO DE 2026</span>
                </div>
                <div className="h-1 bg-gradient-to-r from-festival-yellow via-festival-pink to-festival-yellow rounded-full"></div>
                <div className="flex items-center gap-3 justify-center">
                  <MapPin className="w-7 h-7 md:w-8 md:h-8 text-festival-pink flex-shrink-0" />
                  <span className="font-bold text-lg md:text-2xl text-festival-purple">MOURÃO GARDEN - CAMPO MOURÃO, PR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 bg-festival-yellow rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-festival-pink rounded-full opacity-10 animate-pulse"></div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gradient-to-r from-festival-yellow/10 to-festival-pink/10 relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-festival-purple text-center mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            FALTAM
          </h2>
          <CountdownTimer />
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white relative overflow-hidden">
        {/* Diagonal Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/images/festival_pattern.png')",
            backgroundSize: "400px",
          }}
        />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-5xl md:text-6xl font-bold text-festival-purple mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                SOBRE O
                <span className="text-festival-pink"> FESTIVAL</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O Festival Cristófoli é um evento de música que celebra a diversidade, a energia e a paixão pela arte. Com uma história que remonta a 2011, o festival evoluiu para se tornar um dos mais esperados do ano, reunindo artistas de diferentes gêneros e públicos de todas as idades.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nosso compromisso é criar uma experiência única, onde a música, a cultura e a comunidade se encontram em um ambiente seguro, acessível e inesquecível.
              </p>

              <div className="flex gap-4">
                <button className="festival-button">SAIBA MAIS</button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2">
              <img
                src="/images/festival-performance.png"
                alt="Festival Cristófoli - Apresentação ao vivo"
                className="w-full h-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lineup Section - Coming Soon */}
      <section id="lineup" className="py-20 bg-gradient-to-r from-festival-purple to-festival-pink relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('/images/festival_pattern.png')",
            backgroundSize: "300px",
            animation: "drift 20s linear infinite"
          }} />
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-festival-yellow mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            LINEUP
          </h2>

          {/* Coming Soon Badge */}
          <div className="inline-block mb-12">
            <div className="festival-badge text-2xl px-8 py-6">
              VEM AÍ...
            </div>
          </div>

          <p className="text-xl text-festival-purple max-w-2xl mx-auto mb-8 font-medium">
            Os artistas confirmados serão revelados em breve. Fique atento às nossas redes sociais para não perder nenhuma novidade!
          </p>

          {/* Social Links Placeholder */}
          <div className="flex justify-center gap-6 mt-12">
            <button className="w-12 h-12 rounded-full bg-festival-yellow text-festival-purple font-bold flex items-center justify-center hover:scale-110 transition">
              f
            </button>
            <button className="w-12 h-12 rounded-full bg-festival-yellow text-festival-purple font-bold flex items-center justify-center hover:scale-110 transition">
              @
            </button>
            <button className="w-12 h-12 rounded-full bg-festival-yellow text-festival-purple font-bold flex items-center justify-center hover:scale-110 transition">
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="ingressos" className="py-20 bg-white relative overflow-hidden">
        <div className="container">
          <h2 className="text-6xl md:text-7xl font-bold text-festival-purple text-center mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            INGRESSOS
          </h2>

          {/* Ticket Types */}
          <div className="flex justify-center max-w-2xl mx-auto">
            {/* Ticket Type - GERAL */}
            <div className="border-4 border-festival-purple rounded-lg p-8 md:p-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full md:w-96">
              <div className="flex items-start gap-3 mb-4">
                <Ticket className="w-6 h-6 md:w-8 md:h-8 text-festival-pink flex-shrink-0 mt-1" />
                <h3 className="text-3xl md:text-4xl font-bold text-festival-purple" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PRÉ-VENDA
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-6">Acesso completo ao Festival Cristófoli 2026</p>
              <p className="text-4xl md:text-5xl font-bold text-festival-pink mb-8">EM BREVE</p>
              <button className="festival-button w-full text-base md:text-lg py-3">COMPRAR</button>
              <p className="text-xs text-gray-500 mt-4 text-center">Maiores de 18 anos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-festival-purple text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            SIGA NOSSA JORNADA
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Acompanhe os bastidores, novidades e momentos especiais do Festival Cristofoli 2026
          </p>
          <div className="flex justify-center">
            <InstagramFeed />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-festival-purple text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>FESTIVAL</h4>
              <p className="text-sm opacity-90">Festival Cristófoli 2026 - Desde 2011 celebrando música e cultura.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>LINKS</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li><a href="#" className="hover:text-festival-yellow transition">Sobre</a></li>
                <li><a href="#" className="hover:text-festival-yellow transition">Ingressos</a></li>
                <li><a href="#" className="hover:text-festival-yellow transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>REDES</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li><a href="#" className="hover:text-festival-yellow transition">Facebook</a></li>
                <li><a href="#" className="hover:text-festival-yellow transition">Instagram</a></li>
                <li><a href="#" className="hover:text-festival-yellow transition">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-festival-yellow pt-8 text-center text-sm opacity-75">
            <p>&copy; 2026 Festival Cristófoli. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(300px); }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}
