import { Play } from 'lucide-react'
import type { Game } from '../data/games'
import { GameArt } from './GameArt'

export function GameCard({ game }: { game: Game }) {
  return <article className="game-card"><GameArt image={game.image} /><div className="game-info"><div><h3>{game.title}</h3><p>{game.category} <i>•</i> {game.subcategory}</p></div><a className="play-button" href={game.gameUrl} target="_blank" rel="noreferrer" aria-label={`Play ${game.title}`}><Play size={14} fill="currentColor" /></a></div></article>
}
