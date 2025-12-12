/**
 * Sponsors Component
 * Design: Retro-Futurismo Brasileiro
 * - Seção para exibir patrocinadores e apoiadores
 * - Grid responsivo com logos
 * - Cores: roxo profundo, amarelo ouro, rosa quente
 */

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: "Cristófoli Biossegurança", category: "Ouro", logo: "/images/cristofoli-biosseguranca-logo.png", isImage: true },
    { id: 2, name: "BIOVIS", category: "Ouro", logo: "/images/biovis-logo.png", isImage: true },
    { id: 3, name: "Apoiador", category: "Bronze" },
    { id: 4, name: "Apoiador", category: "Bronze" },
    { id: 5, name: "Apoiador", category: "Bronze" },
    { id: 6, name: "Apoiador", category: "Bronze" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-festival-purple/5">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-festival-purple mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
            PATROCINADORES & APOIADORES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Agradecemos aos nossos patrocinadores e apoiadores que tornam o Festival Cristófoli possível
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="flex items-center justify-center p-6 bg-white rounded-lg border-2 border-festival-purple/20 hover:border-festival-yellow transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                {sponsor.isImage ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-24 object-contain mb-3 group-hover:scale-110 transition-transform"
                    />
                    <p className="text-xs font-semibold text-gray-600 mb-1">{sponsor.category}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{sponsor.name}</p>
                  </div>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-gradient-to-br from-festival-purple/10 to-festival-pink/10 rounded-lg flex items-center justify-center mb-3 group-hover:from-festival-purple/20 group-hover:to-festival-pink/20 transition-all">
                      <span className="text-2xl font-bold text-festival-purple opacity-50 group-hover:opacity-100 transition-opacity">
                        {sponsor.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">{sponsor.category}</p>
                    <p className="text-xs text-gray-500 line-clamp-2">{sponsor.name}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-600 mb-4">Interessado em patrocinar o Festival Cristófoli 2026?</p>
          <button className="festival-button">
            SEJA UM PATROCINADOR
          </button>
        </div>
      </div>
    </section>
  );
}
