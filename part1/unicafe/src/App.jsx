import { useState } from 'react'


const Statistics = ({ text, value }) => {
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
      borderRadius: '10px',
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
const Total = ({ good, neutral, bad }) => {

  const total = good + neutral + bad;
  if (total === 0)
    return (
      <div>
        No feedback given
      </div>
    )

  return (
    <div>
      <Statistics text="good:" value={good} />
      <Statistics text="neutral:" value={neutral} />
      <Statistics text="bad:" value={bad} />
      <hr width="25%" align="left" />

      <Statistics text="Total:" value={total} />
      <Statistics text="Average:" value={((good - bad) / total).toFixed(2)} />
      <Statistics text="Positive:" value={((good / total) * 100).toFixed(2)} />


    </div>
  )
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name="Give feedback" />
    </div>
  )
    < div >
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h2>Statistics</h2>
      <Total good={good} neutral={neutral} bad={bad} />
    </div >
  )
}

export default App
