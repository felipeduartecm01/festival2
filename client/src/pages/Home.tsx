import { Button } from "@/components/ui/button";
import { Music, MapPin, Calendar, Ticket } from "lucide-react";
import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import InstagramFeed from "@/components/InstagramFeed";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import ArtistCard from "@/components/ArtistCard";
import Timeline from "@/components/Timeline";
import { artists } from "@/data/artists";

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
            <a href="/agenda" className="text-festival-purple font-bold hover:text-festival-pink transition">AGENDA</a>
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
            <div className="mb-12 animate-pulse relative">
              <div className="absolute inset-0 bg-gradient-to-r from-festival-pink/20 to-festival-yellow/20 blur-3xl rounded-full" style={{width: '280px', height: '280px', margin: 'auto'}}></div>
              <img 
                src="/images/logo-oficial.png" 
                alt="Festival Cristófoli 2026" 
                className="h-48 md:h-72 lg:h-80 w-auto mx-auto drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-300"
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

      {/* Social Impact Section */}
      <section className="py-20 bg-gradient-to-r from-festival-pink/10 to-festival-purple/10 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="bg-white rounded-2xl p-12 md:p-16 shadow-2xl border-4 border-festival-pink">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-festival-purple mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  RESPONSABILIDADE
                  <span className="text-festival-pink"> SOCIAL</span>
                </h2>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  O Festival Cristófoli não é apenas um evento de música. Desde 2015, nos comprometemos com a responsabilidade social, repassando o resultado dos festivais para o Lar Dona Jacira.
                </p>

                <div className="bg-gradient-to-r from-festival-purple to-festival-pink rounded-xl p-8 text-white">
                  <p className="text-sm font-bold opacity-90 mb-2">TOTAL ARRECADADO</p>
                  <p className="text-6xl md:text-7xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>R$ 77 MIL</p>
                  <p className="text-sm opacity-90 mt-4">Repassados para o Lar Dona Jacira desde 2015</p>
                </div>
              </div>

              {/* Right Stats */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-festival-yellow/20 to-festival-pink/20 rounded-xl p-6 border-2 border-festival-yellow">
                  <p className="text-sm text-gray-600 font-bold mb-2">2015 - 5ª Edição</p>
                  <p className="text-4xl font-bold text-festival-purple">R$ 7.000</p>
                  <p className="text-xs text-gray-600 mt-2">Lar Dona Jacira</p>
                </div>
                
                <div className="bg-gradient-to-br from-festival-yellow/20 to-festival-pink/20 rounded-xl p-6 border-2 border-festival-yellow">
                  <p className="text-sm text-gray-600 font-bold mb-2">2016 - 6ª Edição</p>
                  <p className="text-4xl font-bold text-festival-purple">R$ 10.000</p>
                  <p className="text-xs text-gray-600 mt-2">Lar Dona Jacira</p>
                </div>
                
                <div className="bg-gradient-to-br from-festival-yellow/20 to-festival-pink/20 rounded-xl p-6 border-2 border-festival-yellow">
                  <p className="text-sm text-gray-600 font-bold mb-2">2019 - 9ª Edição</p>
                  <p className="text-4xl font-bold text-festival-purple">R$ 20.000</p>
                  <p className="text-xs text-gray-600 mt-2">Lar Dona Jacira</p>
                </div>
                
                <div className="bg-gradient-to-br from-festival-yellow/20 to-festival-pink/20 rounded-xl p-6 border-2 border-festival-yellow">
                  <p className="text-sm text-gray-600 font-bold mb-2">2023 - 11ª Edição</p>
                  <p className="text-4xl font-bold text-festival-purple">R$ 40.000</p>
                  <p className="text-xs text-gray-600 mt-2">Lar Dona Jacira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section id="lineup" className="py-20 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold text-festival-purple text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            LINEUP
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Conheça os artistas que vão fazer história no Festival Cristófoli 2026. Clique em qualquer artista para ver mais detalhes!
          </p>

          {/* Artists Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {artists.map(artist => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
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

      {/* Timeline Section */}
      <Timeline />

      {/* Gallery Section */}
      <Gallery />

      {/* Sponsors Section */}
      <Sponsors />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-festival-purple to-[#6B2B9F] text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/images/logo-oficial.png" 
                  alt="Festival Cristófoli" 
                  className="h-10 w-auto"
                />
                <h4 className="text-xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>CRISTÓFOLI</h4>
              </div>
              <p className="text-sm opacity-90 mb-4">Festival Cristófoli 2026 - O maior festival de rock da região, celebrando música, cultura e comunidade desde 2011.</p>
              <p className="text-xs opacity-75">19 de Setembro de 2026<br/>Mourão Garden - Campo Mourão, PR</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>NAVEGAÇÃO</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li><a href="#sobre" className="hover:text-festival-yellow transition">Sobre</a></li>
                <li><a href="#lineup" className="hover:text-festival-yellow transition">Lineup</a></li>
                <li><a href="#ingressos" className="hover:text-festival-yellow transition">Ingressos</a></li>
                <li><a href="#galeria" className="hover:text-festival-yellow transition">Galeria</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>INFORMAÇÕES</h4>
              <ul className="text-sm space-y-2 opacity-90">
                <li><a href="#faq" className="hover:text-festival-yellow transition">Perguntas Frequentes</a></li>
                <li><a href="#" className="hover:text-festival-yellow transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-festival-yellow transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-festival-yellow transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>REDES SOCIAIS</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://facebook.com/festivalcristofoli" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-festival-pink rounded-full flex items-center justify-center hover:bg-festival-yellow transition text-white font-bold text-sm">
                  f
                </a>
                <a href="https://instagram.com/festivalcristofoli" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-festival-pink rounded-full flex items-center justify-center hover:bg-festival-yellow transition text-white">
                  📷
                </a>
                <a href="https://youtube.com/@festivalcristofoli" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-festival-pink rounded-full flex items-center justify-center hover:bg-festival-yellow transition text-white">
                  ▶
                </a>
              </div>
              <p className="text-xs opacity-75">Siga-nos para atualizações e novidades!</p>
            </div>
          </div>
          
          <div className="border-t border-festival-yellow/30 py-8">
            <div className="grid md:grid-cols-2 gap-4 text-xs opacity-75">
              <div>
                <p>&copy; 2026 Festival Cristófoli. Todos os direitos reservados.</p>
              </div>
              <div className="md:text-right">
                <p>Desenvolvido com 🎸 para a comunidade de Campo Mourão</p>
              </div>
            </div>
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
