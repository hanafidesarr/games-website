import { Gamepad2, Menu, Search, Shuffle, X } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Header({ onSearch }: { onSearch: (value: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false); const navigate = useNavigate()
  return <header className="site-header"><Link className="brand" to="/"><span className="logo-mark"><Gamepad2 size={21} fill="currentColor" /></span><span>Axeonsoft <b>Games</b></span></Link><nav className={mobileOpen ? 'desktop-nav mobile-open' : 'desktop-nav'}><a className="active" href="#top">Home</a><a href="#all-games">Games</a><a href="#categories">Categories</a><a href="#popular">Trending</a><a href="#about">About</a></nav><div className="header-actions"><label className="search-box"><Search size={19} /><input onChange={event => onSearch(event.target.value)} placeholder="Search games..." aria-label="Search games" /></label><button className="button accent top-random" onClick={() => navigate(`/play/random`)}><Shuffle size={16} /><span>Play Random</span></button><button className="menu-button" onClick={() => setMobileOpen(value => !value)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</button></div></header>
}
