import { useState } from "react"







const Header = (props) =>{
  
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
const Part = (props) => {

  return (
    <div>
      <p>{props.content} {props.exercices} </p>
    </div>
  )
}

const Content = (props) => {
  const {parts} = props;
  console.log(parts)
  return (
    <div>
    <Part content = "Fundamentals of React" exercices = {parts[0].exercises}/>
    <Part content = "Using props to pass data" exercices = {parts[1].exercises}/>
    <Part content = "State of a component" exercices = {parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const {parts} = props
  return (
    <div>
      <p>Number of exercices is {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
    </div>

  )
}





const Display = ({counter}) => <div> {counter} </div> 




const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>


const History = ({allClicks}) => {

  if(allClicks.length==0){
    return (
      <div>the application works by clicking</div>
    )
  }
  
    return (
      <div>
          <br></br>
          <h1>Button Press history : {allClicks.join(' ')}</h1>
      </div>
    )
}





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