import { useState } from 'react'
import Card from './Card'
import { cardSet } from './cards'
import './App.css'

function normalizeAnswer(text = '') {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '').trim()
}

function App() {
  const { title, description, cards } = cardSet

  const [currentIndex, setCurrentIndex] = useState(0)
  const [guess, setGuess] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isFlipped, setIsFlipped] = useState(false)

  const currentCard = cards[currentIndex]
  const isAtStart = currentIndex === 0
  const isAtEnd = currentIndex === cards.length - 1

  function resetCardState() {
    setGuess('')
    setFeedback('')
    setIsFlipped(false)
  }

  function goToPreviousCard() {
    if (isAtStart) return
    setCurrentIndex((prevIndex) => prevIndex - 1)
    resetCardState()
  }

  function goToNextCard() {
    if (isAtEnd) return
    setCurrentIndex((prevIndex) => prevIndex + 1)
    resetCardState()
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!guess.trim()) return

    const normalizedGuess = normalizeAnswer(guess)
    const normalizedAnswer = normalizeAnswer(currentCard.answer)
    const isCorrect =
      normalizedGuess === normalizedAnswer ||
      normalizedGuess.includes(normalizedAnswer) ||
      normalizedAnswer.includes(normalizedGuess)

    setFeedback(isCorrect ? 'correct' : 'incorrect')
    setIsFlipped(true)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <p className="count">{cards.length} cards in this set</p>
      </header>

      <main className="card-area">
        <p className="progress">
          {currentIndex + 1} / {cards.length}
        </p>

        <Card
          key={currentIndex}
          question={currentCard.question}
          answer={currentCard.answer}
          category={currentCard.category}
          isFlipped={isFlipped}
          feedback={feedback}
        />

        <form className="guess-form" onSubmit={handleSubmit}>
          <label className="guess-label" htmlFor="guess-input">
            Submit your guess
          </label>
          <div className="guess-controls">
            <input
              id="guess-input"
              className="guess-input"
              type="text"
              value={guess}
              onChange={(event) => {
                setGuess(event.target.value)
                if (feedback) {
                  setFeedback('')
                  setIsFlipped(false)
                }
              }}
              placeholder="Type your answer"
            />
            <button className="submit-button" type="submit">
              Submit
            </button>
          </div>
          <p className={`feedback ${feedback || 'neutral'}`} role="status">
            {feedback === 'correct'
              ? 'Correct! The answer is revealed.'
              : feedback === 'incorrect'
                ? 'Not quite — try again.'
                : 'Type your guess and submit to reveal the answer.'}
          </p>
        </form>

        <div className="nav-buttons">
          <button className="nav-button" onClick={goToPreviousCard} disabled={isAtStart}>
            ← Back
          </button>
          <button className="nav-button" onClick={goToNextCard} disabled={isAtEnd}>
            Next →
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
