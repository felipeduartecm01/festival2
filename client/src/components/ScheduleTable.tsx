/**
 * ScheduleTable Component
 * Exibe a programação do festival em formato de tabela responsiva
 * 
 * Design: Tabela limpa com destaque visual para horários e palcos
 * Cores: Roxo (principal), rosa (eletrônico), amarelo (secundário)
 */

import { ScheduleItem, getStageName, stages } from "@/data/schedule";
import { Clock, Music } from "lucide-react";
import { Link } from "wouter";

interface ScheduleTableProps {
  items: ScheduleItem[];
  selectedStage?: string;
}

export default function ScheduleTable({ items, selectedStage }: ScheduleTableProps) {
  const getStageColor = (stageId: string): string => {
    const stage = stages.find((s) => s.id === stageId);
    if (stageId === "main") return "bg-festival-purple text-white";
    if (stageId === "electronic") return "bg-festival-pink text-white";
    if (stageId === "secondary") return "bg-festival-yellow text-festival-purple";
    return "bg-gray-200 text-gray-800";
  };

  const getGenreColor = (genre: string): string => {
    if (genre.includes("Rock")) return "bg-red-100 text-red-800";
    if (genre.includes("Pop")) return "bg-pink-100 text-pink-800";
    if (genre.includes("Metal")) return "bg-gray-800 text-white";
    if (genre.includes("Funk") || genre.includes("Soul")) return "bg-orange-100 text-orange-800";
    if (genre.includes("Eletrônico") || genre.includes("Synthwave")) return "bg-purple-100 text-purple-800";
    if (genre.includes("Folk") || genre.includes("Acústico")) return "bg-green-100 text-green-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-festival-purple text-white sticky top-0 z-10">
            <th className="px-4 py-3 text-left font-bold">Horário</th>
            <th className="px-4 py-3 text-left font-bold">Artista</th>
            <th className="px-4 py-3 text-left font-bold">Gênero</th>
            <th className="px-4 py-3 text-left font-bold">Palco</th>
            <th className="px-4 py-3 text-left font-bold">Ação</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
            >
              {/* Horário */}
              <td className="px-4 py-4">
                <div className="flex items-center gap-2 font-semibold text-festival-purple">
                  <Clock size={18} />
                  <span>
                    {item.startTime} - {item.endTime}
                  </span>
                </div>
              </td>

              {/* Artista */}
              <td className="px-4 py-4">
                <div className="font-semibold text-gray-900">{item.artistName}</div>
                <div className="text-sm text-gray-600 mt-1">{item.description}</div>
              </td>

              {/* Gênero */}
              <td className="px-4 py-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getGenreColor(item.genre)}`}>
                  {item.genre}
                </span>
              </td>

              {/* Palco */}
              <td className="px-4 py-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getStageColor(item.stage)}`}>
                  {getStageName(item.stage)}
                </span>
              </td>

              {/* Ação */}
              <td className="px-4 py-4">
                {item.artistId !== "dj-set" ? (
                  <Link href={`/artist/${item.artistId}`}>
                    <a className="inline-flex items-center gap-2 px-3 py-2 bg-festival-purple text-white rounded-lg hover:bg-festival-purple/80 transition font-medium text-sm">
                      <Music size={16} />
                      Ver Artista
                    </a>
                  </Link>
                ) : (
                  <span className="text-gray-500 text-sm">DJ Set</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {items.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <Music size={48} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">Nenhum evento encontrado para este palco</p>
        </div>
      )}
    </div>
  );
}
