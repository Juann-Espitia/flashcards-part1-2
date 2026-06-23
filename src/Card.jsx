import { categoryColors } from './cards'
import './Card.css'

function Card({ question, answer, category, isFlipped, feedback }) {
  const accent = categoryColors[category] ?? '#64748b'

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''} ${feedback ? `feedback-${feedback}` : ''}`}
      style={{ '--accent': accent }}
    >
      <div className="card-inner">
        <div className="card-face card-front">
          <span className="card-category">{category}</span>
          <p className="card-text">{question}</p>
          <span className="card-hint">Submit your guess to reveal the answer</span>
        </div>
        <div className="card-face card-back">
          <span className="card-category">{category}</span>
          <p className="card-text">{answer}</p>
          <span className="card-hint">Use the buttons below to move through the set</span>
        </div>
      </div>
    </div>
  )
}

export default Card
