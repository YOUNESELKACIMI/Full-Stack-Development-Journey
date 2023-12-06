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

  return (
    <div>
      <Header course = {course.name} /> 
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}



export default App