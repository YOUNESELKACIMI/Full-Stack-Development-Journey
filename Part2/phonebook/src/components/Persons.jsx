
const Persons = ({persons,newFilter}) => {
  
  return (
    <div>
    <ul>{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())===true).map(filteredPerson => <Person key = {filteredPerson.name} person={filteredPerson} />)}</ul>
  </div>
  )
}


const Person = ({ person }) => {
    console.log("the person object in the Person component",person)
    return (
      <li>{person.name} {person.number}</li>
    )
  }
  

export default Persons