import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Timeline from '@/components/Timeline';
import { artists } from '@/data/artists';

export default function Home() {
  const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero_background.png)',
          }}
        ></div>

        <div className="container relative z-20 text-center text-white">
          <div className="mb-8">
            <img src="/images/logo_cristofoli.png" alt="Festival Cristófoli" className="h-24 mx-auto mb-8" />
          </div>

          <h1 className="text-7xl md:text-8xl font-black mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            MAIOR FESTIVAL
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-festival-pink to-festival-yellow">
              DE ROCK DA REGIÃO
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Curta um dia inteiro de música, energia e momentos inesquecíveis com artistas que vão fazer história no palco do Festival Cristófoli 2026.
          </p>

          <Link href="#agenda">
            <Button className="bg-gradient-to-r from-festival-pink to-festival-purple hover:shadow-2xl text-white px-12 py-8 text-xl font-bold rounded-full">
              GARANTA SEU INGRESSO JÁ
            </Button>
          </Link>
        </div>

        {/* Countdown */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 to-transparent pt-20 pb-12">
          <div className="container text-center">
            <p className="text-white/80 text-sm mb-6 tracking-widest font-bold">FALTAM</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-festival-yellow to-festival-pink rounded-xl px-4 md:px-8 py-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-2xl md:text-5xl font-black text-white">238</p>
                <p className="text-xs md:text-sm font-bold text-white/90 mt-2">DIAS</p>
              </div>
              <div className="bg-gradient-to-br from-festival-purple to-festival-pink rounded-xl px-4 md:px-8 py-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-2xl md:text-5xl font-black text-white">18</p>
                <p className="text-xs md:text-sm font-bold text-white/90 mt-2">HORAS</p>
              </div>
              <div className="bg-gradient-to-br from-festival-purple to-festival-yellow rounded-xl px-4 md:px-8 py-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-2xl md:text-5xl font-black text-white">36</p>
                <p className="text-xs md:text-sm font-bold text-white/90 mt-2">MINUTOS</p>
              </div>
              <div className="bg-gradient-to-br from-festival-pink to-festival-yellow rounded-xl px-4 md:px-8 py-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-2xl md:text-5xl font-black text-white">00</p>
                <p className="text-xs md:text-sm font-bold text-white/90 mt-2">SEGUNDOS</p>
              </div>
            </div>
            <div className="text-white text-center space-y-1">
              <p className="text-sm md:text-base">📍 19 DE SETEMBRO DE 2026</p>
              <p className="text-sm md:text-base font-bold">MOURÃO GARDEN - CAMPO MOURÃO, PR</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold text-festival-purple mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                SOBRE O
                <span className="text-festival-pink"> FESTIVAL</span>
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                O Festival Cristófoli é um evento de música que celebra a diversidade, a energia e a paixão pela arte. Com uma história que remonta a 2011, o festival evoluiu para se tornar um dos mais esperados do ano, reunindo artistas de diferentes gêneros e públicos de todas as idades.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mais do que um evento de entretenimento, o Festival Cristófoli é um movimento cultural que valoriza a comunidade local e promove inclusão através da música.
              </p>

              <Link href="#timeline">
                <Button variant="outline" className="border-festival-purple text-festival-purple hover:bg-festival-purple hover:text-white px-8 py-6 text-lg font-bold rounded-full">
                  SAIBA MAIS
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/festival-performance.png"
                  alt="Festival Cristófoli"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Responsibility Section - REDESIGNED */}
      <section className="py-20 bg-gradient-to-br from-festival-purple via-festival-pink to-festival-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              RESPONSABILIDADE
              <span className="block">SOCIAL</span>
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              O Festival Cristófoli não é apenas um evento de música. Desde 2015, nos comprometemos com a responsabilidade social, repassando o resultado dos festivais para instituições da comunidade.
            </p>
          </div>

          {/* Main Total Card */}
          <div className="mb-16">
            <div className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl text-center">
              <p className="text-sm font-bold text-festival-yellow mb-4 tracking-widest">TOTAL ARRECADADO DESDE 2015</p>
              <p className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-festival-purple to-festival-pink mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                R$ 183 MIL
              </p>
              <p className="text-xl text-gray-600 font-semibold">Repassados para instituições da comunidade</p>
              <div className="mt-8 pt-8 border-t-2 border-festival-pink/20">
                <p className="text-sm text-gray-500 mb-2">
                  <span className="font-bold text-festival-purple">Lar Dona Jacira:</span> R$ 165 MIL
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-festival-purple">Lar Dom Bosco:</span> R$ 18 MIL
                </p>
              </div>
            </div>
          </div>

          {/* Yearly Breakdown */}
          <div>
            <h3 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              EVOLUÇÃO POR ANO
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-festival-yellow transition-colors">
                <p className="text-sm font-bold text-white/80 mb-3">2015 - 5ª Ed.</p>
                <p className="text-4xl font-bold text-festival-yellow mb-2">R$ 7.000</p>
                <p className="text-xs text-white/70">Lar Dona Jacira</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-festival-yellow transition-colors">
                <p className="text-sm font-bold text-white/80 mb-3">2016 - 6ª Ed.</p>
                <p className="text-4xl font-bold text-festival-yellow mb-2">R$ 10.000</p>
                <p className="text-xs text-white/70">Lar Dona Jacira</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-festival-yellow transition-colors">
                <p className="text-sm font-bold text-white/80 mb-3">2019 - 9ª Ed.</p>
                <p className="text-4xl font-bold text-festival-yellow mb-2">R$ 20.000</p>
                <p className="text-xs text-white/70">Lar Dona Jacira</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-festival-yellow transition-colors">
                <p className="text-sm font-bold text-white/80 mb-3">2024 - 11ª Ed.</p>
                <p className="text-4xl font-bold text-festival-yellow mb-2">R$ 38.000</p>
                <p className="text-xs text-white/70">Lar Dona Jacira</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:border-festival-yellow transition-colors">
                <p className="text-sm font-bold text-white/80 mb-3">2025 - 12ª Ed.</p>
                <p className="text-4xl font-bold text-festival-yellow mb-2">R$ 68.000</p>
                <p className="text-xs text-white/70">R$50k + R$18k</p>
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
              <Card
                key={artist.id}
                className="cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                onClick={() => setSelectedArtist(artist)}
              >
                <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
                      <p className="text-festival-yellow font-semibold mb-2">{artist.genre}</p>
                      <p className="text-white/80 text-sm">
                        🎵 {artist.schedule.time} | {artist.schedule.stage}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{artist.bio}</p>
                    <Button
                      onClick={() => setSelectedArtist(artist)}
                      variant="outline"
                      className="w-full border-festival-purple text-festival-purple hover:bg-festival-purple hover:text-white"
                    >
                      VER DETALHES
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <h2 className="text-6xl md:text-7xl font-bold text-festival-purple text-center mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            HISTÓRIA
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Conheça a trajetória do Festival Cristófoli ao longo dos anos
          </p>
          <Timeline />
        </div>
      </section>

      {/* Tickets Section */}
      <section id="ingressos" className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-festival-purple mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            INGRESSOS
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Garanta seu lugar no maior festival de rock da região. Ingressos limitados!
          </p>
          <Link href="https://ingressos.example.com">
            <Button className="bg-gradient-to-r from-festival-pink to-festival-purple hover:shadow-2xl text-white px-12 py-8 text-xl font-bold rounded-full">
              COMPRAR INGRESSOS
            </Button>
          </Link>
        </div>
      </section>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedArtist(null)}>
          <Card className="max-w-2xl w-full">
            <CardContent className="p-8">
              <button
                onClick={() => setSelectedArtist(null)}
                className="float-right text-2xl font-bold text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              <div className="clear-both">
                <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full h-64 object-cover rounded-lg mb-6" />
                <h2 className="text-4xl font-bold text-festival-purple mb-2">{selectedArtist.name}</h2>
                <p className="text-festival-yellow font-semibold mb-4">{selectedArtist.genre}</p>
                <p className="text-gray-600 mb-4">
                  🎵 {selectedArtist.schedule.time} | {selectedArtist.schedule.stage}
                </p>
                <p className="text-gray-700 leading-relaxed">{selectedArtist.bio}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
