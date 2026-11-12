import { Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Game } from '../data/games'
import { GameArt } from './GameArt'

export function GameCard({ game }: { game: Game }) {
  return <article className="game-card"><GameArt art={game.art} /><div className="game-info"><div><h3>{game.title}</h3><p>{game.category} <i>•</i> {game.subcategory}</p></div><Link className="play-button" to={game.gameUrl} aria-label={`Play ${game.title}`}><Play size={14} fill="currentColor" /></Link></div></article>
}
