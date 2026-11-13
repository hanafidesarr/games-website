export function GameArt({ art, image, className = '' }: { art?: string; image?: string; className?: string }) {
  return <div className={`game-art ${art ? `art-${art}` : ''} ${className}`} role="img" aria-label="Game artwork">{image ? <img src={image} alt="" loading="lazy" /> : <><span className="art-glow" /><span className="art-subject" /></>}</div>
}
