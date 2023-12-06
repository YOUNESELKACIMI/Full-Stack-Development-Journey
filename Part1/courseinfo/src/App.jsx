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

const Content = ({Object}) => {
  console.log(Object)

  return (
    <div>
    <Part content = "Fundamentals of React" exercices = {Object.part1.exercises}/>
    <Part content = "Using props to pass data" exercices = {Object.part2.exercises}/>
    <Part content = "State of a component" exercices = {Object.part3.exercises} />
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

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const MyObject = {part1,part2,part3}

  return (
    <div>
      <Header course = "Half Stack application development" /> 
      <Content Object={MyObject}/>
      <Total total={part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}



export default App