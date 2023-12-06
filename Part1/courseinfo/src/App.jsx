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

const Content = ({exercices}) => {
  console.log(exercices)

  return (
    <div>
    <Part content = "Fundamentals of React" exercices={exercices.exercises1} />
    <Part content = "Using props to pass data" exercices={exercices.exercises2} />
    <Part content = "State of a component" exercices={exercices.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercices is {props.total}</p>
    </div>

  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
    <div>
      <Header course = "Half Stack application development" /> 
      <Content exercices={{exercises1,exercises2,exercises3}}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}



export default App