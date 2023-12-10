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
      {parts.map(part => <Part key ={part.id} content={part.name} exercices={part.exercises}/>)}
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