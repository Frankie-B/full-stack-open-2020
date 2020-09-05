import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

  const Statistic = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>

    )
  }


const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h2>statistics</h2>

        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>statistics</h2>

      <table>
        <tbody>
          <Statistic text={'good'} value={good}/>
          <Statistic text={'neutral'} value={neutral}/>
          <Statistic text={'bad'} value={bad}/>
          <Statistic text={'all'} value={total}/>
          <Statistic text={'average'} value={(good - bad) / total}/>
          <Statistic text={'positive'} value={`${good / total * 100} % `}/>
        </tbody>
    </table>
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => { 
    setGood(good + 1)
  }

    const setToNeutral = () => { 
    setNeutral(neutral + 1)
    }
  
    const setToBad = () => { 
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={setToGood} text={'good'}/>
      <Button handleClick={setToNeutral} text={'neutral'}/>
      <Button handleClick={setToBad} text={'bad'}/>
     

      <Statistics good={good} neutral={neutral} bad={bad}/>  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)