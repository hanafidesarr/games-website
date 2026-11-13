import { LayoutGrid, MonitorPlay, Smartphone, Swords, Compass, Flag, HeartPulse } from 'lucide-react'
import { categories } from '../data/games'
const categoryIcons = [LayoutGrid,MonitorPlay,Smartphone,Swords,Compass,Flag,HeartPulse]
export function CategoryBar({ active, onChange }: { active: string; onChange: (category: string) => void }) { return <section className="category-shell" id="categories"><div className="category-scroll">{categories.map((category, index) => { const Icon = categoryIcons[index]; return <button key={category} className={`category-pill ${active === category ? 'selected' : ''}`} onClick={() => onChange(category)}><Icon size={18} />{category}</button> })}</div></section> }
