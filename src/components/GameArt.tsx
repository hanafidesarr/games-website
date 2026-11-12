export function GameArt({ art, className = '' }: { art: string; className?: string }) {
  return <div className={`game-art art-${art} ${className}`} aria-hidden="true"><span className="art-glow" /><span className="art-subject" /></div>
}
