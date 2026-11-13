import { Search, Shuffle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import catLogo from '../../logo-catbox.png'

export function Header({ onSearch }: { onSearch: (value: string) => void }) {
  const navigate = useNavigate()
  return <header className="site-header"><Link className="brand" to="/"><img className="brand-image" src={catLogo} alt="Catbox Studio" /><span>Catbox <b>Studio</b></span></Link><div className="header-actions"><label className="search-box"><Search size={19} /><input onChange={event => onSearch(event.target.value)} placeholder="Search games..." aria-label="Search games" /></label><button className="button accent top-random" onClick={() => navigate('/play/random')}><Shuffle size={16} /><span>Play Random</span></button></div></header>
}
