import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Timeline from '@/components/Timeline';
import { CountdownDisplay } from '@/components/CountdownDisplay';
import { artists } from '@/data/artists';

export default function Home() {
  const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Hero Section - Cinematographic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/hero_background.png)',
              backgroundAttachment: 'fixed',
            }}
          ></div>
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white">
              <div className="mb-8 hero-title">
                <p className="text-festival-yellow text-lg md:text-xl font-bold tracking-widest mb-4">FESTIVAL CRISTÓFOLI 2026</p>
                <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  MAIOR
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink via-festival-yellow to-festival-pink">
                    FESTIVAL
                  </span>
                  <br />
                  DE ROCK
                </h1>
              </div>

              <p className="text-xl md:text-2xl mb-8 leading-relaxed font-light hero-description max-w-lg">
                Um dia inteiro de música, energia e momentos inesquecíveis com artistas que vão fazer história no palco.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 hero-button">
                <Link href="#agenda">
                  <Button className="bg-gradient-to-r from-festival-pink to-festival-purple hover:shadow-2xl text-white px-12 py-8 text-xl font-bold rounded-full w-full sm:w-auto">
                    GARANTA SEU INGRESSO
                  </Button>
                </Link>
                <Link href="#timeline">
                  <Button variant="outline" className="border-2 border-festival-yellow text-festival-yellow hover:bg-festival-yellow hover:text-black px-12 py-8 text-xl font-bold rounded-full w-full sm:w-auto">
                    NOSSA HISTÓRIA
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Countdown Card */}
            <div className="hidden md:block countdown-card">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border border-white/20">
                <CountdownDisplay targetDate={new Date('2026-09-19T00:00:00')} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Countdown */}
        <div className="md:hidden absolute bottom-8 left-0 right-0 z-20 flex justify-center px-4 countdown-card">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/20 w-full max-w-sm">
            <CountdownDisplay targetDate={new Date('2026-09-19T00:00:00')} />
          </div>
        </div>
      </section>

      {/* About Section - Asymmetric Layout */}
      <section id="sobre" className="py-24 bg-gradient-to-b from-black to-black/80 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img src="/images/stage_background.png" alt="Festival Stage" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-festival-yellow text-lg font-bold tracking-widest mb-4">SOBRE O FESTIVAL</p>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                UMA HISTÓRIA DE
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow"> PAIXÃO</span>
              </h2>

              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Desde 2011, o Festival Cristófoli construiu uma trajetória sólida e inspiradora, evoluindo de um pequeno encontro entre amantes do rock para o maior evento de rock de Campo Mourão e região. Hoje, é um acontecimento que faz parte do calendário cultural da cidade e é aguardado com expectativa por milhares de pessoas a cada edição.
              </p>

              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                O Festival celebra a diversidade, a energia e a paixão pela música e pela arte, reunindo gerações em torno do rock e de suas múltiplas expressões.
              </p>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Mais do que entretenimento, o Festival Cristófoli é um movimento cultural que promove inclusão e transforma a música em um elo capaz de conectar pessoas, histórias e propósitos.
              </p>

              <Link href="#timeline">
                <Button className="bg-gradient-to-r from-festival-pink to-festival-purple hover:shadow-2xl text-white px-8 py-6 text-lg font-bold rounded-full">
                  EXPLORAR HISTÓRIA
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-festival-yellow text-lg font-bold tracking-widest mb-4">RESPONSABILIDADE SOCIAL</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              IMPACTO NA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow"> COMUNIDADE</span>
            </h2>
          </div>

          <div className="bg-gradient-to-r from-festival-purple/20 to-festival-pink/20 rounded-3xl border border-festival-pink/30 p-12 md:p-16 mb-12 backdrop-blur-sm">
            <div className="text-center mb-12">
              <p className="text-festival-yellow text-lg font-bold tracking-widest mb-4">TOTAL ARRECADADO DESDE 2015</p>
              <h3 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
                R$ 261 MIL
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <p className="text-festival-yellow font-bold text-lg mb-2">Lar Dona Jacira</p>
                <p className="text-white/70 text-sm mb-4">Instituição beneficiada desde 2015</p>
                <p className="text-4xl font-black text-festival-yellow">R$ 243 MIL</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <p className="text-festival-purple font-bold text-lg mb-2">Lar Dom Bosco</p>
                <p className="text-white/70 text-sm mb-4">Novo parceiro desde 2025</p>
                <p className="text-4xl font-black text-festival-purple">R$ 18 MIL</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-festival-yellow/50 transition-all">
              <p className="text-festival-yellow font-bold mb-2">2015</p>
              <p className="text-2xl font-black text-white">R$ 7K</p>
              <p className="text-xs text-white/50 mt-2">5ª Edição</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-festival-yellow/50 transition-all">
              <p className="text-festival-yellow font-bold mb-2">2016</p>
              <p className="text-2xl font-black text-white">R$ 10K</p>
              <p className="text-xs text-white/50 mt-2">6ª Edição</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-festival-yellow/50 transition-all">
              <p className="text-festival-yellow font-bold mb-2">2019</p>
              <p className="text-2xl font-black text-white">R$ 20K</p>
              <p className="text-xs text-white/50 mt-2">9ª Edição</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-festival-yellow/50 transition-all">
              <p className="text-festival-yellow font-bold mb-2">2022</p>
              <p className="text-2xl font-black text-white">R$ 40K</p>
              <p className="text-xs text-white/50 mt-2">10ª Edição</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-festival-yellow/50 transition-all">
              <p className="text-festival-yellow font-bold mb-2">2023</p>
              <p className="text-2xl font-black text-white">R$ 40K</p>
              <p className="text-xs text-white/50 mt-2">11ª Edição</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-festival-yellow/50 transition-all">
              <p className="text-festival-yellow font-bold mb-2">2024</p>
              <p className="text-2xl font-black text-white">R$ 38K</p>
              <p className="text-xs text-white/50 mt-2">12ª Edição</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center hover:border-festival-yellow/50 transition-all">
              <p className="text-festival-yellow font-bold mb-2">2025</p>
              <p className="text-2xl font-black text-white">R$ 68K</p>
              <p className="text-xs text-white/50 mt-2">13ª Edição</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-24 bg-gradient-to-b from-black/80 to-black relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-festival-yellow text-lg font-bold tracking-widest mb-4">COMPROMISSO ESG</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              RESPONSABILIDADE
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow"> INTEGRAL</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">O Festival Cristófoli compromete-se com práticas sustentáveis em três pilares: social, ambiental e de governança</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Social Pillar */}
            <div className="group">
              <div className="bg-gradient-to-br from-festival-pink/20 to-festival-purple/20 rounded-3xl border border-festival-pink/30 p-8 backdrop-blur-sm hover:border-festival-pink/60 transition-all h-full">
                <div className="text-5xl mb-6">👥</div>
                <h3 className="text-2xl font-black text-white mb-4">SOCIAL</h3>
                <p className="text-white/70 mb-6 leading-relaxed">Impacto direto na comunidade através de doações, programas de inclusão e apoio a instituições locais.</p>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start">
                    <span className="text-festival-pink mr-3">✓</span>
                    <span>R$ 261 mil doados desde 2015</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-pink mr-3">✓</span>
                    <span>Parcerias com Lar Dona Jacira e Lar Dom Bosco</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-pink mr-3">✓</span>
                    <span>Inclusão e diversidade no lineup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Environmental Pillar */}
            <div className="group">
              <div className="bg-gradient-to-br from-festival-yellow/20 to-festival-pink/20 rounded-3xl border border-festival-yellow/30 p-8 backdrop-blur-sm hover:border-festival-yellow/60 transition-all h-full">
                <div className="text-5xl mb-6">🌍</div>
                <h3 className="text-2xl font-black text-white mb-4">AMBIENTAL</h3>
                <p className="text-white/70 mb-6 leading-relaxed">Práticas sustentáveis para minimizar impacto ambiental e promover consciência ecológica.</p>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start">
                    <span className="text-festival-yellow mr-3">✓</span>
                    <span>Gestão responsável de resíduos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-yellow mr-3">✓</span>
                    <span>Uso de energia renovável</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-yellow mr-3">✓</span>
                    <span>Redução de plástico descartável</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-yellow mr-3">✓</span>
                    <span>Compensação de carbono</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Governance Pillar */}
            <div className="group">
              <div className="bg-gradient-to-br from-festival-purple/20 to-festival-pink/20 rounded-3xl border border-festival-purple/30 p-8 backdrop-blur-sm hover:border-festival-purple/60 transition-all h-full">
                <div className="text-5xl mb-6">⚖️</div>
                <h3 className="text-2xl font-black text-white mb-4">GOVERNANÇA</h3>
                <p className="text-white/70 mb-6 leading-relaxed">Transparência, ética e conformidade em todas as operações e decisões do festival.</p>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start">
                    <span className="text-festival-purple mr-3">✓</span>
                    <span>Transparência financeira e relatórios públicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-purple mr-3">✓</span>
                    <span>Código de conduta ético</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-purple mr-3">✓</span>
                    <span>Conformidade com legislação local</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-festival-purple mr-3">✓</span>
                    <span>Gestão responsável de parcerias</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineup Section */}
      <section id="agenda" className="py-24 bg-gradient-to-b from-black to-black/80 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-festival-yellow text-lg font-bold tracking-widest mb-4">ARTISTAS CONFIRMADOS</p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              LINEUP
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow"> 2026</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artists.map((artist) => (
              <Card key={artist.id} className="bg-white/5 border-white/10 hover:border-festival-pink/50 transition-all cursor-pointer group overflow-hidden" onClick={() => setSelectedArtist(artist)}>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <p className="text-festival-yellow text-sm font-bold tracking-widest">{artist.genre}</p>
                    <h3 className="text-2xl font-black text-white mt-2">{artist.name}</h3>
                  </div>

                  <p className="text-white/70 text-sm mb-6 line-clamp-3">{artist.bio}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-white/50">{artist.schedule.time}</p>
                    <Button variant="ghost" className="text-festival-pink hover:text-festival-yellow text-sm">
                      VER MAIS →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-festival-purple/20 to-festival-pink/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NÃO PERCA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">O MAIOR FESTIVAL</span>
          </h2>

          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Garanta seu ingresso agora e faça parte da história do Festival Cristófoli 2026
          </p>

          <Link href="#agenda">
            <Button className="bg-gradient-to-r from-festival-pink to-festival-purple hover:shadow-2xl text-white px-16 py-8 text-2xl font-black rounded-full">
              COMPRAR INGRESSOS
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
