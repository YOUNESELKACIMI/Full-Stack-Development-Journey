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

  const onClickGood = () => {
    setGood(good+1)
  }
  
  const onClickNeutral = () => {
    setNeutral(neutral+1)
  }
  
  const onClickBad = () => {
    setBad(bad+1)
  }


  return (
    <div>
        <Header text="Give feedback"/>
        
        <Button onSmash={onClickGood} text="good"/>
        <Button onSmash={onClickNeutral} text="neutral"/>
        <Button onSmash={onClickBad} text="bad"/>

        <Header text="Statistics" />

        <table>
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
        </table>



    </div>
  )
}



export default App