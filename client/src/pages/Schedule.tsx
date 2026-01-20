/**
 * Schedule Page - Agenda Interativa do Festival
 * 
 * Design Philosophy: Energia Vibrante & Tipografia Ousada
 * 
 * Features:
 * - Visualização de programação completa
 * - Filtros por palco
 * - Integração com páginas de artistas\n * - Timeline visual
 */

import { useState } from "react";
import { schedule, stages, getAllScheduleSorted, getScheduleByStage } from "@/data/schedule";
import ScheduleTable from "@/components/ScheduleTable";
import { Calendar, Filter } from "lucide-react";

export default function Schedule() {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  const displayedSchedule = selectedStage ? getScheduleByStage(selectedStage) : getAllScheduleSorted();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-festival-purple to-festival-pink py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/festival_pattern.png')",
              backgroundSize: "300px",
              animation: "drift 20s linear infinite",
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <Calendar size={40} />
            <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              AGENDA
            </h1>
          </div>
          <p className="text-xl max-w-2xl">
            Confira a programação completa do Festival Cristófoli 2026 e não perca nenhum momento!
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        {/* Filtros */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Filter size={24} className="text-festival-purple" />
            <h2 className="text-2xl font-bold text-festival-purple" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              FILTRAR POR PALCO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Botão "Todos" */}
            <button
              onClick={() => setSelectedStage(null)}
              className={`px-6 py-3 rounded-lg font-bold transition transform hover:scale-105 ${
                selectedStage === null
                  ? "bg-festival-purple text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              📅 Todos os Palcos
            </button>

            {/* Botões de Palcos */}
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`px-6 py-3 rounded-lg font-bold transition transform hover:scale-105 ${
                  selectedStage === stage.id
                    ? `${stage.color} text-white shadow-lg`
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                🎪 {stage.name}
              </button>
            ))}
          </div>
        </div>

        {/* Informações de Contagem */}
        <div className="mb-8 p-4 bg-festival-purple/10 rounded-lg border-l-4 border-festival-purple">
          <p className="text-gray-700 font-medium">
            Mostrando <span className="font-bold text-festival-purple">{displayedSchedule.length}</span> evento
            {displayedSchedule.length !== 1 ? "s" : ""}{" "}
            {selectedStage ? `no ${stages.find((s) => s.id === selectedStage)?.name}` : "em todos os palcos"}
          </p>
        </div>

        {/* Tabela de Programação */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <ScheduleTable items={displayedSchedule} selectedStage={selectedStage || undefined} />
        </div>

        {/* Timeline Visual */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-festival-purple mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            TIMELINE DO FESTIVAL
          </h2>

          <div className="relative">
            {/* Linha vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-festival-purple to-festival-pink" />

            {/* Eventos */}
            <div className="space-y-8">
              {getAllScheduleSorted().map((item, index) => (
                <div key={item.id} className="relative pl-24">
                  {/* Ponto na timeline */}
                  <div className="absolute left-0 top-2 w-16 h-16 bg-white border-4 border-festival-purple rounded-full flex items-center justify-center font-bold text-festival-purple">
                    {item.startTime}
                  </div>

                  {/* Card de evento */}
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.artistName}</h3>
                        <p className="text-gray-600 mt-1">{item.description}</p>
                        <div className="flex gap-3 mt-3">
                          <span className="inline-block px-3 py-1 bg-festival-purple text-white rounded-full text-sm font-medium">
                            {item.genre}
                          </span>
                          <span className="inline-block px-3 py-1 bg-festival-pink text-white rounded-full text-sm font-medium">
                            {item.stage === "main"
                              ? "🎪 Palco Principal"
                              : item.stage === "electronic"
                                ? "🎧 Palco Eletrônico"
                                : "🎵 Palco Secundário"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dicas */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-festival-purple/10 rounded-lg p-6 border-l-4 border-festival-purple">
            <h3 className="text-lg font-bold text-festival-purple mb-2">💡 Dica 1</h3>
            <p className="text-gray-700">
              Chegue cedo para garantir um bom lugar perto do palco do seu artista favorito!
            </p>
          </div>

          <div className="bg-festival-pink/10 rounded-lg p-6 border-l-4 border-festival-pink">
            <h3 className="text-lg font-bold text-festival-pink mb-2">💡 Dica 2</h3>
            <p className="text-gray-700">
              Aproveite os intervalos entre apresentações para explorar os outros palcos e descobrir novos artistas.
            </p>
          </div>

          <div className="bg-festival-yellow/10 rounded-lg p-6 border-l-4 border-festival-yellow">
            <h3 className="text-lg font-bold text-festival-yellow mb-2">💡 Dica 3</h3>
            <p className="text-gray-700">
              Não esqueça de se hidratar e descansar entre os shows para aproveitar o festival ao máximo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
