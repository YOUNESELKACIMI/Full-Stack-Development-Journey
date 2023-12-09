import { useState } from "react"







const Header = (props) =>{
  
  return (
    <div>
      <h1>Course is  {props.course}</h1>
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

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  const [counter,setCounter] = useState(2)

const increment = ( ) => setCounter(counter+1)
const reset = () => setCounter(0)
const decrement = () => setCounter(counter -1)
console.log("rendering ...",counter)



const [right,setRight] = useState(0)
const [left,setLeft] =  useState(0)

const [clicks,setClicks] = useState({
  left:0,
  right:0
})

const [allClicks,setAll] = useState([])
const [total, setTotal] =  useState(0)


const HandleLeftClick = () => {

  setAll(allClicks.concat('L'))

  const newLeftClick = {
    
    ...clicks,
    
    left: clicks.left+1
  }
  const updatedLeft = newLeftClick.left

  setTotal(updatedLeft+newLeftClick.right)

  setClicks(newLeftClick)


}

const HandleRightClick = () => {

  setAll(allClicks.concat('R'))

  const newRightClick = {
    ...clicks,
    right:clicks.right+1
  }

  const updatedRight = newRightClick.right
  setTotal(updatedRight+newRightClick.left)
  setClicks(newRightClick)
}


  return (
    <div>
      <h1><Display counter = {counter} /></h1>
      <Button onSmash={increment} text = "increment"/>
      <Button onSmash={reset} text = "reset"/>
      <Button onSmash={decrement} text = "decrement"/>
      <Header course = {course.name} /> 
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>


    <h1>Complex State</h1>
    <table>
      <tr>
        <th>{clicks.left}</th>
        <th>{clicks.right}</th>
      </tr>
      <tr>
        <td><button onClick={HandleLeftClick} >Left</button></td>
        <td><button onClick={HandleRightClick} >Right</button></td>
      </tr>
    </table>

    

    <History allClicks={allClicks}/>

    <h1>{total}</h1>
    </div>
  )
}



export default App