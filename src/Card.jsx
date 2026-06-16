import { useState } from 'react'
import { categoryColors } from './cards'
import './Card.css'

// A single flashcard. It owns the "is this card flipped?" state.
// Clicking toggles between the question (front) and answer (back).
function Card({ question, answer, category }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const accent = categoryColors[category] ?? '#64748b'

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ '--accent': accent }}
    >
      <div className="card-inner">
        <div className="card-face card-front">
          <span className="card-category">{category}</span>
          <p className="card-text">{question}</p>
          <span className="card-hint">Click to reveal the answer</span>
        </div>
        <div className="card-face card-back">
          <span className="card-category">{category}</span>
          <p className="card-text">{answer}</p>
          <span className="card-hint">Click to flip back</span>
        </div>
      </div>
    </div>
  )
}

export default Card
