import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}
const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </div>
  )
}
const Statistics = (props) => {
  const totalFeedback = props.bc + props.nc + props.gc
  const average =
    totalFeedback !== 0 ? (props.gc - props.bc) / totalFeedback : 0
  const positivePercentage =
    totalFeedback !== 0 ? (props.gc / totalFeedback) * 100 : 0
  if (totalFeedback == 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatisticLine text={'good'} value={props.gc} />
          <StatisticLine text={'neutral'} value={props.nc} />
          <StatisticLine text={'bad'} value={props.bc} />
          <StatisticLine
            text={'average'}
            value={isNaN(average) ? 0 : average}
          />
          <StatisticLine
            text={'positive'}
            value={isNaN(positivePercentage) ? 0 : positivePercentage + '%'}
          />
        </tbody>
      </table>
    </div>
  )
}
const buttonContainerStyle = {
  display: 'flex',
}
const App = () => {
  const [good, goodCount] = useState(0)
  const [neutral, neutralCount] = useState(0)
  const [bad, badCount] = useState(0)

  const incGud = () => {
    goodCount((val) => val + 1)
  }
  const incBad = () => {
    badCount((val) => val + 1)
  }
  const incNeutral = () => {
    neutralCount((val) => val + 1)
  }
  return (
    <>
      <h1>give feedback</h1>
      <div style={buttonContainerStyle}>
        <Button handleClick={incGud} text={'good'} />
        <Button handleClick={incBad} text={'bad'} />
        <Button handleClick={incNeutral} text={'neutral'} />
      </div>

      <Statistics gc={good} bc={bad} nc={neutral} />
    </>
  )
}

export default App
