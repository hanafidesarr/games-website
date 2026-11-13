import chessImage from '../../Kingdom Chess Emblem.png'
import boatImage from '../../Little Paper Boat in the Sunlit Stream.png'
import monsterImage from '../../Pocong in the Pixelated Corridor.png'
import catDoctorImage from '../../catdoc.webp'
import catRatImage from '../../catrat.webp'

export type GamePlatform = 'Browser' | 'Google Play'
export type GameCategory = 'Action' | 'Adventure' | 'Puzzle' | 'Arcade' | 'Strategy' | 'Simulation'
export type Game = { id: string; title: string; platform: GamePlatform; category: GameCategory; subcategory: string; image: string; featured: boolean; releaseDate: string; description: string; gameUrl: string }

export const games: Game[] = [
  { id: 'kingdom-chess', title: 'Kingdom Chess', platform: 'Browser', category: 'Strategy', subcategory: 'Board', image: chessImage, featured: true, releaseDate: '2026-11-01', description: 'Challenge your mind in a polished kingdom-inspired chess experience built by Catbox Studio.', gameUrl: 'http://chess.axeonsoft.com/' },
  { id: 'little-paper-boat', title: 'Little Paper Boat', platform: 'Browser', category: 'Adventure', subcategory: 'Relaxing', image: boatImage, featured: true, releaseDate: '2026-10-20', description: 'Set sail through a warm, sunlit stream in a gentle adventure made by Catbox Studio.', gameUrl: 'http://little-paper-boat.axeonsoft.com/' },
  { id: 'monster-dumb', title: 'Monster Dumb', platform: 'Browser', category: 'Action', subcategory: 'Pixel Horror', image: monsterImage, featured: true, releaseDate: '2026-10-08', description: 'Step into a strange pixelated corridor and survive the unforgettable world of Monster Dumb.', gameUrl: 'http://monster-dumb.axeonsoft.com/' },
  { id: 'pet-doctor', title: 'Pet Doctor', platform: 'Google Play', category: 'Simulation', subcategory: 'Pets', image: catDoctorImage, featured: true, releaseDate: '2026-09-18', description: 'Care for adorable patients and become the most trusted pet doctor on Google Play.', gameUrl: 'https://play.google.com/store/apps/details?id=com.axeonsoft.petdoctor' },
  { id: 'shooter-attack', title: 'Shooter Attack', platform: 'Google Play', category: 'Action', subcategory: 'Arcade', image: catRatImage, featured: true, releaseDate: '2026-09-04', description: 'Take aim, react fast, and survive the high-energy challenge from Catbox Studio.', gameUrl: 'https://play.google.com/store/apps/details?id=com.axeonsoft.ShooterAttack' },
]

export const categories = ['All Games', 'Browser Games', 'Google Play', 'Action', 'Adventure', 'Strategy', 'Simulation'] as const
