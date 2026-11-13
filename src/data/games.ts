import chessImage from '../../Kingdom Chess Emblem.png'
import boatImage from '../../Little Paper Boat in the Sunlit Stream.png'
import monsterImage from '../../Pocong in the Pixelated Corridor.png'

export type GameCategory = 'Action' | 'Adventure' | 'Puzzle' | 'Arcade' | 'Strategy'
export type Game = { id: string; title: string; category: GameCategory; subcategory: string; image: string; featured: boolean; releaseDate: string; description: string; gameUrl: string }

export const games: Game[] = [
  { id: 'kingdom-chess', title: 'Kingdom Chess', category: 'Strategy', subcategory: 'Board', image: chessImage, featured: true, releaseDate: '2026-11-01', description: 'Challenge your mind in a polished kingdom-inspired chess experience built by Catbox Studio.', gameUrl: 'http://chess.axeonsoft.com/' },
  { id: 'little-paper-boat', title: 'Little Paper Boat', category: 'Adventure', subcategory: 'Relaxing', image: boatImage, featured: true, releaseDate: '2026-10-20', description: 'Set sail through a warm, sunlit stream in a gentle adventure made by Catbox Studio.', gameUrl: 'http://little-paper-boat.axeonsoft.com/' },
  { id: 'monster-dumb', title: 'Monster Dumb', category: 'Action', subcategory: 'Pixel Horror', image: monsterImage, featured: true, releaseDate: '2026-10-08', description: 'Step into a strange pixelated corridor and survive the unforgettable world of Monster Dumb by Catbox Studio.', gameUrl: 'http://monster-dumb.axeonsoft.com/' },
]

export const categories = ['All Games', 'Action', 'Adventure', 'Strategy'] as const
