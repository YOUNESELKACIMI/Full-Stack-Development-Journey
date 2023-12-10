import { useState } from "react"


const Course = ({courses}) => {

  console.log("course in Course Component is ", courses)
  
  return (
    <div> 
      {courses.map(course => <Header course={course}/>)}
    </div>
  )
}




const Header = ({course}) =>{
  console.log("Header props = ",course)
  return (
    <div>
      <h1>Course is  {course.name}</h1>
      <Content parts={course.parts}/>
      <Sum parts = {course.parts}/>
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


const Sum = (props) => {
  const {parts} = props
  const initialValue = 0
  console.log("parts in Sum Component is ",parts)
  return (
    <div>
      total of {parts.reduce((s,p) => s+p.exercises,initialValue, )} exercises
    </div>
  )
}



const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]





  return (
      <Course courses = {courses}/>
  )
}



export default App