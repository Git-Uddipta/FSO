import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]
  const [votes, setVotes] = useState(new Array(anecdotes.length, 0))
  const [curr, setCurr] = useState(0)

  const handleVote = () => {
    const updatedVotes = [...votes]
    updatedVotes[curr] += 1
    setVotes(updatedVotes)
  }
  const handleNextAnecdote = () => {
    setCurr((curr + 1) % anecdotes.length)
  }

  const maxIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <p>{`${anecdotes[curr]} HAS ${votes[curr]} VOTES`}</p>
        <button onClick={handleNextAnecdote}>next anecdote</button>
        <button onClick={handleVote}>vote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{`${anecdotes[maxIndex]} HAS ${votes[maxIndex]} VOTES`}</p>
      </div>
    </div>
  )
}

export default App
