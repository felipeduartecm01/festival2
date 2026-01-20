import { useParams, Link } from "wouter";
import { ArrowLeft, Music, Clock, MapPin, Instagram, Youtube, Twitter, ExternalLink } from "lucide-react";
import { artists } from "@/data/artists";

/**
 * Artist Detail Page
 * Design Philosophy: Energia Vibrante & Tipografia Ousada
 * 
 * Exibe informações detalhadas de cada artista:
 * - Imagem em destaque
 * - Biografia completa
 * - Horário e local de apresentação
 * - Links para redes sociais
 * - Destaques e conquistas
 */

export default function ArtistDetail() {
  const { id } = useParams<{ id: string }>();
  const artist = artists.find(a => a.id === id);

  if (!artist) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-festival-purple mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            ARTISTA NÃO ENCONTRADO
          </h1>
          <p className="text-gray-600 mb-8">Desculpe, não conseguimos encontrar este artista.</p>
          <Link href="/#lineup">
            <a className="inline-block px-6 py-3 bg-festival-purple text-white font-bold rounded-lg hover:bg-festival-pink transition">
              VOLTAR AO LINEUP
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b-2 border-festival-purple shadow-lg">
        <div className="container flex items-center justify-between py-4">
          <Link href="/#lineup">
            <a className="flex items-center gap-2 text-festival-purple hover:text-festival-pink transition font-bold">
              <ArrowLeft className="w-5 h-5" />
              VOLTAR
            </a>
          </Link>
          <h1 className="text-2xl text-festival-purple font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            CRISTÓFOLI 2026
          </h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Hero Section with Artist Image */}
      <section className="relative h-96 md:h-screen max-h-96 md:max-h-full overflow-hidden bg-gradient-to-br from-festival-purple to-festival-pink">
        <div className="absolute inset-0">
          <img
            src={artist.image}
            alt={artist.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-end pb-12 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            {artist.name}
          </h1>
          <p className="text-xl md:text-2xl text-festival-yellow font-bold drop-shadow-lg">
            {artist.genre}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Biography */}
          <div className="md:col-span-2">
            {/* About Section */}
            <section className="mb-12">
              <h2 className="text-4xl font-bold text-festival-purple mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                SOBRE
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {artist.bio}
              </p>
            </section>

            {/* Highlights Section */}
            <section className="mb-12">
              <h2 className="text-4xl font-bold text-festival-purple mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                DESTAQUES
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {artist.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-festival-yellow/10 to-festival-pink/10 rounded-lg border-l-4 border-festival-pink"
                  >
                    <p className="text-gray-700 font-semibold">{highlight}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="md:col-span-1">
            {/* Schedule Card */}
            <div className="bg-gradient-to-br from-festival-purple to-festival-pink rounded-lg p-8 text-white mb-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                APRESENTAÇÃO
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm opacity-90">Horário</p>
                    <p className="font-bold text-lg">{artist.schedule.time}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm opacity-90">Palco</p>
                    <p className="font-bold text-lg">{artist.schedule.stage}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Music className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm opacity-90">Data</p>
                    <p className="font-bold text-lg">{artist.schedule.day}</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 py-3 bg-white text-festival-purple font-bold rounded-lg hover:bg-festival-yellow transition">
                COMPRAR INGRESSO
              </button>
            </div>

            {/* Social Links Card */}
            <div className="bg-white rounded-lg p-8 border-2 border-festival-purple/20 shadow-lg">
              <h3 className="text-2xl font-bold text-festival-purple mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                SIGA
              </h3>

              <div className="space-y-3">
                {artist.social.instagram && (
                  <a
                    href={`https://instagram.com/${artist.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-festival-purple/10 hover:bg-festival-pink hover:text-white text-festival-purple transition font-semibold"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                )}

                {artist.social.spotify && (
                  <a
                    href={`https://open.spotify.com/artist/${artist.social.spotify}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-festival-purple/10 hover:bg-festival-pink hover:text-white text-festival-purple transition font-semibold"
                  >
                    <Music className="w-5 h-5" />
                    <span>Spotify</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                )}

                {artist.social.youtube && (
                  <a
                    href={`https://youtube.com/${artist.social.youtube}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-festival-purple/10 hover:bg-festival-pink hover:text-white text-festival-purple transition font-semibold"
                  >
                    <Youtube className="w-5 h-5" />
                    <span>YouTube</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                )}

                {artist.social.twitter && (
                  <a
                    href={`https://twitter.com/${artist.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-festival-purple/10 hover:bg-festival-pink hover:text-white text-festival-purple transition font-semibold"
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Artists Section */}
      <section className="bg-gradient-to-r from-festival-purple/10 to-festival-pink/10 py-16">
        <div className="container">
          <h2 className="text-4xl font-bold text-festival-purple text-center mb-12" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            OUTROS ARTISTAS
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {artists
              .filter(a => a.id !== artist.id)
              .slice(0, 3)
              .map(relatedArtist => (
                <Link key={relatedArtist.id} href={`/artist/${relatedArtist.id}`}>
                  <a className="group block">
                    <div className="relative h-48 overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-festival-purple/20 to-festival-pink/20">
                      <img
                        src={relatedArtist.image}
                        alt={relatedArtist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-festival-purple group-hover:text-festival-pink transition">
                      {relatedArtist.name}
                    </h3>
                    <p className="text-sm text-gray-600">{relatedArtist.genre}</p>
                  </a>
                </Link>
              ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/#lineup">
              <a className="inline-block px-8 py-4 bg-festival-purple text-white font-bold rounded-lg hover:bg-festival-pink transition text-lg">
                VER TODOS OS ARTISTAS
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
