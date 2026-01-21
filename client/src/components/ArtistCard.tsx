import { Link } from "wouter";
import { Music, Instagram, Music as SpotifyIcon, Youtube, Twitter } from "lucide-react";
import { Artist } from "@/data/artists";

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artist/${artist.id}`}>
      <div className="group block h-full cursor-pointer">
        <div className="relative h-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-festival-purple/10">
          {/* Artist Image */}
          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-festival-purple/20 to-festival-pink/20">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Genre Badge */}
            <div className="absolute top-4 right-4">
              <span className="inline-block bg-festival-pink text-white px-3 py-1 rounded-full text-xs font-bold">
                {artist.genre}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Artist Name */}
            <h3 className="text-2xl font-bold text-festival-purple mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {artist.name}
            </h3>

            {/* Schedule Info */}
            <div className="mb-4 pb-4 border-b border-festival-yellow/30">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <Music className="w-4 h-4 text-festival-pink" />
                <span className="font-semibold">{artist.schedule.time}</span>
              </div>
              <p className="text-xs text-gray-500">{artist.schedule.stage}</p>
            </div>

            {/* Bio Preview */}
            <p className="text-sm text-gray-700 mb-4 line-clamp-2">
              {artist.bio}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 justify-center">
              {artist.social.instagram && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://instagram.com/${artist.social.instagram}`, '_blank');
                  }}
                  className="w-8 h-8 rounded-full bg-festival-purple/10 text-festival-purple hover:bg-festival-pink hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </button>
              )}
              {artist.social.spotify && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://open.spotify.com/artist/${artist.social.spotify}`, '_blank');
                  }}
                  className="w-8 h-8 rounded-full bg-festival-purple/10 text-festival-purple hover:bg-festival-pink hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <SpotifyIcon className="w-4 h-4" />
                </button>
              )}
              {artist.social.youtube && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://youtube.com/${artist.social.youtube}`, '_blank');
                  }}
                  className="w-8 h-8 rounded-full bg-festival-purple/10 text-festival-purple hover:bg-festival-pink hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </button>
              )}
              {artist.social.twitter && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://twitter.com/${artist.social.twitter}`, '_blank');
                  }}
                  className="w-8 h-8 rounded-full bg-festival-purple/10 text-festival-purple hover:bg-festival-pink hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* CTA */}
            <button className="w-full mt-4 py-2 bg-gradient-to-r from-festival-purple to-festival-pink text-white font-bold rounded-lg hover:shadow-lg transition-all duration-200 text-sm">
              VER DETALHES
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
