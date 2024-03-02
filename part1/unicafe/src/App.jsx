import { useState } from 'react'

const Button = (props) => (
  <button
    style={{
      marginRight: '5px', // Espaciado entre botones
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
    }}
    onClick={props.handleClick}
    onMouseEnter={(e) => e.target.style.backgroundColor = 'red'} // Hover
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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <hr width="25%" align="left" />
      <p>Total {total}</p>
      <p>Average {average}</p>
      <p>Positive {positive}%</p>
    </div >
  )
}

export default App
