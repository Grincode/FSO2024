import { useState } from 'react'

const Statistics = ({ text, value }) => {

  if (value === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

const Button = (props) => (
  <button
    style={{
      marginRight: '5px',
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    }}
    onClick={props.handleClick}
    onMouseEnter={(e) => e.target.style.backgroundColor = 'red'}
    onMouseLeave={(e) => e.target.style.backgroundColor = 'black'}
  >
    {props.text}
  </button>
)

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const total = good + neutral + bad;
  console.log('Total', total)
  const average = ((good - bad) / total).toFixed(2)
  console.log('Average', average)
  const positive = ((good / total) * 100).toFixed(2)
  console.log('Positive', positive)

  return (
    <div>
      <h1 style={{
        backgroundColor: 'lightgray',
        padding: '10px',
        borderRadius: '10px',
        display: 'inline-block'
      }}
      >Give Feedback</h1>
      <br></br>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Statistics text="good:" value={good} />
      <Statistics text="neutral:" value={neutral} />
      <Statistics text="bad:" value={bad} />
      <Statistics text="Total:" value={total} />
      <hr width="25%" align="left" />
      <Statistics text="Average:" value={average} />
      <Statistics text="% Positive:" value={positive} />
    </div>
  )
}

export default App
