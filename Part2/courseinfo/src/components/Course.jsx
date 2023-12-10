
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
  
  export default Course