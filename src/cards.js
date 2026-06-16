// The card set: an array of card pairs. Each card has a question, an answer,
// and a category that drives its color styling (a stretch feature).
export const cardSet = {
  title: 'Computer Science Trivia',
  description:
    'Test your knowledge of programming, the web, and how computers work. Flip a card to reveal the answer!',
  cards: [
    {
      question: 'What does "HTTP" stand for?',
      answer: 'HyperText Transfer Protocol',
      category: 'Web',
    },
    {
      question: 'What data structure uses LIFO (Last In, First Out) ordering?',
      answer: 'A stack',
      category: 'Data Structures',
    },
    {
      question: 'What is the time complexity of binary search?',
      answer: 'O(log n)',
      category: 'Algorithms',
    },
    {
      question: 'In React, what hook lets a component "remember" a value between renders?',
      answer: 'useState()',
      category: 'Web',
    },
    {
      question: 'What is the base of the binary number system?',
      answer: 'Base 2',
      category: 'Fundamentals',
    },
    {
      question: 'Which sorting algorithm repeatedly splits the list in half and merges?',
      answer: 'Merge sort',
      category: 'Algorithms',
    },
    {
      question: 'What does "CSS" stand for?',
      answer: 'Cascading Style Sheets',
      category: 'Web',
    },
    {
      question: 'What data structure uses FIFO (First In, First Out) ordering?',
      answer: 'A queue',
      category: 'Data Structures',
    },
    {
      question: 'How many bits are in a byte?',
      answer: '8 bits',
      category: 'Fundamentals',
    },
    {
      question: 'What keyword declares a block-scoped variable in modern JavaScript?',
      answer: 'let (or const)',
      category: 'Web',
    },
  ],
}

// Maps each category to a color theme used by the card's CSS.
export const categoryColors = {
  Web: '#3b82f6',
  'Data Structures': '#8b5cf6',
  Algorithms: '#ec4899',
  Fundamentals: '#10b981',
}
