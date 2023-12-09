import { useState } from "react"







const Header = (props) =>{
  
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}



const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>

const StatisticLine = ({text,value}) => {
  return (
    <div>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </div>

  )

}



const Statistics = ({good,neutral,bad}) => {
  const all = good + neutral + bad
  console.log("all = ",all)
  const average = (all>0) ? (good-bad)/all:0
  const positive  = (all>0) ? (good / all)*100:0
  if(all==0) return (
    <div>No feedback given</div>

  )

  else {
    return (
      <div>
          <table>
            <tbody>
              <StatisticLine text="good" value={good}/> 
              <StatisticLine text="neutral" value={neutral}/> 
              <StatisticLine text="bad" value={bad}/> 
              <StatisticLine text="all" value={all}/>
              <StatisticLine text="average" value={average}/> 
              <StatisticLine text="positive" value={positive}/> 
            </tbody>
          </table>


      </div>
    )
  }
}




const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  

  return (
    <div>
        <Header text="Give feedback"/>
        
        <Button onSmash={() => setGood(good+1)} text="good"/>
        <Button onSmash={() => setNeutral(neutral+1)} text="neutral"/>
        <Button onSmash={() => setBad(bad+1)} text="bad"/>

        <Header text="Statistics" />

        <Statistics good={good} neutral={neutral} bad={bad}  />
 
    </div>
  )
}



export default App