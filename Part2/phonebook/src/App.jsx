import { useState } from 'react'
import Person from './components/Person'

const App = () => {

    const [persons,setPersons] = useState([{name:'Arto Hellas'}])
    const [newName,SetNewName] = useState('')

  
  const addNewPerson = (event) => {
    event.preventDefault()
    console.log(event.target)

    const PersonObject = {
      name:newName
    }
  
    setPersons(persons.concat(PersonObject))
  }

  const handlePersonAdd = (event) => {
    console.log(event.target.value)
    SetNewName(event.target.value)
    
  } 
  console.log("new name is ",newName)
  console.log("persons array is  ",persons)

  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addNewPerson}>
        <div>
          name : <input value={newName} onChange={handlePersonAdd} />
        </div>
        <div>
          <button type = "submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>{persons.map(person => <Person key = {person.name} person={person}/>)}</ul>
      </div>
    </div>

  )

}

export default App