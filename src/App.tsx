import { ArrowLeft, Play, Shuffle } from 'lucide-react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { games } from './data/games'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoryBar } from './components/CategoryBar'
import { GameSection } from './components/Section'
import { GameArt } from './components/GameArt'

function Footer() { return <footer id="about"><div className="brand"><span className="logo-mark">⌁</span><span>Axeonsoft <b>Games</b></span></div><p>Small games. Big adventures.</p><span>© 2026 Axeonsoft Games</span></footer> }

function Home() {
  const [category, setCategory] = useState('All Games'); const [query, setQuery] = useState(''); const [sort, setSort] = useState('featured')
  const filtered = useMemo(() => games.filter(game => (category === 'All Games' || game.category === category) && `${game.title} ${game.category} ${game.subcategory}`.toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === 'newest' ? b.releaseDate.localeCompare(a.releaseDate) : sort === 'title' ? a.title.localeCompare(b.title) : Number(b.featured)-Number(a.featured)), [category, query, sort])
  return <><Header onSearch={setQuery} /><main id="top"><Hero /><CategoryBar active={category} onChange={setCategory} /><GameSection label="Handpicked for you" title="Featured Games" games={games.filter(game => game.featured).slice(0,8)} /><div className="muted-section"><GameSection label="Fresh from the studio" title="New Releases" games={[...games].sort((a,b) => b.releaseDate.localeCompare(a.releaseDate)).slice(0,4)} /></div><GameSection id="popular" label="Players are loving" title="Popular Games" games={games.slice(0,4)} /><section className="content-section catalog-section" id="all-games"><div className="section-heading catalog-heading"><div><p className="eyebrow">The complete collection</p><h2>All Games <span className="count">{filtered.length}</span></h2></div><label className="sort-select">Sort by <select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Featured</option><option value="newest">Newest</option><option value="title">A–Z</option></select></label></div><div className="game-grid">{filtered.map(game => <GameSectionCard key={game.id} game={game} />)}</div></section></main><Footer /></>
}

function GameSectionCard({ game }: { game: typeof games[number] }) { return <article className="game-card"><GameArt art={game.art} /><div className="game-info"><div><h3>{game.title}</h3><p>{game.category} <i>•</i> {game.subcategory}</p></div><Link className="play-button" to={game.gameUrl}><Play size={14} fill="currentColor" /></Link></div></article> }

function PlayPage() { const { id } = useParams(); const navigate = useNavigate(); const game = id === 'random' ? games[Math.floor(Math.random() * games.length)] : games.find(item => item.id === id); if (!game) return <><Header onSearch={() => {}} /><div className="not-found"><h1>Game not found</h1><Link className="button accent" to="/">Back home</Link></div></>; return <><Header onSearch={() => {}} /><main className="play-page"><Link className="back-link" to="/"><ArrowLeft size={16} /> Back to games</Link><div className="launch-panel"><GameArt art={game.art} className="modal-art" /><div className="launch-copy"><p className="eyebrow">{game.category} · {game.subcategory}</p><h1>{game.title}</h1><p>{game.description}</p><button className="button accent" onClick={() => navigate(game.gameUrl)}><Shuffle size={16} /> Launch game</button><small>This portal is ready for a game URL to be connected.</small></div></div></main><Footer /></> }

export default function App() { return <Routes><Route path="/" element={<Home />} /><Route path="/play/:id" element={<PlayPage />} /></Routes> }
