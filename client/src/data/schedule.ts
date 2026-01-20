/**
 * Programação do Festival Cristófoli 2026
 * Dados de horários, palcos e artistas
 */

export interface ScheduleItem {
  id: string;
  artistId: string;
  artistName: string;
  genre: string;
  stage: string;
  startTime: string;
  endTime: string;
  description: string;
}

export const stages = [
  { id: "main", name: "Palco Principal", color: "bg-festival-purple" },
  { id: "electronic", name: "Palco Eletrônico", color: "bg-festival-pink" },
  { id: "secondary", name: "Palco Secundário", color: "bg-festival-yellow" },
];

export const schedule: ScheduleItem[] = [
  {
    id: "acoustic-soul-1",
    artistId: "acoustic-soul",
    artistName: "Acoustic Soul",
    genre: "Folk/Acústico",
    stage: "secondary",
    startTime: "16:00",
    endTime: "17:00",
    description: "Abrindo o festival com intimidade e emoção através da música acústica.",
  },
  {
    id: "the-echoes-1",
    artistId: "the-echoes",
    artistName: "The Echoes",
    genre: "Rock Alternativo",
    stage: "main",
    startTime: "18:00",
    endTime: "19:00",
    description: "Energia e atitude do rock alternativo que marca gerações.",
  },
  {
    id: "luna-nights-1",
    artistId: "luna-nights",
    artistName: "Luna Nights",
    genre: "Indie Pop",
    stage: "main",
    startTime: "19:30",
    endTime: "20:30",
    description: "Poesia e modernidade em uma apresentação única.",
  },
  {
    id: "steel-horizon-1",
    artistId: "steel-horizon",
    artistName: "Steel Horizon",
    genre: "Heavy Metal",
    stage: "main",
    startTime: "21:00",
    endTime: "22:00",
    description: "Potência e agressividade do metal clássico que faz história.",
  },
  {
    id: "rhythm-collective-1",
    artistId: "rhythm-collective",
    artistName: "Rhythm Collective",
    genre: "Funk/Soul",
    stage: "main",
    startTime: "22:30",
    endTime: "23:30",
    description: "Groove e soul que fazem o público dançar até o amanhecer.",
  },
  {
    id: "neon-pulse-1",
    artistId: "neon-pulse",
    artistName: "Neon Pulse",
    genre: "Synthwave/Eletrônico",
    stage: "electronic",
    startTime: "00:00",
    endTime: "01:00",
    description: "Eletrônico futurista que leva o festival para o próximo nível.",
  },
  {
    id: "dj-set-1",
    artistId: "dj-set",
    artistName: "DJ Set - Encerramento",
    genre: "Eletrônico",
    stage: "electronic",
    startTime: "01:00",
    endTime: "02:00",
    description: "Encerramento épico com o melhor do eletrônico internacional.",
  },
];

export function getScheduleByStage(stageId: string): ScheduleItem[] {
  return schedule.filter((item) => item.stage === stageId);
}

export function getAllScheduleSorted(): ScheduleItem[] {
  return [...schedule].sort((a, b) => {
    const timeA = parseInt(a.startTime.replace(":", ""));
    const timeB = parseInt(b.startTime.replace(":", ""));
    return timeA - timeB;
  });
}

export function getStageName(stageId: string): string {
  const stage = stages.find((s) => s.id === stageId);
  return stage?.name || "Desconhecido";
}
