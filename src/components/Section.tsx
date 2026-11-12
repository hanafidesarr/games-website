import { Link } from 'react-router-dom'
import type { Game } from '../data/games'
import { GameCard } from './GameCard'
export function GameSection({ id, label, title, games }: { id?: string; label: string; title: string; games: Game[] }) { return <section className="content-section" id={id}><div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div><Link className="view-all" to="/#all-games">View All <span>→</span></Link></div><div className="game-grid">{games.map(game => <GameCard key={game.id} game={game} />)}</div></section> }
