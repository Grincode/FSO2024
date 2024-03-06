import { useState } from "react";

const Statistics = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};





const Total = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="average" value={((good - bad) / total).toFixed(2)} />
      <Statistics text="positive" value={((good / total) * 100).toFixed(2)} />
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => {
    setGood(good + 1);
  };
  const handleNeutralButton = () => {
    setNeutral(neutral + 1);
  };
  const handleBadButton = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={handleGoodButton} text="Good" />
        <Button handleClick={handleNeutralButton} text="Neutral" />
        <Button handleClick={handleBadButton} text="Bad" />
      </div>
      <h2>Statistics</h2>
      <Total good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
