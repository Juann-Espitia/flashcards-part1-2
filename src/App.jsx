import { useState } from 'react'
import Card from './Card'
import { cardSet } from './cards'
import './App.css'

function App() {
  const { title, description, cards } = cardSet

  // Track which card is currently shown by its index in the array.
  const [currentIndex, setCurrentIndex] = useState(0)

  // Pick a random card that is different from the one already showing,
  // so clicking "Next" always visibly changes the card.
  function showRandomCard() {
    if (cards.length <= 1) return

    let nextIndex = currentIndex
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * cards.length)
    }
    setCurrentIndex(nextIndex)
  }

  const currentCard = cards[currentIndex]

  return (
    <div className="app">
      <header className="header">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <p className="count">{cards.length} cards in this set</p>
      </header>

      <main className="card-area">
        {/* The key changes with the card so React remounts it,
            resetting the flip state back to the question side. */}
        <Card
          key={currentIndex}
          question={currentCard.question}
          answer={currentCard.answer}
          category={currentCard.category}
        />

        <button className="next-button" onClick={showRandomCard}>
          Next card →
        </button>
      </main>
    </div>
  )
}

export default App
