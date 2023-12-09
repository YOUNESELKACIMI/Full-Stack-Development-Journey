import { useState } from "react"







const Header = (props) =>{
  
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}



const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>






const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  
  const all = good + neutral + bad
  console.log("all = ",all)
  const average = (all>0) ? (good-bad)/all:0
  const positive  = (all>0) ? (good / all)*100:0
  
  return (
    <div>
        <Header text="Give feedback"/>
        
        <Button onSmash={() => setGood(good+1)} text="good"/>
        <Button onSmash={() => setNeutral(neutral+1)} text="neutral"/>
        <Button onSmash={() => setBad(bad+1)} text="bad"/>

        <Header text="Statistics" />

        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive} %</td>
            </tr>
          </tbody>
        </table>



    </div>
  )
}



export default App