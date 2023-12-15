
const Persons = ({persons,newFilter,remove}) => {
  
  return (
    <div>
    <ul>{persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())===true).map(filteredPerson => <Person key = {filteredPerson.name} person={filteredPerson} remove={remove}/>)}</ul>
  </div>
  )
}


const Person = ({ person,remove }) => {
    console.log("the person object in the Person component",person)
    return (
      <li>{person.name} {person.number}<button onClick={()=>remove(person.id)}>delete</button></li>
    )
  }
  

export default Persons