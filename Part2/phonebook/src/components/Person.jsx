

const Person = ({ person }) => {
    console.log("the person object in the Person component",person)
    return (
      <li>{person.name} {person.number}</li>
    )
  }
  

export default Person