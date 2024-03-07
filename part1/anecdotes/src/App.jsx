import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const initialVotes = Object.fromEntries(anecdotes.map(anecdote => [anecdote, 0]));

  const [votes, setVotes] = useState(initialVotes);
  const [selected, setSelected] = useState(0);

  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = { ...votes };
    newVotes[anecdotes[selected]] += 1;
    setVotes(newVotes);
  };

  // Encontrar la anécdota cmás votada
  const maxVotedAnecdote = Object.keys(votes).reduce((a, b) => votes[a] > votes[b] ? a : b);

  return (
    <div>
      <div>
        <h2>Anecdote of the Day</h2>
        <p>{anecdotes[selected]}</p>
        <p style={{fontWeight: 'bold'}}>Votes: {votes[anecdotes[selected]]}</p>
        <button onClick={handleVote}>Vote</button>
        <button onClick={handleRandomAnecdote}>Next Anecdote</button>
      </div>
      <div>
        <h2>Most Voted Anecdote</h2>
        <p>{maxVotedAnecdote}</p>
        <p style={{color: 'green', fontWeight: 'bold'}}>Votes: {votes[maxVotedAnecdote]}</p>
      </div>
    </div>
  );
};

export default App;
