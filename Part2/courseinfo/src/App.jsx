import { useState } from "react"


const Course = ({course}) => {
  
  return (
    <div>
      <Header course = {course.name} /> 
      <Content parts={course.parts}/>
    </div>
  )
}




const Header = (props) =>{
  
  return (
    <div>
      <h1>Course is  {props.course}</h1>
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




const Part = (props) => {

  return (
    <div>
      <p>{props.content} {props.exercices} </p>
    </div>
  )
}




const App = () => {

  const course = {
    id:1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id:2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id:3
      }
    ]
  }





  return (
      <Course course = {course}/>
  )
}



export default App