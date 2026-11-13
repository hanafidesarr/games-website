import { ArrowLeft, ExternalLink, Shuffle } from 'lucide-react'
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { games } from './data/games'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CategoryBar } from './components/CategoryBar'
import { GameSection } from './components/Section'
import { GameArt } from './components/GameArt'
import catLogo from '../logo-catbox.png'

function Footer() { return <footer><div className="brand"><img className="brand-image" src={catLogo} alt="Catbox Studio" /><span>Catbox <b>Studio</b></span></div><p>Original browser games by Catbox Studio.</p><span>© 2026 Catbox Studio</span></footer> }

function Home() {
  const [category, setCategory] = useState('All Games'); const [query, setQuery] = useState(''); const [sort, setSort] = useState('featured')
  const filtered = useMemo(() => games.filter(game => (category === 'All Games' || game.category === category) && `${game.title} ${game.category} ${game.subcategory}`.toLowerCase().includes(query.toLowerCase())).sort((a,b) => sort === 'newest' ? b.releaseDate.localeCompare(a.releaseDate) : a.title.localeCompare(b.title)), [category, query, sort])
  return <><Header onSearch={setQuery} /><main id="top"><Hero /><CategoryBar active={category} onChange={setCategory} /><GameSection id="all-games" label="Play the Catbox Studio collection" title="Our Games" games={filtered} /><section className="content-section collection-note"><div className="collection-note-inner"><div><p className="eyebrow">Made to be played instantly</p><h2>Three worlds. One click away.</h2><p>Choose a game and jump straight into its own world. No account, no download, just play.</p></div><label className="sort-select">Sort by <select value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Featured</option><option value="newest">Newest</option><option value="title">A–Z</option></select></label></div></section></main><Footer /></>
}

function PlayPage() { const { id } = useParams(); const navigate = useNavigate(); const game = id === 'random' ? games[Math.floor(Math.random() * games.length)] : games.find(item => item.id === id); if (!game) return <><Header onSearch={() => {}} /><div className="not-found"><h1>Game not found</h1><Link className="button accent" to="/">Back home</Link></div></>; return <><Header onSearch={() => {}} /><main className="play-page"><Link className="back-link" to="/"><ArrowLeft size={16} /> Back to games</Link><div className="launch-panel"><GameArt image={game.image} className="modal-art" /><div className="launch-copy"><p className="eyebrow">{game.category} · {game.subcategory}</p><h1>{game.title}</h1><p>{game.description}</p><a className="button accent" href={game.gameUrl} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Open game</a><button className="button outline detail-random" onClick={() => navigate('/play/random')}><Shuffle size={16} /> Try another game</button></div></div></main><Footer /></> }

export default function App() { return <Routes><Route path="/" element={<Home />} /><Route path="/play/:id" element={<PlayPage />} /></Routes> }
